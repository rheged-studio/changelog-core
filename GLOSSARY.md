# Changelog Core

The shared changelog contract and CLI for Rheged Studio. It defines what a dated changelog entry is, who may write each of its fields, and how entries are validated, enriched and gated.

## Language

### Entries

**Entry**:
One dated Markdown file under the changelog directory, recording one pull request. Its filename is `YYYYMMDD-HHMMSS-<slug>.md`.
_Avoid_: Changelog file, release note file, record

**Changelog directory**:
The folder that holds a repo's entries, named by the `changelogDir` config key (default `changelog`). Its `README.md` is not an entry.
_Avoid_: Changelog folder, changelog root

**Contract**:
The frontmatter schema and field-ownership rules that every entry must follow, written down in `changelog-contract.md`. `validate` is its executable form.
_Avoid_: Spec, template

**Frontmatter**:
The YAML block at the top of an entry that carries its structured fields. Unknown keys are ignored.
_Avoid_: Metadata, header

**Release note**:
The one-sentence, user-facing summary held in an entry's `release_note` field. It is distinct from the entry's `title`.
_Avoid_: Summary, blurb

**Category**:
The entry's `category` field: one of `feature`, `fix`, `chore`, `docs`, `refactor` or `perf`. It states what kind of change the PR is.
_Avoid_: Type, kind

**Breaking**:
The entry's boolean `breaking` field. When `true`, the body must contain a `## Breaking` section.
_Avoid_: Major, incompatible

### Field ownership

**PR-time fields**:
The fields the author writes while the PR is open, such as `title`, `release_note`, `category`, `breaking`, `issues` and `branch`. They are re-derived on every ship run.
_Avoid_: Author fields, draft fields

**Post-merge fields**:
The fields filled only after the PR merges: `merged_at`, `commit`, `pr`, `stats`, and `version` where a consumer adds one. They sit as blank placeholders until then and are never hand-edited.
_Avoid_: Enrichment fields, release fields

**Sacred `created_at`**:
The rule that `created_at` is set once when the entry is created and preserved verbatim on every later update.
_Avoid_: Timestamp, date

**Branch key**:
The entry's `branch` field, used as the stable lookup key to find an entry and resolve its merged PR.
_Avoid_: Branch name field, PR lookup

### Commands

**Validate**:
The `validate` subcommand, which schema-checks every entry in the changelog directory against the contract. It requires only `title`, `created_at`, `category` and `breaking`.
_Avoid_: Lint, check

**Enrich**:
The `enrich` subcommand, which fills the post-merge fields (minus `version` and `commits`) for one entry located by its branch key. It is the deploy-target mode.
_Avoid_: Backfill, update

**Finalise**:
The `finalise` subcommand, which enriches an entry and also stamps `version` from the just-bumped `package.json`. It is the npm-target mode.
_Avoid_: Release, publish

**Stamp**:
To write the release `version` into an entry that does not yet have one, as `finalise` does.
_Avoid_: Tag, bump

### Gating

**Completeness gate**:
The `check-completeness` subcommand, which fails a release-triggering PR title that has no entry in the diff against the base branch.
_Avoid_: Changelog check, entry check

**Release-triggering**:
Describes a PR title, by Conventional Commits type, that cuts a release: `feat`, `fix`, `perf`, `revert`, or any type with the `!` breaking marker. It is the opposite of non-release.
_Avoid_: Releasable, bumping

**Non-release**:
Describes a PR whose title type (`docs`, `chore`, `ci`, `refactor`, `test`, `build`, `style`) cuts no release. It still gets an entry, which simply stays without a `version`.
_Avoid_: Skippable, minor change

**Affected packages**:
The monorepo-only `affected_packages` field, written by `set-affected-packages` from the branch diff and emitted only when the `affectedPackages` config key is `true`.
_Avoid_: Touched packages, scope
