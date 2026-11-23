// Server-only data fetchers for the coding-activity section.
// Both sources are public and are fetched at build / revalidation time, so
// visitors never call LeetCode or GitHub directly (LeetCode blocks CORS).

const REVALIDATE = 60 * 60 * 6; // 6 hours
const UA = "Mozilla/5.0 (compatible; portfolio-stats/1.0)";

const LEETCODE_QUERY = `
query profile($username: String!) {
  allQuestionsCount { difficulty count }
  matchedUser(username: $username) {
    profile { ranking }
    submitStatsGlobal { acSubmissionNum { difficulty count } }
    languageProblemCount { languageName problemsSolved }
    tagProblemCounts {
      advanced { tagName problemsSolved }
      intermediate { tagName problemsSolved }
      fundamental { tagName problemsSolved }
    }
    badges { id }
    userCalendar { streak totalActiveDays submissionCalendar }
  }
  userContestRanking(username: $username) {
    attendedContestsCount rating globalRanking topPercentage
  }
}`;

function toISODate(date) {
  return date.toISOString().slice(0, 10);
}

export async function getLeetCodeStats(username) {
  try {
    const res = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Referer: "https://leetcode.com",
        "User-Agent": UA,
      },
      body: JSON.stringify({ query: LEETCODE_QUERY, variables: { username } }),
      next: { revalidate: REVALIDATE },
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) return null;
    const { data } = await res.json();
    const user = data?.matchedUser;
    if (!user) return null;

    const byDifficulty = (list) =>
      Object.fromEntries((list ?? []).map(({ difficulty, count }) => [difficulty, count]));
    const solved = byDifficulty(user.submitStatsGlobal?.acSubmissionNum);
    const total = byDifficulty(data.allQuestionsCount);

    // submissionCalendar is a JSON string of { unixSeconds: count }.
    const calendar = {};
    try {
      for (const [ts, count] of Object.entries(JSON.parse(user.userCalendar?.submissionCalendar || "{}"))) {
        const day = toISODate(new Date(Number(ts) * 1000));
        calendar[day] = (calendar[day] || 0) + count;
      }
    } catch {
      // Leave the calendar empty if LeetCode changes the format.
    }

    const tags = user.tagProblemCounts ?? {};
    const topTopics = [...(tags.fundamental ?? []), ...(tags.intermediate ?? []), ...(tags.advanced ?? [])]
      .sort((a, b) => b.problemsSolved - a.problemsSolved)
      .slice(0, 8)
      .map(({ tagName, problemsSolved }) => ({ name: tagName, count: problemsSolved }));

    const languages = (user.languageProblemCount ?? [])
      .sort((a, b) => b.problemsSolved - a.problemsSolved)
      .slice(0, 4)
      .map(({ languageName, problemsSolved }) => ({ name: languageName, count: problemsSolved }));

    const contest = data.userContestRanking;

    return {
      solved: {
        all: solved.All ?? 0,
        easy: solved.Easy ?? 0,
        medium: solved.Medium ?? 0,
        hard: solved.Hard ?? 0,
      },
      total: {
        all: total.All ?? 0,
        easy: total.Easy ?? 0,
        medium: total.Medium ?? 0,
        hard: total.Hard ?? 0,
      },
      ranking: user.profile?.ranking ?? null,
      badges: user.badges?.length ?? 0,
      streak: user.userCalendar?.streak ?? 0,
      activeDays: user.userCalendar?.totalActiveDays ?? 0,
      contest: contest
        ? {
            rating: Math.round(contest.rating),
            attended: contest.attendedContestsCount,
            globalRanking: contest.globalRanking,
            topPercentage: contest.topPercentage,
          }
        : null,
      topTopics,
      languages,
      calendar,
    };
  } catch {
    return null;
  }
}

// GitHub's public contributions fragment is the same HTML that renders the
// graph on a profile page. It needs no token, unlike the GraphQL API.
export async function getGitHubContributions(username) {
  try {
    const res = await fetch(`https://github.com/users/${username}/contributions`, {
      headers: { "User-Agent": UA },
      next: { revalidate: REVALIDATE },
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) return null;
    const html = await res.text();

    // Cell id -> date, from <td ... data-date="YYYY-MM-DD" id="contribution-day-component-x-y">
    const dates = {};
    for (const [tag] of html.matchAll(/<td[^>]*data-date="[^"]+"[^>]*>/g)) {
      const date = tag.match(/data-date="([^"]+)"/)?.[1];
      const id = tag.match(/id="([^"]+)"/)?.[1];
      if (date && id) dates[id] = date;
    }

    // Cell id -> count, from <tool-tip for="cell-id">N contributions on …</tool-tip>
    const calendar = {};
    for (const [, id, text] of html.matchAll(/<tool-tip[^>]*for="([^"]+)"[^>]*>([^<]*)</g)) {
      const date = dates[id];
      if (!date) continue;
      const n = text.match(/^(\d[\d,]*) contribution/);
      calendar[date] = n ? Number(n[1].replace(/,/g, "")) : 0;
    }

    if (Object.keys(calendar).length === 0) return null;
    const total = Object.values(calendar).reduce((a, b) => a + b, 0);
    return { calendar, total };
  } catch {
    return null;
  }
}

export async function getGitHubProfile(username) {
  try {
    const res = await fetch(`https://api.github.com/users/${username}`, {
      headers: { "User-Agent": UA, Accept: "application/vnd.github+json" },
      next: { revalidate: REVALIDATE },
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) return null;
    const user = await res.json();
    return { publicRepos: user.public_repos, followers: user.followers };
  } catch {
    return null;
  }
}
