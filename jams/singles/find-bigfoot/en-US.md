old meta:
---
name: Hide and Seek
description: Simple game to find an object using HTML, CSS and JS
author: '@ad510, @qmogh'
jam_author: Sarthak Mohanty
img: "https://cloud-7l9wzh1fc-hack-club-bot.vercel.app/0demo.png"
---

# Hide and Seek

In this workshop, you will make a hide and seek game. It will look like this:

![Preview of final project](https://cloud-4q93rtckk-hack-club-bot.vercel.app/6final_screenshot.gif)

Links to a live demo and the final code below. This workshop should take around 1 hour.

[**Live Demo**](http://prophetorpheus.github.io/find_bigfoot/)

[**Final Code**](https://github.com/prophetorpheus/prophetorpheus.github.io/tree/master/find_bigfoot)

---

**On the way, you will:**

- Learn how to do event handling and how to create pop-up boxes in JavaScript.
- Set a background image for a web page.
- Directly set the coordinates of an element.
- Most importantly, practice Googling so you can become an independent hacker.

## Set Up the Project

Open a new HTML project on [**repl.it**/languages/html](https://repl.it/languages/html)

## Creating the Game

So now you have to put an **image** of something you want to hide into your game, like you did in the [Personal Website](../personal_website/) workshop. To add an image, we use:

```html
<img src="[URL]" />
```

When you're done, you should see your object you want to hide in the live preview, like this:

![A human-like figure on a mostly blank webpage](https://cloud-4q93rtckk-hack-club-bot.vercel.app/1bigfoot_image.png)

And the `index.html` file looks like this:

```html
<!DOCTYPE html>
<html>
  <head></head>
  <body>
    <img src="bigfoot.png" />
  </body>
</html>
```

### Telling the Player When The Object Has Been Found

A game needs interaction in order to be a game, so let's display a pop-up box whenever the player clicks on the hidden object, like this:

![Popup with text saying "Wohoo, you win! You found bigfoot!"](https://cloud-4q93rtckk-hack-club-bot.vercel.app/2bigfoot_popup.gif)

How can you do that?

One of the most important skills towards becoming an independent hacker is knowing how to Google things when stuck. So let's start by Googling "[HTML handle click](https://www.google.com/search?q=html+handle+click)":

> ![List of search results for the query HTML handle click](https://cloud-4q93rtckk-hack-club-bot.vercel.app/7google_html_handle_click.png)

Clicking the first link takes you [here](http://www.w3schools.com/jsref/event_onclick.asp):

> ![Example showing a code snippet, description, and button to try it yourself](https://cloud-hs5sxv0us-hack-club-bot.vercel.app/0w3schools_onclick.png)

Aha! It looks like whenever you put `onclick="myFunction()"` on a tag such as `button` or `img`, it executes the [**JavaScript**](http://www.w3schools.com/js/) code you put in the quotes whenever that tag is clicked on.

For one moment:

- HTML controls the content of the page
- CSS controls the styling & layout
- JavaScript controls the functionality & interactivity

We want our JavaScript code to display a pop-up box saying you've won. So now let's Google "[JavaScript pop-up box](https://www.google.com/search?q=javascript+popup+box)":

> ![List of search results for the query 'javascript popup box'](https://cloud-4q93rtckk-hack-club-bot.vercel.app/9google_javascript_popup_box.png)

The first link takes you [here](http://www.w3schools.com/js/js_popup.asp):

> ![Example with code snippet, description, and button to try it yourself](https://cloud-hs5sxv0us-hack-club-bot.vercel.app/1w3schools_popup.png)

It looks like when you run `alert("I am an alert box!");` it opens a pop-up box showing the text inside the quotes. So if we put 2 and 2 together, our `img` tag should look like this:

```html
<img src="bigfoot.png" onclick="alert("Woohoo, you win! You found Bigfoot!");">
```

Change your `img` tag to look like that too, then click your object in the live preview.

Oops, it didn't work! Why could that be?

Another important skill when hacking is knowing how to fix stuff when they go wrong. [repl.it](https://repl.it) gives you a hint: the quotation mark after `alert(` has a red underline.

Here's what went wrong. We expected the quotation mark after `alert(` to indicate the beginning of the message, but what it actually did was indicate the end of the `onclick` attribute.

Here's a little trick you can use to fix that. In JavaScript, you can use either `"` or `'` around text (the technical term is a [**string**](http://www.w3schools.com/js/js_strings.asp)). So change the inner quotes to single quotes, like this:

```
onclick="alert('Woohoo, you win! You found Bigfoot!');"
```

And now clicking your object should display the message.

At this point, your `<img>` should look like this:

```html
<img
  src="bigfoot.png"
  onclick="alert('Woohoo, you win! You found Bigfoot!');"
/>
```

Congratulations, you have a working game now! You're all done! Now you can go to [FGL](https://fgl.com) and sell your game to sponsors and make millions of dollars!

## Hiding your object

I guess you spotted the problem already. This game is way too easy! I mean, your object is just sitting there out in the open, begging for you to click on it.

### Hiding your object

Your object is really not hidden, so how can we fix that?

When you are making your own projects, you won't have workshops telling the solution to every step. So this time, let's practice your Googling skills and see if you can figure out how to set that background image without being told the solution! After adding the background image, the live preview looks like this:

![Image of a forest scene with dense branches](https://cloud-4q93rtckk-hack-club-bot.vercel.app/0bigfoot_background.png)

When you are done, or if you are simply really stuck, we've included a sample solution below. (But there are other ways to add the background image, so if your solution doesn't match mine, that's OK.)

Sample solution, in `style.css`:

```css
body {
  background-image: url('/forest.jpg');
}
```

There are several ways to add the background image. Here is one way:

1. Google `html background image`.
2. The first link brings you here: <http://www.w3schools.com/cssref/pr_background-image.asp>
3. There is an example near the top. You can click "Try it yourself" to see the full HTML of the example.
4. Open the `style.css` file like in the example, but replace the URL with the picture of the forest. You do not need the background-color rule since we are already setting a background image.
5. Remember to link your CSS file to your HTML file!

### Setting Your Object’s Location

That's much better! But the top left corner is a pretty boring place to hide your object. Can you figure out how to set its **position** to somewhere else? This one is harder, and may take some trial and error, but it's really worth the effort to see if you can figure it out yourself. Afterwards, its position will be somewhere in the middle of the screen, rather than the top left corner, like this:

![image of a forest scene with dense branches and a small figure hidden in the middle](https://cloud-4q93rtckk-hack-club-bot.vercel.app/3bigfoot_position.png)

OK, got it working? If you need help, try asking your neighbor or workshop leader for hints.

#### Sample Solution

Let's walk through the steps of one way of solving this.

Google "[HTML position](https://www.google.com/search?q=html+position)".

> ![List of search results for the query 'html position'](https://cloud-4q93rtckk-hack-club-bot.vercel.app/8google_html_position.png)

The first link takes you [here](http://www.w3schools.com/cssref/pr_class_position.asp):

> ![Code example for positioning an html element](https://cloud-hs5sxv0us-hack-club-bot.vercel.app/2w3schools_position.png)

It has some CSS code showing how to "position an `<h2>` element":

```css
h2 {
  position: absolute;
  left: 100px;
  top: 150px;
}
```

But we don't want to position an `<h2>` element. We want to position an `<img>` element. So we type the code above into the `style.css` file, but typing `img` instead of `h2`.

### Loading The Hidden Object Before the Background

Right now your object loads before the background image does unless you have a fast internet connection and we don't want that! We're going to fix that by running code only after the page has loaded.

Just like how we ran code when someone clicked using `onclick`, we're going to call a function once the page has loaded with `onload`. You can look this up by Googling "on page load". Lets go ahead and make a script tag for our new function in the JavaScript file, `script.js`:

```js
function loadObject() {}
```

We should also go ahead and add the `onload` attribute to the body tag. There are a couple more things we have to do. First, go ahead and get rid of `src` tag, as we will be adding that with the function. Then, add an `id` to the `img` tag. This is so we can change the `src` attribute after the page loads.

```html
<body onload="loadObject()">
  <img id="object" onclick="alert('Woohoo, you win! You found Bigfoot!');" />
</body>
```

Now, lets get a hold of the `img` tag and change its `src` to our object.

```js
function loadObject() {
  document.getElementById('object').src = 'bigfoot.png'
}
```

Your object should now load after the background. We did it!

Feel free to experiment with the `left` and `top` values to find a good place to hide your object.

## Making The Game Harder

Now we have another problem. This game is… too easy. Once somebody plays it once, they’ll be able to beat it over and over again with no challenge! We need to write a function that will move the object randomly around the page after you beat it.

Open your script.js file and let’s make a new function `moveObject();`

```js
function moveObject() {}
```

Now remember, we’re trying to move your object randomly around the screen. So the first thing we need to do is make a variable that will get our image. Like earlier, we’ll use “document.getElementbyId.”

```js
function moveObject() {
  var picture = document.getElementById('object')
}
```

This will help us out later on.

Now look at how we positioned the object in the css file. We have two numbers: its position from the top and its position from the left. Therefore, those are the two numbers that have to be random so he can move around. Try and google and figure out a way to generate a random number.

There’s a couple different ways to solve this, but we googled “generate a random number in javascript” and went to the first result, which told us to use `Math.random()`

So since we have two numbers to generate (for `left:` and `top:`) we need to create two new variables for those values.

```js
function moveBigFoot() {
  var picture = document.getElementById('bigFoot')

  var x = Math.random() * 300
  var y = Math.random() * 300
}
```

This will generate two random numbers between 0-300 whenever the function is run.

Now that we have our two numbers, we have to actually make them apply to our picture variable. Here, we’ll use the style left and style top property.

```js
function moveBigFoot() {
  var picture = document.getElementById('bigFoot')

  var x = Math.random() * 300
  var y = Math.random() * 300

  picture.style.top = x + 'px'
  picture.style.left = y + 'px'
  }
}
```

This will take any images that follow the parameters of the picture variable (which is just finding the `id` `object`) and set the top and left position to the random numbers that it generates.

Next, back to our html file. We need to make it so that whenever we win the game and find the object, the moveObject function will be called and it’ll move it to a new location based on the two numbers we just generated.

Let’s create a new onclick method in our `<img>` tag in the html file.

```html
<img id="object" onclick='alert'('Woohoo, you win! You found Bigfoot!') onclick
= "moveObject()"; />
```

Now let’s try and run that and see if it works.

Did it?

No?

Okay. Let's see what we can do about that.

It looks like having two onclick methods is confusing the program. It will make it a lot easier and more efficient to move the alert to the moveObject() function, so that it will all happen at once.
Let’s take out the `alert` in the `img` tag and put it in our moveObject() function

So now, our new `<img>`in the html file should just look like this

```html
<img id="object" onclick="moveObject()" ; />
```

And our `moveObject()` function in scripts.js should look like this

```js
function moveObjects() {
  alert('Woohoo, you win! You found Bigfoot!')
  var picture = document.getElementById('object')

  var x = Math.random() * 300
  var y = Math.random() * 300

  picture.style.top = x + 'px'
  picture.style.left = y + 'px'
}
```

Now let's try it. Go ahead and click on your object.

Did the alert pop up? Yes?

Nice!

And now did your object move?

Nice again - great work!

### Celebrate!

Congratulations, you have a working game! You're all done!

![Charlie Brown celebrating](https://cloud-4q93rtckk-hack-club-bot.vercel.app/4celebrate_charlie_brown.gif)

Most importantly, by practicing Googling stuff, you are on your way toward becoming an independent hacker.

## Hacking

Now is the chance to make the game into your own! For inspiration, you can look [here](http://andrewd.50webs.com/bigfoot) to see what's possible.
