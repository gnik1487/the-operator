---
title: "Prompt chain that compresses a 40-page brief into a 1-page decision memo"
urlSlug: brief-compression-prompt-chain
kind: prompt-chain
image: /field-outputs/placeholder-2.svg
summary: "The exact prompt chain used to extract one decision memo from a 40-page client brief. Three prompts, forty minutes, one page at the end of it."
pubDate: 2026-02-01
order: 2
---

Client briefs are long because committees produce them. The committee needs to feel heard; the decision-maker needs one page. This chain bridges the gap.

**The three-prompt structure:**

Prompt 1 — Map: *"Read the attached document. List the five decisions that have to be made before this project can proceed. For each decision, identify who makes it, what information they need, and the deadline."* Output: a structured decision map, rarely longer than half a page.

Prompt 2 — Extract: *"Using only the decisions in the map, extract the single most time-sensitive decision and the minimum information required to make it. Discard everything else."* Output: a two-paragraph summary. This is where the 39 pages get cut.

Prompt 3 — Format: *"Rewrite this summary as a decision memo in the following format: (1) What needs to be decided, (2) By whom, (3) By when, (4) What information supports it, (5) What is missing."* Output: the one-page memo.

**What the chain doesn't do:** It doesn't make the decision. It doesn't evaluate whether the brief is correct. It doesn't know the client relationship context. A human reads the output memo before it goes anywhere.

**Failure mode on the first attempt:** The extraction prompt produced a summary that was accurate to the brief but not to the actual decision pressure — it extracted what the brief said was important, not what the client actually needed resolved first. The fix was to add a constraint: *"Prioritise by time-pressure, not by document order."* That one clause changed every output.

**Reusability:** This chain runs on any dense briefing document. The prompts themselves are in the PIT-001 template (available in the shop) with blanks for document type and client context.
