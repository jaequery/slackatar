import pkg from "@fal-ai/client";
const { fal } = pkg;
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import fs from "fs";
import path from "path";

process.env.FAL_KEY = process.env.FAL_KEY || "";

async function fetchCompletedTickets() {
  const API_KEY = process.env.LINEAR_API_KEY || "";
  const TEAM_NAME = process.env.LINEAR_TEAM_NAME || "";
  
  if (!TEAM_NAME) {
    console.error("LINEAR_TEAM_NAME environment variable is required");
    return [];
  }
  
  try {
    const teamsRes = await fetch("https://api.linear.app/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": API_KEY
      },
      body: JSON.stringify({
        query: `{ teams(first: 10) { nodes { id name } } }`
      })
    });

    const teamsData = await teamsRes.json();
    const targetTeam = teamsData.data.teams.nodes.find(t => 
      t.name.toLowerCase().includes(TEAM_NAME.toLowerCase())
    );

    if (!targetTeam) {
      console.error(`Team matching "${TEAM_NAME}" not found`);
      return [];
    }

    const issuesRes = await fetch("https://api.linear.app/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": API_KEY
      },
      body: JSON.stringify({
        query: `{
          team(id: "${targetTeam.id}") {
            issues(filter: { state: { name: { eq: "Done" } } } first: 50) {
              nodes { identifier title completedAt }
            }
          }
        }`
      })
    });

    const issuesData = await issuesRes.json();
    const allIssues = issuesData.data.team.issues.nodes;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return allIssues.filter(issue => {
      if (!issue.completedAt) return false;
      const completed = new Date(issue.completedAt);
      return completed >= today;
    });
  } catch (err) {
    console.error("Error fetching tickets:", err.message);
    return [];
  }
}

async function generateAvatarVideo(tickets) {
  if (tickets.length === 0) {
    console.log("No tickets completed today.");
    return null;
  }

  const ticketList = tickets.map(t => `${t.identifier}: ${t.title}`).join(". ");
  const script = `Today was productive. We completed ${tickets.length} tickets: ${ticketList}. Great work everyone.`;

  try {
    console.log("Generating avatar video...");
    const result = await fal.subscribe("fal-ai/heygen/v2/video-agent", {
      input: { prompt: script }
    });

    if (!result.data.video?.url && !result.data.video_url) {
      console.error("No video URL in response");
      return null;
    }

    return result.data.video?.url || result.data.video_url;
  } catch (err) {
    console.error("Error generating video:", err.message);
    return null;
  }
}

async function uploadToS3(videoUrl) {
  try {
    const response = await fetch(videoUrl);
    const buffer = await response.arrayBuffer();

    const s3Client = new S3Client({
      region: process.env.AWS_REGION || "sfo3",
      endpoint: process.env.AWS_S3_ENDPOINT || "https://sfo3.digitaloceanspaces.com",
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
      },
    });

    const bucketName = process.env.AWS_S3_BUCKET || "my-bucket";
    const spacesRegion = process.env.AWS_REGION || "sfo3";
    const date = new Date().toISOString().split('T')[0];
    const key = `videos/daily_summary_${date}.mp4`;

    const params = {
      Bucket: bucketName,
      Key: key,
      Body: Buffer.from(buffer),
      ContentType: "video/mp4",
      ACL: "public-read",
    };

    await s3Client.send(new PutObjectCommand(params));
    const spacesEndpoint = process.env.AWS_S3_ENDPOINT || "https://sfo3.digitaloceanspaces.com";
    const baseUrl = spacesEndpoint.replace(/\/$/, ""); // Remove trailing slash if present
    return `${baseUrl}/${key}`;
  } catch (err) {
    console.error("Error uploading to S3:", err.message);
    return null;
  }
}

async function main() {
  console.log("Starting daily avatar video generation...");
  
  const tickets = await fetchCompletedTickets();
  if (tickets.length === 0) {
    console.log("No completed tickets to summarize.");
    return;
  }

  console.log(`Found ${tickets.length} completed tickets today.`);
  
  const videoUrl = await generateAvatarVideo(tickets);
  if (!videoUrl) {
    console.error("Failed to generate video");
    return;
  }

  const s3Url = await uploadToS3(videoUrl);
  if (!s3Url) {
    console.error("Failed to upload to S3");
    return;
  }

  console.log("✅ Daily video completed!");
  console.log("URL:", s3Url);
}

main();
