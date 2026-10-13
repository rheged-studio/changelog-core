// Canonical issue-key helpers — the single source of truth for deriving a
// Linear issue-key regex from a branch name or prose.
//
// TypeScript port of agent-skills' `lib/issue-keys.mjs` (vendored per ADR-0004,
// A-534). Re-sync by hand when upstream changes; last synced at agent-skills
// `76a032d` (A-2652).
//
// Pure and zero-dependency by design: the host loads its own config and
// passes the configured keys in.

/**
 * Escape regex metacharacters so a configured key such as `C++` or `MY.KEY`
 * can't throw at construction or silently widen the match.
 */
export function escapeRegex(source: string): string {
  return source.replaceAll(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Build the `\b(?:KEY|…)-\d+\b` matcher (global flag) from configured issue keys.
 *
 * Returns `null` when no keys are configured: an empty alternation would match
 * the empty string before every `-<digits>` and inject bogus links (e.g. `-2`).
 * A single key needs no `(?:…)` wrapper — only wrap when there's an alternation,
 * because the naive join `\bA|B-\d+\b` parses as `\bA` *or* `B-\d+\b` (matching a
 * bare `A` and missing `A-7`).
 */
export function buildIssueRe(keys: string[]): null | RegExp {
  if (!Array.isArray(keys) || keys.length === 0) {
    return null;
  }

  const alternation = keys.map(escapeRegex).join("|");
  const group = keys.length > 1 ? `(?:${alternation})` : alternation;
  return new RegExp(`\\b${group}-\\d+\\b`, "g");
}

/**
 * Build the anchored `^(?:KEY|…)-\d+\b` matcher (no global flag) for reading a
 * branch name's **leading** issue ID. Branches are named `<id>-<slug>`, so only
 * the leading token is the branch's issue: a slug token such as `-c-2-` or
 * `-r-3-` must never resolve to an issue (A-2682). Same escaping, grouping and
 * empty-key rules as `buildIssueRe`; prose (changelog bodies, commit messages,
 * PR titles) keeps the unanchored `buildIssueRe`.
 */
export function buildBranchIssueRe(keys: string[]): null | RegExp {
  const prose = buildIssueRe(keys);
  if (!prose) {
    return null;
  }

  return new RegExp(prose.source.replace(/^\\b/, "^"));
}

/**
 * The branch's issue ID — its leading `<KEY>-<digits>` token, upper-cased — or
 * `null` when the branch doesn't start with a configured key. At most one ID
 * per branch.
 */
export function extractBranchIssueId(
  branch: string,
  keys: string[],
): null | string {
  const re = buildBranchIssueRe(keys);
  const match = re?.exec(branch.toUpperCase());
  return match ? match[0] : null;
}
