import pkg from "@fal-ai/client";
const { fal } = pkg;
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import fs from "fs";
import path from "path";

process.env.FAL_KEY = "YOUR_FAL_KEY";

async function fetchCompletedTickets() {
  const API_KEY = "YOUR_LINEAR_API_KEY";
  
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
    const pintaskTeam = teamsData.data.teams.nodes.find(t => 
      t.name.toLowerCase().includes("pintask")
    );

    const issuesRes = await fetch("https://api.linear.app/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": API_KEY
      },
      body: JSON.stringify({
        query: `{
          team(id: "${pintaskTeam.id}") {
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
      region: "sfo3",
      endpoint: "https://sfo3.digitaloceanspaces.com",
      credentials: {
        accessKeyId: "DO00AT8FUPAZTZ89MPY2",
        secretAccessKey: "IlocMeaUl2K2/58otPNjvutjbk2B29On8X41bht+RqA",
      },
    });

    const date = new Date().toISOString().split('T')[0];
    const key = `videos/daily_summary_${date}.mp4`;

    const params = {
      Bucket: "pintask",
      Key: key,
      Body: Buffer.from(buffer),
      ContentType: "video/mp4",
      ACL: "public-read",
    };

    await s3Client.send(new PutObjectCommand(params));
    return `https://pintask.sfo3.digitaloceanspaces.com/${key}`;
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
