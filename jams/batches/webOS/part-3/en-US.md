---
part: part-3
title: 'Make Your Window Draggable, Closable, and Openable'
batch: webOS
description: >
  In this Jam, you'll be creating an awesome welcome screen for your personalOS.
  It will be plenty of fun and you'll have an awesome-looking one-of-a-kind product
  that you'll build upon in subsequent Jams.
contributor: SerenityUX
thumbnail: 'https://cloud-krjyl66w8-hack-club-bot.vercel.app/0ezgif-4-16a8db518b.gif'
timeEstimate: '30 Min'
difficulty: Intermediate
keywords: 'Web, os, personalOS, webOS, website, javascript, html, css, replit'
language: 'HTML & CSS'
presentation: 'https://www.figma.com/file/KxIYo80ojSHmEisOtn6MqC/webOSPart3?type=design&node-id=0%3A1&mode=design&t=oo06lQb0NF9vKcpc-1'
presentationPlay: 'https://www.figma.com/proto/KxIYo80ojSHmEisOtn6MqC/webOSPart3?page-id=0%3A1&type=design&node-id=1-2&viewport=-3713%2C136%2C0.13&t=wIV03vQshi9kngPz-1&scaling=contain&starting-point-node-id=1%3A2&mode=design'
presentationPDF: 'https://cloud-6elyts7vs-hack-club-bot.vercel.app/0webospart3.pdf'
notes: 'https://cloud-o944bwtfx-hack-club-bot.vercel.app/0a_parent_s_guide_to_epoch.pdf'
poster: 'https://cloud-o944bwtfx-hack-club-bot.vercel.app/0a_parent_s_guide_to_epoch.pdf'
video: 'https://cloud-cq9o4h1mp-hack-club-bot.vercel.app/0movie_on_7-7-23_at_10.08_am.mp4'
totalParts: 5
---

Surpassed my expectations, young one, you have. Confront your fears, you must, for a Jedi JavaScript master you have the potential to become.
 
Today we're going to be making our windows movable and throwing in some JavaScript magic (you'll see later what I mean by this).  Here's what that looks like:

![Sample Outcome Gif](https://cloud-1v30rbp0i-hack-club-bot.vercel.app/00gif.gif)

**Outline:**
1. **Organizing Our Logic**
2. **Making Our Window Movable**
3. **Adding a Handle**
4. **Opening & Closing the Window** 
5. **Organizing Our Styles**

## Organizing Our Logic
Our index.html file is getting a bit messy. Let's try splitting our Logic (JavaScript) from our Content (HTML) by moving the JavaScript code to it's own `script.js` file.

![splitting files](https://cloud-pfegd9qpz-hack-club-bot.vercel.app/0twofiles.gif)

As a reminder, this is what my code looked like at the end of the last Jam:
<Dropdown title="My Code (pls don't copy paste)">
```html
<!DOCTYPE html>
<html>
<body
  style="font-family: Noto Sans, system-ui, sans-serif; height: 100vh; background-image: url(./beautifulImage.png); background-size: cover; background-repeat: no-repeat; margin: 0px;">

  <div style=" border: solid; padding: 16px; border-radius: 16px; width: fit-content; position: absolute; top: 50%; left:
  50%; transform: translate(-50%, -50%); background: #fff; justify-content: center;">

    <img src="https://cloud-pc8imajxj-hack-club-bot.vercel.app/1img_1181.jpg"
      style="width: 64px; height: 64px; border-radius: 32px; object-fit: cover;" />
    <h1 style="margin: 4px;">thomasOS</h1>
    <p style="margin: 0px;">
      <dfn>ThomasOS</dfn> is a feature-limited <abbr title="Operating System">OS</abbr> to answer the <br />
      unanswerable
      question of <code>"who is Thomas?"</code>
    </p>
  </div>

  <div
    style="position: absolute; width: 100%; display: flex; backdrop-filter: blur(10px); background-color: rgba(0, 0, 0, 0.125); color: #fff; justify-content: space-between; gap: 32px;">
    <p
      style="margin-left: 16px; font-weight: 700; background-color: rgba(256, 256, 256, 0.125); padding: 4px 12px; border-radius: 16px;">
      ThomasOS
    </p>
    <p style="margin-left: 16px; background-color: rgba(256, 256, 256, 0.25); padding: 4px 12px; border-radius: 16px;">
      ☀️ Always Learning ☁️
    </p>
    <p id="timeElement"
      style="margin-right: 16px; background-color: rgba(256, 256, 256, 0.125); padding: 4px 12px; border-radius: 16px;">

    </p>
  </div>

  <script>
    function updateTime() {
      var currentTime = new Date().toLocaleString();
      var timeText = document.querySelector("#timeElement");
      timeText.innerHTML = currentTime;
    }

    setInterval(updateTime, 1000);

  </script>

</body>

</html>
```
</Dropdown>


Let's take that JavaScript logic and paste it into the script.js file (which you'll see on your file manager).

### Connecting Script File to HTML File
Inside of our HTML file we display what the user sees in the body tags. To make a reference to our script file, we need to make a script tag in at the bottom of our body element and set the source to our script file. 

```html
<body>
	(content)
  <script src="script.js"></script>
</body>
```


### Celebration
![time works](https://cloud-9pbmhw7on-hack-club-bot.vercel.app/0screenshot_2023-06-22_at_3.21.44_pm.png)
Great, it worked! Now going forward we'll write our JavaScript code in script.js and our HTML in index.html.

## Making The Window Movable

![Draggable](https://cloud-1didasla4-hack-club-bot.vercel.app/0draggable.gif)
Making the window move is honestly one of the more difficult parts of this Batch. Let's see if we can find an online resource that can help us out...

*one google search later*

Ah yes here we go:  [How To Create a Draggable HTML Element W3 School](https://www.w3schools.com/howto/howto_js_draggable.asp)

According to this site, we need to 
1) apply an id to our welcome window div
1) make it display absolute (already done ✅)
2) create a function for dragging the element (that gets the position of the cursor and sets the position of the element to the position of the mouse)
3) run said function on the welcome window div. 

### Identifying the Welcome Screen
Let's slap an id on the welcome screen
```html
<div id="welcome" styles="(styles)">
	(welcome screen content)
</div>
```

### Grabbing the Dragging Logic
Let's take the code provided by W3 School and drop it into our script.js file. Here's the the code provided on the W3 School site (we adjusted some of the variable names to make it more readable):

```javascript
// Make the DIV element draggable:
dragElement(document.getElementById("mydiv"));

// Step 1: Define a function called `dragElement` that makes an HTML element draggable.
function dragElement(element) {
  // Step 2: Set up variables to keep track of the element's position.
  var initialX = 0;
  var initialY = 0;
  var currentX = 0;
  var currentY = 0;

  // Step 3: Check if there is a special header element associated with the draggable element.
  if (document.getElementById(element.id + "header")) {
    // Step 4: If present, assign the `dragMouseDown` function to the header's `onmousedown` event.
    // This allows you to drag the window around by its header.
    document.getElementById(element.id + "header").onmousedown = startDragging;
  } else {
    // Step 5: If not present, assign the function directly to the draggable element's `onmousedown` event.
    // This allows you to drag the window by holding down anywhere on the window.
    element.onmousedown = startDragging;
  }

  // Step 6: Define the `startDragging` function to capture the initial mouse position and set up event listeners.
  function startDragging(e) {
    e = e || window.event;
    e.preventDefault();
    // Step 7: Get the mouse cursor position at startup.
    initialX = e.clientX;
    initialY = e.clientY;
    // Step 8: Set up event listeners for mouse movement (`elementDrag`) and mouse button release (`closeDragElement`).
    document.onmouseup = stopDragging;
    document.onmousemove = dragElement;
  }

  // Step 9: Define the `elementDrag` function to calculate the new position of the element based on mouse movement.
  function dragElement(e) {
    e = e || window.event;
    e.preventDefault();
    // Step 10: Calculate the new cursor position.
    currentX = initialX - e.clientX;
    currentY = initialY - e.clientY;
    initialX = e.clientX;
    initialY = e.clientY;
    // Step 11: Update the element's new position by modifying its `top` and `left` CSS properties.
    element.style.top = (element.offsetTop - currentY) + "px";
    element.style.left = (element.offsetLeft - currentX) + "px";
  }

  // Step 12: Define the `stopDragging` function to stop tracking mouse movement by removing the event listeners.
  function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
```
*(btw you'll notice comments inside of the javascript marked by `//` which are segments of code that do not perform any function but rather make the code significantly more readable)*

Super confused? Here's what is happening:
The awesome `dragElement` function lets you drag and move the window around. It takes in an element and then adds this ability to it. The function captures the window's starting position and keeps track of its current position. 

If there's a header element (like a handle), it hooks up the magic of dragging to it (but not the rest of your window). But even without a header, you can still grab and move that window from anywhere inside it. 

![Handle Draggable](https://cloud-ojqjpbzs3-hack-club-bot.vercel.app/0handledraggable.gif)
*(in the example above, the pencil if your window's handle)*

The `startDragging` function is in charge of getting things rolling, capturing the initial mouse position and setting up the moves and release. 

As you move your mouse, the `dragElement` function works its magic, calculating the new position of the window and smoothly updating it on the screen. 

When you're done with the dragging extravaganza, the `stopDragging` function steps in and says, "No more mouse tracking!" by removing the event listeners. Now, go forth and drag those windows!!! (btw if this doesn't totally make sense, don't stress! You'll get it with time.)

### Applying The Dragging Logic
Let's change the first line of code to select window instead of "mydiv"

```javascript
dragElement(document.getElementById("window"));  
```


Waaahooooooo 
Our div is moving!

## Adding A Handle
If we look at the code provided by W3 School:
```javascript
if (document.getElementById(elmnt.id + "header")) {
	// if present, the header is where you move the DIV from:
	document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
} else {
	// otherwise, move the DIV from anywhere inside the DIV:
	elmnt.onmousedown = dragMouseDown;
}
```

the provided code segment above indicates that if we create an element with the name of our element and "header", then we'll be able to make it only draggable from that element. 

Let's see if it actually works

(back to our HTML File inside of our page body)
```html
<div id="welcome">
	<p id="welcomeheader"> 
		Handle
	</p>
</div>
```

Awesome

![Handle Added](https://cloud-l4ck638kz-hack-club-bot.vercel.app/0osmove.gif)

<Comment githubUser="jianmin-chen">
Hey... the creator of this Jam missed out on a huge upgrade to the site, but dw, I'll let you in on the inside scoop. You can avoid annoying underlining of the handle text on drag by adding `user-select: none;` & `cursor: grab;`
</Comment>

Now it's time for you to customize your handle and make it look hover you'd like. Perhaps:

1) Add an icon as an image that conveys that the window can be dragged from that point
2) Place the handle in the div at the top and style similar to a traditional window
3) Make the "Handle" text look quite cool and leave it as text
4) Make it look like a door handle



Here's what I decided to do (I hope yours looks nothing like this)
![Window Screen Effect](https://cloud-n6ytrol13-hack-club-bot.vercel.app/0gif.gif)

<Dropdown title="My Code (please don't copy!)">
```html
  <div id="welcome"
    style="border: solid; display: flex; flex-direction: column; border-radius: 16px; position: absolute; top: calc(50% - 90px); left: calc(50% - 180px); backdrop-filter: blur(4px); background-color: rgba(0, 0, 0, 0.125); ">
    <div id="welcomeheader"
      style="width: 100%; display: flex; align-items: center; cursor: move; justify-content: center; margin-top: 8px;">
      <p style="margin: 0px; color: #fff; font-weight: 500">Welcome</p>
    </div>
    <div style="background-color: #fff; margin: 6px; border-radius: 12px; width: 360px; padding: 16px;">
      <img src="https://cloud-pc8imajxj-hack-club-bot.vercel.app/1img_1181.jpg"
        style="width: 64px; height: 64px; border-radius: 32px; object-fit: cover;" />
      <h1 style="margin: 4px;">thomasOS</h1>
      <p style="margin: 0px;">
        <dfn>ThomasOS</dfn> is a feature-limited <abbr title="Operating System">OS</abbr> to answer the <br />
        unanswerable
        question of <code>"who is Thomas?"</code>
      </p>
    </div>
  </div>
```
</Dropdown>



## Opening & Closing The Window

Alright, so let's break down this challenge
1) We need a way to toggle whether the window is visible
	* We can use the display property (which can be set to none)

2) We need to create a function to open the window 
	* We can pass in an element and enable its visibility

3) We need to create a function to close the window
	* We can pass in an element and disable its visibility

4) Create buttons for opening & closing the window
	* using the onClick function on our elements we can run these functions

### Identifying Our Window
We already have an id on our welcome window of "welcome".

We can identify it in JavaScript using a querySelector. 

In our script.js file, let's select our window:
```javascript
var welcomeScreen = document.querySelector("#welcome")
```

### Close Window Function
Next, let's create a function for disabling its visibility
```javascript
function closeWindow(element) {
  element.style.display = "none"
}
```

Let's break this down.

First we're declaring that we're creating a function with the `function` keyword. Next, we're naming this function as `closeWindow` and passing in a parameter of `element`.

![function explained](https://cloud-fe4ozqgl1-hack-club-bot.vercel.app/0functionsexplained.gif)

Still not sure what a function is?
<Dropdown title="Explanation for the mathematical Hackers">
 If you have a mathematical background (which to be clear, you don't need to understand this concept), you're probably already familiar with parameters. For example, if you have a function of f(x) you're passing the parameter of x into the f function and returning a value. 
 </Dropdown>

<Dropdown title="Explanation for the non-mathematical Hackers (& those who like coffee)">
If you don't have a mathematical background, think of a function like a machine with a certain task (let's say making a coffee) that is given parameters as to the specific order (like saying to make it have almond milk, Vermont maple syrup, etc) so the machine can have one operation but respond to the individual request accordingly. 
</Dropdown>

We take the element passed into the function, access the style property, and then the display property inside of the style property and change the value to "none" which hides it. 

### Open Window Function
I typically make my windows with the display type of flex. If you try this & it breaks your window by stacking items horizontally, try adding the flex-direction: column property to your window element.

```javascript
function openWindow(element) {
  element.style.display = "flex"
}
```

*Note: If you don't want to use flex, you can also set the value of your windows to "block" and get the same effect.*

*Note: If you still don't understand flex, play [the flex box froggy game](https://flexboxfroggy.com/)!*

### Creating Window Buttons

#### Creating Close Button
![closeButton](https://cloud-ez4upags8-hack-club-bot.vercel.app/0ezgif-4-aa4608bdb3.gif)

Let's create a close button inside of our window:
```html
	<p style="cursor: pointer" id="welcomeclose">Close</p>
```
For now, I just created some text that says "Close".

#### Creating Open Button
![make Appear](https://cloud-k7h5sxshx-hack-club-bot.vercel.app/0makeappear.gif)

I am going to use the "ThomasOS" text in my top-bar to open the Welcome Screen, so I already have that button. 

I added an id of "welcomeopen"
```html
	<p style="cursor: pointer" id="welcomeopen">ThomasOS</p>
```

I encourage you to create your own button for opening the window if you'd like! You can put it in the top-bar, or opt not to. 

#### Identifying the buttons
Let's select them with the IDs we created
```javascript
var welcomeScreenClose = document.querySelector("#welcomeclose")

var welcomeScreenOpen = document.querySelector("#welcomeopen")
```

#### Adding Event Listeners
![event listener](https://cloud-iddmheipf-hack-club-bot.vercel.app/0ezgif-4-a94447ecbc.gif)
An event listener waits for a specific action to happen and then runs a function when said action happens. In this case, we're waiting for a click to trigger a function.

```javascript
welcomeScreenClose.addEventListener("click", function() {
  closeWindow(welcomeScreen);
});

welcomeScreenOpen.addEventListener("click", function() {
  openWindow(welcomeScreen);
});

```

*Note: There are a lot of event listeners, but don't worry you don't need to memorize all of them. It may be fun to give a look at [this list of event listeners supported by the browser](https://www.w3schools.com/jsref/dom_obj_event.asp)*

#### Styling Your Close Button
I made by button a red circle (this is a div with a set width and height, a border-radius, and a background-color). 

You can make a circle or whatever else you'd like. You can even keep it as text if you'd like to.

![my close button](https://cloud-ei3yo5kb7-hack-club-bot.vercel.app/0currentversion.gif)
<Dropdown title="My Code (don't steal">
```html
    <div id="welcomeheader"
      style="width: 100%; display: flex; align-items: center; cursor: grab; justify-content: space-between; margin-top: 8px;">
            <div id="welcomeclose" style="width: 16px; height: 16px; cursor: pointer; background-color: #EC6B5E; border-radius: 16px; border: solid 1px rgba(0, 0, 0, 0.25); margin-left: 6px;"></div>

      <p style="margin: 0px; color: #fff; font-weight: 500">Welcome</p>
      <div style="width: 16px; margin-right: 6x; height: 16px;"></div>
    </div>
```
</Dropdown>

## Organizing Our Styles
Windows have a lot in common. Wouldn't it be so annoying & ineffective it would be if every time you created an application, you had to redefine the close button, the top-bar, etc.

How can we define the styles once and then just reuse infinitely? 

### Introducing CSS Classes
So you didn't know it, but all along you've been writing in-line CSS. There's another flavor of CSS which I am going to call class-based CSS *(because out-of-line CSS just sounds a bit strange)*

1) We need to link our HTML file to our CSS file
```html
<head>
  <script type="module" src="./script.js"></script>
  <link rel="stylesheet" type="text/css" href="style.css" />
</head>
```
2) We need to mark an object as belonging to a particular class in our HTML file inside the opening tag of an element 
```html
    <div class="closebutton" id="welcomeheader"
      style="(styles)">
    </div>
```

*Note: you can place classes on any element, not just divs*

3) We need to go into our style.css file (which already exists btw) *(dw about dragElement.js, that shouldn't be on your screen)*
![image of select style](https://cloud-9ll11kgre-hack-club-bot.vercel.app/0selectstyles.gif)

4) Inside of the style.css file we need to write . and then the name of the class and then place styles inside of the curly brackets `{}` on separate lines separated by a semicolon.
```css
.className {
	property1: 5;
	property2: "16px";
	property3: "hidden";
}
```

5) Let's place our styles for our close button 

**Put your styles for the close button. DO NOT COPY THESE STYLES!**
```css
.closebutton {
  width: 16px;
  height: 16px;
  cursor: pointer;
  background-color: #EC6B5E;
  border-radius: 16px;
  border: solid 1px rgba(0, 0, 0, 0.25);
  margin-left: 6px;
}
```


3) Let's now delete those in-line styles we put in the initial div 
```html
<div class="closebutton" id="welcomeclose"></div>
```

Let's now do the same for our window header and our window. We're doing this so we can easily add new windows without too much complexity. 

```html
<div class="window" id="welcome" style="top: calc(50% - 90px); left: calc(50% - 180px); ">
    <div class="windowheader" id="welcomeheader">
    ...
    </div>
</div>

```

We may want to customize the positioning of the window, so I am leaving that as in-line and moving the rest to the CSS file:

Here's what my new CSS classes look like (inside the CSS file):
```css
.window {
  border: solid;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  position: absolute;
  backdrop-filter: blur(4px);
  background-color: rgba(0, 0, 0, 0.125);
}

.windowheader {
  width: 100%;
  display: flex;
  align-items: center;
  cursor: grab;
  justify-content: space-between;
  margin-top: 8px;
}

.headertext {
  margin: 0px;
  color: #fff;
  font-weight: 500
}
```

**NOTE MAKE SURE YOU USE YOUR STYLES AND NOT MINE!!!** 

Now adding additional windows will be easy because we can mark those windows with the class property and automagically have the styles applied! 

## Next Episode...
Congrats, your operating system is starting to feel quite real. You can now move, open, and close your welcome screen, but imagine how lame your computer would be if it could only open a single welcome screen! 

You need to make your first app, and that's exactly what we'll be doing in our next episode.

I'll see you there!