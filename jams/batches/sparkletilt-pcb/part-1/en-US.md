---
title: 'Microcontroller Circuit Design'
description: 'Design an Arduino Nano-compatible microcontroller board in KiCAD'
contributor: 'karmanyaahm'
contributorSlackID: 'U04CNFV0T4M'
thumbnail: 'https://cloud-k9knyyk0j-hack-club-bot.vercel.app/00thumb.jpg'
timeEstimate: '1 hour' # ???
difficulty: 'Intermediate'
keywords: 'PCB, KiCAD, electronics, schematic, Atmel, ATMega328P, Arduino, microcontroller, circuit'
# TODO? I don't have the time to make these ATM. I'd love if someone else could
presentation: ''
presentationPlay: ''
presentationPDF: ''
notes: ''
poster: ''
video: ''
totalParts: 4
part: part-1
batch: sparkletilt-pcb
---

Let's design an Arduino Nano-compatible microcontroller board using KiCAD!

If you follow through these 4 jams, your finished SparkleTilt will look something like this - but with your very own design customizations!

![](https://cloud-izep2lpej-hack-club-bot.vercel.app/031picture.jpg)


<details>

<summary>Video Demo</summary>

<iframe width="560" height="315" rel="0" src="https://www.youtube-nocookie.com/embed/px2V8bZMeLI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</details>

## Prerequisites

If you are not already familiar with the basics of using an ECAD tool like EasyEDA or KiCAD, check out another jam like [the PCB Hacker card](../../../jam/hacker-card). The rest of this workshop will assume you know how to draw a schematic from pictures.

{/* Ideally a better version of this video will be made by a Hack Clubber, but this is the best basic video we have now */}
[This YouTube video](https://www.youtube.com/watch?v=EPH23zhPg50) demonstrates the basics of navigating around KiCAD.

In addition, the rest of the workshop assumes you know basic electronics terms like:
1. Resistor: A resistor limits the electric current that flows through a circuit. Resistance is the restriction of current.
2. Capacitor: A capacitor stores charge, and thus energy. It's like a tiny battery that charges and discharges very quickly.
3. Diode: A diode only allows current to flow in one direction. It also drops a little bit of voltage, turning that energy into heat.
2. Microcontroller: A microcontroller (aka MCU) is a system on a chip that contains an integrated processor, memory, and input/output peripherals, which are used to interact with other electronic components.

## Part Selection

Step 0 of designing a board is to clearly define what problem you need the board to solve. Here, we are making a nice looking level. The primary goal is to demonstrate electronics and PCB concepts. A secondary goal is to have an attractive and fun level.

Step 1 of designing a board is selecting your core components:

1. Microcontroller: ATmega328P. The ATmega series is the most robust and common 8-bit MCUs, being used in many Arduinos since the beginning. Additionally, it requires very few external components and runs over a wide range of voltages (1.8V-5.5V). It's also one of the very few microcontrollers that is a *Basic Part* on JLCPCB. And, it's available in a QFP package so it can be hand-soldered. It doesn't have many fancy features, but it's simple and robust.

2. USB-Serial Interface: CH340N. Because the ATmega328P doesn't have a built-in USB interface, we need a USB-UART IC. The CH340C worked well for @Hugo[^1], and it's very cheap, so I'm using the CH340N. The CH340N is the cheapest IC from the CH340 series that has an integrated clock, meaning fewer components are needed.

3. Pinout: While not technically a component, we will follow the standard Arduino Nano pinout. This really doesn't matter— unless you value your future self's sanity when trying to wire up new components.

Now on to the actual circuit.
Make sure you have KiCAD downloaded, then set up a new project, and open the schematic editor.

## Core (Microcontroller)

First, we place the heart of our system, the ATmega328P-AU, in a TQFP package [Search: ATmega328P-A]. This is NOT the ATmega328PB, which is not backward compatible with the ATmega328P.

### Power

![](https://cloud-j48wmzjac-hack-club-bot.vercel.app/21.webp)

Then, we need to connect the power pins to power *nets* and place *decoupling capacitors*.

**Nets**: Nets like VCC and GND serve as abstractions for actual connections in our schematic. If we connected every single chip to a central VCC and GND point in our schematic, it would be very messy. These symbols tell the PCB Designer that we need to connect those pins while keeping the schematic clean.

**Decoupling Capacitors**: AKA Bypass Capacitors. A decoupling capacitor is placed very close to the chip that needs or supplies power. When a chip suddenly demands power, it provides it while the battery and other components ramp up, essentially like a dam controls a river. When there are voltage spikes or noise, it absorbs them, while letting normal DC power pass along. So, these have to be as physically close to their parent IC as possible in the PCB layout (in Part 2).

In the KiCAD parts list, search `C` and after placing it change the *value* field to the correct number and units, 100nF in this case.

Your *reference designator* numbers for C may be different from the image (C1 and C2). VCC and GND are also parts that can be imported like any other parts. And feel free to delete the labels on GND to reduce clutter.

### Clock

![](https://cloud-j48wmzjac-hack-club-bot.vercel.app/32.webp)
The datasheet for our crystal, C13738, shows that pins 2 and 4 are connected to ground [Search: Crystal_GND24].

Now that our MCU is powered, it needs a clock to tick to[^3]. We can configure the ATmega328P to use this 16MHz crystal rather than run at its default of 1MHz.

This crystal needs an accompanying capacitor connected to ground on each pin. 

<details>

<summary>How did I come up with the value of these capacitors?</summary>

```
C = 2 * CL - CS
```
Here, C is the capacitor we need, CL is the load capacitance specified by the crystal manufacturer, and CS is the stray capacitance of the microcontroller pin. In our case CL (of the crystal) is 9pF and CS (of XTAL1/2) is 6pF (as specified by the datasheet).

So, we use 12pF capacitors.
</details>

[^3]: Yes, while the ATmega328P does have an internal clock, it's kinda inaccurate and could cause issues with serial communications. The simple and safe choice is to use an external crystal which are typically accurate to 20 parts per million, a opposed to the 5% (5 parts per hundred) of the ATmega's intenal clock.

### Reset
![](https://cloud-j48wmzjac-hack-club-bot.vercel.app/43.webp)

The bar on top of RESET means that it is active low, GND (0V) will reset the MCU and it should be at VCC (5V) during normal operation. The SPST button here is JLCPCB's basic push button which connects RESET to ground when pressed [Search: SW_SPST]. 

The resistor R6 [Search: R] is a pull-up resistor, a high-resistance resistor that gently pulls the RESET pin HIGH without passing too much current through it. This allows the switch to pull the RESET pin down without causing a short circuit, while preventing random noise from pulling RESET down.

Labeling this wire as RESET connects it to the RESET *net*. If we place another RESET label somewhere else on this page, our ECAD tool will understand that these two points have to be connected, just like the GND and VCC nets. Press "L" to activate the label tool.


### Label Pinout

![image](https://cloud-j48wmzjac-hack-club-bot.vercel.app/54.webp)

After this, we need labels telling us which MCU pin is which Arduino Nano pin.

These are global labels. Unlike the RESET label, these work on all pages of the schematic. You can press "CTRL+L" to create a gloabl label.

## Headers

![](https://cloud-nbfq15yho-hack-club-bot.vercel.app/15.png)

First, we have the traditional Arduino Nano pinout [Search: Arduino_Nano_v3] connected to our labels, telling the ECAD software we want these headers connected to the prespecified microcontroller pins. Since this whole board is running at 5V, just mark 3V3 as NC (No Connect).

We also have the ICSP header [Search: Conn_02x03_Odd_Even], which is used for flashing the Arduino's bootloader. It has all the SPI pins in one neat package, MISO, MOSI, SCK, RESET, VCC, GND.

Once you have a label, you can press 'x' to flip it horizontally.

## USB

We start with the 16 Pin USB 2.0 Type C receptacle, C165948.

![image](https://cloud-mu5k1d6dk-hack-club-bot.vercel.app/1usb.png)

NC: SBU1/2 and Shield/Shell (shield is only for hosts).

GND goes to our ground net.

Mark VBUS with a net, and then run it through a diode [Search: D] to the VCC net, which powers everything else on this board. 

Since we will be powering a bunch of LEDs, I picked a big diode JLCPCB had as a basic part, C35722. Set the *value* field to the part number so you can find it later. This diode prevents current from going back into your computer if both USB and 5V pins are plugged in.

Then, to tell the USB-C port that we are drawing power from it, CC1 and CC2 have to each be connected through separate 5.1k resistors to ground[^4]. That tells the USB-C power adapter that we can draw up to 5V 3A.

You can download the KiCAD CH340N footprint here: [ch340n.kicad_sym](https://cloud-b6v3rkn29-hack-club-bot.vercel.app/0ch340n.kicad_sym). Then, put it in your project folder and add it to your symbol library in Preferences > Manage Symbol Libraries > Project Specific Libraries.

![](https://cloud-j48wmzjac-hack-club-bot.vercel.app/87.1.webp)
![](https://cloud-j48wmzjac-hack-club-bot.vercel.app/97.2.webp)

![image](https://cloud-mu5k1d6dk-hack-club-bot.vercel.app/0ch.png)

Now, we can connect our UART chip, the CH340N. Both D+ and D- from the USB-C connector go to D+/- on the CH340N. As specified in its datasheet, both V3 and VCC get 100nF decoupling capacitors. RTS goes to RESET through another 100nF capacitor; this capacitor makes the RESET pin briefly pulse low instead of staying low forever (avoiding bootlooping the MCU).

RXD and TXD (USB directionality), are connected to their microcontroller pins D1 (MCU's TX) and D0 (MCU's RX) respectively with some status LEDs [Search: LED, Value: GREEN/YELLOW].

[^4]: 5k1 is just a concise and clear EE way of saying 5.1k. The units are context dependent, so here it means kilo - ohms.

## Done!

Now you have a simple Arduino Nano-compatible board schematic! Check out Part 2 to turn this into a PCB, or jump to Part 3 to add more features to this board[^2].

![](https://cloud-mu5k1d6dk-hack-club-bot.vercel.app/201full-kicad.svg)

{/* footnotes */}

[^1]: Thanks to Hugo Hu for his instructable, this schematic is based on that design: https://www.instructables.com/ATmega328P-Corgi-Arduino/

[^2]: **WARNING**: You will need another microcontroller board to flash the bootloader on this ATmega328P before you can program this board. Ask in Slack if you have ANY questions about this.
