---
part: "part-2"
batch: 'oscillart'
totalParts: '7'
title: 'Playing Sounds with Sine Waves'
description: "In this part of the Jam, you'll use Javascript's Web Audio API to play sounds from your browser given by user-input."
contributor: "celesteroselli"
contributorSlackID: 'U06TV3F4HEU'
thumbnail: 'thumbnail image link'
timeEstimate: '30-45 min'
difficulty: '(Beginner, Intermediate)'
keywords: 'music, wave, frequency, javascript, art'
presentation: 'https://docs.google.com/presentation/d/1lsLhOlWDG8-TqOrePhdvSv6wSeo_Yy8gXMchTDO8NFc/edit?usp=sharing'
presentationPlay: 'https://docs.google.com/presentation/d/e/2PACX-1vRW3b88SHrTuJbhvA4mc6eLQwTFVRUvQ5TihV-RMyS2CmJ65OOOe04AbEvDz6-SAZuDivct97Shcut_/pub?start=true&loop=false&delayms=30000'
presentationPDF: 'https://hc-cdn.hel1.your-objectstorage.com/s/v3/a151d631cff6f899994414bba065131e5405a202_oscillart_2.pdf'
notes: 'link to notes (optional)'
poster: 'link to poster (optional)'
video: 'link to video (optional)'
---

# Part 1: 30-35 min

## Table of Contents:
Now that we’re in our programming environment, let’s do a quick rundown on what we’re gonna do in this section. We are going to:

1. Create an HTML page, a CSS stylesheet, and JS script for running our site
2. Add a text input and a button to our HTML site and run a function when the button clicked
3. When that function is clicked, get the frequency of the note based on what the user has typed into the text box
4. Use the Web Audio API to play a sound with that frequency and stop it after 1 second


## Section 1: Creating our site’s pages

First, let’s create our HTML page. HTML is a tag-based language, which means that you’ll usually see the following process for adding elements to our webpage:

All HTML pages have a specific template with elements such as a body for content that the user sees (`<body>...</body>`), and a head for info that the user doesn’t have to see, like the title (`<head>...</head>`). Luckily, Codespaces can create this template for you! 

First, go to the left side of the codespaces environment, where all your project files are listed (there are none right now). Hover over your title and hit the button that looks like a sheet of paper and a plus. Then name it “index.html” - this tells the browser that this is the main page of our website, the one it should start with every time. Finally, when you create the file, you should see some text on your file editor. Hit “fill with template”, and then choose “html doc”, and there you go!

Pssst, here’s a quick screenshare if you missed any of that:

<video src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/a79a5c581fa7530cdf1688c0a9a519238c63de71_indexscreenshare.mp4" width="80%" controls></video>

Yay!! You have an HTML file! Let’s start adding some elements to it. First, add the following code inside of the `<body>...</body>` tags:

```
<div id=”container”>

</div>
```

This code creates a container (known in HTML as a div) that will hold more code later on. We’ve given it the ID “container” so that we can select it with CSS and JS later.

Now, let’s create our JS and CSS files. Name them “main.js” and “style.css” respectively, and you don’t need to add any templates. If you need some help creating files, scroll back up to when we created the HTML file and rewatch the video.

Perfecto. But the thing is, right now, these files are all standing apart. We want to combine them so that the CSS and JS code we write can be accessed from the main HTML file. So go to the top of your HTML file, inside of the head tags, and add the following code:

```
<link href="style.css" rel="stylesheet"/>
```

Then, at the bottom of your page, inside the body tags but at the very bottom so that it’s the last piece of code before the body closing tag, add the following code:

```
<script src="main.js"></script>
```

Great job!

## Section 2: Adding the inputs

Ok, so right now you may be noticing that our site looks a little bland. A little boring. Well, let’s go ahead and change that, shall we?

Within your body tags in the HTML file, go ahead and add code for creating a button and a text input. I’ll show you how to do it now, but try and learn how to do it on your own, because we’ll be creating a few more of these later…

```
<input type="text" id="input">
<button id="submit">Submit me why dontcha</button>
```

Great job! So, what we want to happen is that the user types notes into our text box, which has the ID “input”, and then when we click the button with the ID “submit”, it plays whatever note they typed (right now it’s singular, but eventually they’ll be able to type in multiple) through our speakers. First, let’s reference our HTML input element in our code by adding the following code at the top of our main.js page:

```
const input = document.getElementById('input');
```

The reason we’re not referencing our button is that we’re gonna use another JS method, called onClick to do something whenever we click it. That’s coming later.

Now, to have our app do the action of playing a note, we’re gonna use a function. If you have some coding experience, you know this just means a collection of code that we can call whenever we want. 

Let’s go into JS and create functions called handle() and frequency(). If you have some experience with JS, do this on your own! 

But if not, here’s how you declare a function. I am going to pass a parameter into the frequency function, which basically means we can customize some info about how it’s run everytime we call it. I’m going to call this parameter pitch, so we can pass in the pitch of what we’re playing each time we run it.

```
function frequency(pitch) {

}

function handle() {
	frequency(input.value);
}
```

## Section 3: Let’s play some music

Awesome! But now we need to fill in the frequency function with the code to actually… yk… play sounds. This is gonna be a lot of syntax, but bear with me, because I’ll be explaining it all as I go.

First, add in this section of code above your functions but below where you declared input:

```
// create web audio api elements
const audioCtx = new AudioContext();
const gainNode = audioCtx.createGain();


// create Oscillator node
const oscillator = audioCtx.createOscillator();
oscillator.connect(gainNode);
gainNode.connect(audioCtx.destination);
oscillator.type = "sine";
```

What this code does is create an object called an AudioContext, which is just an object we use to control playing and pausing our computer’s speakers. Then, we create an object called a GainNode, which controls the volume of the AudioContext object. Finally, we create an Oscillator object, which will play frequencies based on oscillating mathematical graphs - this is how our computer can play pure tones, since they are represented by an oscillating sine wave. Then we add some code to connect them together, and set the oscillator’s type to “sine”.

Phew! That was a lot! Before we keep going, let’s look at the main code snippets we’re going to be using to control the sound using those AudioContext and GainNode objects:

`gainNode.gain.setValueAtTime(value, time)`
:we’re gonna use this method to start our volume at 100%, and then bring it back to 0% when we’re done playing the sound. In JS, you don’t turn “on” and “off” sound, you simply bring the volume up and down, and change the frequency whenever you want to change notes.

`oscillator.frequency.setValueAtTime(pitch, time)`
:just like using it on gainNode.gain, this sets the frequency of our audio oscillator, which in turn makes the sound higher or lower. High sounds have high frequencies, and low sounds have low frequencies.

`audioCtx.currentTime`
:this property just returns the current time. If we add things to it, that’s the same as saying “in _ seconds from now”. 

<Dropdown title="What code could we write to represent the time in 3 seconds from when the code runs?">

Answer: audioCtx.currentTime + 3

</Dropdown>

Ok, so right now in our frequency function, we want to 1. set the volume to 100%, 2. set the frequency to the pitch parameter we passed into the function, and 3. set the volume back down to 0% after one second.

<Dropdown title="Since I gave you the methods above, try and do this on your own in the function! Check my answer after you’re done.">

gainNode.gain.setValueAtTime(100, audioCtx.currentTime);
oscillator.frequency.setValueAtTime(pitch, audioCtx.currentTime);
gainNode.gain.setValueAtTime(0, audioCtx.currentTime + 1);

</Dropdown>


Yay! Good job!! One last thing: remember how I said that the sound in JS never “starts or stops”, it just turns up and down the volume? Well, that means that we have to start it and silence it at the beginning of our code - before we even run a function. So, under where we initialize all of our audio nodes, add in:

```
oscillator.start();
gainNode.gain.value = 0;
```


Psst… because of autoplay rules, because we’re starting the oscillator before the user presses anything on the site, you need to add this code to the top of handle():

```
audioCtx.resume();
gainNode.gain.value = 0;
```


… to resume our sound when our user clicks a button, but keep it silent


Now, we have to do is call the handle() function whenever the button is pressed. We can do this by adding a HTML property to the button element we created called onClick - this property tells the element what Javascript code to run whenever we click it on the screen. So, go ahead and add this to your button element on the index.html page:

```
<button id="submit" onclick="handle()">Submit me why dontcha</button>
```


Now, press the Live Server button at the bottom toolbar. And now, in your site, type in the number of hertz in a note (aka the frequency) into your textbox. For example, to play the note A in the middle of your piano, you use the frequency of 440 Hz. So type that into your textbox, and hit the button. You should hear that note played coming out of your browser for one second! Now, change the number so it’s higher, maybe 600 or so. Hit the button again. Is the tone that got played higher-pitched than the last one? It should be!

## Section 4: No one wants to memorize numbers

You have a working audio machine! But, it would be kind of hard for our users to have to look up the exact frequencies of all the notes they want to play… so, we’re going to create something called a Map - this allows our users to type in a key, basically a shorthand for the frequencies, like the musical letter name (C,D,E,F,G,A, or B) or even just numbers from 1-8. Then, when they type that in, we’ll replace whatever their input is with the corresponding frequency.

To do this, above your functions in your main.js page (but below where you declared your variables, declare a new Map(). I’m gonna call it notenames()

```
notenames = new Map();
```
 
Now, using this syntax:

```
mapName.set(key, value);
```
 
<Dropdown title="Try and add in note names for the following musical notes: C = 261.6, D = 293.7, E = 329.6, F = 349.2, G = 392.0, A = 440, B = 493.9. You can use the note names as the key, but if you don’t study music and that’s hard to remember, feel free to use other letters, or even numbers. Just make sure each key is unique!">

Answer: 

notenames = new Map();
notenames.set("C", 261.6);
notenames.set("D", 293.7);
notenames.set("E", 329.6);
notenames.set("F", 349.2);
notenames.set("G", 392.0);
notenames.set("A", 440);
notenames.set("B", 493.9);

</Dropdown>

Now, in our handle() function, instead of simply passing the input value as a parameter into the frequency function, we’re going to create a new variable that represents the corresponding frequency to the user input, and pass that along instead. Here are some methods we’re gonna use:

`String(integer value)`
:this creates a string, or text value, with whatever we pass inside of it. For example, String(123) would return “123”
`mapName.get(key)`
:this returns the corresponding value to the key that you’ve passed into the method


<Dropdown title="Can you use these methods to change your handle() function so that it first, creates a variable to represent the user’s input as a String, and second, passes the corresponding frequency of that string into the frequency() function?">

Answer: 

var usernotes = String(input.value);
frequency(notenames.get(usernotes)); 

</Dropdown>

Yay!! You’ve done it! If you add a note name into your textbox (or whatever your key are), and then press the submit button, you should hear the corresponding frequency play from your computer!! So proud of you for getting through this first part of the jam. 

See you at the next one!