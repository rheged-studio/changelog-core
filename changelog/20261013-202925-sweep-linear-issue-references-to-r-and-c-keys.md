---
title: Sweep Linear issue references to R and C keys
release_note: ""
version:
created_at: "2026-10-13T20:29:25Z"
merged_at:
branch: r-2687-changelog-core-sweep-issue-references
pr:
commit:
author: "rob@rheged.studio"
co_authors: []
category: chore
breaking: false
issues:
  - R-2687
stats:
  files_changed:
  loc_added:
  loc_removed:
  commits:
---

## Changed

- Rewrite old `A-` Linear issue references across docs, workflows, comments, fixtures and existing changelog bodies to the new `R-` and `C-` keys through the committed Linear-migrate mapping ([R-2687](https://linear.app/rheged-studio/issue/R-2687)). Changelog file names and `branch:` lines are kept verbatim.
- Move the `add-links` test fixtures and the `tests/setup.ts` issue keys to `["R", "C"]`, and keep the lowercase branch-name fixture in step with its uppercase expectation ([R-2687](https://linear.app/rheged-studio/issue/R-2687)).
