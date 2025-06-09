---
part: "part-3"
batch: 'oscillart'
totalParts: '7'
title: 'Drawing Sine Waves on the JS Canvas'
description: "In this part of the Jam, you'll draw the sine waves that you're hearing on JS's canvas, creating your first art designs."
contributor: "celesteroselli"
contributorSlackID: 'U06TV3F4HEU'
thumbnail: 'https://hc-cdn.hel1.your-objectstorage.com/s/v3/be97f69ac117aac3db0ed6d9d6da6862fd3dfa71_untitled_design__27_.png'
timeEstimate: '30-45 min'
difficulty: 'Beginner, Intermediate'
keywords: 'art, music, waves, javascript, canvas'
presentation: 'https://docs.google.com/presentation/d/13dTQ7iSx2wbZs541FnZ0gt3nSn_y_ao5FyoquPoJzcU/edit?usp=sharing'
presentationPlay: 'https://docs.google.com/presentation/d/e/2PACX-1vRzBt1oDLSe8ypZVy82HSZqRk22NMIPNeSD5CU9odXhqz9wRBKllo2oIMpujmgS4ZUukBIvsJ6Fdx5X/pub?start=true&loop=false&delayms=30000'
presentationPDF: '/assets/oscillartfiles/3.pdf'
---

# Part 2: 30-45 min

<br />

## Table of Contents
Let’s do a quick rundown on what we’re gonna do in this section. We are going to:

1. Create and style a Javascript Canvas to draw on
2. Make a function to draw lines on the canvas to create sine waves
3. Run the function periodically to get a full drawing

<br />

## Section 1: A blank canvas (literally)

So, we’ve only gotten sound out of our app. Which is, you know, fine… but I think we’re cooler than that. So let’s start adding some visuals! The way we’re going to do this is by using the **Javascript canvas**, an element that has x and y coordinates (like from math class… I know, there’s *so much math*, sorry) and allows you to draw points, lines, and designs. Let’s start by adding the canvas HTML element into our index.html file inside of our container div.
```
   <canvas id="canvas">


   </canvas>
```

Perfect. Now, so that we can see the edges of this canvas, and keep it a reasonable size, let’s do a little styling in **CSS**. I added the ID “canvas” so that in our CSS stylesheet, we can refer to it as `#canvas`. If you’re not familiar with CSS, that’s ok! It’s a language we use to style and design our HTML code. 

Copy the following into your style.css file:

```
#canvas {
   border: 5px solid black;
   height: 500px;
   width: 900px;
   margin-bottom: 2em;
}
```

Now, what this does is add a black border around our canvas, keep it at a stable height and width, and add a little margin underneath it, so that it doesn’t run into our button (em is a unit of thickness by the way). Here's what mine looks like:

![image of canvas](https://hc-cdn.hel1.your-objectstorage.com/s/v3/a8166444eb15926661847e2988f538c64d8939b3_screenshot_2025-06-08_at_1.29.51___pm.png)

So you know for the future, we use `#<id-name>` to add styles to an element with a unique ID, `.<class-name>` to refer to elements with shared classes, and simply the element name to add styles to all elements of that type.

<br />

## Section 2: Let’s do the (sine) wave

Well, there we go! We have our canvas and we shall now begin to paint on it. Well, not really paint but… close enough.

To draw the sine waves, we are going to use an **interval function**, which means we call it periodically at a specific interval until we stop it. The function we’re about to code will be taking the x-value of where the pointer on the canvas is (think of this invisible pointer as our paintbrush), setting its y-value to **sin(x)**, drawing a line from its past point to its new point, and then moving forward one x-value to repeat the whole thing!

First, let’s define some important elements and variables near the top of main.js:

```
//define canvas variables
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d"); -> the “ctx” is just the part of the canvas that we draw on. Think of it like the “screen”, or the first sheet of paper in a stack. It’s just the face of the whole canvas.
var width = ctx.canvas.width;
var height = ctx.canvas.height;
```

Then, we’re going to be using the following methods:

`ctx.beginPath();`
> starts a path at its current x and y coordinates

`ctx.moveTo(x, y);`
> the pointer moves to those x and y coordinates without drawing a line

`ctx.lineTo(x, y);`
> the pointer draws a line from its current position to the x and y coordinates given in the method

`ctx.stroke();`
> the line made is filled it

`Math.sin(x);`
> returns sin(x)

`Math.PI;`
> returns the value for pi (3.14159…)


And, this isn’t a coding method, but here’s a helpful math equation when creating your function:

![equation of sine waves](https://hc-cdn.hel1.your-objectstorage.com/s/v3/b208900032d6a7298ffdf88f11e79379db76cdcb_screenshot_2025-06-06_at_12.12.44___pm.png)

<Dropdown title="Here’s a MEGA challenge: can you code this function all on your own? I believe in you! Don’t worry about including any loops or trying to call it as an interval; we’ll do that later. Just try and create a function that, if called intervally, would draw a sine wave. Make sure to use that equation I gave you!! And, call it line(). Pssst… Make sure to increase x by 1 at the end!">

Answer:

```
function line() {
   y = height/2 + (amplitude * Math.sin(x * 2 * Math.PI * freq));
   ctx.lineTo(x, y);
   ctx.stroke();
   x = x + 1;
}
```

</Dropdown>

The only thing is: I used two variables up here, called amplitude and freq (for frequency), which we haven’t declared yet. So let’s do that now! Since we want freq to be **relative to the pitch that we’re playing in the frequency function**, let’s add this to the top of that function, using the parameter we pass into it:

```
freq = pitch / 10000;
```

Why did I divide it by 10,000? Well, showing a frequency of 440 on one screen is a lot… we have to divide by a big number so we can zoom in and actually check out the waves! And all the frequencies will still be relatively representative of all the pitches we’re playing.


And, for now, you can just assign amplitude a random value at the top of main.js:

```
var amplitude = 40;
```

<br />

## Section 3: On the clock - aka, using intervals to do things repeatedly


Nice job! Now, let’s talk about how the interval function works. We’re going to use the **setInterval(function, interval);** method to call a specific function every number of seconds. To do this, let’s make another function - a handler function for drawing the sine wave - and call it function drawWave. Let’s put it above our line function.

```
function drawWave() {
}
```

Great! Now, to keep track of how long our interval has been running (because we don’t want to keep drawing one sine wave for all of eternity, no matter how cool that would look), we’re going to initialize a counter variable **outside of both functions**, and set it equal to 0 again in our handler function (so everytime we run drawWave the counter is back at 0.)

```
var counter = 0;
function drawWave() {
	counter = 0;
}
```

Then, in our periodic function, line, we are going to increase counter by 1, so we know how many times our periodic function has been run.

```
function line() {
   ...
   //increase counter by 1 to show how long interval has been run
   counter++;
}
```

Now, let’s start periodically calling line when we first run drawWave. First, define a null variable (that means it doesn’t have a value yet) called interval at the top of main.js:

```
var interval = null;
```

Then, at the bottom of drawWave(), call:

```
interval = setInterval(line, 20);
```

**This code runs line every 20 seconds**, and will also give us an interval ID attached to the variable interval, which we will need to stop the interval. We will do that by running `clearInterval(interval);`

<Dropdown title="Here’s a challenge! Given that last method I gave you, can you figure out what to add to our line function so that once it has been called 50 times, it stops running?">

Answer: 

```
if(counter > 50) {
       clearInterval(interval);
  }
```

</Dropdown>

<br />

Now we need to add a few lines of code to drawWave to start up our pointer/paint-brush:

```
ctx.clearRect(0, 0, width, height);  -> clears everything inside of our canvas, so that we get rid of any past sine waves
x = 0;
y = height/2;
ctx.moveTo(x, y);  -> move our pointer to the left-most middle of our canvas, so we always start drawing a new wave from here
ctx.beginPath(); -> this method tells our computer that we’re ready to start painting!
```

Now, let’s add drawWave to our handle function, so that when we press our submit button, we not only play music, but we draw our wave too! **Make sure to add it *after* we call frequency, because we access freq - the variable that we set there - in drawWave.**

You should have a working web app that plays both music and art when you press a button!! Here's my result:

<video src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/16a23c6547279ae957baa2712b7e4e0e796ec602_drawscale.mp4" width="100%" controls></video>

<br />

Freaking awesome job!! See you in the next one.

<br />
