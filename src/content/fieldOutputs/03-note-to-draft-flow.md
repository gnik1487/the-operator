---
title: "Workflow diagram: engagement note → article draft pipeline"
urlSlug: note-to-draft-pipeline
kind: flowmap
image: /field-outputs/placeholder-3.svg
summary: "The full workflow diagram for turning a raw engagement note into a publishable article draft. Twelve steps. Four human checkpoints. One AI-assisted pass in the middle."
pubDate: 2026-02-15
order: 3
---

This is the workflow that produces every article on this site. The diagram shows all twelve steps, including the four where a human has to make a judgment call that the AI cannot.

**The twelve steps:**

1. Raw note lands in Obsidian (manual capture during or after engagement)
2. Tagging pass — applying the taxonomy: client context, workflow type, tools involved
3. Pattern check — does this note confirm, contradict, or add to an existing article stub?
4. **Human checkpoint 1**: Is there a replicable pattern here, or is this just a one-off?
5. Compression prompt — strip the client-specific context, extract the pattern
6. Structure prompt — map the pattern onto the article template (problem / method / failure / replication)
7. **Human checkpoint 2**: Does the structure reflect what actually happened, or has the AI tidied it into something that sounds cleaner than the real experience?
8. Draft prompt — write the first draft from the structure
9. Critique prompt — find the weakest claim in the draft; challenge it
10. **Human checkpoint 3**: Is the weakest claim actually salvageable, or does the whole article need a different frame?
11. Final pass — tighten, add disclosure, write the dek
12. **Human checkpoint 4**: Does this article tell a practitioner something they couldn't get from a vendor blog post?

**What the AI touches:** Steps 5, 6, 8, and 9 — the mechanical parts. The AI does not touch the four checkpoints. It cannot evaluate whether the pattern is real, whether the experience was correctly represented, whether the argument holds up, or whether the output is actually useful to the reader.

**Time from note to published draft:** Between two and four hours, depending on how much context-stripping step 5 requires. Before this workflow existed, the same process took a full day.
