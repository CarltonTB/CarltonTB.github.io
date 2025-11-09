---
title: AI Coding in 2025
date: 2025-11-09
description: My thoughts on programming with LLM-powered development tools in November of 2025.
---

The progression of AI coding tools in the past 2 years has been dramatic. I've gone from using GPT-4 in ChatGPT along with GitHub Copilot autocomplete
to using coding agents powered by Claude Sonnet 4.5 and GPT-5-Codex. The jump in usefulness between these two stages was huge, but it still feels like the early
days of this technology in late 2025. Along the way my thoughts on these tools have evolved quite a bit. 

### Skill atrophy from AI is a real danger

Initially I felt like Copilot autocomplete was a clear win, helping me through boilerplate code and saving me keystrokes. 
Over time I started to notice my typing and text manipulation skills with vim motions getting worse, which concerned me. I used Cursor as my editor for a couple of months,
and was blown away by the Cursor Tab feature, but the text manipulation skill atrophy was even worse than when I used Copilot autocomplete. 
Cursor Tab slowly started to become more of an annoyance and distraction. 
Eventually I came to the conclusion that using Neovim without any AI autocomplete gave me the best flow experience while keeping my skills sharp.
Anecdotally the increased enjoyment and flow outweighs any productivity gains from using Copilot autocomplete or Cursor Tab, because I can stay focused and work for longer
if it's easy to get into the flow. At this time I was still using AI significantly, just outside of my editor in the form of the o3 model in ChatGPT.

### Coding agents only became truly useful in Q2 2025

During my time using Cursor as my editor, I gave agent mode with Claude Sonnet 3.5 a significant trial. 
Overall it was mostly not useful for my daily work in a large, 10 year old Python and TypeScript codebase. It was able to complete some basic features that followed well established patterns in the codebase, but made frequent mistakes and had an inconsistent ability to explore and understand the codebase. My takeaway at the time was that coding agents weren't quite useful yet.

Fast forward to the general release of Claude Code along with Claude Sonnet 4 in May of 2025, and my opinion changed. That was the first time I felt like the models had crossed the threshold into being genuinely useful as coding assistants in a large codebase, albeit mostly for simple bugfixes, writing tests, prototyping, basic refactoring, and features that followed known patterns. This stage was the first time I could genuinely delegate non-trivial work to a coding agent and have a reasonable chance of it completing the task in a way that was a few revisions away from being mergeable.

Here in November of 2025, I'm using Claude Code with Sonnet 4.5 as my primary coding agent along with Neovim as my editor without any AI autocomplete. 
My philosophy is that either I should be fully driving, or an agent should be driving with me guiding and reviewing.
This setup keeps my skills sharp and lets me stay in the flow when I'm coding something an agent would struggle with, while also giving me the option to delegate tasks to an agent that it has a good chance of completing successfully without excessive handholding.

### Software engineering skills are just as important as ever

I consider myself bullish on AI coding agents, but as it stands I don't think the profession of software engineering is forever changed (yet).
The main reason being that software engineering skills are required in order to use coding agents well, so the skills are at least as important as before the advent of coding agents.
I do think it's true that the relative importance of particular software engineering skills has changed. For example, the importance of raw programming cleverness has probably gone down since we have LLMs that are on the level of top tier competitive programmers. But the importance of code review and architecture skills have likely gone up. 
Of course this change isn't necessarily true in all areas of software engineering; it's a massive profession with wild variation in the type of work engineers are doing, but I think it's true for the majority of web development work being done with popular programming languages and frameworks.

[Andrej Karpathy gave a talk](https://www.youtube.com/watch?v=LCEmiRjPEtQ) in June of 2025 that referred to this as the decade of AI agents, rather than the year of AI agents, and I largely agree. Coding agents right now feel like this super promising alpha build of a video game, but the work to go from that to a final, polished product is always deceptively large.

I think humans will be writing code for a long time, but the spectrum of the type of software that exists will be wider. Imagine a spectrum from mass-produced, lower quality, simple software to complex, advanced, high-quality artisan software. Coding agents unlock a lot more supply in the low quality to medium quality range of that spectrum. I think this is great because we'll have abundant software, and not all software needs to be the equivalent of a Michelin-star meal. But there will still be plenty of demand for software in that highest quality tier, which will require human genius, creativity, and sensibility for as long as AGI eludes us.
