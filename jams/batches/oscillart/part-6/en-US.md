---
part: "part-6"
batch: 'oscillart'
totalParts: '7'
title: 'Recording your Art'
description: "In this part of the Jam, you'll create a button to record your art and download it, so you can share it online."
contributor: "celesteroselli"
contributorSlackID: 'U06TV3F4HEU'
thumbnail: 'https://hc-cdn.hel1.your-objectstorage.com/s/v3/5d059869455707ea0f869e7b630bd14c54c00b99_1__2_.png'
timeEstimate: '30-45 min'
difficulty: 'Beginner, Intermediate'
keywords: 'art, media, recording, javascript, share'
presentation: 'https://docs.google.com/presentation/d/1zMGHjS1sUSZEhI7SAlY4shvY8p1a34Q124KN_rJQ2lM/edit?usp=sharing'
presentationPlay: 'https://docs.google.com/presentation/d/e/2PACX-1vQ-LWou5utq3u1FvZzBGJjP5fDLWCXAn8Oec_uJWN-FLuItkunRTNN-RLrgo1PMcw74ciulutWJn2RN/pub?start=true&loop=false&delayms=30000'
presentationPDF: '/assets/oscillartfiles/6.pdf'
---

# Part 5: 30-45 min

<br />

## Table of Contents:
Let’s do a quick rundown on what we’re gonna do in this section. We are going to:

1. Recording the canvas
2. Recording audio
3. Combining them and downloading the file

<br />

## Section 1: A webm’s worth a thousand words

You’ve done all this work of creating **incredible, customizable sine-wave art**. Don’t you want to share it with the world? In this part of the jam, you’re going to add in a feature to record your art work and music in one file, so that you can share it with all your friends! 

Plus, whether you’re doing this jam during Athena or not, when you submit your project, you can share your favorite clip of your artwork/music that you downloaded, and it’ll be featured in the gallery! Learn more at [oscillart.athena.hackclub.com](oscillart.athena.hackclub.com).

Now, to record both the JS canvas and the audio we’re producing, we’re going to be using the **Javascript Media Recording API**. Again, there will be a lot of complex syntax in this jam. Don’t worry, don’t stress - I’ll be here the whole time explaining what all the code means. Just crack your knuckles and get ready to code! First, let’s initialize some blank variables outside of a function. You can put this anywhere before the function starts.

```
var blob, recorder = null;
var chunks = [];
```

I will explain what all of these variables are in just a second. Then, let’s initialize a **startRecording** function with a few variables:

```
function startRecording(){
   const canvasStream = canvas.captureStream(20); // Frame rate of canvas
   const combinedStream = new MediaStream();
}
```

The **canvasStream** is an object that will capture the frames of our canvas every 20 frames (which is why we passed 20 into the function). The **combinedStream** object is where we will hold both audio and video data. Under where we initialize them, we’re going to call the method **.getVideoTracks()** on canvasStream. 

```
// Add in video data

canvasStream.getVideoTracks().forEach(track => combinedStream.addTrack(track));
```

This method adds all the canvas video data to one **MediaStream**, which is the combinedStream variable.

<br />

## Section 2: let’s hear it

First, just like we added the canvasStream object to record the canvas, let’s add the **audioDestination** object to record the audio. Add this code right under where you initialize canvasStream:

```
function startRecording(){
   const canvasStream = canvas.captureStream(20); // Frame rate of canvas
   const audioDestination = audioCtx.createMediaStreamDestination();
...
}
```

The audioDestination is a new object that we use to redirect our audio to our recording device instead of just our speakers. To do all of that, we’re going to use the **.connect()**  method:

```
   gainNode.connect(audioDestination);
```

Don’t worry, since we ran `gainNode.connect(audioctx.destination);` earlier, we’re still getting audio from our computer!

And now, we have to connect our audio track to the combined stream - just like we did for the canvas! Add in this code right after our .getVideoTracks() call:

```
audioDestination.stream.getAudioTracks().forEach(track => combinedStream.addTrack(track));
```

## Section 3: let’s logic it up

Next, I’m gonna set the **recorder** variable, and initalize it to a **MediaRecorder** object, which just records combinedStream so we can download it to our computers. Put this at the bottom of your startRecording function:

```
recorder = new MediaRecorder(combinedStream, { mimeType: 'video/webm' });
```

Now, this is a little section of code that I’m going to have you *copy and paste*. It’s a little confusing and we don’t need to fully understand it at this point in our coding journies. However, if you want to learn more about it (especially if you want to improve and tweak your project; maybe add some voice recordings too? 😎🎤), I 100% suggest you read more about MediaRecording [here](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream_Recording_API)! Put this code at the bottom of your startRecording() function:

```
recorder.ondataavailable = e => {
 if (e.data.size > 0) {
   chunks.push(e.data);
 }
};


recorder.onstop = () => {
   const blob = new Blob(chunks, { type: 'video/webm' });
   const url = URL.createObjectURL(blob);
   const a = document.createElement('a');
   a.href = url;
   a.download = 'recording.webm';
   a.click();
   URL.revokeObjectURL(url);
};
```

Quick summary: the code under `recorder.ondataavailable` pushes all of the data that it’s recording throughout to an array that we initialized, called **chunks**. This holds, well, chunks of data. The code under `recorder.onstop` adds all of those chunks to an object called a **blob**, which it then turns into a file, and automatically downloads it! Phew! That’s a lot of weird names. Let’s move onto some logic for getting recording to work.

At the very very end of your startRecording() function, you need to add one important line of code:

```
recorder.start();
```

Yep! We actually have to, you know, start the object recording. :)

We’re eventually going to create a button that starts and stops recording, similar to how we created our submit button, but until then, let’s create a function that, upon being called, would handle it.

Let’s call the function toggle(), and also initialize a variable before it called **is_recording**, which will be true when we’re, well, recording, and false when we’re not.

```
var is_recording = false;
function toggle(){

}
```

One method we need to know before we start is:

`recorder.stop();`
> this stops the recorder, which will run all of our code after recorder.onstop

`element.innerHTML = "";`
> this sets the “text” inside of our HTML element, like the text we put inside of a button. We’re gonna use this to change the toggle button text so it says “stop recording” when we’re currently recording, and “start recording” when we’re not

<Dropdown title="Haha! You thought you got away from the pesky dropdowns, didn’t you? Well, you didn’t. Here’s a challenge for you: can you use if-statements, our variable is_recording, the startRecording() function we created, the .innerHTML method, and the recorder.stop() method to fill in our toggle() method.">
Answer: 

```
function toggle() {
   is_recording = !is_recording; 
   if(is_recording){
       recording_toggle.innerHTML = "Stop Recording";
       startRecording(); 
   } else {
       recording_toggle.innerHTML = "Start Recording";
       recorder.stop();
   }
}
```
</Dropdown>

<br />

Yay! Now all we have to do is create a toggle button, and call toggle() when it’s clicked.

<Dropdown title="Remember how we did this with the submit button? Try that on your own!">

Answer: `<button id="record" onclick="toggle()">Start recording</button>`
</Dropdown>

<br />

Now, let’s reference it in our main.js file like we do all our other buttons:

```
const recording_toggle = document.getElementById('record');
```

Congrats!! You’ve added a feature to record your beautiful music and art! Check out what my website looks like:

<video src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/084e50d1aa6159d84b4dd928537739e21ebfdba4_recording.mp4" width="100%" controls></video>

<br />

Here’s your challenge (don’t worry, this one’s all fun and games, no work):

***Go record some awesome art, and keep it on your computer, so you can add it to the Oscillart gallery when you submit your project!!***

<br />

