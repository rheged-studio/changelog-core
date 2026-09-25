---
title: Vendor estate skill catalogue (Rheged + Matt)
release_note: ""
version:
created_at: "2026-09-25T14:45:00Z"
merged_at:
branch: a-1915-vendor-estate-skill-catalogue-changelog-core
pr:
commit:
author: "rob@rheged.studio"
co_authors: []
category: chore
breaking: false
issues:
  - A-1915
affected_packages:
  - infrastructure
stats:
  files_changed:
  loc_added:
  loc_removed:
  commits:
---

## Changed

**Vendor full Rheged + Matt Pocock skill catalogue ([A-1915](https://linear.app/rheged-studio/issue/A-1915))**

- Install via `rheged-skills-setup --install --write`; restore vendored `config.json` from HEAD ([A-706](https://linear.app/rheged-studio/issue/A-706))
- Drop legacy `initialise-skills` in favour of `rheged-skills-setup`
- Preserve repo extras (`commit`, `release-status`); bump `send-it` 0.8.1 → 0.8.2 and `triage-pr` 0.13.0 → 0.14.0
- Add Matt productivity packs (`grill-me`, `wizard`, `triage`, …) on both `.claude` and `.agents` mirrors
