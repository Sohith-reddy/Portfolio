'use client'
import { useMemo, useState } from "react";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const DAY_MS = 86_400_000;

const toKey = (d) => d.toISOString().slice(0, 10);
const formatDate = (key) =>
  new Date(`${key}T00:00:00Z`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });

// Bucket counts into 5 levels (0 = none) using quartiles of the non-zero
// days, so a few very busy days don't wash every other cell out.
const buildLevels = (values) => {
  const nonZero = values.filter((v) => v > 0).sort((a, b) => a - b);
  if (!nonZero.length) return () => 0;
  const q = (p) => nonZero[Math.min(nonZero.length - 1, Math.floor(p * nonZero.length))];
  const [q1, q2, q3] = [q(0.25), q(0.5), q(0.75)];
  return (v) => (v <= 0 ? 0 : v <= q1 ? 1 : v <= q2 ? 2 : v <= q3 ? 3 : 4);
};

/**
 * GitHub-style contribution grid for the last 53 weeks.
 * @param {Record<string, number>} calendar  ISO date -> count
 * @param {string} color   Base colour for the highest level
 * @param {string} unit    Singular noun for the tooltip ("submission")
 */
const Heatmap = ({ calendar = {}, end, color = "#0071e3", unit = "contribution", label }) => {
  const [hover, setHover] = useState(null);

  const { weeks, monthLabels, levelOf } = useMemo(() => {
    // `end` comes from the server so the cached HTML and the hydrated grid
    // agree on which day is "today".
    const now = end ? new Date(`${end}T00:00:00Z`) : new Date();
    const today = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
    // Start on the Sunday 52 weeks before this week's Sunday.
    const start = new Date(today.getTime() - (today.getUTCDay() + 52 * 7) * DAY_MS);

    const weeks = [];
    const monthLabels = [];
    let lastMonth = -1;
    for (let w = 0; w < 53; w++) {
      const days = [];
      for (let d = 0; d < 7; d++) {
        const date = new Date(start.getTime() + (w * 7 + d) * DAY_MS);
        if (date > today) {
          days.push(null);
          continue;
        }
        const key = toKey(date);
        days.push({ key, count: calendar[key] || 0 });
      }
      const first = days.find(Boolean);
      if (first) {
        const month = new Date(`${first.key}T00:00:00Z`).getUTCMonth();
        if (month !== lastMonth) {
          // Skip a label that would collide with the previous one.
          if (!monthLabels.length || w - monthLabels[monthLabels.length - 1].week >= 3) {
            monthLabels.push({ week: w, label: MONTHS[month] });
          }
          lastMonth = month;
        }
      }
      weeks.push(days);
    }

    const values = weeks.flat().filter(Boolean).map((d) => d.count);
    return { weeks, monthLabels, levelOf: buildLevels(values) };
  }, [calendar, end]);

  const plural = (n) => `${n} ${unit}${n === 1 ? "" : "s"}`;

  return (
    <div className="heatmap" style={{ "--heat": color }}>
      <div className="overflow-x-auto pb-1 -mx-1 px-1">
        <div className="heatmap-grid" role="img" aria-label={label}>
          <div className="heatmap-months" aria-hidden="true">
            {monthLabels.map(({ week, label }) => (
              <span key={`${week}-${label}`} style={{ gridColumnStart: week + 1 }}>
                {label}
              </span>
            ))}
          </div>
          <div className="heatmap-weeks" onMouseLeave={() => setHover(null)}>
            {weeks.map((days, w) => (
              <div key={w} className="heatmap-week">
                {days.map((day, d) =>
                  day ? (
                    <span
                      key={day.key}
                      className="heatmap-cell"
                      data-level={levelOf(day.count)}
                      title={`${plural(day.count)} on ${formatDate(day.key)}`}
                      onMouseEnter={() => setHover(day)}
                    />
                  ) : (
                    <span key={`empty-${d}`} className="heatmap-cell heatmap-cell-empty" />
                  )
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 mt-3 text-[12px] text-secondary">
        <span className="min-h-[1em] tabular-nums" aria-live="polite">
          {hover ? `${plural(hover.count)} on ${formatDate(hover.key)}` : "Hover a day for details"}
        </span>
        <span className="flex items-center gap-1 shrink-0" aria-hidden="true">
          Less
          {[0, 1, 2, 3, 4].map((l) => (
            <span key={l} className="heatmap-legend-cell" data-level={l} />
          ))}
          More
        </span>
      </div>
    </div>
  );
};

export default Heatmap;
