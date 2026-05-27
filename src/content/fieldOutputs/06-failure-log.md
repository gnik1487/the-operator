---
title: "Failure log — automation that got built and then deleted"
urlSlug: failure-log-deleted-automations
kind: failure-log
image: /field-outputs/placeholder-6.svg
summary: "A log of four automations that were built, used, and eventually deleted. Why each one was built, what broke it, and what replaced it."
pubDate: 2026-04-01
order: 6
---

The failure log is one of the most useful documents in the vault. Building something is easy. Acknowledging that you built it, used it, and then deleted it — and understanding exactly why — is where the real learning is.

**Automation 1: Auto-summarised meeting notes (deleted at week 6)**

Built to automatically summarise all client meeting notes using a fixed prompt. Deleted because the fixed prompt produced uniform outputs that stripped context-specific nuance. The summaries were accurate but not useful — they couldn't distinguish between a note where the client was agreeing and a note where the client was agreeing-but-clearly-wasn't. Replaced by: a structured note template where the human does the first-pass tagging before any AI touches it.

**Automation 2: Daily briefing digest (deleted at month 3)**

Built to aggregate daily industry news into a five-point briefing each morning. Deleted because it was optimising for the wrong thing — it produced a briefing I was reading instead of doing work. The briefing was good; the habit it created was not. Replaced by: a weekly, manual scan of two specific sources. Less automated; more useful.

**Automation 3: Proposal section generator (deleted at month 7)**

Built to generate first-draft proposal sections from a structured brief. Deleted because the outputs, while plausible, were creating a new editing problem: cleaning up AI-generated text that sounded right but wasn't quite right took longer than writing from scratch once the brief was clear. Replaced by: using AI for the structure (headings, argument skeleton) only, with human-written copy throughout.

**Automation 4: Client follow-up tracker (deleted at month 11)**

Built to track open client commitments and generate draft follow-up messages. Deleted because it was applying a uniform follow-up style to relationships that required differentiated handling. The automation was technically correct; the outputs were professionally wrong. Replaced by: nothing. Some follow-ups have to be written by hand.

**The pattern across all four:** Each automation was deleted not because it was broken but because it was optimising for efficiency in a place where efficiency was not the limiting constraint. The follow-up tracker was fast; the relationship required care. The briefing digest was comprehensive; the habit required selectivity. Build for the actual bottleneck, not the theoretical one.
