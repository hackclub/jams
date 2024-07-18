---
part: part-2
title: 'Turn your blueprint into a board and order it!'
batch: 'usb-hub'
description: >
    Use a schematic to start building your own USB hub!
contributor: 'MaxWofford'
contributorSlackID: 'U0C7B14Q3'
thumbnail: 'https://cloud-d5i0seddy-hack-club-bot.vercel.app/0usb_hub_jam_part_2_thumbnail.png'
timeEstimate: '45-60 Min'
difficulty: 'Intermediate'
keywords: 'PCB, circuit, board, electrical components'
language: 'JavaScript'
presentation: "" 
presentationPlay: "" 
presentationPDF: "" 
notes: "" 
poster: ""
video: ""
totalParts: 2
---

_If you haven't built a schematic yet, do so in [part 1](/usb-hub/part-1). Just in case you can start with the [Schematic](https://cloud-1we5i4we0-hack-club-bot.vercel.app/1schematic_schematic-usb-hub-2-port-jam_2023-08-10.pdf) and the [EasyEDA source](https://cloud-1we5i4we0-hack-club-bot.vercel.app/0sch_schematic-usb-hub-2-port-jam_2023-08-10.json) we're starting with. Want to see the final result of this project? Here's a link to the final [EasyEDA Design](https://example.com)_

# Building the board!

Now that we have our schematic, let's turn it into a board!

Our starting schematic should look like this: ![](https://cloud-dtcbpm4i4-hack-club-bot.vercel.app/2screenshot_2023-08-11_at_12.52.40.png)

This is what we're going to make: ![](https://cloud-dtcbpm4i4-hack-club-bot.vercel.app/0screenshot_2023-08-11_at_13.11.34.png)

Once it's ordered, it'll look like this: ![](https://cloud-dtcbpm4i4-hack-club-bot.vercel.app/1screenshot_2023-08-11_at_13.11.20.png)

## Step 1: Convert the schematic to a board

Click "Design > Convert to PCB" in the top right corner of EasyEDA. This will open up the board editor.

![](https://cloud-6cbfcd1xm-hack-club-bot.vercel.app/0screenshot_2023-08-11_at_13.15.22.png)

Next, confirm all the settings are exactly the same as– JK! these settings don't matter, just hit "apply" and move on:

![](https://cloud-8ie7yt1k6-hack-club-bot.vercel.app/0screenshot_2023-08-11_at_13.14.34.png)

We'll be confronted with our parts laying out in the editor kinda like when we started out with the schematic. We'll need to move them around to make them fit on the board.

![](https://cloud-8ie7yt1k6-hack-club-bot.vercel.app/1screenshot_2023-08-11_at_13.14.44.png)

## Step 2: Move the parts around

We want our parts to be generally close to what they should be connected to before connecting everything all together. This will make it easier to route the traces (fancy phrase for "wire it all up") later.

We've got a handy little tool to help us figure out our positions though! Rat lines! These are the little blue lines that connect the pins of our parts together. We can use these to figure out where to put our parts.

_This is generated from our schematic, and is why we built our schematic first! If one of the blue lines ends up looking wrong it's usually because we're missing something in our schematics._

I moved the parts around a bit and ended up with this. A few things still overlap, but for the most part the lines have a clear route:

![](https://cloud-5c3t0a3re-hack-club-bot.vercel.app/0screenshot_2023-08-11_at_13.20.04.png)

_Keep in mind you might need to rotate your parts. Go ahead and do it with the "R" key. You can also rotate by degrees in the "Rotation" field on the right toolbar._

## Step 3: Route the traces (wire up the dots)

Next up comes the fun part! Let's wire up our parts. This is more of an art than a science, but I recommend a couple tips:

- Do `GND` last. It's very important, but the easiest to do.
- You don't have to finish everything in one go. It usually takes a couple passes to get everything right & you'll end up with a better design if you don't force it all in one go.
- Don't be afraid to move your parts around if you need to.

First I'll select the "Track" tool on the toolbar:

![](https://cloud-ikeoztttt-hack-club-bot.vercel.app/1screenshot_2023-08-11_at_13.26.54.png)

I'm starting with the +5V trace in this example:

![](https://cloud-ikeoztttt-hack-club-bot.vercel.app/0screenshot_2023-08-11_at_13.27.39.png)

Lastly, this wire is a little thin for us, so let's <b>embiggen</b> it. Too small and the wire might burn out, but too big and it's hard to fit all your wires. There are a whole set of tables online that you can use to figure out the right width, but I usually just go with 0.8mm for my traces at +5V.

![](https://cloud-ikeoztttt-hack-club-bot.vercel.app/2screenshot_2023-08-11_at_13.27.10.png)

![](https://cloud-2dgv2s40z-hack-club-bot.vercel.app/0screenshot_2023-08-11_at_13.31.56.png)

_Technically, you can add an extra "c" to "thicc" for every 0.4mm of width._

Take your time and route the traces you can. Here's how far I got after a couple passes:

![](https://cloud-l9gg41b78-hack-club-bot.vercel.app/0screenshot_2023-08-11_at_13.38.20.png)

Notice that the +5V traces are still ratlined. I couldn't connect them without overlapping other traces, so I've left them unrouted for now. There's also part of the `GND` line that isn't connected yet.

## Step 4: Oh, how the turn tables!

Now we need more space to route our stuff! Let's break out our superpower– the other side of the board!

![](https://cloud-559tio290-hack-club-bot.vercel.app/0ezgif.com-video-to-gif_1_.gif)

That's right- the other side of the board can have a trace too! Some boards are pancaked together and have 4, 6, even 16 layers of traces! We're not going to be that fancy with this though– we can get away with just 2 layers for this project. Good for simplicity and keeping our costs down.

Let's use this tool to route the `D-` (for some reason showing up as `U3_9` in my screenshot) pin for the USB-A male.

![](https://cloud-2421gzzt3-hack-club-bot.vercel.app/0screenshot_2023-08-11_at_13.48.30.png)

Add some traces to get the `U3_9` line as close as it can without overlapping anything.

![](https://cloud-p4gld99aq-hack-club-bot.vercel.app/0screenshot_2023-08-11_at_13.50.20.png)

Switch to the "Via" tool and click the tip of the traces to add them to the tips. A "Via" is just a fancy way to say we're poking a whole through the board to the other side that's coated in copper so the current travels through it.

![](https://cloud-loxykkofo-hack-club-bot.vercel.app/0screenshot_2023-08-11_at_13.50.39.png)

![](https://cloud-cbdjno25j-hack-club-bot.vercel.app/0screenshot_2023-08-11_at_13.51.55.png)

To switch to the other side of the board, click the "edit" icon next to "BottomLayer" on the layer toolbar. It should look like a pencil

![](https://cloud-n59r7hpq4-hack-club-bot.vercel.app/1screenshot_2023-08-11_at_13.46.16.png)

Now we can route our traces on the bottom layer. Go ahead and connect the 2 vias we just made:

![](https://cloud-8juvc3e6w-hack-club-bot.vercel.app/0screenshot_2023-08-11_at_13.56.55.png)

Nice! Now the ratline has disappeared- that means we're all done with those pins!

Try doing the rest of them on your own before continuing. Or don't... I'm just text on a website, I can't stop you from scrolling down to see the finished version.

![](https://cloud-isdsylawg-hack-club-bot.vercel.app/0screenshot_2023-08-11_at_14.00.12.png)
![](https://cloud-isdsylawg-hack-club-bot.vercel.app/1screenshot_2023-08-11_at_14.00.24.png)

_I had to add some more traces on the "TopLayer" to get all my "BackLayer" pins to connect._

## Step 5: Cut that out!

Next up we'll need to cut out our board and give it a shape! We'll use the "BoardOutline" layer to do this. Weirdly enough, we'll still be using the route tool like before.

![](https://cloud-pxqhij3q1-hack-club-bot.vercel.app/0screenshot_2023-08-11_at_14.02.31.png)

_You might already have a pink rectangle lying around from when you first imported your board from your schematic. Go ahead and delete that, we're making our own outline. A better outline!_

![](https://cloud-dmke8w78v-hack-club-bot.vercel.app/1screenshot_2023-08-11_at_14.06.12.png)


If your male USB port has a pink line in the footprint, make sure it's **outside** of the board outline. Some USB ports are "sink components," which means that they go below the board. This makes sure to give them ample room.

<img src="https://github.com/user-attachments/assets/ab60dfac-8d52-4314-9388-d7945c2770b0" width=50% height=50%><img src="https://github.com/user-attachments/assets/d746092d-cd29-41b9-9dc7-de4a335959eb" width=50% height=50%>



I made my trace look like this, but yours can look different! Just make sure that it's a closed shape and has enough padding around the edges that we don't trim of anything important. Sometimes the cutting machine will be a little off, so it's good to have a little extra space on the sides.

Also, don't forget to even out your corners!

![](https://cloud-dmke8w78v-hack-club-bot.vercel.app/0ezgif.com-video-to-gif_2_.gif)

Now that we have the borders cut out, let's see the results! Click "View > 3D View" in the top toolbar.

![](https://cloud-kcfrggbze-hack-club-bot.vercel.app/0screenshot_2023-08-11_at_14.10.51.png)

![](https://cloud-kcfrggbze-hack-club-bot.vercel.app/1screenshot_2023-08-11_at_14.11.06.png)

Done! That's it. You don't have to go home, but you can't stay here.
