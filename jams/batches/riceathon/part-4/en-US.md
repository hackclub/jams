---
part: part-4
title: 'Create PR & Submit'
batch: 'riceathon'
description: >
    Upload dotfiles to git & submit a PR to the repo
contributor: 'neongamerbot'
contributorSlackId: 'U07L45W79E1'
thumbnail: 'https://static-00.iconduck.com/assets.00/linux-mint-icon-512x459-nza5jg09.png'
timeEstimate: '15 mins'
difficulty: 'Beginner'
keywords: 'linux, mint, github, wakatime'
notes: "" 
video: ""
totalParts: 4
---

Now that we have our dotfiles setup we can now upload them to git and submit a PR to the repo.

## Creating a repo
First create a README.md file in the dotfiles directory and make sure you make this look nice such as adding a description and a thumbnail.
![img](https://cloud-6gjzga3gp-hack-club-bot.vercel.app/0image.png)

Then we want to create a repo on github to store our dotfiles.
```bash
git init
git add .
git commit -m "feat(tree-wide): init"
```
Then using vscodes git tools we can upload it to github!.

## Submitting a PR
1. Fork the [repo](https://github.com/OtterCodes101/riceathon)
2. Create a new branch called `rice/<ur-username>`
3. add your self to members.json arry in the format of:
```json
{
    "name": "<username>",
    "os": "linuxmint",
    "git": "<your git repo here>"
}   
```
4. Submit a PR to the main branch of the repo.
5. Wait for it to be merged and then you are done!

## Conclusion

You have now completed the ricethon batch! You can now rice your desktop to your hearts content and earn some prizes! If you have any questions feel free to ask in the [slack channel](https://app.slack.com/client/T0266FRGM/C07MLF9A8H5)! 
Dotfiles i used can be found [here](https://github.com/NeonGamerBot-QK/example-linuxmint-dotfiles)