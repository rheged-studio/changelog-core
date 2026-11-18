---
title: remove Dependabot configuration
release_note: ""
created_at: "2026-11-18T11:21:31Z"
merged_at: ""
branch: disable-dependabot
pr:
commit: ""
author: rob@rheged.studio
co_authors: []
category: chore
breaking: false
issues: []
stats:
  loc_added:
  loc_removed:
  files_changed:
version: ""
---

## Changed

- **Dependabot is switched off.** `.github/dependabot.yml` is deleted, as part of switching
  Dependabot off across the estate. Dependency updates no longer open automatic PRs.
- **`CLAUDE.md` no longer says the shared reusable callers are SHA-pinned for Dependabot.**
  They float on the shared-workflows `@v1` major tag.
