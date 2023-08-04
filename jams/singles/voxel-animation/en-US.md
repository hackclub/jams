---
title: "Creating Your Own 3D Club Lofi Animation"
description: >
    In this Jam, you'll be creating an awesome unique Lofi Animation using Voxels! It will be a lot of fun and you will have an awesome animation as a result!
contributor: "GalaxyGamignBoy"
thumbnail: "https://cloud-h9n57b6cz-hack-club-bot.vercel.app/0thumbmail.png"
timeEstimate: "~60+ Minutes"
difficulty: "Intermediate"
keywords: "HTML, javascript, replit, Web, Voxel, Cube, Textures, Animation"
language: "Javascript"
presentation: "https://www.figma.com/file/ImHTihOiCSxpcpS2AC7zYy/Voxel-Animation---Slides"
presentationPlay: "https://www.figma.com/proto/ImHTihOiCSxpcpS2AC7zYy/Voxel-Animation---Slides"
presentationPDF: "https://cloud-abxtk9jcc-hack-club-bot.vercel.app/0voxel_animation_-_slides__1_.pdf"
notes: "https://cloud-abxtk9jcc-hack-club-bot.vercel.app/0voxel_animation_-_slides__1_.pdf"
poster: ""
video: ""
slug: "voxel-animation"
---

# Creating your own ✨ unique Voxel Animation

~60+ Minutes, Basic javascript and html knowledge needed
![demo_dot_webm](https://cloud-1duz1dnxo-hack-club-bot.vercel.app/0demo.gif)

( _This is a demo animation, this jam encourages to create your **own!**_ )

[Demo Animation](https://hcjam.galaxygamingboy.repl.co)
[Source Code of Demo](https://replit.com/@GalaxyGamingBoy/HCJam)

**Note for leaders!**
This jam will include a **gallery** so you can **publish** your members animations in a form of a **playlist**. It will also include an online **tool** for merging **all** of the videos together and adding music, till the website get's released you **must** create the playlist yourself.

**Note for learners!**
Creating your own lofi animation may seem **tidious and hard** at the start but after setting up the renderer everything after is a breeze ( like literaly ).
You will have so much fun! You **can do it!**

**Table Of Contents - Project Outline**:

-   Forking the template, replit fundementals
-   Quick explanation of the template
-   THREE.JS Basics
-   Adding a camera, sample cubes and cube animation!
-   Adding textures
-   Three.js must haves
-   Recording functionality
-   The start of your solo adventure
    ✨ Optional tasks for those who have more time ✨
-   Import 3D models
-   Lighting and Object scaling

---

## Forking the Template

This is the first part of your wonderful journey to Three.js!
The template includes assets that you might use in your lofi animation, everything will be lofi themed so feel free to use them!

You will fork the [template](https://replit.com/@GalaxyGamingBoy/VoxelAnimation-Template) from [this link](https://replit.com/@GalaxyGamingBoy/VoxelAnimation-Template).
After visiting the link on the right hand side of the screen there is a `FORK` button. Click it!
After clicking enter your voxel animation name and click `FORK REPL`.

![Fork button](https://cloud-c7utcgww6-hack-club-bot.vercel.app/0image.png)
![Fork Modal](https://cloud-puqb2ludk-hack-club-bot.vercel.app/0image.png)

Here is a quick GIF of the proccess, if you want to verify! :D
![replit-fork-dot-gif](https://cloud-hz6v4e4i3-hack-club-bot.vercel.app/0replit-fork-dot-gif.gif)

Well now congratulations! You are a **master** of forking projects, here is a celebrationary meme for you!
<img src="https://cloud-lnspzc1vi-hack-club-bot.vercel.app/0meme_fork.jpg" width="35%"/>

### Explaining Replit

After that your project that the animation will live in should be loaded into the same tab.
It should look like this:
![Replit](https://cloud-2ubu2qozr-hack-club-bot.vercel.app/0image.png)
Bare with me for a bit while I explain the basics for replit, here are the breakdown of the steps shown above:

1. Indicates the file manager, there you can see all of your files.
2. Files opened with an editor below them.
3. A preview window that will preview your animation, it should automatically reload if it doesn't press `RUN`
4. Open the preview on another tab

<Dropdown title="What is replit?">
	Replit is a web-based independent development environment (IDE). Basically Replit allows you to write code in your browser and instantly deploy it!
	
	<div>
		<img src="https://cloud-lnspzc1vi-hack-club-bot.vercel.app/1meme_magic.jpg" width="40%"/>
	</div>
</Dropdown>

<Dropdown title="Optional Task | Get used to the replit editor">
	Create an `h1`, `h2`, `h3`, with the text being: `Hello, Orpeus!`<br/>
	You should see the output on the right, preview automatically. Doesn't show? Press `RUN`!<br/>
	After completion remove the lines.<br/>
</Dropdown>

So yea, that's everything about replit, that you will need to know!
Shall we get started with the template?

## Quick explanation of the provided template

Phew I hope forking the project wasn't that hard because we got more to do! :D
Let's start with a quick explaination of what the templatet provides us with:

-   The necessary libraries, such us CCapture or gifworker so we can record the video
-   The bare necessary html code to get up and running fast and quick
-   The assets folder where you can add your own assets to use
-   Loading THREE.JS

### The `index.html`

Lets quickly dissect the `index.html` so we have a basic understanding.
**Feel free to skim this session if you have (or even don't have) time constraints!**

```html
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Lofi Animation</title>
</head>
```

The head of the html file, provides the title and the viewport

```html
<div>
    <button id="run">Run!</button>
    <button id="rec-start">Start Recording</button>
    <button id="rec-stop">Stop Recording</button>
    <span id="rec-status"></span>
</div>
```

Here we have the buttons

```html
<!-- Import THREE.JS -->
<script
    async
    src="https://unpkg.com/es-module-shims@1.6.3/dist/es-module-shims.js"
></script>

<script type="importmap">
    {
        "imports": {
            "three": "https://unpkg.com/three@0.153.0/build/three.module.js",
            "three/addons/": "https://unpkg.com/three@0.153.0/examples/jsm/"
        }
    }
</script>
```

As the comments suggest here we import THREE.JS with its dependencies

```html
<!-- Import CCapture -->
<script src="lib/CCapture.all.min.js"></script>
```

Here we import the CCapture which is found on the `lib/`

```html
<!-- Replit badge for fun -->
<script
    src="https://replit.com/public/js/replit-badge-v2.js"
    theme="dark"
    position="bottom-right"
></script>
```

We add the `Made with REPLIT` badge on the bottom right corner

```html
<!-- You script -->
<script src="script.js" type="module"></script>
```

We import our script.

Now let's move on to the `script.js` where our animation will exist.

```js
const runButton = document.getElementById("run");
const startRec = document.getElementById("rec-start");
const stopRec = document.getElementById("rec-stop");
const statusRec = document.getElementById("rec-status");
stopRec.disabled = true // This will disabled the stop recording button, since we haven't started a recording
```

Here we just get the HTML elements so we can use them.

```js
// () => {} This is a arrow function
runButton.addEventListener("click", () => {
	runButton.disabled = true // Disables the run button
    // Executed on run
});

startRec.addEventListener("click", () => {
	startRec.disabled = true // Disables the start recording button
	stopRec.disabled = false // Enables the stop recording buttpn
    // Executed on start rec
});

stopRec.addEventListener("click", () => {
	startRec.disabled = false // Enables the start recording button
	stopRec.disabled = true // Disables the stop recording button
    // Executed on stop rec
});
```

And the event listeners when clicked.

![worker-gif-dot-gif](https://cloud-rln8wm7fd-hack-club-bot.vercel.app/0worker-phew-dot-gif.gif)
Phew that was a **lot**! But we can move over to the next session.
The code snippets are already implemented so no need to worry about that!
This section is purely informative.

Now let's get to the **meat of this jam!**

## THREE.JS Basics

This section will cover the basics of three.js so you can start with the rendering.

### Importing it

Yes, its time! This is where we import THREE.JS for rendering. :D
If you had previous experience with Javascript you may already know how to import things but for those who don't, here is an explanatory Image.
![image](https://cloud-oe00kf8q6-hack-club-bot.vercel.app/0image.png)
For those who have figured it out by the image congrats!
Imports are just requests to another javascript file saying that we want to load something from them.

Now let's add them!
Your javascript lives on the `script.js` file. So all we got to do is add **1 import statements**, well actually 3 because we also got to import the 3D model loader and the orbit controller.

Let's add these 3 lines to the start of the `script.js`.

```js
import * as THREE from "three"; // Imports everything from THREE.JS
import { OrbitControls } from "three/addons/controls/OrbitControls.js"; // Imports the orbit controller
import { OBJLoader } from "three/addons/loaders/OBJLoader.js"; // Imports the 3D model loader
```

### Creating a simple THREE.JS renderer

Well it is time! We will add one of **the most crucial piece of 3D rendering.**
The **RENDERER!** It will handle, well, the rendering :D

Three.js makes this process a **lot less** tedious that it would normally be so let's jump into it.
In the `script.js` paste the following lines:

```js
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
```

In the first line we initialize the THREE WebGL renderer, it will handle the rendering job.
In the second line we set the rendering size and we pass the window width and height.
In the third line we append the renderer, so we can actually see.
<img src="https://cloud-lnspzc1vi-hack-club-bot.vercel.app/1meme_magic.jpg" width="40%"/>

### The coordinate system

Well let's make a quick reference to the **three.js coordinate system**.
Like mostly all 3D applications, three.js utilizes the **Cartesian _coordinate system_**.
Here is a quick illustration of it:
![cartesian_system_illustration](https://cloud-brf44h742-hack-club-bot.vercel.app/0image.png)
As shown above the height uses the **_Y_** variable, the depth uses the **_Z_**, and the width uses the **_X_** variable.
Well that is all you need to know about it! Let's render some cubes! :D

## Adding a camera, sample cubes and cube animation!

Now, it's finally time to do the main part! :)

### Adding a camera

We first need to add a camera so we can render the scene!
To create the camera we will also need a scene first, so let's add that!

Copy this line above the render code, in order to intialize a new scene

```js
const scene = new THREE.Scene(); // Init Scene
```

Then we need to create and add the camera!

```js
const camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
); // Init Camera

// Change camera position
camera.position.z = 16;
camera.position.y = 16 / 4;
```

A perspective camera has 4 parameters, here they are ordered start to finish:

-   FOV: Camera frustum vertical field of view.
-   ASPECT: Camera frustum aspect ratio.
-   NEAR: Camera frustum near plane.
-   FAR: Camera frustum far plane.
    For now use these defaults, if you want to learn more, [click here](https://threejs.org/docs/#api/en/cameras/PerspectiveCamera)

### Now let's add a cube

That would be really easy actually!
So what are you waiting for?

Below the renderer add these lines:

```js
// Materials
const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 }); // We need to add a material, each material takes the arguement inside an object called color. It is in HEX.

// Add the objects
const cube = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), cubeMaterial); // We create a new cube, by default it DOES not exist in the scene
```

Okay I did that, but what is THREE.BoxGeometry, you might say?
Box geometry is the size of the cube, each paramater each paramater is another dimension.
i.e. This cube is 1x1x1

**TIP**
You may reuse the material for more than one cube, but if you want a different color ( or texture in the future ) split them into different variable.
i.e. All wood blocks would use a woodMaterial but glass will use a glass material.

Now let's add them to the scene, in the run arrow function add the following lines:

```js
scene.add(cube);
renderer.render(scene, camera);
```

Now try clicking the RUN button on the browser after reloading, do you see the cube?

Try changing the THREE.BoxGeometry, do you see the cube size changing?

### Changing the position and rotation

Now let's try to change the cube position and rotation.
Each Three object has a position and rotation field, which each of them contains an xyz property.

After adding the cube to the scene copy this code before the `renderer.render`:

```js
cube.position.x = 1;
cube.position.y = -1;
cube.rotation.x = 1;
```

Do you see the cube? Chaning it's position and rotation?
After that you may delete these 3 lines

### Animating the cube

The final piece of this section is the actual animation.
Cope this code to the end of the file:

```js
// Animate Scene
let tick = 0;
function animate() {
    requestAnimationFrame(animate);

    // ANIMATE STUFF HERE

    renderer.render(scene, camera);
    tick++;
}
```

Here we add a tick variable where we keep track of the time, this variable gets increased at the end of the function.
Then we request the frame, and render it.

**At the end of the `run` arrow function don't forget to call it `animate()`!**

Let's make the cube rotate constantly!
After the `requestAnimationFrame` copy this code:

```js
cube.rotation.x += 0.1;
```

This code increases the cubes X axis rotation by .1

Now after that add copy this code below:

```js
if (tick % 64 > 64 / 2 - 1) {
    cube.position.x += 0.1;
} else {
    cube.position.x -= 0.1;
}
```

This code changes the cubes x position by 0.1 and then by -0.1.
Try fiddling with it!

Well it is task time everyone!
![time_meme-dot-jpg](https://cloud-qmjjp049v-hack-club-bot.vercel.app/0meme_time.jpg)

<Dropdown title="Task">
	Add 2 of your own cubes into the scene!
</Dropdown>
## Add Picture as cube surface

Yes you heard that right! Forget the boring colors, let's add real textures!
First upload your picture via dragging and dropping it in the `assets/` folder.
I will name mine `cube.jpg`

First we need to create a loader to **load** the image.
Copy this code above the materials.

```js
const loader = new THREE.TextureLoader();
```

This just creates a loader, now we need to _import_ the images.

In the cube material replace the
`color: 0xWHATEVER` with
`map: loader.load('assets/cube.png')`

i.e.

```js
const cubeMaterial = new THREE.MeshBasicMaterial({ map: loader.load('assets/cube.png') });
```

That is **it**! Wasn't that easy?

## Three.js must haves

Here are some features that you **must have** in your applciation.

### Skybox

Well a black void is boring, I hope we can all agree with that!
A skybox was already in the template in the `assets/skybox.png` :D
Isn't that handy, you may replace it of course!

Now between the loader and the materials copy this code:

```js
scene.background = loader.load("assets/skybox.jpg");
```

This will set the background to the `assets/skybox.png`, isn't that handy!

### Background Audio

Now let's add some audio.
The audio takes place at the end of the run arrow function, just **before** the animate
Copy this code into there:

```js
const listener = new THREE.AudioListener(); // We create the listener
const soundSettings = new THREE.Audio(listener); // >> >> the audio settings
const audioLoader = new THREE.AudioLoader(); // >> >> the audio loader, so we can load the bg
camera.add(listener); // We attach it to the camera

audioLoader.load("assets/bg.mp3", function (buffer) {
    soundSettings.setBuffer(buffer);
    soundSettings.setLoop(true); // Set the audio to loop
    soundSettings.setVolume(0.5); // Audio volume
    soundSettings.play(); // Play Audio
});
```

Well that is it!
It will play the `bg.mp3` that is located in the `assets` folder!

<Dropdown title="Optional Task">
	Find your own background lofi music and import it into your project, so you can play it instead.
</Dropdown>
### Camera rotations

I think we can agree that static cameras are boring so let's make ours to rotate!

So what are you waiting! After the initialising the render copy these lines:

```js
// Controls
const controls = new OrbitControls(camera, renderer.domElement); // Create control
controls.target.set(0, 0.5, 0); // Set target
controls.update(); // Update it
controls.enablePan = false; // Disable pan
controls.enableDamping = true; // Enable damping
```

Now the last thing we need to do is call it at the end of our render function!
Just copy this line, before the render!

```js
controls.update();
```

Congrats! Now you can rotate the camera! Isn't that fun!

We are **so near** the end of our sessions so please wait a bit more before you can master Voxel animations :D

## The recording

Phew it is almost time for your solo adventure.

### Adding the capturer

Well the first thing we need to do is add the capturer so we can use it. Copy this code just after the imports:

```js
var capturer = new CCapture({
    format: "webm",
    workersPath: "/lib/",
    verbose: true,
    framerate: 60,
}); // Format may be: GIF, WEBM, PNG, JPG
```

Feel free to change the video format.

Now we need to add one more line just before the `renderer.render` function call on the `animate` method. Copy this line:

```js
capturer.capture(renderer.domElement);
```

### Start the recording

To start the recording it is very simple!
On the `Executed on start rec` comment copy these lines:

```js
capturer.start(); // Start the capturer
statusRec.innerText = "Recording in progress"; // Update the status
```

Well that is everything you need to add to start the recording, now let's end and save it.

### Stop the recording

Well again on the `Executed on stop rec` comment copy these lines:

```js
capturer.stop(); // Stop rhe capturer
capturer.save(); // Save the recording
statusRec.innerText = "Saving recording... This *may* take a while"; // Update status
```

**WARNING FOR ADVENTURERS: THE CAPTURE FUNCTIONALITY WORKS ONLY WHEN THE PREVIEW IS OUTSIDE REPLIT**.

## Start of your SOLO adventure

It is finally time! I hope you learned enough to start on your own.
Just remember these tips!

```txt
TIPS
1) Save all objects into variables
2) Create new materials for new objects, reuse materials for similar ones
3) Add objects to the scene on the run methid
4) Change object position.rotation on run method *after* adding them to the scene.
5) Use the tick variable to keep track of time in your animations
6) Feel free to seek the demo code for more examples
```

Farewell traveler!
<img src="https://media1.giphy.com/media/6VriQO3GFRwwBVPbi4/giphy.gif?cid=ecf05e474dx0omnat02vthuv0n1komd3yefmcqhqljwguudnandep=v1_gifs_searchandrid=giphy.gif" width="25%"/>

**But** before I leave here are some useful materials.

-   [THREE.JS DOCUMENTATION](https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene)

Note for **advanced** adventures: This file will continue on adding your own 3D `.objs`, as well as lighting and scaling. If you have more time, you are free to check them out.

---

## 3D Models

Well hello there!
It looks like you wanted to learn more, let's start with 3D models.

### Creating your own 3D model

I suggest using [this]([Goxel 0.10.5](https://goxel.xyz/live/)) tool for creating a 3D voxel model, because it is easy to use and it is **online**.
After creating a model follow this guide:
![export](https://cloud-de7xkh2bp-hack-club-bot.vercel.app/0image.png)
Instructions as show above:

1. Click the image button, it is known as **export**
2. Click the `export as` dropdown
3. Click `Wavefront (.obj)`

After clicking export, save and upload the `.obj`
Then upload it into the `assets/` folder.

### Loading the model

Now upload the model loader, copy this line after the texture loader.

```js
const modelLoader = new OBJLoader();
```

Then after all of the `scene.add` calls, load the model like this, change the `name.obj` to your `.obj` name.

```js
modelLoader.load(
    "assets/name.obj",
    (obj) => {
        console.log("Model: NAME, loaded");
        // Change position, rotation, scale here
        obj.position.x = -1;
        scene.add(obj);
    },
    undefined,
    undefined
);
```

Well that is it for loading 3D models!
You should now see it but we have a slight problem, uhhh, it is a bit oversized isn't it, let's fix that.

## Object Lighting and Scaling

### Scaling

As you saw the model is a bit **too large** to fit in to the scene, so let's change it's scale.
On the arrow function change you can manipulate it's position, rotation or scale!

To scale you will use the `.scale.set(x, y, z)` method.
i.e.

```js
obj.scale.set(0.1, 0.1, 0.1); // Set's the object xyz scale to .1
```

Now let's implement it to the model:

```js
modelLoader.load(
    "assets/name.obj",
    (obj) => {
        console.log("Model: NAME, loaded");
        // Change position, rotation, scale here
        obj.position.x = -1;
        obj.scale.set(0.1, 0.1, 0.1);
        scene.add(obj);
    },
    undefined,
    undefined
);
```

That should be it, but uhhh, new issue.
The model is black, without any color.

### Lighting

Well to see it, you need lighting! :D

For that THREE.JS has a light object, here is how to declare and add it in the scene.
Copy this code at the end of the `scene.add` calls:

```js
scene.add(new THREE.AmbientLight(0xFFFFFF, 1)); // Add light so we can see the models
```

Well now you should be able to see the models!
And you now have reached the end! Congrats! I hope you make a **fine and awesome** jam.
I know you can do it!
