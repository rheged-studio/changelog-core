---
title: drop the legacy A issue key
release_note: ""
created_at: "2026-10-14T13:00:43Z"
merged_at: ""
branch: r-2688-changelog-core-drop-the-legacy-a-key
pr:
commit: ""
author: rob@rheged.studio
co_authors: []
category: chore
breaking: false
issues:
  - R-2688
stats:
  loc_added:
  loc_removed:
  files_changed:
version: ""
---

## Changed

- **`issueKeys` is `["R"]` in every config copy ([R-2688](https://linear.app/rheged-studio/issue/R-2688)).** The Linear team key was renamed A to R and no `a-` branches remain, so the legacy key is dropped from the root and the `.claude`/`.agents` skill configs. Source defaults are untouched: `src/lib/config.ts` has no default key list.
