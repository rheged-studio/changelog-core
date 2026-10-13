---
title: Sync issue-key branch helpers and R/A keys
release_note: "Exports buildBranchIssueRe and extractBranchIssueId, which read only a branch's leading issue ID, in line with agent-skills."
version:
created_at: "2026-10-13T10:52:42Z"
merged_at:
branch: a-2652-3-changelog-core-sync-issue-key-handling-and-release
pr:
commit:
author: "rob@rheged.studio"
co_authors: []
category: feature
breaking: false
issues:
  - A-2652
stats:
  files_changed:
  loc_added:
  loc_removed:
  commits:
---

## Added

- Re-sync the vendored `issue-keys.ts` with agent-skills `76a032d`. This adds `buildBranchIssueRe` and `extractBranchIssueId`, which match only a branch's leading `<KEY>-<n>` token, so slug tokens such as `-c-2-` never resolve ([A-2652](https://linear.app/rheged-studio/issue/A-2652), [A-2682](https://linear.app/rheged-studio/issue/A-2682)).
- Export both helpers from the package entry point alongside `buildIssueRe` and `escapeRegex`, with the upstream test suite ported.

## Changed

- Set `issueKeys` to `["R", "A"]` in the root `config.json` and the vendored skill configs, and seed the same keys in the vitest setup, with R- and mixed R-/A- linkify cases.
