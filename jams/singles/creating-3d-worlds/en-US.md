---
title: 'Creating interactive 3D worlds on the web 🌎'
description: >
  In this jam, you'll create your very own virtual world with Spline, a web-based 3D modeling software.
contributor: 'linkai101'
thumbnail: 'https://scrapbook-into-the-redwoods.s3.amazonaws.com/2318e7a7-f3d8-44d3-8e7c-efb01b297a25-placeholder.png'
timeEstimate: '60 Min'
difficulty: 'Beginner'
keywords: 'Web, 3D, 3D modeling, Spline'
language: 'Spline'
presentation: ''
presentationPlay: ''
presentationPDF: ''
notes: ''
poster: ''
video: ''
slug: 'creating-3d-worlds'
---

## Intro
TODO

## Getting started with Spline
1. Head over to [spline.design](https://spline.design) and create an account. Select ***New File*** to get started.
![Getting started - Step 1]()

2. Play around with the UI and controls!
![Getting started - Step 2]()
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
Start thinking about what you want on your own island: a house, a forest, an amusement park—the sky’s the limit!

> We’re going to start with building a small house with a front yard.

1. Let’s start by adding the ground.
<Grid cols={2}>
<GridItem>
![Creating your island - Step 1A]()
</GridItem>
<GridItem>
Select (single-click) the square.
Rotate the square flat and change the size to 500x500.
- Rotation: X90
- Size: X500, Y500
</GridItem>


<GridItem>
![Creating your island - Step 1B]()
</GridItem>
<GridItem>
Select (single-click) the square.
Extrude the square by 50 and add some roundness.
- Extrusion: 50
- Corner: 100
- Bevel: 16
- Bevel Sides: 6
</GridItem>
</Grid>
> Feel free to resize your island later on as you add more structures and decorations!

2. Create the base house model.
<Grid cols={2}>
<GridItem>
![Creating your island - Step 2A]()
</GridItem>
<GridItem>
> We’ll start with the body of the house.
Press “+” in the toolbar, then “Cube”. Select the top of the base so it highlights red.
Adjust settings.
- Size: X200, Y200, Z200
- Corner: 0
- Position: X0, Y150, Z0
</GridItem>

<GridItem>
![Creating your island - Step 2B]()
</GridItem>
<GridItem>
Select (single-click) the cube. Adjust settings:
- Click “Smooth & Edit”
- Subdivision Modifier > Level: 0
Double-click the cube.
In the toolbar, select the `Loop Cut (C)` tool. Make a vertical subdivision.
In the toolbar, select the `Vertex (V)` select tool.
- Select the 4 vertices of the top face (shift + drag)
- Drag the vertices down to form an angled roof shape.
</GridItem>

<GridItem>
![Creating your island - Step 2C]()
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
![Creating your island - Step 2D]()
</GridItem>
<GridItem>
> Let’s add some roundness to the roof.
Select (single-click) the roof. Adjust settings:
- Subdivision Modifier > Level: 2
In the toolbar, select the `Loop Cut (C)` tool.
- Add subdivisions throughout to shape the roof.
</GridItem>

<GridItem>
![Creating your island - Step 2E]()
</GridItem>
<GridItem>
> Now some roundness for the walls.
Repeat the above steps on the body.
</GridItem>
</Grid>

3. Add colors!
<Grid cols={2}>
<GridItem>
![Creating your island - Step 3A]()
</GridItem>
<GridItem>
> Our scene desperately needs a makeover. Let’s start with the background!
Click the background to deselect all objects. Adjust scene settings:
- Frame > BG Color: any color you want!
</GridItem>

<GridItem>
![Creating your island - Step 3B]()
</GridItem>
<GridItem>
> Now, let’s make the ground look like grass and dirt.
Select (single-click) the ground. Adjust settings:
- Material > ~~Color~~ Depth
- Type: Linear
- Direction: X0 Y0 Z1
Adjust the start and end positions of the depth layer.
In “Ramp”, select colors for dirt and grass and adjust their positions.
</GridItem>

<GridItem>
![Creating your island - Step 3C]()
</GridItem>
<GridItem>
Repeat for the walls and the roof. Make it your own!
</GridItem>
</Grid>

4. Add doors, windows, and doorknobs.
<Grid cols={2}>
<GridItem>
![Creating your island - Step 4]()
</GridItem>
<GridItem>
> You’re on your own for this one. You got this!
In the toolbar, use the `Rectangle (R)` and `Ellipse (O)` tools to draw doors and windows on the house.
Add rounding and color to them as well.
> 💡 To add rounding to specific corners, click the "⛶” icon in Shape > Corner.
</GridItem>
</Grid>

5. Add trees.
<Grid cols={2}>
<GridItem>
![Creating your island - Step 5]()
</GridItem>
<GridItem>
> You’re on your own for this one. You got this!
In the toolbar, add cubes and cylinders with the “+” icon to form trees.
Add rounding and color to them as well. Try using a Depth material for a gradient effect.
</GridItem>
</Grid>

6. Add shadows influenced by surrounding color.
<Grid cols={2}>
<GridItem>
![Creating your island - Step 6]()
</GridItem>
<GridItem>
> Let’s add a green glow effect coming from the trees!
Select (left-click) the body of the house. In Material:
- Click the “+” icon to add a new layer.
- Select ~~Color~~ Depth
Drag the origin of the layer to the tree and adjust the end position.
- In “Ramp”, set the left slider to the tree color and the right slider to white.
- Click the icon in “Depth” that looks like two overlapping circles, and select “Multiply”
> Repeat this for the other tree.
</GridItem>
</Grid>

7. Build a stone path to the door.
<Grid cols={2}>
<GridItem>
![Creating your island - Step 7]()
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

## Customizing your island 🎀
Now you know the basics of Spline and have built a mini-house, start making the island your own. Expand your island, build more structures, venture underground—the possibilities are endless!

### Spline’s asset library
Spline has a ***huge*** library of 3D models and scenes for you to use in your project! Sprinkle little details into your island or add full building prefabs to form towns and parks.

![Spline's asset library]()

> Here are some ideas for what to make for ya:
- A park
- A town in the wild west
- Your dream house or resort
- A space station
- Recreate a building from your favorite movie or video game
- Your school/the building you’re currently in

## Build a community world by linking islands 🌉
TODO

