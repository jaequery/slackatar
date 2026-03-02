#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const COST_LOG_FILE = path.join(__dirname, "../.cost_log.json");

function generateReport() {
  if (!fs.existsSync(COST_LOG_FILE)) {
    console.log("No cost log found. Run videos first to generate logs.");
    process.exit(0);
  }

  const log = JSON.parse(fs.readFileSync(COST_LOG_FILE, "utf-8"));

  if (log.length === 0) {
    console.log("Cost log is empty.");
    process.exit(0);
  }

  // Parse timestamps
  const entries = log.map(e => ({
    ...e,
    date: new Date(e.timestamp),
    cost: parseFloat(e.estimatedCost),
  }));

  // Calculate totals
  const totalCost = entries.reduce((sum, e) => sum + e.cost, 0);
  const avgCost = totalCost / entries.length;

  // Group by month
  const byMonth = {};
  entries.forEach(e => {
    const month = e.date.toISOString().substring(0, 7); // YYYY-MM
    if (!byMonth[month]) byMonth[month] = [];
    byMonth[month].push(e);
  });

  console.log("\n📊 Slackatar Cost Report");
  console.log("========================\n");

  console.log(`Total videos generated: ${entries.length}`);
  console.log(`Total cost: $${totalCost.toFixed(2)}`);
  console.log(`Average per video: $${avgCost.toFixed(2)}`);
  console.log(`Daily average: $${(avgCost * 1).toFixed(2)}`);
  console.log(`Monthly estimate: $${(avgCost * 30).toFixed(2)}\n`);

  console.log("By Month:");
  Object.entries(byMonth)
    .sort()
    .forEach(([month, entries]) => {
      const monthCost = entries.reduce((sum, e) => sum + e.cost, 0);
      const rate = entries.reduce((sum, e) => sum + e.cost, 0) / entries.length;
      console.log(`  ${month}: $${monthCost.toFixed(2)} (${entries.length} videos @ $${rate.toFixed(2)} avg)`);
    });

  console.log("\nBreakdown per video:");
  console.log(`  HeyGen generation: $${entries[0].heygen.toFixed(2)}`);
  console.log(`  FAL gateway: $${entries[0].fal_gateway.toFixed(2)}`);
  console.log(`  S3 storage: $${entries[0].s3.toFixed(2)}`);

  console.log(`\nFull log: ${COST_LOG_FILE}`);
}

generateReport();
