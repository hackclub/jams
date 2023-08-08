---
title: "Make your own PCB Hacker Card"
description: Let's build a business card -- but with a twist -- it can transmit a URL on tap and light up! You'll learn the basics of designing a PCB, and you can get the cards made for free, with Hack Club's OnBoard.
contributor: "maggie-j-liu"
thumbnail: "https://scrapbook-into-the-redwoods.s3.amazonaws.com/2318e7a7-f3d8-44d3-8e7c-efb01b297a25-placeholder.png"
timeEstimate: "1 Hour"
difficulty: "Beginner"
keywords: "Beta, Hardware, PCB, EasyEDA, NFC, business card, OnBoard"
language: "EasyEDA"
presentation: ""
presentationPlay: ""
presentationPDF: ""
notes: ""
poster: ""
video: ""
slug: "hacker-card"
---

# Make your own PCB Hacker Card

[TODO: intro]

## Schematic

The first step is creating a schematic for your PCB design. A schematic shows the components that will be used in the circuit, as well as how each of these components connect to each other.

For our card, we'll be using

- A [NT3H2111W0FHKH](https://jlcpcb.com/partdetail/NxpSemicon-NT3H2111W0FHKH/C710403) NFC Chip: this will be the main component of our card -- it handles the NFC functionality as well as harvesting energy from the phone to light up the LED
- An ~2V LED. I'm using [C2296](https://jlcpcb.com/partdetail/Hubei_KentoElec-17_21SUYCTR8/C2296), but feel free to pick a different color (note: this part may also be called 17-21SUYC/TR8)
- A [47Ω resistor](https://jlcpcb.com/partdetail/23909-0603WAF470JT5E/C23182)
- A [220nF capacitor](https://jlcpcb.com/partdetail/21832-CL10B224KA8NNNC/C21120)

First, let's open up [EasyEDA](https://easyeda.com). This is a browser based PCB designer, so all you need is an account.

Once you've logged in, select `File` > `New` > `Project` to create a new project.
![](/photos/new-project.png)

This will open up the schematic editor. Some important parts:

- `Library` on the left toolbar: This is where we will search for components and import them.
- `Wiring Tools` panel: We'll be using the wire tool to connect the components together.

![](/photos/schematic-unannotated.png)

## Adding components to the schematic

Click the `Library` button to open the parts picker. Search for a part (the part number works best), and make sure `JLCPCB Assembled` is selected. This will make sure we're choosing parts from JLCPCB's parts library, so that JLCPCB can assemble the boards when we order them.

![](/photos/searching-for-parts-unannotated.png)

Select the part, then hit the `Place` button to add it to your schematic. Repeat for all 4 of the parts listed above.

![](/photos/parts-on-schematic-unannotated.png)

### Adding the antenna

The NFC chip needs an antenna to work. We'll be using a PCB trace as the antenna, so we'll need to add that to our schematic.

Note: this is not an actual part, so it doesn't need to be assembled onto the board -- it's formed by the copper traces on the PCB.

To add the antenna, search for `25X48MM_NFC_ANTENNA` in the Library, and instead of `JLCPCB Assembled`, select `User Contributed`. Select one of the options (check the preview to make sure it looks similar to the one I used here, but most of them should work), and place it on your schematic.

![](/photos/selecting-antenna-unannotated.png)

## Wiring up the components

Now that all of our components are placed, let's connect them together! We'll use the `Wire` tool to indicated an electrical connection between the different parts -- this is similar to how you would connect wires on a breadboard. On the actual PCB, copper traces will go where we added wires, to form those electrical connections.

We'll reference the NFC Chip's Datasheet, specifically [this explanation](https://www.nxp.com/docs/en/data-sheet/NT3H2111_2211.pdf#page=38) for creating an energy harvesting circuit.

The datasheet says

> A complete total connected capacitor in the range of typically 150 nF up to 220 nF
> maximum shall be connected between VOUT and GND

So we'll connect the capacitor between `VOUT` and GND (the `VSS` pin).

https://github.com/maggie-j-liu/hacker-card-jam/assets/63619830/d65ff889-cf6c-44e8-90d4-0d61e032274d

- The pins `LA` and `LB` are for the antenna, so we'll wire up the antenna between those two pins.
- > If NTAG I2C also powers the I2C bus, then VCC must be connected to VOUT

  Since the NFC chip's energy harvesting _will_ be powering the chip itself, we'll connect `VCC` to `VOUT`.

- Finally, to complete the circuit and light up the LED, we'll connect the LED and resistor between `VOUT` and GND (the `VSS` pin).

Here's what your schematic should look like when completed!

![](/photos/completed-schematic.png)

# Designing the PCB

Now that the schematic is complete, we can start designing the PCB. In this step, we'll place the components onto the board, in the exact shape and configuration that the final board will be. The schematic will help guide us in connecting the the components together.

## Converting the schematic to a PCB

To convert the schematic into a PCB design file, click `Design` > `Convert Schematic to PCB`. You may get a warning about unfinished nets -- this is fine, just click "No, Keep Going."

![](/photos/convert-schematic-to-pcb.png)

This will open up the PCB editor, as well as a popup window to specify the board's dimensions. (If the popup window doesn't show up for any reason, you can find it through `Tools` > `Set Board Outline`.)

Here are the dimensions I'll be using, but feel free to make your business card a different size! Bonus: try making your business card a custom shape (not circular or rectangular). You should have the tools to do that by the end of the jam.

- Board Outline: Round Rectangular
- Width: 88.9mm
- Height: 50.8mm
- Radius: 4mm

![](/photos/set-board-outline.png)

## Functionality: Making a working PCB card

Once you set the board outline, you should see something like the image below. There's the outline of the board in pink, a bunch of components in red, and some thin blue lines connecting the components. Let's talk about what these are, and what the colors mean!

![](/photos/pcb-editor-unannotated.png)

### Layers

A PCB like a sandwich -- it's made up of many different layers. We're designing a 2-layer PCB, which has the following layers:

- The **substrate** is in the middle. This makes up the foundation of the PCB, and is usually made of FR-4 (fiberglass).
- On either side of the substrate are **copper layers** (since this is a 2-layer PCB, there are 2 copper layers: one on top and one on the bottom). In our PCB designer, these are indicated by the `TopLayer` (red) and `BottomLayer` (blue) layers. The copper layers are where electrical connections happen! You should place **traces** (lines that form electrical connections between components) on the `TopLayer` and `BottomLayer`.
- On top of the copper layers are **soldermask** layers. This is what gives PCBs their color -- common soldermask colors are green or black, but white, purple, blue, red, yellow, and more are also possible. Soldermask is added to the entire surface of the board (both the top and the bottom) by default. If you want to **remove** the soldermask (which will reveal the copper underneath), use the `TopSolderMaskLayer` or `BottomSolderMaskLayer` (for the top and bottom of the board, respectively).
- On top of the soldermask layers are **silkscreen** layers. Silkscreen is usually white, and is generally used to label and identify components, but we'll be using it for ✨ PCB art ✨. We can use this to add contact info, a QR code, or even some illustrations to our business card. In EasyEDA, silkscreen is added on the `TopSilkLayer` and `BottomSilkLayer`.

[TODO: insert illustration of PCB layers]

### Components

You'll notice that the PCB designer already has your components populated on the board. By converting the schematic to a PCB design, EasyEDA automatically places the **footprints** of the components on the board. Try dragging these around! You're able to place them anywhere, but keep in mind that they must be placed within the pink board outline. This is exactly how the components will be placed on the final board.

Some helpful tips:

- You can hit the `R` key to rotate a component 90 degrees.
- The thin blue lines indicate where electrical connections need to be made; so try to rotate components so that the lines do not cross
- Don't worry if the yellow marks cross (that's just silkscreen), but the red parts should not be touching! (That's the copper layer, and if they touch, it will cause a short circuit.)

Drag the components around until you're happy with the placement. Here's what mine looks like, but don't copy it directly; almost anything will work!

![](/photos/components-placed.png)

### Routing traces

Now, we have a bunch of components on the card. If we were to have the card manufactured right now, it wouldn't work -- the components are not connected to each other! We need to add **traces** to connect the components together.

It's best practice to manually route your traces, using the first button in the PCB tools panel: the `Track` tool.

[TODO: insert image of PCB tools menu]

However, to speed up the jam a bit, we'll be using EasyEDA's auto-router. Select `Route` > `Auto Route...` and click `Run` to watch the magic happen...

![](/photos/auto-router.png)

...Except, it seems like the magical autorouter 🪄 wasn't 100% successful :(. We'll finish up the last bit with some manual routing.

![](/photos/autorouter-results.png)

The autorouter was able to connect most of the components, but there's still one thin blue line (representing an unrouted connection). Can you find it?

Zoooming in, we see that it's between the antenna loop and pin #8 on the NFC chip. Here's how to route it:

1. Click the `Track` tool in the PCB Tools panel
2. On the right sidebar, set `Routing Conflict` to `Ignore`. This step is generally not needed (for normal manual routing), but there's a small issue with the footprints that makes it necessary here.
3. Click between the two pads that need to be connected. The thin blue line should disappear, and a red trace should connect the two pads.

[TODO: insert manual-routing.mov video]

Now, your PCB card is functional. Woooo! 🎉

We can check out a preview by clicking the `3D` button in the top toolbar. Hmmm... doesn't look like a business card yet. Let's fix that!

![](/photos/card-preview.png)

## Aesthetics: Personalizing your card

We'll mostly be using the silkscreen layer to add our information and designs. Select the `TopSilkLayer` by clicking the yellow rectangle in the Layers and Objects panel. This will make sure that you're on the silkscreen layer.

### Adding text

In the PCB Tools panel, select the `Text` tool. If you want to make it a business card, you can add your name and contact info -- or add any other text you want. Select the text object you just placed, and change the font, line width, and size in the right sidebar.

![](/photos/text-properties.png)

Drag the text to where you want it on your board. Here, I've added my name, website, and GitHub. If you need ideas: you can add your email, phone number, or other social media handles.

![](/photos/text-added.png)

### Adding a QR Code

EasyEDA also supports importing images! I'll use this to add a QR Code that links to my website. I used [QRCode Monkey](https://www.qrcode-monkey.com) to generate a QR Code, then use the `File` > `Import` > `Image` option to import it.

Just like Text objects, you can select the image to modify the properties (width, height, etc.) on the right sidebar.

![](/photos/import-image.png)

Note: we've been placing everything on the yellow `TopSilkLayer`. This means that they will all appear on the top side of our board. If you want to add anything to the bottom, use the green `BottomSilkLayer`! Keep in mind that the bottom layers of the board are a top-down, see through view, which is essentially flipped -- use the 3D viewer to check that all your text and images are oriented correctly.

### Bonus: Textures and other effects

Thus far, we've only used silkscreen to add designs and text to our board. The silkscreen will show up white on the manufactured board, but it's also possible to achieve a variety of other effects by combining different layers!

Here are some examples -- try incorporating these techniques into your board.

- **White silkscreen**: this is what we've been using. Add things to the `TopSilkLayer` or `BottomSilkLayer` to achieve this effect.
- **Shiny silver or gold** (depends on the finish selected when ordering): add your object to both the `TopLayer` and `TopSolderMaskLayer` (for the top of the board), or to both `BottomLayer` and `BottomSolderMaskLayer` (for the bottom of the board), and superimpose these layers on top of each other. The `TopLayer` or `BottomLayer` will put the shiny copper on your object, while the `TopSolderMaskLayer` or `BottomSolderMaskLayer` will **remove** the soldermask on the object, revealing the shiny copper underneath.
- **Textured, or with slight color variation**: add your object to only the `TopLayer` or `BottomLayer`. Without removing the soldermask, the copper will still be covered by the soldermask, but it may slightly lighten the soldermask color and will create a textured feel.
- **Translucent yellow** (color of the FR-4 material): add our object to only the `TopSolderMaskLayer` or `BottomSolderMaskLayer`. This will remove the soldermask on the object, revealing the yellow FR-4 material underneath. This technique is useful for allowing LEDs to shine from one side of the board to the other, or just for adding another color to your design.

[TODO: conclusion / onboard / links to other projects to try out]