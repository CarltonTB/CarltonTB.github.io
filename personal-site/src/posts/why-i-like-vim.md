---
title: Why I like Vim
date: 2025-08-01
description: Reflections on switching to Neovim after a year.
---

Roughly one year ago I [forked kickstart.nvim](https://github.com/CarltonTB/kickstart.nvim) and began the process of switching to Neovim 
for my software dev work. A combination of boredom, desire to be a cooler programmer, and interest in understanding why the editor has such a zealous
userbase motivated my switch. TLDR; it was worth it and I highly recommend giving Neovim a try for anyone tired of JetBrains editors and VS Code.

### Programming is more fun with Vim motions

The number one benefit of Vim is Vim motions, which are a composable set of text navigation and editing commands.
The best way to start the process of learning them is to just open your terminal and enter:
```
vimtutor
```
Most popular editors have a Vim plugin or extension that lets you use Vim motions without actually using Vim or Neovim as your editor, so that's another good way to start learning 
before you make a full editor switch.

Vim motions are awkward at first, but if you push through the pain and force yourself to use them for a couple of weeks, they will stick in your brain. 
It'll make using a mouse for text editing feel clunky in comparison.

Vim motions make programming more enjoyable for me because they add another dimension of skill. 
Implementing relatively routine features feels more rewarding with Vim because of the text editing metagame. 
Instead of just trying to figure out the right code to put in the editor, it's also about using an efficient sequence of keys to do it.

### Snappier experience

After nearly a decade of using JetBrains IDEs like Intellij and PyCharm, I barely noticed the sluggish, bloated experience. 
Switching to Neovim felt like playing a game at 144 FPS after playing a 30 FPS version of the same game. 
It's tough to go back from a super responsive experience in any type of software.

### Neovim has nice things too

Neovim doesn't have to be barebones. Getting the editor just the way you want can be a chore, but it's not too bad 
if you build on a reasonable starter configuration like [kickstart.nvim](https://github.com/nvim-lua/kickstart.nvim).
There's [LSP](https://en.wikipedia.org/wiki/Language_Server_Protocol) features like go to definition, autocomplete suggestions, and refactoring for any language that isn't obscure.
There's even a GitHub Copilot plugin for Neovim, so you don't have to go without AI autocomplete if that's your thing. 
You can get just the features you want and nothing else.

### Less mouse and trackpad usage is better for my hand

As I've gotten older, using a mouse or trackpad too much has started to make my right hand ache and feel tired.
With Neovim and tmux combined, I have a nice terminal-based, keyboard-centric workflow that saves my hand and lets me comfortably work longer.

### Conclusion

You can make a strong argument that the skill of writing and editing code is dramatically less valuable in a world with AI coding tools like Cursor and Claude Code. 
In this world, being a wizard with Vim motions can seem like an even more pointless skill. I use Claude Code every day. It's a force multiplier but it's clear that human coding isn't obsolete quite yet. In the meantime, it's worth keeping those human coding skills sharp.

I think it's worth giving Vim an honest try for any developer. Even if you don't switch for all of your dev work, it's still good to be proficient with Vim in case
you find yourself ssh'd into a Linux server needing to edit a file.
