---
title: 'Get a PCB Grant'
description: Let's build a business card -- but with a twist -- it can transmit a URL on tap and light up! You'll learn the basics of designing a PCB, and you can get the cards made for free, with Hack Club's OnBoard.
contributor: 'MaxWofford'
contributorSlackID: U0C7B14Q3
thumbnail: 'https://camo.githubusercontent.com/bd49fe87b1833c2856e8c9da45eb340b159be057e1f7ee317e36e08e8b775003/68747470733a2f2f636c6f75642d62336838316f3064662d6861636b2d636c75622d626f742e76657263656c2e6170702f306f6e626f6172645f6769746875622e706e67'
timeEstimate: '1 Hour'
difficulty: 'Beginner'
keywords: 'Hardware, EasyEDA, NFC, business card, OnBoard, Beta'
language: 'EasyEDA'
presentation: ''
presentationPlay: ''
presentationPDF: ''
notes: ''
poster: ''
video: ''
slug: 'onboard-grant'
---

In this jam you'll take an existing design you've made and submit it to the OnBoard repo, an open-source collection of other designs, to request your $100 manufacturing grant.

If you don't already have a design, go to [jams.hackclub.com/jam/hacker-card](https://jams.hackclub.com/jam/hacker-card) to make one!

This is a shortened version of the full [submission instructions for the grant](https://github.com/hackclub/onboard#requirements).

![](https://camo.githubusercontent.com/bd49fe87b1833c2856e8c9da45eb340b159be057e1f7ee317e36e08e8b775003/68747470733a2f2f636c6f75642d62336838316f3064662d6861636b2d636c75622d626f742e76657263656c2e6170702f306f6e626f6172645f6769746875622e706e67)

## Required Materials

- **A PCB design**: If you don't have one you can make one here: https://jams.hackclub.com/jam/hacker-card
- **A GitHub account**: If you don't have one, create one here: https://github.com/join
- **60 minutes**: It'll take a bit less time if you have experience with GitHub, but if you're new to it, it'll take a bit longer. If you don't have enough go to the time store.
- **A good time**: This one's on you~

## Star the repo (Optional)

To follow the repo for updates and show you're participating, click the "star" button on the [`hackclub/onboard`](https://github.com/hackclub/OnBoard/) repo.

![Star the OnBoard repo](https://cloud-j2h1ajlmt-hack-club-bot.vercel.app/3star-repo.png)

## 1. Join the Slack! 

Our [`#onboard`](https://hackclub.slack.com/archives/C056AMWSFKJ) channel is where the party is getting started! If you haven't already joined, make sure to add yourself to the channel. And for those who are new to the Hack Club slack, sign up to our community of 13k+ makers through [here](https://hackclub.com/slack/?event=onboard) (don't worry, there isn't an application).

Perhaps ping a little hello to `@Kevin Yang`?

## 2. Upload to JLCPCB and Take a Screenshot

Upload your Gerber files to JLCPCB.com and add them to you cart. Once completed, take a screenshot with cost included!

**Note:** Your screenshot is **VITAL** since your project cannot be approved without it. You'll include the screenshot in your PR later.

## 3. Fork!

Fork the [`onboard`](https://github.com/hackclub/OnBoard/) repo! This is the where you'll add your project files and eventually PR from!

![Fork the OnBoard repo](https://cloud-j2h1ajlmt-hack-club-bot.vercel.app/5onboard-fork.png)

## 4. Add Your Design to Your Project Repo

From your fork of `OnBoard`, create a folder with your project name under `OnBoard/projects`. To do this, go to the projects folder and click `Create new file`.

![Projects folder](https://cloud-j2h1ajlmt-hack-club-bot.vercel.app/2projects.png)

![Create new file](https://cloud-fw3ggo1g3-hack-club-bot.vercel.app/0add-file.png)

Then in the box labeled `name your file...`, type in `PROJECT_NAME/README.md`. This creates a README file under a folder called named after your project.

![Creating a folder](https://cloud-fw3ggo1g3-hack-club-bot.vercel.app/3creating-a-folder.png)

After this, copy and paste the contents of [`TEMPLATE.md`](./projects/!Template/TEMPLATE.md?plain=1) into the text editor and fill it out!

![Paste in TEMPLATE.md](https://cloud-j2h1ajlmt-hack-club-bot.vercel.app/1paste-in-template.png)

Once your done, press the big green `Commit changes` button to save!

With your README filled out, head over to add files to begin uploading your Gerber, design files, and screen shot of vendor approval.

![Upload gerber files](https://cloud-fw3ggo1g3-hack-club-bot.vercel.app/1adding-gerbers.png)

In all, you should have the following files under your project folder:
- [ ] `README.md`: A filled out [`TEMPLATE.md`](./projects/!Template/TEMPLATE.md?plain=1), renamed to `README.md`.
- [ ] `cart.png`: A screen shot of your vendor approving your board.
- [ ] `Gerbers.zip`: This should be the file that you send off to the vendor.
- [ ] Design files(`design.json`, `design.sch`, `design.brd`, etc) in `src` folder . Whatever format your designer outputs to should be included.
- [ ] `Schematic.pdf`: A pdf of your schematic, obtained from your designer.

If you have all the above, you're done with this step!

## 5. Create a PR!

Once you've uploaded your files, you can merge them to the main repo through a pull request! Under the contribute tab of your forked repo, click the big green `Open pull request`.

![Open a PR](https://cloud-j2h1ajlmt-hack-club-bot.vercel.app/0open-pr.png)

That will bring you to the main repo, where you'll initiate a pull request. All you need to do is to follow the checklist. Then, we'll review your PR, and you'll be off to the races!
![Submission checklist](https://cloud-j2h1ajlmt-hack-club-bot.vercel.app/4submission-checklist.png)


## 6. Ship it!

Post photos of your board in [`#onboard`](https://hackclub.slack.com/archives/C056AMWSFKJ)! We can't wait to see what you make!

![John sharing PCB](https://cloud-fw3ggo1g3-hack-club-bot.vercel.app/4john-sharing-pcb.png)
