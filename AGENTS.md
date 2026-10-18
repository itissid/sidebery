# Sidebery fork maintenance

This checkout maintains `itissid/sidebery` on `browser-work-icons`. Upstream is `mbnuqw/sidebery`, currently branch `v5`.

Read `CHANGES-FORK.md` before editing. Append an entry for every maintenance run before committing. Record deferred/rejected updates as documentation-only changes on trusted fork history, without incorporating rejected upstream commits.

Preserve the 48 `browser_work_` choices, labels, panel colors, SVG injection points, Tabler license, extension ID, and permissions unless the user requests otherwise. Run `python3 scripts/check-browser-work-icons.py` plus relevant build, lint/type, full-test, and extension-validation checks.

The shared `sidebery-fork` skill in the user's `agent-skills` repository defines upstream review and merge gates. Review incoming code and dependency/workflow changes before executing candidate code. Publish a clean merge only after security review and comparison against a freshly reproduced trusted baseline show no regressions. Reproduce recorded failures instead of assuming they remain allowed.

Maintain source/packages only. Firefox profile changes, signature settings, and browser installation are outside this workflow.
