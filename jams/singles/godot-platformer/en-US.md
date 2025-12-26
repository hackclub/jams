---
title: 'Build a Godot Platformer Game (Jumpstart)'
description: 'Create a platformer game using Godot, beginner-friendly'
contributor: 'themagicfrog'
contributorSlackID: 'U06UYA4AH6F'
thumbnail: 'https://hc-cdn.hel1.your-objectstorage.com/s/v3/c1d182e6d55d6d472b94f9e29c54eb572e2fa99e_screenshot_2025-08-14_at_9.16.19___pm.png'
timeEstimate: '100 min'
difficulty: 'Beginner'
keywords: 'game dev, platformer, godot, beginner, easy, jumpstart'
presentation: 'https://www.figma.com/slides/j0xld5JL1PLVmndZPV6YSi/Godot-Platformer-Guide--Jumpstart-?node-id=1-42&t=ltJEo7jXg8uKAkPk-0'
presentationPlay: 'https://www.figma.com/deck/j0xld5JL1PLVmndZPV6YSi/Godot-Platformer-Guide--Jumpstart-?node-id=1-42&t=IsgUoTHva6dshmSd-1'
presentationPDF: 'https://drive.google.com/file/d/1bbt2VDOZMVd7H8hwsGAknGL2x7eW59PF/view?usp=sharing'
notes: 'link to notes (optional)'
poster: 'link to poster (optional)'
video: 'https://www.youtube.com/watch?v=6V6sAGBowL0'
slug: 'godot-platformer'
---

# Build a Godot Platformer Game

Welcome to [Jumpstart](https://jumpstart.hackclub.com/), a Hack Club game dev program! I'm Estella Gu, a 15-year old Hack Clubber from Massachusetts. Last year, I spent 100 hours building my first game, a space platformer called [Signal Lost](https://themagicfrog.itch.io/signal-lost). I'll be guiding you today through building a 2D game with a character that can run and jump around. 

You will use [Godot](https://godotengine.org/), a game engine that is super easy to learn. By the end (about 100 mins), you will have an AWESOME, UNIQUE game to share to your friends! You'll also know the basics of using [Github](https://github.com/) (a code-storing platform), and [Itch](https://itch.io/) (a website to share and play games). If you have any questions or problems, email estella@hackclub.com or ask your club leader.

## Overview of Steps
- Setup Godot
- Make a Github repo
- Build a basic platformer
- Customize your game
- Publish on Itch.io
- Submit your game

## Setup Godot
[Godot](https://godotengine.org/) is a free, open source game engine. Game engines are used to make games easily. Go to [godotengine.org](https://godotengine.org/) to install it. If you cannot install it, you can also use the web editor at [editor.godotengine.org](https://editor.godotengine.org/releases/latest/).

Open Godot, click Create New Project, name your game, select Mobile render, for Project Path select a Game folder, and click Create.

![godotsetup](https://hc-cdn.hel1.your-objectstorage.com/s/v3/925019504d2a7211_jumpstart_guide.gif)

## Make a Github Repo
[Github](https://github.com/) is a website that many developers use to store the different versions of their code and collaborate with others. Go to github.com and make an account. Create a new repository, name it, make it public, choose no README, no license, and no .gitignore.

Open the terminal on your computer and cd into your Godot game folder. Run git init. Run git branch -M main. Copy your repo's web URL from Github, then ren git remote add origin <your-link> . Run git add . Run git commit -m "initialize". Run git push -u origin main.

## Important Commands
### Godot
Save your project often using cmd/ctrl+s.

Play your game with cmd/ctrl+b.

### Github
To update your repository:
   git add .
   git commit -m “things-added”
   git push

“Things-added” is your commit message. It should be descriptive. Update often.



