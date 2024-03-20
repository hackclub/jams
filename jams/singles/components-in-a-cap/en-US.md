---
title: 'Make Your Own Electronic Trash Out Of A Magical Hat'
description: Let's build a hacky electronics gizmo -- but with a twist -- you can only use three components that you draw out of a cap! You'll learn the basics of designing a PCB, and you can get the cards made for free, with Hack Club's OnBoard.
contributor: 'maxwofford'
contributorSlackID: U0C7B14Q3
thumbnail: 'https://cloud-f9qeb5d02-hack-club-bot.vercel.app/00componentsinhat__1_.png'
timeEstimate: '1 Hour'
difficulty: 'Beginner'
keywords: 'Hardware, PCB, EasyEDA, Business Card, OnBoard'
language: 'EasyEDA'
presentation: 'https://www.figma.com/file/5kXADOfqHzoV6kaA9xNl1T/components-jam?type=design&node-id=154%3A341&mode=design&t=pHzt7QifMykaDnCB-1'
presentationPlay: 'https://www.figma.com/proto/5kXADOfqHzoV6kaA9xNl1T/components-jam?page-id=154%3A341&type=design&node-id=154-343&viewport=-11%2C1340%2C0.07&t=2LfA5bNVMXiFqIyP-1&scaling=contain&mode=design'
presentationPDF: 'https://cloud-ilc21h8ot-hack-club-bot.vercel.app/0components-jam.pdf'
notes: ''
poster: 'https://github.com/hackclub/posters#:~:text=%40Krishna%20Bansal-,Download,-Go%20to%20Figma'
video: 'https://www.youtube.com/embed/bumzyz2advg?si=oLItGZB1qI2EQN1m'
slug: 'components-in-a-cap'
---

## Intro

> Appreciate the ends without understanding the means.

In this jam, you'll design a small trinket. Don't know what it is yet, but discovering it will be part of the activity.

Instead of "Learn to make a hacker card" or "Learn to make a digital level", we're going to make something perfectly useless!

## Random part picker!

You're going to go to this [magical part picker site](https://component-hat-site.hackclub.dev/), 

1. **First roll the dice** get a random input, output, and power source.
2. **Come up with an idea** that combines the components into a fun useless gadget.
3. **Draw some art** to put on your board

Here's an example of what you might end up with (EXCEPT YOU'RE NOT GOING TO HAVE THIS SAME IDEA & THE SAME COMPONENTS):

Combine a **Light Sensor**, **Rumble Motor**, and **Battery** to make a rattle snake that rumbles whenever you put it in the light.

![rattleSnake](https://cloud-62nxyioni-hack-club-bot.vercel.app/0drawing__7_.png)

No one has ever sat down to learn web dev & made the next facebook. Similarly, if you sit down thinking "I'm going to make something as helpful as an iPhone", you're destined for failure...

But sit down to make some trash, and you'll end up with this treasure:

![board color](https://cloud-plhykfmfn-hack-club-bot.vercel.app/0screenshot_2024-03-13_at_3.23.48_pm.png)

## Get In Your Workspace

Now it's the time to open up good ol' [easyeda](https://easyeda.com/)

Step 1: create an account or login with google (tapping Register in the top right corner)
![loginWithGoogle](https://cloud-8c6bzxhxx-hack-club-bot.vercel.app/0registereda.gif)

Step 2: Tap on Easy EDA Designer Open the "STD" (student) edition of EasyEDA
![STDEdition](https://cloud-8lt1ycvzx-hack-club-bot.vercel.app/0easyeda_designer.gif)

Step 3: Start A New Project
![NewProject](https://cloud-3oval3xig-hack-club-bot.vercel.app/0newproject.gif)

## Add In Your Components

Add your components to the schematic zone (the non-creative zone).

You can do this by pulling up [this component library](https://hackclub.github.io/OnBoard/site/index.html) we made and then selecting the components you drew out of the hat. 

Once you select a component
1. Get the part number from the markdown 
2. Open up EasyEDA Library (on the side bar)
3. Search for your component (tap search icon)
4. Select your component and place it anywhere on your schematic

![Light Sensor](https://cloud-lvwqcxzv9-hack-club-bot.vercel.app/0getcomponentid.gif)

Repeat this step for all 3 of your components

![your components](https://cloud-ecs518tqh-hack-club-bot.vercel.app/0screenshot_2024-03-13_at_2.48.02_pm.png)

## Wire the components up

Look at the documentation for each component in the [component library](https://hackclub.github.io/OnBoard/site/index.html), and see how it is wired up. Follow the documentation examples to wire up your input, output, and power source.

Use R to rotate your elements and drag them around. Remember this is the NO CREATIVITY ZONE because your design will be totally moved around when you convert it to a PCB. 

![wired up](https://cloud-gsil8fuxg-hack-club-bot.vercel.app/0screenshot_2024-03-13_at_2.48.14_pm.png)


## Convert to PCB

Save your design (control S or CMD S)

Tap Convert To PCB under Design -> "Convert To PCB"
![conver to schematic](https://cloud-g1kkox8xj-hack-club-bot.vercel.app/0converttoschematic.gif)

Rotate your components to minimize the rat lines (these subtle blue lines) crossing over each other. It's okay if it happens sometimes, but minimize the amount of times. 

![noRatsCrossing](https://cloud-3ts8mn0bw-hack-club-bot.vercel.app/0screenshot_2024-03-13_at_2.57.23_pm.png)

Then use the Track Tool (W) to begin connecting the rat lines

![connectRats](https://cloud-q6a3ktc2y-hack-club-bot.vercel.app/0connectrats.gif)

## Getting Artistic 

Now, throw your art into the schematic! This will be on a silk layer, so it will not impact your wiring.

![Make First Pcb](https://cloud-l9r67m3n3-hack-club-bot.vercel.app/0add_in_the_art.gif)

You now need to make you art into a silk layer

![makeYellow](https://cloud-pihem7ix9-hack-club-bot.vercel.app/0silklayer.gif)

Next, move your components to make them fit your design.

![movedAround](https://cloud-d4z0ripa1-hack-club-bot.vercel.app/0screenshot_2024-03-13_at_3.18.18_pm.png)

It's time to cut out your board! 

![cut out](https://cloud-7kaunz432-hack-club-bot.vercel.app/0outline.gif)

Now you may have some loose wires or some rat lines that are not connected yet. Connect all of your loose wires to components and fix any of the yellow xs (that means your lines are crossing in a way that will cause a problem)

![Here is a snake](https://cloud-8uy971i40-hack-club-bot.vercel.app/0screenshot_2024-03-13_at_3.45.18_pm.png)

Boom... now you have a PCB!

![board color](https://cloud-plhykfmfn-hack-club-bot.vercel.app/0screenshot_2024-03-13_at_3.23.48_pm.png)

You should now go & order this board! 

## Ready to buy?

You can get your board made for free with Hack Club's OnBoard project.

Check out the steps for getting your board for free [here](https://onboard.hackclub.com/).