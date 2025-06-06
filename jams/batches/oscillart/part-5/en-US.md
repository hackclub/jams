# Part 4: 30-45 min

## Table of Contents:
Let’s do a quick rundown on what we’re gonna do in this section. We are going to:

1. Creating a slider for changing color
2. Challenge = gradient
3. Creating a slider for changing volume and amplitude
4. Write a list of things to fiddle with... :3

## Section 1: Let’s make a RAVE

Ok, we’re not really gonna make a rave. But we are gonna add some color today! One requirement of your Oscillart project is that you allow the user to make a different art/music project every time; the way we’re gonna do that is with customization! Every time you run your project, your user should be able to change at least one thing about the art produced, and one thing about the music produced.

First, let’s go into our index.html file, and under our submit button, add the following code:

```
<input type="color" id="color" value="#ff0000">
```

This input element will produce a color picker, which means the user can tap on it to select a color, and its value property will change to be that hex index. Now that we have this element in our code, let’s add it to our main.js so we can reference it there.

<Dropdown title="Look back at how we added HTML elements to JS in the past. Can you add this one?">

Answer: 

```
   const color_picker = document.getElementById('color');
```

</Dropdown>

Great! Now, let’s look at the methods we’re going to be using here:

`ctx.strokeStyle = #00000;`
:this sets the color of the line that we’re drawing in the line() function
`color_picker.value`
:this returns the value of the color that the user has picked. Pssst, notice there’s no () bc this is a property not a method

<Dropdown title="Using those commands, how do we think we should periodically set the color of the line that we’re drawing, so the user can change the color while the program is running?">

Answer: 

```
   function line() {
  …
   ctx.strokeStyle = color_picker.value;
   …
   ctx.stroke();
}
```

</Dropdown>

Yay!! If you run your code now, while adjusting the color picker, you should notice something… 
That’s right! Your line is changing color! You’re one step closer to an awesome artistic experience!!

**Here is an optional challenge for our extra artistically inclined… instead of setting the line to one color, how can we set it to a gradient (where the user picks both/multiple colors) over time?**

## Section 2: drop that beat

Ok, we’ve gotten it all artsy up in here with our majestic palettes of customizable colors.

[art orpheus gif]

But let’s get it funky up in here.

[DJ orpheus gif]

In this section, we’re going to be giving users the ability to change the volume of the sound that comes out of their laptop. In addition, this change will also affect the drawn sine waves, because in real-life, waves with higher volumes have higher amplitudes! So, when the user increases volume on a slider, not only will the sound come out louder, but their waves will be taller

![diagram of volume and amplitude](https://hc-cdn.hel1.your-objectstorage.com/s/v3/2441a2227b8c9793f044245f44e5a2033d6fa78c_screenshot_2025-06-06_at_12.50.36___pm.png)

Let’s start by adding a slider input, which is gonna control the volume/amplitude. Add this to your index.html around where you added the color picker:

```
<input type="range" min="1" max="100" value="100" id="vol-slider">
```

<Dropdown title="Now, like last time, can you reference this HTML element in your JS all on your own? Look back at previous code if you need to!">

Answer: 

```
const vol_slider = document.getElementById('vol-slider');
```
</Dropdown>

Awesome! So we get the value that the user has picked on the volume slider the same way we got the hex code from the color picker: vol_slider.value

What we need to remember is that this input is controlling both the drawing and the music, so we need to include it in both areas. Let’s start with the frequency() function.

```
gainNode.gain.setValueAtTime(100, audioCtx.currentTime);
oscillator.frequency.setValueAtTime(pitch, audioCtx.currentTime);
gainNode.gain.setValueAtTime(0, audioCtx.currentTime + ((timepernote/1000)-0.1));
```

So this is currently in our frequency() function; this code means that at the beginning, when the function starts, we set the volume to 100% and set the frequency to our pitch. Then, after timepernote, we change the volume back down to 0%. Because remember, we don’t turn our audio source “on” and “off” in JS, we simply turn the volume up and down.

So, whenever we’re not playing a note, i.e. when we set the volume to 0%, the user should not have control over changing the volume of the pitch. We only want them to have control when the frequency is playing. We could do this by setting a variable called volumeset to true when the frequency starts playing, and false when it ends, and only letting the user change the volume when volumeset is true!

Let’s start by initializing the variable volumeset at the top of main.js:

```
var volumeset = false;
```

And then setting it to true at the beginning of frequency(pitch):

```
function frequency(pitch) {
volumeset=true;
…
}
```

The issue is, if we simply put volumeset=false; at the end of the function, then we’ll never be able to control volume. That’s because this section of code…

```
gainNode.gain.setValueAtTime(100, audioCtx.currentTime);
oscillator.frequency.setValueAtTime(pitch, audioCtx.currentTime);
gainNode.gain.setValueAtTime(0, audioCtx.currentTime + ((timepernote/1000)-0.1));
```

…doesn’t wait until the time is over to move on. So, we’d end up calling  volumeset=true; and volumeset=false; within milliseconds of each other, which is not what we want. Instead, we’re going to use this method:

`setTimeout(() => { //code }, timetowait);`
:this command, called setTimeout, will run whatever code is inside it (denoted by my comment //code) after timetowait (in milliseconds) has been run.

Luckily, because we’re using the setValueAtTime function, we know exactly how long the frequency is playing! Specifically, (timepernote/1000)-0.1) seconds!

<Dropdown title="Now that you know what method we’ll be using to set a timeout, you know how long it has to wait, what code should we add to the frequency function to allow for volume changes when the frequency is playing? Make sure to set volumeset to true and false when needed, because we’ll have to have that data when we’re adjusting the drawing.Psst… forget how to change volume? Go back to part one! You change the volume % by setting the value of gainNode.gain. Psssst Psssst… remember that (timepernote/1000)-0.1) is in seconds, but we want to get it back to milliseconds. Timepernote is in milliseconds, and a millisecond is 1/1000 of a second.">

Answer: 

```
volumeset=true;
gainNode.gain.setValueAtTime(vol_slider.value, audioCtx.currentTime);
oscillator.frequency.setValueAtTime(pitch, audioCtx.currentTime);
gainNode.gain.setValueAtTime(0, audioCtx.currentTime + ((timepernote/1000)-0.1));
 setTimeout(() => {
       volumeset=false
       }, ((timepernote)-10));
```
</Dropdown>

Now, the frequency will start playing on whatever volume the user has set it to! But since frequency(pitch) is only called once, at the start, this won’t reflect the slider for the entire time it’s playing. We need to add the code:

```
if (volumeset) {
       gainNode.gain.value = vol_slider.value;
   }
```


Can you think of any functions we’re running periodically while a wave is happening? What if we add this code there? Yep! We're gonna add it to the line() function!

## Section 2.5: drop that beat (but make it visual)

Ok, so we’ve already done the hard part of getting volumeset to reflect whether the user can change the volume. Now, all we have to do is let them change the amplitude of the wave when we’re drawing it!

Remember, we’re using this code to make our sine wave, which is found in our line() function:

```
y = height/2 + amplitude * Math.sin(x * ((2*Math.PI*freq*(0.5*length))));
```

<Dropdown title="So, what should we replace the amplitude variable with?">
Answer: `vol_slider.value;`
</Dropdown>

Now, to clean up your code, go ahead and get rid of the amplitude value wherever you initialized it.

Don’t worry about adding `if (volumeset)...` in front of setting the amplitude to vol_slider.value; Remember, we only running line() if a wave is being drawn!

Now, if you run your code…

Voila! Our slider controls both the volume of the sound outputted, and the amplitude of the waves! Look at you, DJ! Only thing is, when volume is at 100%, it’s a little high. Let’s make our max amplitude 40. To do this, instead of making your y-amplitude `vol_slider.value`, make it `(vol_slider.value/100)*40` so that you minimum is 0 and your max is 40.

## Section 3: your turn!

Look. I’ve been with you for a while, but it’s been fun. 

But in order to get your project approved, you have to change one thing about your program that is not in this tutorial. 

One cool way to do this? Add a new user input! Here’s a list of things you could experiment with your user being able to change about the art/music, and some links to do some research on your own:

**Beginner:**
- Line thickness
- ype of sound coming out (sine, triangle, square, sawtooth)
**Intermediate:**
- Rotating your drawing
- Use closePath() and fill() to have some filled-in sine waves
**Advanced:**
- Add MULTIPLE sine waves!!!
- Add MULTIPLE streams of audio coming out!!
- Make it 3D! - inspired by @Space_Duck
