'use client'
import { FaFire, FaGithub, FaMedal, FaTrophy } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { links } from "@/assets/assets";
import Heatmap from "./Heatmap";
import Reveal from "./Reveal";

const DIFFICULTY = [
  { key: "easy", label: "Easy", color: "#00b8a3" },
  { key: "medium", label: "Medium", color: "#ffb800" },
  { key: "hard", label: "Hard", color: "#ef4743" },
];

const fmt = (n) => (typeof n === "number" ? n.toLocaleString("en-US") : "—");

/* Segmented progress ring: each arc is one difficulty's share of all
   LeetCode questions, so the filled portion is total solved / total. */
const SolvedRing = ({ solved, total }) => {
  const r = 52;
  const c = 2 * Math.PI * r;
  const gap = 4;
  let offset = 0;
  return (
    <div className="relative w-[150px] h-[150px] shrink-0">
      <svg viewBox="0 0 128 128" className="w-full h-full -rotate-90" aria-hidden="true">
        <circle cx="64" cy="64" r={r} fill="none" stroke="var(--apple-well)" strokeWidth="9" />
        {DIFFICULTY.map(({ key, color }) => {
          const len = total.all ? (solved[key] / total.all) * c : 0;
          const seg = (
            <circle
              key={key}
              cx="64"
              cy="64"
              r={r}
              fill="none"
              stroke={color}
              strokeWidth="9"
              strokeLinecap="round"
              strokeDasharray={`${Math.max(len - gap, 0)} ${c}`}
              strokeDashoffset={-offset}
              className="ring-seg"
            />
          );
          offset += len;
          return seg;
        })}
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-[30px] font-semibold tracking-[-0.03em] text-primary tabular-nums">
          {fmt(solved.all)}
        </span>
        <span className="text-[12px] text-secondary">of {fmt(total.all)} solved</span>
      </div>
    </div>
  );
};

const StatTile = ({ icon: Icon, label, value, sub, color }) => (
  <div className="stat-tile">
    <div className="flex items-center gap-2 text-[12px] text-secondary">
      <Icon className="w-3.5 h-3.5" style={{ color }} aria-hidden="true" />
      {label}
    </div>
    <div className="mt-1.5 text-[22px] font-semibold tracking-[-0.02em] text-primary tabular-nums whitespace-nowrap">
      {value}
    </div>
    {sub && <div className="text-[12px] text-secondary mt-0.5">{sub}</div>}
  </div>
);

const BarList = ({ items, color }) => {
  const max = Math.max(...items.map((i) => i.count), 1);
  return (
    <ul className="space-y-3">
      {items.map(({ name, count }) => (
        <li key={name}>
          <div className="flex justify-between text-[13px]">
            <span className="text-primary">{name}</span>
            <span className="text-secondary tabular-nums">{fmt(count)}</span>
          </div>
          <div className="mt-1.5 h-[6px] rounded-full bg-[var(--apple-well)] overflow-hidden">
            <div
              className="h-full rounded-full bar-fill"
              style={{ width: `${(count / max) * 100}%`, background: color }}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

const CardHeader = ({ icon: Icon, title, href, linkLabel, iconColor }) => (
  <div className="flex items-center justify-between gap-4">
    <div className="flex items-center gap-2.5">
      <Icon className="w-5 h-5" style={{ color: iconColor }} aria-hidden="true" />
      <h3 className="text-[17px] font-semibold tracking-[-0.015em] text-primary">{title}</h3>
    </div>
    <a href={href} target="_blank" rel="noopener noreferrer" className="link-apple text-[14px]">
      {linkLabel}
      <span aria-hidden="true">&rsaquo;</span>
    </a>
  </div>
);

const CodingStatsView = ({ leetcode, github, today }) => {
  return (
    <section id="stats" className="section-alt py-24 sm:py-32 scroll-mt-12">
      <div className="apple-container">
        <Reveal as="p" className="apple-eyebrow text-center">
          Problem solving
        </Reveal>
        <Reveal as="h2" delay={0.05} className="apple-headline text-center mt-2">
          Coding activity.
        </Reveal>
        <Reveal as="p" delay={0.1} className="apple-subhead text-center max-w-2xl mx-auto mt-5">
          Live from LeetCode and GitHub — refreshed every few hours.
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-16">
          {/* ---------------- LeetCode overview ---------------- */}
          {leetcode ? (
            <>
              <Reveal className="apple-card surface-white p-6 sm:p-8 lg:col-span-3">
                <CardHeader
                  icon={SiLeetcode}
                  iconColor="#ffa116"
                  title="LeetCode"
                  href={links.leetcode}
                  linkLabel="View profile"
                />

                <div className="flex flex-col md:flex-row md:items-center gap-8 mt-6">
                  <div className="flex flex-col sm:flex-row items-center gap-6">
                    <SolvedRing solved={leetcode.solved} total={leetcode.total} />
                    <ul className="space-y-3 w-full sm:w-auto sm:min-w-[170px]">
                      {DIFFICULTY.map(({ key, label, color }) => (
                        <li key={key}>
                          <div className="flex items-baseline justify-between gap-4 text-[13px]">
                            <span style={{ color }} className="font-medium">
                              {label}
                            </span>
                            <span className="text-primary tabular-nums">
                              {fmt(leetcode.solved[key])}
                              <span className="text-secondary"> / {fmt(leetcode.total[key])}</span>
                            </span>
                          </div>
                          <div className="mt-1 h-[5px] rounded-full bg-[var(--apple-well)] overflow-hidden">
                            <div
                              className="h-full rounded-full bar-fill"
                              style={{
                                width: `${(leetcode.solved[key] / Math.max(leetcode.total[key], 1)) * 100}%`,
                                background: color,
                              }}
                            />
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 flex-1">
                    <StatTile
                      icon={FaTrophy}
                      color="#ffa116"
                      label="Contest rating"
                      value={leetcode.contest ? fmt(leetcode.contest.rating) : "—"}
                      sub={leetcode.contest ? `${leetcode.contest.attended} contests` : undefined}
                    />
                    <StatTile
                      icon={FaMedal}
                      color="#bf5af2"
                      label="Top"
                      value={leetcode.contest ? `${leetcode.contest.topPercentage}%` : "—"}
                      sub={leetcode.contest ? `#${fmt(leetcode.contest.globalRanking)} global` : undefined}
                    />
                    <StatTile
                      icon={FaFire}
                      color="#ff6b35"
                      label="Day streak"
                      value={fmt(leetcode.streak)}
                      sub={`${fmt(leetcode.activeDays)} active days`}
                    />
                    <StatTile
                      icon={SiLeetcode}
                      color="#ffa116"
                      label="Ranking"
                      value={`#${fmt(leetcode.ranking)}`}
                      sub={`${fmt(leetcode.badges)} badges`}
                    />
                  </div>
                </div>

                <div className="mt-8">
                  <p className="text-[13px] font-medium text-primary mb-3">Submissions in the last year</p>
                  <Heatmap
                    calendar={leetcode.calendar}
                    end={today}
                    color="#ffa116"
                    unit="submission"
                    label="LeetCode submissions heatmap for the last year"
                  />
                </div>
              </Reveal>

              <Reveal delay={0.05} className="apple-card surface-white p-6 sm:p-8 lg:col-span-2">
                <h3 className="text-[17px] font-semibold tracking-[-0.015em] text-primary">Top topics</h3>
                <p className="text-[13px] text-secondary mt-1 mb-5">Problems solved per tag</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                  <BarList items={leetcode.topTopics.slice(0, 4)} color="linear-gradient(90deg, #0071e3, #42a5f5)" />
                  <BarList items={leetcode.topTopics.slice(4, 8)} color="linear-gradient(90deg, #8e44d9, #bf5af2)" />
                </div>
              </Reveal>

              <Reveal delay={0.1} className="apple-card surface-white p-6 sm:p-8">
                <h3 className="text-[17px] font-semibold tracking-[-0.015em] text-primary">Languages</h3>
                <p className="text-[13px] text-secondary mt-1 mb-5">Problems solved per language</p>
                <BarList items={leetcode.languages} color="linear-gradient(90deg, #ffa116, #ff6b35)" />
              </Reveal>
            </>
          ) : (
            <Reveal className="apple-card surface-white p-8 lg:col-span-3 text-center">
              <SiLeetcode className="w-8 h-8 mx-auto" style={{ color: "#ffa116" }} aria-hidden="true" />
              <p className="mt-4 text-[22px] font-semibold text-primary">1100+ problems solved</p>
              <p className="text-secondary mt-1">Live stats are unavailable right now.</p>
              <a href={links.leetcode} target="_blank" rel="noopener noreferrer" className="link-apple mt-4">
                View LeetCode profile <span aria-hidden="true">&rsaquo;</span>
              </a>
            </Reveal>
          )}

          {/* ---------------- GitHub ---------------- */}
          {github && (
            <Reveal delay={0.05} className="apple-card surface-white p-6 sm:p-8 lg:col-span-3">
              <CardHeader icon={FaGithub} title="GitHub" href={links.github} linkLabel="View profile" />
              <div className="grid grid-cols-3 gap-3 mt-6 max-w-lg">
                <StatTile icon={FaGithub} label="Contributions" value={fmt(github.total)} sub="last year" />
                <StatTile icon={FaGithub} label="Repositories" value={fmt(github.publicRepos)} sub="public" />
                <StatTile icon={FaGithub} label="Followers" value={fmt(github.followers)} />
              </div>
              <div className="mt-8">
                <Heatmap
                  calendar={github.calendar}
                  end={today}
                  color="#30a14e"
                  unit="contribution"
                  label="GitHub contributions heatmap for the last year"
                />
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
};

export default CodingStatsView;
