---
title: "Planning dashboard — before and after AI-assisted review"
urlSlug: planning-dashboard-before-after
kind: before-after
image: /field-outputs/placeholder-1.svg
summary: "A client planning dashboard, before and after a structured AI review pass. The same data; a completely different signal-to-noise ratio."
pubDate: 2026-01-15
order: 1
---

The dashboard on the left is what the planning team was looking at before the review pass. Thirty-seven KPIs. Four time-series charts. Two pivot tables. Everything technically present; nothing prioritised.

The prompt chain ran in three stages: first a full read of the dashboard specification, then a critique pass asking what a senior reviewer would cut, then a rebuild pass using only the ten metrics that survived. The result is on the right.

What changed: twenty-seven metrics removed, not because they were wrong but because they weren't decision-relevant. The two time-series charts that remained were reframed around the actual planning decision (reorder point vs. current stock position) rather than around what was easy to pull from the system.

**What this took:** Forty minutes, one Claude session, one well-structured prompt chain. The AI didn't understand the planning context — it was given it. The prompt included the decision the dashboard was supposed to support and the audience who would read it. That context is what did the work.

**What it didn't do:** The AI had no visibility into the underlying data. It reviewed the structure and the framing, not the numbers. A human still had to verify that the ten surviving metrics were correctly calculated. Automation handles the structure; judgement handles the accuracy check.

**Failure mode:** The first version of the critique prompt was too aggressive — it flagged twelve metrics for removal that were actually load-bearing for a downstream process the prompt didn't know about. The second version added a constraint: "do not suggest removing any metric that feeds into the weekly S&OP pack." That produced a more useful result.
