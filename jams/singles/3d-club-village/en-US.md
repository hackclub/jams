---
title: 'Build your own 3D club village'
description: >
  In this jam, you'll create your very own virtual sky village with Spline, a web-based 3D modeling software.
contributor: 'linkai101'
contributorSlackID: 'U01R8RSGYUV'
thumbnail: 'https://cloud-qgq7ebke0-hack-club-bot.vercel.app/0680a6b28-7504-46b3-90d5-04cd1057640e.png'
timeEstimate: '60 Min'
difficulty: 'Beginner'
keywords: '3D, Spline, Web'
language: 'Spline'
presentation: 'https://www.figma.com/file/DYnMTevG5DWxHDcVstUzIE/Jam-Presentation---3D-Club-Village?type=design&node-id=0%3A1&mode=design&t=F8dabi5Vvsa5m6pz-1'
presentationPlay: 'https://www.figma.com/proto/DYnMTevG5DWxHDcVstUzIE/Jam-Presentation---3D-Club-Village?type=design&node-id=1-2&t=F8dabi5Vvsa5m6pz-0&scaling=contain&page-id=0%3A1'
presentationPDF: 'https://cloud-nd30iq2uv-hack-club-bot.vercel.app/0jam_presentation_-_3d_club_village__1_.pdf'
notes: ''
poster: ''
video: 'https://cloud-2jto14u7d-hack-club-bot.vercel.app/0vid_20221230_184903086.mp4'
slug: '3d-club-village'
---

Imagine a world where you have the power to shape the landscape and design your dream buildings. **Today, we'll dive into the fundamentals of 3D modeling by building our own sky islands and collaborate by merging them into a community sky village.**

Here's an example of what you will make:
![Individual demo](https://cloud-b1g9hwiu1-hack-club-bot.vercel.app/0image.png)
[Demo](https://app.spline.design/file/dd7decef-bf50-4ca5-bff5-d76ba64513c4)

And... here's an example of a sky village if you put multiple islands together!
![Group collab demo](https://cloud-8oi5u7dkg-hack-club-bot.vercel.app/0image.png)
[Demo](https://app.spline.design/file/652cf287-958a-4b01-a818-b6a09868f645)

So without further ado, let's get started!

## Getting started with Spline
1. Head over to [spline.design](https://spline.design) and create an account. Select "New File" to get started.
![Getting started - Step 1](https://cloud-cmkhxafch-hack-club-bot.vercel.app/1gettingstarted-1.png)

2. Play around with the UI and controls!
![Getting started - Step 2](https://cloud-cmkhxafch-hack-club-bot.vercel.app/0gettingstarted-2.png)
**Toolbar:** add shapes, select/view modes, and edit tools.
- Press “+” for more tools and objects to add to the scene.
- Press “▷” to access Play mode.  
**Left sidebar:** objects and layers in the scene.  
**Right sidebar:** property panels. Change properties of objects or the scene.

## Important controls 🕹️
<Grid cols={3}>
<GridItem>
**Orbit:** `alt`/`⌥` + `drag`
</GridItem>
<GridItem>
**Zoom:** `scroll`
</GridItem>
<GridItem>
**Pan:** `space` + `drag` OR `scroll wheel drag`
</GridItem>
</Grid>

## Creating your island 🏝️
Start thinking about what you want on your own island: your dream mansion on a mountaintop, a treehouse in the forest, an amusement park—the sky’s the limit!

> We’re going to start by building a basic house. Afterwards, you can transform it to make it your own!

<Dropdown title="1. Let's start by adding the ground.">
<Grid cols={2}>
<GridItem>
![Creating your island - Step 1A](https://cloud-3klicbvir-hack-club-bot.vercel.app/9creatingisland-1a.gif)
</GridItem>
<GridItem>
Select (single-click) the square.
Rotate the square flat and change the size to 500x500.
- Rotation: X90
- Size: X500, Y500
</GridItem>

<GridItem>
![Creating your island - Step 1B](https://cloud-3klicbvir-hack-club-bot.vercel.app/8creatingisland-1b.gif)
</GridItem>
<GridItem>
Select (single-click) the square.
Extrude the square by 50 and add some roundness.
- Extrusion: 50
- Corner: 100
- Bevel: 16
- Bevel Sides: 6

<Comment githubUser="linkai101">
Keep in mind that you can always change these settings anytime as you add more structures and decorations!
</Comment>
</GridItem>
</Grid>
</Dropdown>

<Dropdown title="2. Create the base house model.">
<Grid cols={2}>
<GridItem>
![Creating your island - Step 2A](https://cloud-3klicbvir-hack-club-bot.vercel.app/7creatingisland-2a.gif)
</GridItem>
<GridItem>
> We’ll start with the body of the house.

Press “+” in the toolbar, then “Cube”. Select the top of the base so it highlights red.
Adjust settings:
- Size: X200, Y200, Z200
- Corner: 0
- Position: X0, Y150, Z0
</GridItem>

<GridItem>
![Creating your island - Step 2B](https://cloud-3klicbvir-hack-club-bot.vercel.app/6creatingisland-2b.gif)
</GridItem>
<GridItem>
Select (single-click) the cube. Adjust settings:
- Click “Smooth & Edit”
- Subdivision Modifier > Level: 0

<Comment githubUser="linkai101">
**Editing mode** is accessed when double-clicking on an object. This allows you to modify vertices, edges, faces, and more! Getting the hang of it?
</Comment>

Double-click the cube.
In the toolbar, select the `Loop Cut (C)` tool. Make a vertical subdivision.
In the toolbar, select the `Vertex (V)` select tool.
- Select the 4 vertices of the top face (shift + drag)
- Drag the vertices down to form an angled roof shape.
</GridItem>

<GridItem>
![Creating your island - Step 2C](https://cloud-3klicbvir-hack-club-bot.vercel.app/5creatingisland-2c.gif)
</GridItem>
<GridItem>
> Now, let’s make the roof.

Duplicate the cube and drag the copy up.
- `Ctrl`/`⌘`+`D` OR right-click > Duplicate

In the toolbar, select the `Vertex (V)` select tool.

- Arrange the vertices to form a roof.  
Exit (”X”) out and drag the roof down. Repeat the above steps until the roof sits flush on the house.
</GridItem>

<GridItem>
![Creating your island - Step 2D](https://cloud-3klicbvir-hack-club-bot.vercel.app/4creatingisland-2d.gif)
</GridItem>
<GridItem>
> Let’s add some roundness to the roof.

Select (single-click) the roof. Adjust settings:
- Subdivision Modifier > Level: 2
In the toolbar, select the `Loop Cut (C)` tool.
- Add subdivisions throughout to shape the roof.

<Comment githubUser="linkai101">
**Subdivisions** act as anchors in the shape for where the edges get rounded. Add and move the subdivisions to see how they affect the rounding!
</Comment>
</GridItem>

<GridItem>
![Creating your island - Step 2E](https://cloud-3klicbvir-hack-club-bot.vercel.app/3creatingisland-2e.gif)
</GridItem>
<GridItem>
> Now some roundness for the walls.

Repeat the above steps on the body.
</GridItem>
</Grid>
</Dropdown>

<Dropdown title="3. Add colors!">
<Grid cols={2}>
<GridItem>
![Creating your island - Step 3A](https://cloud-3klicbvir-hack-club-bot.vercel.app/2creatingisland-3a.gif)
</GridItem>
<GridItem>
> Our scene desperately needs a makeover. Let’s start with the background!

Click the background to deselect all objects. Adjust scene settings:
- Frame > BG Color: any color you want!
</GridItem>

<GridItem>
![Creating your island - Step 3B](https://cloud-3klicbvir-hack-club-bot.vercel.app/1creatingisland-3b.gif)
</GridItem>
<GridItem>
<Comment githubUser="linkai101">
The **Depth** material type creates a gradient of color along an axis. In "Ramp", you can adjust and add the color stops. Try it out!
</Comment>

> Now, let’s make the ground look like grass and dirt.

Select (single-click) the ground. Adjust settings:
- Material > <strike>Color</strike> Depth
- Type: Linear
- Direction: X0 Y0 Z1

Adjust the start and end positions of the depth layer.
In “Ramp”, select colors for dirt and grass and adjust their positions.
</GridItem>

<GridItem>
![Creating your island - Step 3C](https://cloud-3klicbvir-hack-club-bot.vercel.app/0creatingisland-3c.gif)
</GridItem>
<GridItem>
Repeat for the walls and the roof. Make it your own!
</GridItem>
</Grid>
</Dropdown>

<Dropdown title="4. Add doors, windows, and doorknobs.">
<Grid cols={2}>
<GridItem>
![Creating your island - Step 4](https://cloud-kv6txjh6s-hack-club-bot.vercel.app/4creatingisland-4.png)
</GridItem>
<GridItem>
> You’re on your own for this one. You got this!

In the toolbar, use the `Rectangle (R)` and `Ellipse (O)` tools to draw doors and windows on the house.
Add rounding and color to them as well.
> 💡 **Hint:** To add rounding to specific corners, click the "⛶” icon in Shape > Corner.
</GridItem>
</Grid>
</Dropdown>

<Dropdown title="5. Add trees.">
<Grid cols={2}>
<GridItem>
![Creating your island - Step 5](https://cloud-kv6txjh6s-hack-club-bot.vercel.app/3creatingisland-5.png)
</GridItem>
<GridItem>
> You’re on your own for this one. You got this!

In the toolbar, add cubes and cylinders with the “+” icon to form trees.
Add rounding and color to them as well. Try using a Depth material for a gradient effect.
</GridItem>
</Grid>
</Dropdown>

<Dropdown title="6. Add shadows influenced by surrounding color.">
<Grid cols={2}>
<GridItem>
![Creating your island - Step 6](https://cloud-kv6txjh6s-hack-club-bot.vercel.app/2creatingisland-6.gif)
</GridItem>
<GridItem>
> Let’s add a green glow effect coming from the trees!

<Comment githubUser="linkai101">
Materials can consist of multiple layers! See how the **Depth** layer adds a green glow to the house illuminating from the tree.
</Comment>

Select (left-click) the body of the house. In Material:
- Click the “+” icon to add a new layer.
- Select <strike>Color</strike> Depth

Drag the origin of the layer to the tree and adjust the end position.
- In “Ramp”, set the left slider to the tree color and the right slider to white.
- Click the icon in “Depth” that looks like two overlapping circles, and select “Multiply”

> Repeat this for the other tree.
</GridItem>
</Grid>
</Dropdown>

<Dropdown title="7. Build a stone path to the door.">
<Grid cols={2}>
<GridItem>
![Creating your island - Step 7](https://cloud-kv6txjh6s-hack-club-bot.vercel.app/1creatingisland-7.gif)
</GridItem>
<GridItem>
> Let’s build a stone path towards the door!

In the toolbar, select the `Vector` tool. Draw the vertices to form a stone step. Adjust settings:
- Corner: 8
- Extrusion: 2
- Position: Y50
- Bevel: 1
- Material > Color: any color you want!
> Repeat this for the rest of the stones in the path.
</GridItem>
</Grid>
</Dropdown>

## Optional activity: making assets! 📦
If you're working in a group and have extra time, this could be really fun to spice up the collaboration: making custom assets to use in each of your islands!
### The Task
Each person will create a single asset from scratch—it could be anything from a funny-looking lawn chair to a giant Among Us crewmate statue! The assets that everyone makes will be available for others to use to customize their islands in the following steps.

## Customizing your island 🎀
Now you know the basics of Spline, **it's time to start making the island your own**. Transform this basic house into your dream mansion, expand your island with more structures, or start from scratch to build something unique!

> Here are some ideas for what to make:
> - A park
> - A town in the wild west
> - Your dream house or resort
> - A space station
> - Recreate a building from your favorite movie or video game
> - Your school/the building you’re currently in

### Spline’s asset library
Spline has a ***huge*** library of 3D models and scenes for you to use in your project! Sprinkle little details into your island or add full building prefabs to form towns and parks.

![Spline's asset library](https://cloud-kv6txjh6s-hack-club-bot.vercel.app/0splinelibrary.png)

## Build a collaborative sky village by linking islands 🌉
Collaboration is one of the most fun and fulfilling aspects of design and making, and Spline makes it super easy! If you're working with a group or wanna collab with a few friends, let's build a sky village!

<Comment githubUser="linkai101">
Note: Spline's free tier currently only has 2 additional editor seats. (file owner + 2 other editors) You could still make it work if everyone sends their islands to the leader(s) who links them together.
</Comment>

1. Have the club/group leader create a new file on Spline. Share the file with the rest of the group with editing privileges.
![Linking islands - Step 1](https://cloud-mn9anfpic-hack-club-bot.vercel.app/0image.png)

2. Copy and paste each island into this master file. Connect them with bridges in the asset library or find your own creative way to link the islands!
![Group collab demo](https://cloud-8oi5u7dkg-hack-club-bot.vercel.app/0image.png)

## What's next 🔮
3D modeling literally has limitless possibilities. Here are a few:
- Visualize and manipulate 3D models on in HTML with [three.js](https://threejs.org/)
- 3D printing and inventing
- Use them in Unity, Unreal Engine, or other 3D game development applications
- Augmented/visual reality (AR/VR)
- Just for fun or for the sake of art—create and showcase a portfolio!

I wonder what you'll build next with 3D! 😁

### Exporting
Often in big projects like making 3D games and websites, 3D modeling is only one side of the story. You'll eventually need to export them into another app, and here's how you do it:

<Comment githubUser="linkai101">
Keep in mind that some export options are only available to the paid tiers. 😐 You should be able to get by though!
</Comment>

1. In the toolbar, click on "Export". There will be options on the left-hand side for various file formats to export to.
![Exporting](https://cloud-ctimzr33x-hack-club-bot.vercel.app/0image.png)

### Jams to do next
> Looking for more 3D jams? I gotchu!

**[Mastering the Matrix: Crafting Your Own Web-based AR App](/jam/WebAR-Wonderland)**  
Deploy your 3D models into the metaverse! Learn how to make a web-based AR app in which you can display and manipulate your 3D models from Spline.

**[Crafting Weapons, Shields, and Armor in TinkerCAD](/batch/3d-armory)**  
TinkerCAD is a great web-based beginner CAD software. Computer aided design (CAD) is often used for designing 3D models for engineering purposes!