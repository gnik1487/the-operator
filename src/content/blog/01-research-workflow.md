---
title: "The research workflow that replaced my analyst"
section: Workflows
urlSlug: research-workflow-replaced-my-analyst
seo_keyword: ai client research workflow
meta_description: "The exact Claude + Obsidian pipeline I use to do client background research in 40 minutes instead of half a day — including the two steps that failed."
word_count_target: 1800
status: draft
monetization: "Affiliate (Claude, Obsidian/Notion) + $29 Prospect Intake template"
order: 1
pubDate: 2026-05-26
---

Before a first conversation with a new client, there is a version of preparation that looks like work and isn't. You open fifteen tabs. You read the company's "about" page. You scroll a LinkedIn feed and a few analyst notes. Three hours later you have a vague sense of the company and no actual point of view. I did this for years because it felt diligent, and because the alternative — walking in with a sharp, possibly-wrong opinion — felt riskier than walking in with a safe, forgettable one.

It took me too long to notice the obvious thing: what a client is actually paying a senior person for, in that first meeting, is a **point of view**. A read on their situation sharp enough to be wrong in an interesting way. Tabs don't produce that. Synthesis does. The reading is just the cost of admission, and it's the part a machine is now genuinely good at.

So when I rebuilt this workflow around AI, the goal was never "read faster." It was to compress the low-value gathering down to nothing and spend the recovered time on the one thing the machine can't do — decide what it all means. Here is the whole pipeline, and then the two parts that broke badly enough that I deleted them.

## The shape of it

Three stages: **gather, compress, provoke.** The first two are automated. The third is manual, permanent, and the entire reason the workflow exists. If you take one thing from this article, make it the boundary between stage two and stage three — that line is where most people get AI research wrong.

### Stage one — gather

I keep a single note template in Obsidian for every new prospect. When a name comes in, I drop the company's public material into a structured intake: the relevant sections of the latest annual report, recent press, two or three industry pieces that set context, and anything a client or colleague has already sent me. Plain text, one note, in a vault I control.

The point here is emphatically *not* volume. It is the opposite. I am assembling a small, clean, deliberately-curated input so that the next stage has something good to work with. Five minutes of human curation at this step does more for the final output than any amount of automated collection — a claim I'll come back to, because I learned it the expensive way.

> **Why Obsidian, not a chat window** — Chat history disappears into a scroll you'll never read again. A markdown vault compounds. Every prospect note I write stays searchable, so six months later when that same industry resurfaces, the synthesis is already sitting there. The workflow is designed to leave an asset behind, not just produce an answer and evaporate. That distinction — asset versus answer — is the difference between using AI and building something with it.

### Stage two — compress

This is the stage everyone assumes is the whole workflow. It's the least important one. I hand the gathered material to Claude with a single, specific instruction: do not summarise. Contrast.

I don't want "here is what the company does." I can read. I want "here are the three tensions in this business that a competent outsider would notice in the first ten minutes." Summary is comfortable and useless — it gives you a paragraph you could have written yourself. Tension is where the meeting actually lives, because tension is where the client already feels something and hasn't resolved it.

The instruction that reliably produces this:

```
You are briefing a senior consultant before a first meeting.
Do NOT summarise. Identify the 3 strategic tensions visible in
this material. For each: state the tension, cite the evidence,
and name the question it raises that management probably avoids.
```

The difference between "summarise this" and "find the tensions" is the difference between a research tool and a thinking partner. One gives you a Wikipedia paragraph. The other gives you something to say in the room — and, more importantly, something to *argue with*, which is stage three.

### Stage three — provoke

Now I argue with it. I take the three tensions the model surfaced and push back on each one, in writing, by hand: *Is that real, or is it just the obvious read dressed up? What would have to be true for this to be wrong? Which of these would actually change what I'd advise?*

This stage is not automated and never will be. It is the point. The machine surfaces candidate ideas faster than I ever could — that's real scope of my time, no matter what word I use for it. But it has no stake in which ones are true. I do. The client is paying for my judgement about which tension matters, not the model's ability to list three of them. That division of labour — machine proposes, human disposes — is the entire philosophy of how I work, compressed into one workflow.

> The machine is fast at "here are ten things." You are paid for "here is the one that matters." Never automate the second half.

By the time I walk into the meeting, I have one clear point of view, two tensions I've decided are real, and one I've consciously discarded — and I can explain why I discarded it, which is often the most credible thing I say all meeting.

## The two steps I threw away

This workflow is on its fourth version. Two earlier steps seemed clever, demoed beautifully, and quietly made the output worse. Both are worth describing, because the mistakes are more instructive than the successes.

**Automated web scraping.** Version two had a step that automatically pulled in everything public about a company — news, social, press, the lot. It felt powerful and looked impressive. In practice it flooded the compress stage with low-quality noise: recycled marketing copy, near-duplicate press releases, SEO sludge. The tensions that came back got blander and more generic, because the model was now averaging across a pile of promotional text instead of reasoning over a few good sources. Curating the input by hand for five minutes beat automating the collection of garbage, every single time. I deleted the scraper. The lesson: in an AI workflow, input quality sets the ceiling, and automation usually lowers it.

**A "confidence score."** Version three had the model rate its own certainty on each tension, one to ten. It looked rigorous — numbers always do. It was theatre. The scores were arbitrary, ungrounded in anything measurable, and worst of all I caught myself starting to *trust* them — deferring to a 7-out-of-10 the model had essentially invented, instead of forming my own read. Anything that outsources judgement to a number that was never actually measured gets cut. That's not a quirk of this workflow; it's a rule I now apply everywhere.

Both failures share one root: the temptation in any AI workflow is to automate the thinking, because the thinking is the impressive-looking part. But the thinking is exactly what you're being paid for. Automate the gathering. Automate the compression. Then guard the judgement with your life.

## What you actually need to run this

Almost nothing, which is the point. A markdown notes app (I use Obsidian), one capable AI model, and a reusable template. No scrapers, no scoring rubrics, no fourteen-tool stack. The tools I run are linked where an affiliate program exists, and I only ever list what's genuinely in my own setup — see the disclosure below.

If you want the exact intake template and the full prompt chain from this article — the structured Obsidian note, the contrast prompt, and the provocation checklist I use in stage three — I packaged it:

**→ The Prospect Intake + Tension Brief template — $29.** Drop it into your vault and run your next prospect through it in forty minutes.

> **Disclosure:** Some links on this site are affiliate links — if you buy through them I may earn a commission, at no cost to you. I only recommend tools I actually run, and I tell you when something I tried didn't make the cut. That's the whole promise here.

That's the workflow. Forty minutes, a real point of view at the end of it, and a note in the vault that makes the next one faster. The analyst I'm describing in the title was never a person — it was half a day of my own time spent doing something that wasn't actually thinking. This is what I do with that half-day now.

---
*Next in Workflows → The meeting-notes-to-deliverable pipeline.*
