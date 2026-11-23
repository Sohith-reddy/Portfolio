import { GITHUB_USERNAME, LEETCODE_USERNAME } from "@/assets/assets";
import { getGitHubContributions, getGitHubProfile, getLeetCodeStats } from "@/utils/stats";
import CodingStatsView from "./CodingStatsView";

// Server component: fetches public LeetCode / GitHub data at build and
// revalidation time and hands plain JSON to the client view.
const CodingStats = async () => {
  const [leetcode, contributions, profile] = await Promise.all([
    getLeetCodeStats(LEETCODE_USERNAME),
    getGitHubContributions(GITHUB_USERNAME),
    getGitHubProfile(GITHUB_USERNAME),
  ]);

  const today = new Date().toISOString().slice(0, 10);

  return (
    <CodingStatsView
      leetcode={leetcode}
      github={contributions ? { ...contributions, ...(profile ?? {}) } : null}
      today={today}
    />
  );
};

export default CodingStats;
