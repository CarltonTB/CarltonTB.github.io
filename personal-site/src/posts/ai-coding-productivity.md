---
title: Coding Agents and Productivity
date: 2026-03-24
description: Musings on the difficulty of measuring the effects of AI coding agents on productivity in software engineering.
---

Measuring the productivity of a software engineer or software engineering team is infamously difficult. Much ink has been spilled debating the topic.
These days the debate has morphed into an argument about how coding agents and other LLM-powered dev tools are affecting the productivity of software engineers.
At first blush it seems like an absurd thing to argue over, because if we don't know how to measure productivity in software engineering, then how could we possibly determine 
what the effects of a particular tool are on productivity? Still, it's a critically important question and it's worth discussing even if quantitative measurement is intractable.

AI has tempted people to revert back to crude proxies for productivity like lines of code and pull requests merged. 
These types of measures are exactly what AI companies would prefer to be used, because they capture precisely what LLMs are best at: generating stuff.
However, before LLMs, the consensus in our industry was that lines of code, tickets closed, and PRs merged were terrible measures of productivity, and they create poor incentives
for engineers (especially if these measures [become a target](https://en.wikipedia.org/wiki/Goodhart%27s_law)).

### Where could the productivity boost come from?
There are lots of hypotheses you might have about how AI tools increase productivity. These are the main ones that come to mind for me:

*LLMs expand the set of things that can be automated with software*

This seems obviously true, but it's important to note that being automated with an LLM is not exactly the same as being automated with good old fashioned deterministic software.
How low does the error rate have to be before something is considered automated? If the error rate is high enough, then human review is still required, which destroys most 
of the theoretical productivity boost.

*Coding agents can complete some tasks faster and better than the human programmer that would have done them pre-LLMs*

This seems true, especially for well-specified tasks in popular programming languages. There are definitely productivity gains to be had on drudgery and toil as well.

*Coding agents introduce a low cost supply of software engineering labor*

This is partially true right now, but coding agents cannot automate software engineering end-to-end, and the cost may rise in the future when tokens are no longer being subsidized.

With Opus 4.6-class LLMs, I think it looks more like a moderate productivity increase from improved developer tooling rather than a full phase shift in how software is made.
Continued advances in LLMs or AI generally could change that, but still it's hard to get around the bottleneck of deciding what is useful to build, specifying it in detail, and validating that the software actually solves the problem.

