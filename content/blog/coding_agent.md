---
title: Building a meditation app with react and an Ai-agent
date: 2026-04-24
---

---
 
## 🤖 What is Vibe Coding?
 
Vibe coding is a development method where you describe what you want to an AI, and the AI writes the code. You are the architect and director - the AI is the developer. You don't necessarily need to know all the technical details. You just need to know what you want and communicate it clearly.
 
In this case I used **Claude** from Anthropic as my AI partner. The entire project - from the first line of code to deployment - was built in a single conversation with Claude.
 
---
 
## 📋 Workflow - From Idea to Live Website
 
### Step 1: Photos of the Quiz Sheets
I photographed my quiz sheets from the meditation course and uploaded them to Claude. Claude read the questions, identified the correct answers and understood the structure straight away.
 
### Step 2: First Version
Claude built a first version of the quiz as a simple HTML page. It worked locally but had issues loading files correctly via Live Server in VS Code.
 
### Step 3: Migrating to React + Vite
We decided to build it properly with React and Vite - a modern JavaScript framework and build tool. Claude generated all the necessary files and set up the project from scratch.
 
### Step 4: Features
- 21 questions across 5 categories
- Instant feedback with jokes for each answer
- Live score tracking and progress bar
- Animations and modern UI with gradient design
- Results page with personalised feedback
### Step 5: Deployment with GitHub Actions
We set up GitHub Actions to automatically build and deploy the project to GitHub Pages every time new code is pushed to GitHub. That means I never have to think about deployment - it happens completely automatically.
 
### Step 6: Live! 🎉
After all the fixes the quiz was live on GitHub Pages - hosted for free and accessible to everyone.
 
---
 
## 🔧 Things That Needed Fixing
 
No project goes completely smoothly - and this one was no exception. Here are the problems we ran into along the way:
 
**The white page** was the biggest challenge. After deployment the page showed nothing - just white. It turned out to be three separate problems that all needed fixing.
 
First, the deployment file was in the wrong place. It needed to be in a specific folder for GitHub Actions to find it - something we had overlooked from the start.
 
Then there was a problem with the base path in the configuration. GitHub Pages requires you to specify exactly which path the website lives at - and it has to match the repo name on GitHub exactly, including uppercase and lowercase letters.
 
Finally there was a problem with how the CSS framework Tailwind was being loaded. We used a quick CDN solution that works locally but not in a proper production build. We had to install Tailwind correctly as part of the project instead.
 
**Permissions errors** in GitHub Actions meant the bot didn't have the rights to write to our repo. This was fixed by enabling "Read and write permissions" in the GitHub settings.
 
All in all these were good learning points - and the kind of mistakes you only make once. 😄
 
---
 
## 😄 My Favourite Feature: Jokes With Every Answer
 
The most fun part of the project is the feedback system. For every question you get a joke explaining why your answer is right or wrong. For example:
 
> **Question:** The goal of meditation is to be completely empty of thoughts
>
> **Wrong answer:** *"Nope! Our brains are like thinking machines - that's their job. The task is to be still around the thoughts, not to make them disappear. 🧠"*
 
> **Question:** You can only meditate properly if you sit in the lotus position
>
> **Wrong answer:** *"Oh no! You can be inwardly still anywhere - even while doing the dishes! (Although that would make for an unusually peaceful kitchen) 🧖‍♀️"*
 
---
 
## 🎓 What I Learned
 
**About meditation:** It's not about removing thoughts. It's about changing your relationship to them. You can have a whole festival of thoughts in your head and still be completely still - because stillness is an inner position, not an outer state.
 
**About vibe coding:** AI is a fantastic tool, but it's not magic. You still need to understand what you want, communicate clearly and debug when things go wrong. The white page taught me more about deployment than hours of tutorials ever would have.
 
**About building projects:** The idea is the hardest part. Once you have it, the path from idea to finished product is shorter than ever thanks to AI.
 
---
## ❌ Ai mistakes

Ai is not perfect and as you can see in this project it's not the perfect danish language it is translated to.
Perhaps it could be my prompts that could have made it better.
It's important to see that you can't 100% trust ai but its still a powerful tool to code with but you gotta have some thoughts about what you prompt it with.
I startet this project with 2 lines of prompt to see what would happen. It was awful.. it looked like someone playing with html for the first time, but after a more narrow prompt with much more details about what you want it gives you alot more.

---
 
## 🚀 Try It Yourself
 
The quiz is live and free to use:
👉 **[https://fredebas.github.io/Meditation-Quiz/](https://fredebas.github.io/Meditation-Quiz/)**
 
---
 
## A Thank You to Claude 🤖
 
This project wouldn't exist without Claude. Not because I can't code - but because vibe coding with AI makes it possible to go from idea to finished product in a fraction of the time it would normally take.
 
It's not about AI replacing developers. It's about AI giving you superpowers to build things faster, learn along the way and focus on the idea rather than the syntax.
 
> *"Vibe coding isn't the future - it's the present."*