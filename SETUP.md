# Setup Instructions

## GitHub Repository Creation

Since automated creation had permission issues, here's how to set it up manually:

1. **Go to GitHub and create a new public repository:**
   - URL: https://github.com/new
   - Repository name: `slackatar`
   - Description: "Automated daily avatar video generation from Linear tickets"
   - **Public** (not private)
   - Do NOT initialize with README (we already have one)

2. **From the new repo, copy the remote URL** (looks like `https://github.com/jaequery/slackatar.git`)

3. **Push the code from this directory:**
   ```bash
   cd /tmp/slackatar
   git remote add origin <PASTE_YOUR_REPO_URL>
   git branch -M main
   git push -u origin main
   ```

## Environment Setup

1. **Copy `.env.example` to `.env`:**
   ```bash
   cp .env.example .env
   ```

2. **Fill in your credentials:**
   - `FAL_KEY`: Get from https://fal.ai/dashboard/keys
   - `LINEAR_API_KEY`: Get from https://linear.app/settings/api
   - AWS/S3 credentials from your DigitalOcean Spaces setup

3. **Install dependencies:**
   ```bash
   npm install @fal-ai/client @aws-sdk/client-s3
   ```

## Running

**Manual run:**
```bash
node daily_avatar_video.mjs
```

**Automated (cron job at 5pm PST / 1am UTC):**
Add to crontab:
```
0 1 * * * cd /path/to/slackatar && node daily_avatar_video.mjs
```

## Output

Videos appear in S3: `s3://pintask/videos/daily_summary_YYYY-MM-DD.mp4`

Public URL: `https://pintask.sfo3.digitaloceanspaces.com/videos/daily_summary_YYYY-MM-DD.mp4`
