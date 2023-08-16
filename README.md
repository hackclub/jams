<p align="center"><img width="192" alt="Hack Club logo" src="https://assets.hackclub.com/flag-standalone.svg"></p>
<h1 align="center"><a href="https://jams.hackclub.com">Hack Club Jams</a></h1>

Hack Club Jams: Collaborative coding workshops where sparks ignite, fears dissolve, and inventions come to life. We're jamming away at Hack Club here!

## 🎉 Getting started

Head over to [the Jams website](https://jams.hackclub.com) to get started with your first jam!

If you ever need help, the [Hack Club Slack](https://hackclub.com/slack/) is full of welcoming teens ready to help!

## I want to make a jam!

Awesome! Or should I say, jamtastic! Before you get started, check out the [guidelines](https://docs.google.com/document/d/1apYcjpCHrA5hJZa2-g_A8ToJeOv-2zwfRV4bg7l2G_k/edit) we have for new and incoming jams - we want to make sure that all jams are amazing and can be run smoothly in clubs, and making your jam while keeping in mind these guidelines will help us make sure that happens.

Once you've read the guidelines, you can get started by forking this repository and adding your jam to the `jams` folder.

<details>
    <summary>How do I fork this repository?</summary>
<br/>
Click on the "Fork" button in the top right corner of this page and follow the prompts to create your own copy of this repo.

Afterwards, clone your copy:

```
git clone https://github.com/<your username>/jams
```

Now head to where the copy is on your computer and start making some changes!

Once you're done, you can make a pull request (PR) to this repository. To do that, run the following on your computer inside your jams folder:

```
git add .
git commit -m "<What did you do?>"
git push
```

This will send the changes you made to your repository. To send it to ours, go to your repository on GitHub and click on the button that says `Contribute` right above the code viewer. It will ask you to `Open a pull request` - go ahead and do that. It'll take you to a page that looks like this:

![PR page](https://cloud-3d1rlweqr-hack-club-bot.vercel.app/0screenshot_2023-08-16_at_15-47-10_comparing_hackclub_main...jianmin-chen_main____hackclub_workshops.png)

Fill in the title, maybe add a little description, and click that big green button that says `Create pull request`! That's it! You've made a PR!

</details>

Depending on what the jam is, it will belong in either one of two categories:

- Batches are jams that are meant to be run over multiple club meetings, such as the lovely [AI assistant jam](https://jams.hackclub.dev/batch/artificial-intelligence) or the super fun [WebOS jam](https://jams.hackclub.dev/batch/webOS). These jams belong in the `batches` folder.
- Singles are jams that are, well, meant to be run over a single club meeting, such as the useful [AI trip planner jam](https://jams.hackclub.dev/jam/ai-travel) or the [Hacker Card jam](https://jams.hackclub.dev/jam/hacker-card). These jams belong in the `singles` folder.

Instructions for the two categories are as follows:

<details>
    <summary>Creating a batch jam</summary>
<br/>
Head over to `jams/batches`, and create a new folder with the name of your jam. Inside that folder, create a `readMe` folder, and create a new file inside `readMe` called `en-US.md` (or whatever your locale is) with the following content:

```markdown
---
title: 'your title'
contributor: 'your github username'
description: 'description of your batch jam'
video: 'video (demo) of your batch jam'
thumbnail: 'thumbail image link'
keywords: 'a, lis of, keywords separated by comma space'
timeEstimate: '4 Hours'
difficulty: '(Beginner, Intermediate, Difficult)'
slug: 'a unique slug for people visiting your jam'
isBatch: True
---
```

We use this info for this page:

![Batch info](https://cloud-qitwm6rk9-hack-club-bot.vercel.app/0screenshot_2023-08-16_at_14-45-22_create_your_own_smart_ai_voice_companion.png)

Now you can start writing the parts for your jam! For every part of your jam, create a folder inside your jam folder titled `part-<part #>`. Create a file inside that folder called `en-US.md` (or whatever your locale is) and will it with the following content:

```markdown
---
title: 'your title'
description: 'a quick description!'
contributor: 'your GitHub username'
contributorSlackID: 'your Slack ID'
thumbnail: 'thumbnail image link'
timeEstimate: ''
difficulty: '(Beginner, Intermediate, Difficult)'
keywords: 'a, list, of, keywords separated by comma space'
presentation: 'link to figma slides'
presentationPlay: 'link to figma slides in presentation mode'
presentationPDF: 'link to pdf of slides'
notes: 'link to notes (optional)'
poster: 'link to poster (optional)'
video: 'link to video (optional)'
slug: 'a unique slug for people visiting your jam'
---
```

Now start writing your batch jam!

</details>

<details>
    <summary>Creating a single jam</summary>
<br/>
Head over to `jams/singles`, and create a new folder with the name of your jam. Inside that folder, create a file called `en-US.md` (or whatever your locale is) with the following content:

```markdown
---
title: 'your title'
description: 'a quick description!'
contributor: 'your GitHub username'
contributorSlackID: 'your Slack ID'
thumbnail: 'thumbnail image link'
timeEstimate: ''
difficulty: '(Beginner, Intermediate, Difficult)'
keywords: 'a, list, of, keywords separated by comma space'
presentation: 'link to figma slides'
presentationPlay: 'link to figma slides in presentation mode'
presentationPDF: 'link to pdf of slides'
notes: 'link to notes (optional)'
poster: 'link to poster (optional)'
video: 'link to video (optional)'
slug: 'a unique slug for people visiting your jam'
---
```

Now start writing your jam!

</details>

### Extra tips

- Remember: every jam at the very least needs a presentation (preferably in Figma) to go along with it!
- Save images, videos, and other assets using the `#cdn` channel on [Slack](https://hackclub.com/slack/)!
- Please make sure to check for spelling and grammar mistakes before you make a PR! That'll save all of us some headaches and hassle.

## Other ways to contribute

There are other ways to contribute besides writing a jam! We'd love some help with:

- Translating the jams!
- Helping us review jams!
- Helping us make the jams website better, especially by helping us fix [issues](https://github.com/hackclub/jams/issues)!

Feel free to start poking around the codebase and join the `#jams` channel on [Slack](https://hackclub.com/slack/)!
