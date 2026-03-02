---
name: slackatar-skill
description: Automated daily avatar video generation from Linear ticket summaries using FAL.ai and HeYGen
keywords: [linear, automation, video, avatar, s3, scheduling]
author: jaequery
version: 1.0.0
license: MIT
---

# Slackatar Skill

Automated daily avatar video generation from Linear ticket summaries. Generates a photorealistic talking avatar video summarizing completed tickets and uploads to S3 or any S3-compatible storage.

## Features

- Fetches completed tickets from Linear
- Generates HeYGen talking avatar with voiceover
- Automatic lip-sync and natural speech
- Uploads to DigitalOcean Spaces, AWS S3, or any S3-compatible storage
- Fully configurable via environment variables
- Ready for cron scheduling

## Requirements

- Node.js 18+
- FAL.ai account and API key
- Linear.dev account and API key
- S3-compatible storage (DigitalOcean Spaces, AWS S3, etc.)

## Installation

### Via ClawHub
```bash
clawhub install slackatar-skill
```

### Manual Setup
```bash
# Install to OpenClaw skills directory
git clone https://github.com/jaequery/slackatar.git ~/.openclaw/skills/slackatar-skill
cd ~/.openclaw/skills/slackatar-skill

# Configure
cp .env.example .env
# Edit .env with your credentials

# Install dependencies
npm install

# Test
node daily_avatar_video.mjs
```

## Configuration

Create a `.env` file in the skill directory:

```env
# FAL.ai API key (get from https://fal.ai/dashboard/keys)
FAL_KEY="your_fal_api_key"

# Linear API key (get from https://linear.app/settings/api)
LINEAR_API_KEY="your_linear_api_key"

# Linear team name to pull tickets from
LINEAR_TEAM_NAME="YourTeamName"

# S3/DigitalOcean Spaces configuration
AWS_S3_ENDPOINT="https://sfo3.digitaloceanspaces.com"
AWS_S3_BUCKET="your-bucket-name"
AWS_ACCESS_KEY_ID="your_access_key"
AWS_SECRET_ACCESS_KEY="your_secret_key"
AWS_REGION="sfo3"
```

## Usage

### Manual Run
```bash
node daily_avatar_video.mjs
```

### Scheduled with OpenClaw Cron

Create `.cron/slackatar-daily.json`:
```json
{
  "schedule": "0 1 * * *",
  "command": "cd ~/.openclaw/skills/slackatar-skill && node daily_avatar_video.mjs"
}
```

This runs daily at 1:00 AM UTC (5:00 PM PST).

## Output

Videos are generated with naming pattern: `daily_summary_YYYY-MM-DD.mp4`

Public URL: `https://{bucket}.{region}.digitaloceanspaces.com/videos/daily_summary_YYYY-MM-DD.mp4`

## Troubleshooting

**"LINEAR_TEAM_NAME not found"**
- Verify team name in Linear (Settings → Workspace)
- Team names are case-sensitive and must match exactly

**"No completed tickets"**
- Script only includes tickets completed today (UTC midnight)
- Ensure tickets are marked as "Done" status

**S3 upload fails**
- Check AWS credentials and bucket permissions
- Verify bucket is configured as public or allows your access key
- Ensure region matches your bucket location

**Video generation timeout**
- FAL.ai avatar generation can take 1-2 minutes
- Check FAL.ai dashboard for API errors
- Verify FAL_KEY is valid and has sufficient quota

## Support

- GitHub: https://github.com/jaequery/slackatar
- Issues: https://github.com/jaequery/slackatar/issues
