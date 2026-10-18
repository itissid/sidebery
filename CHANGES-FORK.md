# Sidebery fork changes

Maintenance record for [itissid/sidebery](https://github.com/itissid/sidebery), branch `browser-work-icons`. Upstream: [mbnuqw/sidebery](https://github.com/mbnuqw/sidebery), branch `v5`.

Append an entry for every maintenance run, including an update that is deferred, rejected, or already current. Record the date, fork/upstream SHAs, security-review scope/findings, merge outcome, exact checks/results, and publication status. Read-only questions are not maintenance runs. Keep credentials, browser profiles, browsing data, and private tool payloads out of this record.

## 2026-10-18 — Add 48 browser-work icons

- Base: upstream `v5.6.1`, commit `c9f17d59a29faa5531f3cc01434444598506f49b`, tree `67b59ef013d8bf3b87f79e88a295106436d2d269`.
- Append 48 Tabler outline icons to `PANEL_ICON_OPTS`, retaining original choices. Added values use `browser_work_` and activity labels as tooltips.
- Bundle the SVG definitions in the sidebar, setup, full panel configuration, group page, and sync popup. Include Tabler's MIT license in source and packaged output.
- Outline icons inherit the panel color. Selecting an added built-in icon replaces any previously imported custom-file icon for that panel.
- Custom manifest version: `5.6.1.48`; name: `Sidebery — Browser Work Icons`. The extension ID and requested permissions match upstream.
- Add `scripts/check-browser-work-icons.py` to check the 48 definitions, picker entries, and HTML injection points during maintenance.
- Security scope: reviewed the local icon/menu patch, permission comparison, SVGs, and inherited workflow triggers. Added SVGs contain vector shapes rather than scripts/network references. The customization adds no permissions, endpoints, dependencies, or workflows. This is a scoped review, not an audit of the entire upstream codebase.
- Upstream synchronization: retain the release used by the installed build. No newer upstream changes were merged in this initial publication.
- Checks: production build, ESLint, TypeScript, and Firefox extension validation passed (zero validator errors; four warnings in inherited code/manifest). Both modified and untouched releases passed 77 of 78 tests, with the same failure in `src/services/tabs.fg.badge.test.ts`, `Tabs.parseBadgeRegexpRules() > default notification rule`. This is a recorded baseline, not a permanent test exemption.
- Firefox observation from the initial build: all 48 choices appeared in the quick menu; a research icon and turquoise color persisted after saving a disposable panel and reopening full configuration. The panel and generated blank tab were removed. Restart persistence was not tested.
- Publication: publish source to the public fork's `browser-work-icons` branch. Browser installation is outside the maintenance skill's scope.

### Publication checks

- Rechecked with Node 25.2.1: production build, lint/types, and the icon contract passed; the fork and untouched upstream each passed all 78 tests. The earlier badge-test failure was reproduced under the earlier runtime, so future maintenance must record runtime versions and reproduce its baseline.
- The icon checker also rejected a deliberately missing injection and an active SVG script in disposable fixtures.
- The shared skill passed skill-creator validation using an existing cached PyYAML dependency.
