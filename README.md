# Slackatar

Automated daily avatar video generation from Linear ticket summaries.

## What It Does

Generates a photorealistic talking avatar video summarizing the day's completed tickets from your Linear project. Runs on schedule and uploads to S3 or any S3-compatible storage (DigitalOcean Spaces, AWS S3, etc.).

## Setup

1. Copy `.env.example` to `.env` and fill in your credentials:
   - `FAL_KEY`: FAL.ai API key (for avatar video generation)
   - `LINEAR_API_KEY`: Linear API key (for ticket data)
   - `LINEAR_TEAM_NAME`: Name of your Linear team (e.g., "PinTask", "Engineering")
   - `AWS_S3_BUCKET`: Your S3 bucket name
   - `AWS_REGION`: S3 region (e.g., "sfo3" for DigitalOcean)
   - `AWS_S3_ENDPOINT`: S3 endpoint URL (default: DigitalOcean Spaces SFO3)
   - `AWS_ACCESS_KEY_ID` & `AWS_SECRET_ACCESS_KEY`: S3 credentials

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run manually:
   ```bash
   node daily_avatar_video.mjs
   ```

4. Or schedule with cron (runs daily at 5pm PST / 1am UTC):
   ```bash
   0 1 * * * cd /path/to/slackatar && node daily_avatar_video.mjs
   ```

## Output

Videos are saved to S3 as `daily_summary_YYYY-MM-DD.mp4`

## Features

- Fetches completed tickets from Linear
- Generates HeYGen talking avatar
- Automatic voiceover + lip-sync
- Uploads to DigitalOcean Spaces
- Timestamped for daily tracking
