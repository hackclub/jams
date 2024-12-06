---
title: Making 3D Worlds in HTML
description: 
contributor: shubhampatilsd
thumbnail: 'https://cloud-mh2cnr5di-hack-club-bot.vercel.app/0slide_16_9_-_1thumbnail.png'
timeEstimate: 90 Min
difficulty: Beginner
keywords: 3D, Web, VR
language: HTML, CSS, JavaScript
presentation: "https://www.figma.com/design/mxwZ1xrkPSWKDvU3VTX9Au/Hackaccino-Slides?node-id=1-2&t=VJbkLd4RrosLFv3R-1"
presentationPlay: 'https://www.figma.com/proto/mxwZ1xrkPSWKDvU3VTX9Au/Hackaccino-Slides?page-id=0%3A1&node-id=1-2&viewport=-7853%2C490%2C0.74&t=V1iwVSMKcxtlBxPL-1&scaling=contain&content-scaling=fixed'
presentationPDF: 'https://cloud-snbrt3xlv-hack-club-bot.vercel.app/0hackaccino_slides.pdf'
notes: 
poster: ""
video: ""
contributorSlackID: U029D5FG8EN
slug: 3d-website
---

Hey there 👋

If you've ever wanted to make your own immersive and expansive 3D worlds, you've come to the right spot. Imagine big forests, huge deserts, all the things in your imagination coming to life.

**Outline:**
1. Setting up Replit
2. What's A-Frame?
3. Adding A-Frame
4. Creating a scene
5. Adding elements
6. Attributes
7. Customization
8. Deploying your site
9. Getting a free Frappuccino
10. Wrapping up
## Setting up Replit 
Go to [https://replit.com](https://replit.com) and create/log into an account:
![Replit authentication page](https://cloud-99ig98peo-hack-club-bot.vercel.app/0image.png)

Then, go ahead and create a project by going to "Create Repl" on the sidebar > selecting HTML, CSS, JS > giving it a title > hitting "Create Repl"

![Creating HTML CSS JS Repl](https://cloud-p82fpfgs2-hack-club-bot.vercel.app/0outputgif.gif)

## What's A-Frame?

![aframe logo](https://cloud-m5c3nxgbo-hack-club-bot.vercel.app/0image.png)

Building 3D worlds used to be pretty hard to approach due to its high learning curve. A-Frame is a library to help make this stuff MUCH easier. Instead of getting lost in the weeds, it provides a simple interface for you to create 3D websites.

Here are some of the amazing things people have made with A-Frame:
1. [A-Blast](https://aframe.io/a-blast/)
![a-blast ui](https://cloud-3j84pfit2-hack-club-bot.vercel.app/0image.png)
2. [Access Mars](https://accessmars.withgoogle.com/)
![access mars preview](https://cloud-grr8upimy-hack-club-bot.vercel.app/0image.png)
3. [Moonrider](https://moonrider.xyz/)
![moonrider ui](https://cloud-rcqx7la5t-hack-club-bot.vercel.app/0image.png)

## Adding A-Frame

Hey, do you notice the `<head>` tag in our HTML? Yeah, we can add a script via the  `<script>` tag to give our website A-Frame's superpowers! Put this within the `<head>`

```js
<script src="https://aframe.io/releases/1.6.0/aframe.min.js"></script>
```
![instructions of putting script within head tag](https://cloud-byterps5u-hack-club-bot.vercel.app/0image.png)

## Creating a scene

To actually use A-Frame, we need to create a scene to add elements. We can do so with the `<a-scene>` tag

Remove the "Hello world" text within the `<body>` tags and add:

```html
<a-scene>
</a-scene>
```

All of our elements will go here. What are these elements you might ask?
## Adding elements

A-Frame has different tags for different 3D elements. For example, you can use `<a-box>` to create a cube, and `<a-sphere>` to create a ball.

Here are all the different kinds of elements (use `<a-[ELEMENT-NAME]>` to use these):
![showcase of all a-frame tags](https://cloud-69ehuc8ev-hack-club-bot.vercel.app/0image.png)

![visual map of entities in a scene](https://cloud-mgilf4sx7-hack-club-bot.vercel.app/0image.png)

Within your `<a-scene>`, add a box:

```html
<a-scene>
	<a-box></a-box>
</a-scene>
```

Click on the panel on the right and use your WASD keys + mouse to move around. You should see a box after you move around (click the run button at the top of the page if nothing shows up):
![demo of white box ](https://cloud-klvbtj50y-hack-club-bot.vercel.app/0screen_recording_june_17.gif)

Hmm, we should probably have some color. After all, things are much better with colors!

To do this you can add the `color` attribute to `<a-box>`! For example, you can do `<a-box color="blue"></a-box>` to get a blue cube.

Choose any color you want, you can put a [CSS color keyword](https://www.w3.org/wiki/CSS/Properties/color/keywords) or a hex code (like `#000`) as a color. 

## Attributes

There are lots of attributes (A-Frame calls them components) that you can add to your objects. For example, there is the `position` attribute that allows you to put your object in a certain position in space (e.g. `position="1 0 3"` correlates to the x, y, and z positions respectively).

Experiment with these attributes (Google for more!) and build something amazing.

Some example props you can play around with are:
1. `animation`: animates the objects (you can use these to move your object)
2. `rotation`: rotate your object, allows for fun designs

## Customization

While you probably just have a cube right now, you can add so much more!

Want to add physics? There's [a library](https://github.com/c-frame/aframe-physics-system/blob/master/CannonDriver.md#installation) for that. Want to create a cool environment? Check out [this](https://github.com/supermedium/aframe-environment-component) environment component!

The possibilities are truly endless with A-Frame, and it's super easy to share your site as well!

## Deploying your site

It's really simple to deploy your site. Go to https://netlify.app and create an account.

After doing so, go to Replit and download your files as a `.zip` file. You can do this by clicking the three dots above all your files and clicking "Download as ZIP":

![image of ui to download as zip](https://cloud-ecgsox4ue-hack-club-bot.vercel.app/0image.png)

After this, go to https://app.netlify.com/drop and drag and drop your `.zip` file there.

After it uploads, click "Open production deploy" to see your live site!

![image of opening deploy](https://cloud-bpr687t0e-hack-club-bot.vercel.app/0image.png)

## Getting a free frappuccino

You've put so much effort into getting your site up and running—we think you deserve a little treat after all that. Head over to https://github.com/hackclub/hackaccino, submit your pull request for review, and get a free Frappuccino!

<!-- If you don't know how to make a pull request, don't worry! Here's a video on how you can create your pull request and submit it. -->

![frap spinning gif](https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3B3M2xkM3FyczZhY2lrdzkxd3dycHA5Mzc0MW1laHF6Nzh1MGNhZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2FazplK2PyGh3Rjby/giphy.webp)

## Wrapping up
Awesome work on this site! To wrap up, we suggest sharing your site in our [Slack](https://hackclub.com/slack), it's where a bunch of cool teen coders are shipping projects daily and having fun with projects like these! Head over to the `#ship` channel and post about your project!

Here's some cool stuff that Hack Clubbers have made:

1. [Adrian De Gendt](https://github.com/Space1415/) made an amazing [solar system model](https://subsequent-thoughtful-tarantula.glitch.me/) 
![solar system example from adrian de gendt](https://cloud-1e2jtrqm9-hack-club-bot.vercel.app/0image.png)

2. [Aayan Rahman](https://github.com/aayanrahman/) made [Bloxy](https://aayanrahman.github.io/HackaccinoGrant.github.io/), a block-game demo inspired by Minecraft 
![bloxy demo](https://cloud-c2fzf76vl-hack-club-bot.vercel.app/0image.png)

3. [Dieter Schoening](https://github.com/Deetschoe) made [Aurality](https://aurality.vercel.app/), a webapp that displays your Spotify top songs in 3D!
![aurality demo](https://cloud-a5dhhs37l-hack-club-bot.vercel.app/0image.png)

So there you have it, go out and create great things with the tools and skills you have.

— Shubham Patil
