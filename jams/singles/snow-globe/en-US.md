---  
title: 'Making a Custom Digital Snowglobe'  
description: >  
  This Jam leads participants through a journey of creating their very own custom digital snowglobe that can even react to device motion!
contributor: 'VelocityDesign'  
thumbnail: 'https://cloud-p1ygej9qi-hack-club-bot.vercel.app/0frame_1.png'
timeEstimate: '60 Min'
difficulty: 'Intermediate'
keywords: 'Snowglobe, Snow, Fun, website, javascript, HTML, CSS, replit, custom'
language: 'HTML, JS'
presentation: 'https://example.com/to_be_added/'
presentationPlay: 'https://example.com/to_be_added/'
presentationPDF: 'https://example.com/to_be_added/'
notes: 'https://example.com/to_be_added/'
poster: 'https://example.com/to_be_added/'
video: 'https://example.com/to_be_added/'
slug: 'snow-globe'

---

# Introduction
![[Pasted image 20230719001827.png]]
> It's scientifically proven!

![[Pasted image 20230719002142.png]]

# The Basics
## Setting the Page Up
Every good project starts with a plan! Here, we'll link to some essential libraries and lay out the page. We'll be using basic HTML, intermediate CSS, and more advanced JavaScript, but it's really easy to figure out!

> [For a video on some HTML basics, click here!](https://www.youtube.com/watch?v=salY_Sm6mv4)

### 🦴 Add the Skeleton
While some skeletons are spooky-scary, these skeletons are actually really useful! A page skeleton is just the basic HTML that every website should have, such as a `<!DOCTYPE>`, `<html>` tags, and a `<head>`/`<body>`.

> For more information on the basics of an HTML page, watch (LINK TO BE ADDED)

### ⛓ Linking Libraries
Now, to link the `tsParticles` library.
tsParticles is available as a single file from JSDeliver. Link to it using a `<script>`  tag at `https://cdn.jsdelivr.net/npm/tsparticles@2.11.0/tsparticles.bundle.min.js`.
(Hint: `<script src="https://cdn.jsdelivr.net/npm/tsparticles@2.11.0/tsparticles.bundle.min.js"></script>`)

### Lay it all Out
To lay out our page, we'll be using `div`'s (inside of the `<body>` tag) which allow us to split the page into separate areas. They can be nested inside of each other and stylized with CSS. Let's make a `snowglobe` div with sections `particles` and `ground`...

```html
...
<div id="snowglobe">
	<div id="particles">
	</div>
	<div id="ground">
	</div>
</div>
...
```

We'll leave these `div`'s empty, but they'll serve an important role in laying out our page.

### 🖌 Make it look ✨ fabulous ✨
CSS is a language that allows us to style HTML pages! With it, we can resize elements, change fonts, mess with colors, and even animate things!

To start, let's reset all of the spacing!

```css
* {
	padding: 0;
	margin: 0;
}
```

Next, we'll set up flex display on body. Make sure to set its `flex-direction` to `column`. Additionally, we'll make the body fill the whole viewport, set its background color (feel free to change this! this is the page background, not the snowglobe background), and make it center all the items with `justify-content` and `align-items`.

```css
body {
	/* Set up flex display */
	display: flex;
	flex-direction: column;
	
	/* Fill the whole viewport */
	width: 100vw;
	height: 100vh;
	overflow: hidden; /* Hide all overflow */
	
	/* Center the items */
	justify-content: center;
	align-items: center;
}
```

> [For more information on Flex, read this article!](https://www.w3schools.com/css/css3_flexbox.asp)

Now, we'll set up the globe itself. First, we'll want to make the globe take up as much of the screen as possible. To do this, we'll use CSS's `vmin` unit to use the smallest screen dimension as a reference. To add some margin, we'll only want to take up around 85% of this space (so... `85vmin`). Next, we'll set the background to a nice, balmy blue (`#45b3e0`, to be exact.) After that, we'll round off the snowglobe by setting `border-radius` to 100%. We'll hide the `overflow` in order to keep things within limits. Then, we'll set the `margin` to `auto` in order to make the globe flow nicely within its new home. Finally, we'll add a nice glow effect!

```css
#snowglobe {
	/* Set the sizing*/
	width: 85vmin;
	height: 85vmin;
	
	/* Nice, but temporary, background */
	background: #45b3e0;
	
	/* Make the globe round */
	border-radius: 100%;
	overflow: hidden;
	
	/* Add some nice spacing */
	margin: auto;
	
	/* And finally, add a nice glow*/
	box-shadow: 0px 0px 20px 35px #FFFFFF05;
}
```

Adding the ground and particle settings are easy at this point... we'll have the ground take up just 25% of the snowglobe and leave the rest to the sky.

```css
#particles {
  height: 75%;
  width: 100%;
}

#ground {
  height: 25%;
  width: 100%;
  background: #bebebe; /* You can change this now or later if you want */
}
```

#### Bonus: A shake animation!
If you want, we can add a fun little shake animation for whenever the snowglobe is activated! First, we'll add some springy keyframes. Then, we'll add a class called "shake" that we'll add to the snowglobe once it's activated.

```css
@keyframes shake {
	0%,
	100% {
    transform: rotate(0deg);
	}
	
	25% {
    transform: rotate(15deg);
	}
	
	50% {
    transform: rotate(-15deg);
	}
	
	75% {
    transform: rotate(10deg);
	}
}

.shake {
  animation: shake 1s;
}
```

> [Read more about CSS Animations here!](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)

### Script it up!
Now, after everything else is done, let's get the dirty work done!

First, we'll add another script tag after the `snowglobe` div. Inside, we'll start writing some javascript. Let's declare some variables real quick...

```js
	// Select the globe
	let globe = document.getElementById("snowglobe");
	
	// Declare particles
	let particles;
```

Next, we'll add a function that will help us later on with activating the snowglobe when a device is shaken. This will accept an input event from the motion sensor on a device and calculate the magnitude with which the device was shaken.

```js
	// Declare function for calculating Gyro activity
	function calculateAcceleration(event) {
		const {x, y, z} = event.accelerationIncludingGravity;
		const accelerationMagnitude = Math.sqrt(x * x + y * y + z * z);
		return accelerationMagnitude;
	}
```

Finally, we'll add the function to handle shaking activation!

```js
	function shakeItUp() {
		particles.play();
		
		// Only include this code if you're making the shake animation
		globe.classList.add("shake")
		setTimeout(() => {globe.classList.remove("shake")}, 1100)
	}
```

### ↕ Choices, choices

> TODO: Add code to load particles.json

# Customization
At this point, you have a nice, amazing snowglobe. Congratulations 🎉
However, it's looking like all of these snowglobes are the same...

![[Pasted image 20230719001139.png]]

Let's fix that by spicing them up a bit!

## Setting the Setting (Adding a background)

### Adding an Image
Adding an image is super simple! If you don't have an image you'd like to use already, you can find one on a free service like [Unsplash!](https://unsplash.com/) 

![[Pasted image 20230720185932.png]]
> For example, this one.

Download the image and add it to the website folder (Err- upload it to your repl!) For simplicity, let's rename the file to `background.jpg` (or `.png`, etc.) Now, go into the CSS for the `#snowglobe` element. Let's change up that background...

```css
#snowglobe {
	background: url('/background.jpg') center/cover;
}
```

Now, if you want to change up the position of the image within the globe, just change `center` in `center/cover`  to another location such as `right`, `top`, or `bottom`.

![[Pasted image 20230720185901.png]]
> Hurrah, cool mountains!

### Adding a Gradient
To keep it simple, you can use a tool like [cssgradient.io](https://cssgradient.io/) to generate a cool gradient background. Once you're done, all you need to do is copy the part that starts with `linear-gradient`.

![[Pasted image 20230720191610.png]]
> Just the highlighted part!

Next, go into the CSS for the `#snowglobe` element. Let's change up that background...

```css
#snowglobe {
	/* You'll replace the gradient here with your own */
	background: linear-gradient(4deg, rgba(134, 100, 0, 1) 0%, rgba(121, 9, 9, 1) 32%, rgba(4, 0, 70, 1) 100%);
}
```

![[Pasted image 20230720184839.png]]
> A cool sunset made with the gradient `linear-gradient(4deg, rgba(134, 100, 0, 1) 0%, rgba(121, 9, 9, 1) 32%, rgba(4, 0, 70, 1) 100%)`

If you want an extra cool challenge, try animating it! See [the section on animation above](#### Bonus: A shake animation!) and try to figure it out for yourself!

> If you'd like to learn more about CSS Gradients, you can read this article from MDN!

## It's raining, It's pouring! (Change what's falling)

## Twinkle, Twinkle (Add some music)