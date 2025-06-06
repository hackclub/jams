---
part: "part-1"
batch: 'oscillart'
totalParts: '6'
title: 'Getting Started/Setup'
description: 'Setup GitHub Codespaces to code your web app, and install Live Server and Hackatime'
contributor: 'celesteroselli'
contributorSlackID: 'U06TV3F4HEU'
thumbnail: 'thumbnail image link'
timeEstimate: '15 min'
difficulty: '(Beginner)'
keywords: 'github, codespaces, music, art'
presentation: 'link to figma slides'
presentationPlay: 'link to figma slides in presentation mode'
presentationPDF: 'link to pdf of slides'
notes: 'link to notes (optional)'
poster: 'link to poster (optional)'
video: 'link to video (optional)'
---

## Introduction:

Welcome to Oscillart! My name’s Celeste, and I’m a 16-year old Hack Clubber from Atlanta, Georgia. I’m gonna be helping you through this Jam, which was created as a guided project for the Athena Awards.

This project allows you to combine art, music, and computer science together to create your own web app using Javascript. When you type in the notes to your favorite song, your web app will create art and play music using the sine waves that depict the frequencies of those notes! You’ll make something that looks like this below:

![Demo gif](https://hc-cdn.hel1.your-objectstorage.com/s/v3/290e71abdd7c64ea5e31b2a70ae02f5ed8027e27_demo__1_.gif)

What’s more? You’ll be able to add unique user inputs that allow you to customize your art and music every time you run it! You’re like your own technological DJ. Then, when you’ve created a song you love, you can record it straight from the web app (and upload it to the gallery on oscillart.athena.hackclub.com).

## Context

But hold on, what even are sine waves? And why are we using them to write songs? Let’s go full physics-mode for a sec (bear with me [smiley]).

![Gif of sine waves](https://hc-cdn.hel1.your-objectstorage.com/s/v3/e3a1fb0f9f3c25f0a986f0d9a6631747d1cb7b05_gif.gif)

So, you see the waves above? When sound waves travel through the air, a pure tone moves the air in the same way that this sine wave travels: air vibrating, and thus compressing. At the top of the wave, that’s when the air pressure is highest. At the bottom of the wave, that’s when the air pressure is lowest. How high/low the wave goes - that’s called the amplitude. It controls how loud or soft the sound is.

There’s way more to learn about acoustics, but all you really need to understand is that a sine wave is the mathematical depiction of a pure tone. Thus, when we tell our computer to play that pure tone, we’re telling it to activate the speakers according to a sine wave!


<Dropdown title="Pssst: wanna know more about acoustics and harmonics? Check out these sites linked below:">

1. [Encyclopedia Britannica: Harmonics](https://www.britannica.com/science/harmonic)
2. [Physics Classroom](https://www.physicsclassroom.com/class/sound/lesson-4/fundamental-frequency-and-harmonics)
3. [Fun little app to play around with waves :)](https://musiclab.chromeexperiments.com/Harmonics/)

</Dropdown>

## Jam Layout:

This jam is laid out in 6 main parts (including deployment). Each part should take about an hour to complete, meaning if you’re running this through a Hack Club, you’ll probably wanna dedicate at least 6 club meetings to this project. If you’re doing this on your own, this YSWS should take about 6 hours.

1. Using sine-wave frequencies to play sounds from our computer
2. Drawing those sine-waves on the Javascript canvas
3. Going through multiple notes and writing songs
4. Adding in user input to customize your music
5. Recording your submissions
6. Deploying the app (and earning artifacts for the Athena Award!)

Throughout this whole jam, I want to give as much help as possible while still letting you be creative! This jam expects you to have a beginner knowledge of programming itself (for example: you know what an if-statement is, you know what a loop is, etc.) but doesn’t require any knowledge of Javascript or any of the APIs we're gonna be using. In addition, a basic knowledge of music might be helpful (like knowing what the notes on the scale are) but is not required :)

If you get stuck, that’s totally fine!! Check out #athena-award, #oscillart, #code, or even dm me at @thegrammarpolice. I’d be happy to hop on a call or message with you while you figure it out. 

That said, if you have some more coding or Javascript experience, I totally encourage you to do this jam - and go above and beyond! [space orpheus]. Throughout the Jam, there will be dropdowns with extra challenges. These challenges were often inspired by you all asking questions during #oscillart calls or slack parties, so if the challenge was inspired by someone’s question or exploration, I’ll give them credit in the subtitle.

Remember, to get your submission approved, your site must do the following:
1. Play music based on user inputted notes
2. Create art based on user inputted notes
3. Allow for user input in addition to typing in notes (think… changing volume, changing color of the waves, etc.) for both music and art elements
4. Add at least one personal touch that is not in this tutorial :)

And that’s it! Let’s get started, shall we?

## Setup:

We’re going to be coding our site in GitHub Codespaces, which is completely free and completely online - so no downloading software required. To do this, you need a GitHub account. If you don’t have one yet, go to Github.com and create one! It’s super easy.

Now that you’re logged into your GitHub account, let’s create a repository. A repository is where you can store code online, so that other people can view it (and/or make changes to it if you’re collaborating on a project.)

![Github landing screen](https://hc-cdn.hel1.your-objectstorage.com/s/v3/beec85a11cf61f5b7817d0c8d7dd2a3bbb966bfa_screenshot_2025-06-06_at_11.51.12___am.png)

Click the button on the top left of your screen that says “New Repository”.

![Create repository](https://hc-cdn.hel1.your-objectstorage.com/s/v3/5a1eec76aa9e7289ec092df57a8110ddcc9129d5_screenshot_2025-06-06_at_11.51.50___am.png)

Enter a name, description, make sure it’s a public repo, click the “Add a ReadMe” checkbox (we’ll deal with that later), and you don’t need a license for now.

![New blank repository with codespace button](https://hc-cdn.hel1.your-objectstorage.com/s/v3/ce61ee5229467a67054a0891acc2439efe25fae9_screenshot_2025-06-06_at_11.52.24___am.png)

Congrats on creating your repository! Now, click the green button on the left that says “Code”, click to the left tab that pops up that says “Codespaces”, and finally hit the plus button. 

![Codespaces blank open](https://hc-cdn.hel1.your-objectstorage.com/s/v3/17a5cf57a782ddb549bb6d65d9bd4a271081387d_screenshot_2025-06-06_at_11.52.56___am.png)

Then, click on the name of your codespace. This is where you’re gonna do all your programming!

One last thing: to edit your site in real-time, before you’ve fully deployed it, we’re going to use an extension called Live Server. In Codespaces, go to the left and click the extensions button.

![Live server extension selected](https://hc-cdn.hel1.your-objectstorage.com/s/v3/0430e210f2b91644e0dd63cd9331b629ce9db3fb_screenshot_2025-06-06_at_11.53.17___am.png)

Then, search for Live Server, click on it, and hit install

Now, at the bottom right of your screen, you should see a button in your toolbar that says “Go Live”. Don’t press it yet, but when you have some code, you’ll press it to be redirected to a preview of your site!

## Athena Awards and Hackatime:

If you are doing this project for the Athena Awards, you have to set up Hackatime on your Codespaces environment, so that you can earn artifacts for each hour you spend coding. Luckily, Codespaces is identical to Visual Studio Code, so I will link the instructions for installing Hackatime for VSCode and you should be able to follow those exactly. 

Note - because Codespaces is online, after you install Hackatime and the Wakatime extension, you may have to wait a few minutes, and then refresh the Codespaces browser. When you see a clock in the bottom left corner of your toolbar, like this:

![Hackatime-ready toolbar in VSCode](https://hc-cdn.hel1.your-objectstorage.com/s/v3/717164df1373f666887ed3faefb3df68b29f73a2_screenshot_2025-06-06_at_11.48.28___am.png)

Even if the clock says 0 minutes or “start coding to get started”, then you have successfully installed Hackatime!
