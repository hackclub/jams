---
part: part-3
title: 'Switch out to USB-C!'
batch: 'usb-hub'
description: >
    Use a schematic to start building your own USB hub!
contributor: 'MaxWofford'
contributorSlackID: 'U0C7B14Q3'
thumbnail: 'TODO'
timeEstimate: '30 Min'
difficulty: 'Intermediate'
keywords: 'PCB, circuit, board, electrical components, USB'
language: ''
presentation: "" 
presentationPlay: "" 
presentationPDF: "" 
notes: "" 
poster: ""
video: ""
totalParts: 3
---

# Upgrade to USB-C

_Want to see the finished blueprint? Find it [here](https://cloud-1fgnpj7ff-hack-club-bot.vercel.app/0schematic_usb-c-hub-hugo_steps_2023-10-11.pdf)_

_If you haven't built a schematic yet, do so in [part 1](/usb-hub/part-1). This workshop will start out by modifying the existing schematic._

First off, what is USB-C? What's USB-A?

USB-A is the classic old USB port. Ever plug in a USB only to realize it's upside-down, then after flipping it it's still upside-down somehow? That's USB-A. It's what we used in the previous jam and the pinout is nice and straight forward.

![](https://cloud-as00k601x-hack-club-bot.vercel.app/1screenshot_2023-10-11_at_15.25.13.png)

USB-C is a newer type of USB that's come out since then. It's still compatible with USB-A ports, but it's reversable so it's never upside-down.

The pins on a USB-C are a little bit more complicated, but it's worth the effort to not have to flip it around.

![](https://cloud-as00k601x-hack-club-bot.vercel.app/0screenshot_2023-10-11_at_15.27.04.png)

## Out with the old, and in with the new!

The first step is to get rid of our old work! See that USB-A port from the previous jam? Get rid of it! Just move the diode and capacitor off to the side-- we'll bring them back into the picture later.

![](https://cloud-j1ycj0t6g-hack-club-bot.vercel.app/00screenshot_2023-08-08_at_18.02.06.png)

I searched LCSC for "USB-C female" and found the `MC-311D`. Let's drop it in!

![](https://cloud-7577s4x6v-hack-club-bot.vercel.app/5screenshot_2023-10-11_at_15.17.24.png)

## Double the pins!

Let's wire up D+ just like we did last time...

![](https://cloud-9465tczyz-hack-club-bot.vercel.app/0screenshot_2023-10-11_at_15.35.25.png)

But wait, what's this?! 2 D+ pins on the USB-C port?

That's how we make it reversable! One side is for when it's plugged in one way, and the other side is for when it's plugged in the other way.

## Bring back the old ports!

Let's wire up D- again and bring back the diode and capacitor we moved out of the way. If you deleted them, their part numbers are C48192 & C0603.

![](https://cloud-esdtio3o8-hack-club-bot.vercel.app/0screenshot_2023-10-11_at_15.39.04.png)

## Rewire the power

Oh, wait! Can't forget that we now have two VBUS pins that should connect to +5V.

![](https://cloud-qbby4ute4-hack-club-bot.vercel.app/0screenshot_2023-10-11_at_15.44.33.png)

This is starting to get a little messy again now that we need to wire up all these parts a second time. Let's clean it up by moving our diode and decoupling capacitor to their own area on the blueprint. Let's use a new net "VBUS" and connect it all together.

![](https://cloud-9t7lcnmna-hack-club-bot.vercel.app/0screenshot_2023-10-11_at_15.46.19.png)

## The CC pins

The CC pins are used to negotiate power delivery. The SL2.1A board we're using only handles 5V, so we want to hard-code our board to just ask for 5 Volts.

You can set that value by connecting each CC pin to a 5.1k resistor, then connecting the other end of the resistor to ground.

![](https://cloud-7577s4x6v-hack-club-bot.vercel.app/1screenshot_2023-10-11_at_15.18.38.png)

## The SBU pins

SBU stands for "sideband use". It's for cases like Aux audio or Display Port on USB-C. We're not going to use it, so we can just mark it "no connect".

![](https://cloud-po0oxbov8-hack-club-bot.vercel.app/0screenshot_2023-10-11_at_15.49.52.png)

## Finishing the schematic

Connect the GND pins to ground, then your schematic is done!

Before we move forward, here's the finished blueprint that you can check yours to:

![](https://cloud-7577s4x6v-hack-club-bot.vercel.app/0screenshot_2023-10-11_at_15.18.49.png)

## Build yo' board!

