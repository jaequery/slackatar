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

## Installation on OpenClaw

### Option 1: As an OpenClaw Skill

```bash
git clone https://github.com/jaequery/slackatar.git ~/.openclaw/skills/slackatar-skill
cd ~/.openclaw/skills/slackatar-skill
cp .env.example .env
# Edit .env with your credentials
```

Then use it as a skill in OpenClaw.

### Option 2: Direct Clone

```bash
git clone https://github.com/jaequery/slackatar.git ~/slackatar
cd ~/slackatar
cp .env.example .env
# Edit .env with your credentials
npm install
node daily_avatar_video.mjs
```

### Option 3: ClawHub (Coming Soon)

Once published to ClawHub, install with:
```bash
clawhub install slackatar-skill
```

## Usage

### Manual Run
```bash
node daily_avatar_video.mjs
```

### Scheduled (OpenClaw Cron)

Add to `.cron/slackatar-daily.json`:
```json
{
  "schedule": "0 1 * * *",
  "command": "cd /path/to/slackatar && node daily_avatar_video.mjs"
}
```

### Troubleshooting

- **"LINEAR_TEAM_NAME not found"**: Verify your team name matches exactly in Linear (Settings → Workspace)
- **"No completed tickets"**: Script only includes tickets completed today (UTC midnight)
- **S3 upload fails**: Check AWS credentials and bucket permissions
- **Video generation timeout**: FAL.ai avatar generation can take 1-2 minutes

## Output

Videos are saved to S3 as `daily_summary_YYYY-MM-DD.mp4`

Public URL: `https://{bucket}.{region}.digitaloceanspaces.com/videos/daily_summary_YYYY-MM-DD.mp4`

## Features

- Fetches completed tickets from Linear
- Generates HeYGen talking avatar
- Automatic voiceover + lip-sync
- Uploads to DigitalOcean Spaces or any S3-compatible storage
- Timestamped for daily tracking
- Fully configurable via environment variables
