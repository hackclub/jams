---
part: part-1
title: 'Getting familiar with designing PCBs + Make your own USB hub!'
batch: 'usb-hub'
description: >
    Get started making your very first game with the Sprig game engine! Even if you're a beginner, you'll walk out of this jam with your very own game in the Gallery.
contributor: 'recursiveforte'
thumbnail: 'https://sprig.hackclub.com/stories-tiny/sprig-front.jpeg'
timeEstimate: '45-60 Min'
difficulty: 'Beginner'
keywords: 'Sprig, Games, Game'
language: 'JavaScript'
presentation: "" 
presentationPlay: "" 
presentationPDF: "" 
notes: "" 
poster: ""
video: ""
---

_Want to just see the result?_

- (Schematic PDF link)
- (EasyEDA source file link)

## Intro

We're going to make a USB splitter. It'll have 1 USB-A on one side, and 2 USB-A ports on the other side. It can transmit power as well as data.

![](https://cloud-j8bxr01tm-hack-club-bot.vercel.app/1usb_hub_needed.png)

_If you want a USB hub, this is the tutorial for you!_

### Start a new project

Go to [EasyEDA](https://easyeda.com/editor) and create a new project (File > New > Project...). Name it `usb-hub`.

### Add the parts

For our design, we're going to need a USB-A connector that plugs into our computer. Click the `Libraries` button on the left toolbar, and search for `usb-a`.

![](https://cloud-mjv8qcmxc-hack-club-bot.vercel.app/0screenshot_2023-08-08_at_12.12.42.png)

A bunch of options will show up with options like price, stock, and mounting type. You won't understand all the options yet & that's ok! I ended up using [part number `C404965`](https://www.lcsc.com/product-detail/USB-Connectors_SHOU-HAN-AM90_C404965.html). Once you select it, click the `Place` button to add the part to our project.

![](https://cloud-b1al1d09c-hack-club-bot.vercel.app/00screenshot_2023-08-08_at_12.20.04.png)

Yeah! You did it. Now let's add the other parts we'll need!

We'll need another USB-A connector, but this time a female connector for the devices we charge / plug in. Do another search for `usb-a`, but this time I used [part number `C46407`](https://www.lcsc.com/product-detail/USB-Connectors_Jing-Extension-of-the-Electronic-Co-903-131A1011D10100_C46407.html). This time, place 2 of them on the board.

Next up we need a main board to connect everything together. There are a bunch out there, but I ended up using the CoreChips SL2.1A with part number `C192893`.

Now that we've got a great big pile of parts in our sandbox, the next step is to connect them together!

### Connect it together

We've got a whole list of parts to hook up now. Let's start with the USB-A male connector to the CoreChips SL2.1A. But what do we need to wire together?

### <i><s>Connect it together</s></i> Read the spec!

Let's find the spec for the CoreChips SL2.1A. A spec is kinda like a README for a part. Every part has one, and it's a great place to start when you're trying to figure out how to use a part.

Go to [lcsc.com](https://lcsc.com) and search for `C192893`. Click on the part and scroll down to the `Datasheet` section. Click on the link to download the datasheet.

_Just in case, [here's a link to the spec sheet for the SL2.1A](https://cloud-fa5e1sjdd-hack-club-bot.vercel.app/01811151645_corechips-sl2-1a_c192893.pdf)._

Now let's open it up and just start reading through the table of contents to find where <i>whoops</i> wait it's all in Chinese.

![](https://cloud-961a0s7fx-hack-club-bot.vercel.app/0screenshot_2023-08-08_at_19.05.22.png)

That's fine! Many specs are in other languages and guessing/translating is part of the skill! The important part is in here, the list of pins and what they do. It looks like this:

![](https://cloud-h587v4g5f-hack-club-bot.vercel.app/0screenshot_2023-08-08_at_12.37.30.png)

Printed Circuit Board (PCB) part-makers really like to use acronymns, which are the same in every language! We can use the acronymns to figure out what the pins do. Here's a list of the ones we'll need:

- VDD5: 5V power (also called VCC or VBUS)
- GND: ground
- DP: data positive (also called D+)
- DM: data negative (also called D-)

Great, now we know what we need to do on the chip side, let's find the spec for the USB-A!

The part I chose also had a spec in chinese, but it's a common part so I found [this by googling "USB-A pinout spec"](https://components101.com/connectors/usb-type-a-male-connector). It's a bit different than our pin numbers, but the names are the same. The only difference is that our USB connectors want a grounded shield, so that means we'll connect ports 5 & 6 to `GND`.

### Connect it together, for real this time!

Move the parts around so they're facing eachother (you can rotate them with the `R` key), the go ahead and connect `GND` on the usb to `GND` on the chip.

![](https://cloud-ntdzh89kj-hack-club-bot.vercel.app/0screenshot_2023-08-08_at_12.48.41.png)

Now you can connect `VCC` on the usb to `VDD5` on the chip. They aren't labelled the same thing, but `VCC` just means a voltage source, and USB-A is a 5V source.

Next up, connect `D+` on the usb to `DP` on the chip, and `D-` on the usb to `DM` on the chip.

![](https://cloud-72qwemi78-hack-club-bot.vercel.app/0screenshot_2023-08-08_at_12.54.13.png)

Hmmmm, this is looking a little like a bowl of spaghetti. Let's clean it up with nets!

![](https://cloud-j8bxr01tm-hack-club-bot.vercel.app/2spaghetti.png)

#### Nets

Nets are a way to group together wires that are connected to eachother. They're a great way to make your schematic look cleaner and easier to read. Go ahead and remove the VCC & GND lines, then choose the GND net from the toolbar on the right.

![](https://cloud-m5x117vsl-hack-club-bot.vercel.app/0screenshot_2023-08-08_at_12.56.40.png)

Connect the GND net to the GND pins on the USB-A and the CoreChips SL2.1A. See how clean that new wiring is?

![](https://cloud-7pzslk6qe-hack-club-bot.vercel.app/0screenshot_2023-08-08_at_13.04.24.png)

Nets are kinda like portals– you can connect them from a distance as a way to keep from crossing your wires on your schematic. They're also good or connecting lots of things together– we're going to need to wire a lot of things to `GND` in a sec, and nets are a great way to do that.

Keep in mind though with nets, there are a lot of ways to write things. All the following are a way to say PIN 4 and PIN 5 are connected to `GND`:

![](https://cloud-4w251mwos-hack-club-bot.vercel.app/0screenshot_2023-08-08_at_15.13.08.png)
![](https://cloud-4w251mwos-hack-club-bot.vercel.app/1screenshot_2023-08-08_at_15.13.16.png)
![](https://cloud-4w251mwos-hack-club-bot.vercel.app/2screenshot_2023-08-08_at_15.13.30.png)

To prevent mistakes, try to keep your nets looking like mine for this tutorial, but in general everyone has their own style and that's ok.

![](https://cloud-j8bxr01tm-hack-club-bot.vercel.app/0gnd_nets.png)

### Add the female USBs

Next up let's connect the other USB-A connectors!

I'll position my USB-A female ports and hook them up to the main chip's `DP` and `DM` pins. `DP1` goes to USB-1's `D+`. After getting the data lines wired, we'll connect the power using nets!

![](https://cloud-6cwv1d324-hack-club-bot.vercel.app/0screenshot_2023-08-08_at_15.16.16.png)

_Remember, with nets you can connect from a distance!_

### Power surges

The design is almost complete, and in a perfect world it would work just fine. But we aren't in a perfect world- we live in a world with static electricty and power surges. We'll need to now protect our circuit. If we don't, we could fry our hub or even our computer's USB port!

Knowing where these protective components go can be an art and hotly debated on many stackoverflow forms. Fortunately, the spec sheets we're using contain some example circuits for us to use. Let's take a look at the CoreChips SL2.1A spec sheet again:

![](https://cloud-a1u1u3jnb-hack-club-bot.vercel.app/0screenshot_2023-08-08_at_17.32.45.png)

_This is a little hard to see, so we'll go through it step by step. For now, just know we're getting the following instructions from reading this image & adapting it a little for our own design._

First up we'll add a diode to protect from a surge coming _from the laptop_. That's a case where the laptop sends too much power and goes beyond the 5V we want. The Schottky (pronounced "shot-key") diode with part number `C48192` is perfect or this. Let's drop it in right after we take on the 5V power from the USB-A male.

_Diodes can also ensure power flows in 1 direction, but we aren't using it for that property right now- we just want it to slightly resist the flow of electricity. If you google around for diodes, keep in mind most people are using it for a different reason than we are!_

Now let's protect from power surges that make it past the diode. We'll use a capacitor for this– it's kinda like a resevior for power. It can store up power and then release it when it's needed. If there's a power fluctuation, this capacitor will let the extra power blead out to `GND` harmlessly. We'll use a 10uF capacitor with part number `C19702`. Let's drop it in right after the diode, and connect it to `GND`.

![](https://cloud-e0ekzo8gw-hack-club-bot.vercel.app/0screenshot_2023-08-08_at_17.37.55.png)

_When using a capacitor to prevent overflows like this it's called a "decoupling capacitor"._

Go ahead and use the same capacitors to protect the other USB-A ports. You can copy & paste the components, and then move them into place.

![](https://cloud-lr6vmvrrj-hack-club-bot.vercel.app/0screenshot_2023-08-08_at_17.44.21.png)

### Unused ports

The SL2.1A chip we're using supports up to 4 USB ports, but we're making a smaller board for the tutorial so we won't be using the ports for "3" or "4". Go ahead and use the "no connection" tool to show in the schematic that these pins aren't being used.

![](https://cloud-4sab6gwqz-hack-club-bot.vercel.app/0screenshot_2023-08-08_at_17.51.45.png)

All finished should have pins connected to some label or wire, even if it's just a "no connection" symbol. Your PCB will error if you try to send it to the manufacturer with any pins unlabeled.

![](https://cloud-me27qfpwb-hack-club-bot.vercel.app/0screenshot_2023-08-08_at_17.51.54.png)

Next up are pins `VDD33` and `VDD18`. Sometimes components will have these to provide lower voltages for their internal circuitry. We don't need to worry about them for this design, so we'll just harmlessly bleed off the power to `GND` using a 10uF capacitor.

![](https://cloud-p9cf2w5jg-hack-club-bot.vercel.app/0screenshot_2023-08-08_at_17.58.13.png)

Lastly, our chip provides clock circuitry through `XIN` and `XOUT` for advanced use if we wanted to overclock our USB ports. We aren't trying to do that, so we'll opt-out of it by connecting `XIN` to `GND` and marking `XOUT` as disconnected.

![](https://cloud-np517gxwl-hack-club-bot.vercel.app/0screenshot_2023-08-08_at_18.02.06.png)

Now, let's check if all the pins are connected. Try converting the schematic to a PCB. If you see a warning pop up that means a net is missing or not connected. ![](https://cloud-dmskkj3bl-hack-club-bot.vercel.app/0screenshot_2023-08-08_at_18.36.08.png)

If all the schematic is connected you've done it!

![](https://cloud-4dr6xa7qz-hack-club-bot.vercel.app/0yay.gif)

Now let's move into the PCB editor to make our board.
