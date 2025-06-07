---
part: "part-4"
batch: 'oscillart'
totalParts: '7'
title: 'Write Full Songs and Melodies'
description: "In this part of the Jam, you'll use loops to use your app to create full songs and complex melodies."
contributor: "celesteroselli"
contributorSlackID: 'U06TV3F4HEU'
thumbnail: 'thumbnail image link'
timeEstimate: '1 hr'
difficulty: '(Beginner, Intermediate)'
keywords: 'music, songs, melodies, javascript'
presentation: 'https://docs.google.com/presentation/d/1Sk-eSM5_Zws0qJZhbt3SCYFH5sa1oJqrVOW7JmYgkm4/edit?usp=sharing'
presentationPlay: 'https://docs.google.com/presentation/d/e/2PACX-1vQaN2SI3I-VU8xkmmHZW-GFCfbKcBb41hES5A1X8GHNVzX8FuFgqmHGg8qByI9aHbXSI-zo9w7pN0mM/pub?start=true&loop=false&delayms=30000'
presentationPDF: 'https://hc-cdn.hel1.your-objectstorage.com/s/v3/2909e090af86673a48c75989bb1dcb5178594f3e_oscillart_4.pdf'
notes: 'link to notes (optional)'
poster: 'link to poster (optional)'
video: 'link to video (optional)'
---

# Part 3: 1 hr - 90 min

## Table of Contents:
Let’s do a quick rundown on what we’re gonna do in this section. We are going to:

1. Go through user’s input by characters, get frequencies from each character, and add to a list
2. Do the steps for each element in the list
3. Spacing out the waves

## Section 1: Looping through the Lists

So, where we left off, we had an app that could play a note and draw a sine wave when a user inputted a note. But the thing is… not too many songs have just one note. So why don’t we work on making our app so the user can type in multiple notes - as many notes are in their favorite melodies or songs - and we’ll have our app draw and play all of them in a row! That’ll create some cooler art in music in my opinion :)

Let’s start by going over how to break down a user’s input to get all the notes. Right now, the top of our our handle() function looks like this:

```
var usernotes = String(input.value);
frequency(notenames.get(usernotes);  
```

We’re assuming that the user is only typing in one note, so we’re treating the entire input as a key for our notenames map, and then only returning that one frequency. Instead, let’s start by using a for loop to break down our input. Remove the two lines above, and replace them with the following code: 

```
for (i = 0; i < usernotes.length; i++) {
       
   }
```

Now, what this does is create a loop that uses the variable i to iterate through the numbers 0 until the note before the end of your list length. The way indexes work in javascript is that the last number’s (n) index will be n-1. Here’s a diagram to help explain it:

![javascript index diagram](https://hc-cdn.hel1.your-objectstorage.com/s/v3/8f5293dbe91459c9a31a444f6b84ba6db81cc053_index.png)

Now, to keep track of all of the notes that users have in their input, let’s create an array to hold the notes, called noteslist. Make sure to do this before your for-loop. Here are the following methods regarding arrays you should know:

```
var array = []; -> initializes a blank array
array.push(item); -> adds an item to the end of the array
array.length -> returns the number of items in the array
```


And here are the following methods regarding strings that you should know:
`string.charAt(i)`
:returns the character at index i in the string (see diagram above for a refresher on indexes)

<Dropdown title="Here’s another challenge: how do you think we should make it so that the corresponding frequency (look back at our code regarding Maps if you forgot) of each character of the user’s input is added as a separate item into the array of notes?">

Answer: 

```
   var usernotes = String(input.value);
   var noteslist = [];

   for (i = 0; i < usernotes.length; i++) {
       noteslist.push(notenames.get(usernotes.charAt(i)));
   }
```

</Dropdown>

## Section 2: repeat, repeat, repeat

So, now that we have a list of the frequencies that the user has inputted, we need to adjust our code to repeat the frequency() function and the drawWave() function for each. Now, you might think we use another for-list here - and you could do that! But because we want to cycle through the elements of the list on a timeout, i.e. every 1 second we move onto the next frequency in the list, we’re instead going to use the setInterval method we used earlier.

However, instead of running a single function at an interval, we’re gonna run a section of code. Let’s look back at how we use setInterval:

```
setInterval(function, interval);
```

Now, instead of one function, we’re going to use this syntax: `() => { //code }` to signal that we’re writing many lines of code, not just one function.

Add the following code after your first for-loop in your handle() function.

For now, I’ve just added a placeholder value of waiting 2000 ms, or 2 seconds.

```
   let j = 0;
   repeat = setInterval(() => {
       if (j < noteslist.length) {
           frequency(parseInt(noteslist[j]));
           drawWave();
       j++
       } else {
           clearInterval(repeat)
       }


   }, 1000)
```

Some methods you should take away from this:

`parseInt(String)`
:returns the integers found in a string. For example, parseInt(“123”) would return 123. It acts as the opposite of the String() command we used earlier.
`array[j]`
:returns the array item at index j.

Now, this code means that every 2 seconds, frequency() will play a new note and drawWave() will draw a new sine wave with the updated frequency! Since we’re now calling frequency() and drawWave() in our loops, make sure to delete any other calls you have to those functions in the handle() function.

But if we run our code, we run into a few issues…

First, everytime we run drawWave(), it starts at the left again! This is because we have ctx.moveTo(0, height/2); at the beginning of drawWave(). We need this when we start a new song, i.e. when someone presses the restart button, but not when we’re just calling drawWave() multiple times during the same song.

To fix this, at the top of main.js, initialize a variable called reset to false. If you forget how to do this, check how we did it for started in Pt. 1. Then, at the top of the handle() function, which is called when the button is pressed, set reset to true. 


<Dropdown title="Now, wrap the code that wraps all of the “screen clearing” commands in an if statement, that makes sure it only gets called when the button is pressed. Pssst… use the reset variable for this.">

Answer: 

```
   if (reset) {
       ctx.clearRect(0, 0, width, height);
       x = 0;
       y = height/2;
       ctx.moveTo(x, y);
       ctx.beginPath();
   }
```

</Dropdown>

Finally, at the bottom of drawWave(), set reset to false so that when drawWave() runs for the first time, reset is set to false and won’t be set to true again until the button is pressed.


Second issue: when we call multiple waves, it seems to start calling the intervals at weird times… this is because right now, sometimes we have multiple intervals going at the same time! This happens if we call drawWave() before counter has reached 50, so then it hasn’t cleared. To fix this, let’s add `clearInterval(interval);` to the top of drawWave().

Third issue: your audio might be cutting out, or not playing some notes at all. This is because, our frequencies are set to last 1 second, but we’re also calling frequency every 1 second in our interval function! There’s some overlap which makes it hard for Javascript to figure out when to play what note. To fix this, let’s change this line:

```
gainNode.gain.setValueAtTime(0, audioCtx.currentTime + 1);
```

To 0.9 instead of 1:

```
gainNode.gain.setValueAtTime(0, audioCtx.currentTime + 0.9);
```

Now, if you type in multiple note names into the text box, and run your code, you should see all of those notes be played and be drawn on your canvas, and you should hear them all too!

## Section 3: Space ‘em out

So this is great! And functionally, we have most of the stuff here. But we should realize that it doesn’t look exactly… perfect. Like, if you add more than 7 notes, they go off the canvas into the ether and you can never see them again. Sad. And no matter how many notes you have, they’re all the same size and play for the same amount of time. 

The reason this is happening is because both the length of the note being played is constant, and the width of the note is only changing with frequency, not due to how many notes there are.

So, let’s start by adding two variables at the top of main.js and initializing them at 0:

```
var timepernote = 0;
var length = 0;
```

We’ll set the second variable to the length of the list, i.e. how many notes we have to go through, and we’ll set the second variable to be how long the note should play and be drawn based on the length.

First, in handle, add in this code near the top where you assign values to other variables (but make sure you add this under where you assign usernotes):

```
length = usernotes.length;
timepernote = (6000 / length);
```

6000 is arbitrary, but I’ve found that that’s the constant that works best for the size of our canvas. 

Values:

```
frequency(pitch)…
gainNode.gain.setValueAtTime(0, audioCtx.currentTime + 0.9);
…
repeat = setInterval(() => {
...
   }, 1000)
```

<Dropdown title="Now that we’ve added these variables what do you think we should replace the values above with?">

Answer: 
That’s right: `(timepernote/1000) - 0.1` for the first one (because again, timepernote is in milliseconds, and it needs to be a little shorter than our interval time to avoid overlap) and `timepernote` for the second one!

</Dropdown>

This is because those two values control both how long we wait before drawing a new note, and how long the current note is played. If we set them to the same value, they’ll always sync up!

Next, we have to fix this equation:
```
y = height/2 + (amplitude * Math.sin(x * 2 * Math.P I* freq));
```

To include the variable length, which will change based on how many notes there are. 

<Dropdown title=" Do some experimenting and think about where length should go in the equation so that the period, how far one wave travels, is shorter when there’s more notes and longer when there’s fewer notes">

Answer: 

y = height/2 + amplitude * Math.sin(x * 2  *Math.PI * freq * (0.5*length));

</Dropdown>

After some trial and error, I discovered that multiplying my x-equation by 0.5 * length seems to do the trick! This makes sense because if we multiply the x-value we’re feeding into the sine function by a larger number (as we increase notes), we’ll get to each associated y-value faster. Yeah, even the math is getting a little complex for me, haha. [sweat emoji] Wanna learn more? Watch this video!


Finally, to make sure that we’re ending the interval after the correct amount of time, no matter how many notes there are, go down to our counter if-statement at the bottom of line() and change `counter > 50` to `counter > (timepernote/20)`. Why /20? Well, we’re calling line() every 20 milliseconds, and timepernote is in milliseconds, so that means we need to call counter (timepernote/20) times to make it last for that long!


Now, if we press our button after inputting a lot more notes, like 4 or 5…

There we go! We’ve sized out our sine waves so they’ll always fit within our canvas!! Go and find some note combinations you like, or go to https://www.mintmusic.co.uk/ to find the melodies to your favorite songs. Type them in, and watch your creations go! Nice job!
