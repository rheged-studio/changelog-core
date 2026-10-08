---
title: Re-vendor agent skills for mattpocock v1.3.1
release_note: ""
version:
created_at: "2026-10-08T15:20:40Z"
merged_at:
branch: a-2302-re-vendor-skills-for-v131-changelog-core
pr:
commit:
author: "rob@rheged.studio"
co_authors: []
category: chore
breaking: false
issues:
  - A-2302
  - A-2299
stats:
  files_changed:
  loc_added:
  loc_removed:
  commits:
---

## Changed

**Re-vendor estate agent skills for mattpocock/skills v1.3.1 ([A-2302](https://linear.app/rheged-studio/issue/A-2302), roll [A-2299](https://linear.app/rheged-studio/issue/A-2299))**

- Refresh Rheged and Matt Pocock bundles via `fleet-update.mjs --apply`; restore vendored `config.json` from HEAD
- Add `implement-spec`, `retro`, and Rheged `pr`; remove `resolving-merge-conflicts`
- Align `triage-pr` config: `humanEnvelope: false`, `followUpLabel: follow-up`
- Domain-modeling ships `GLOSSARY-FORMAT.md` (no root `CONTEXT.md` rename in this repo)
