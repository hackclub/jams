---
part: part-2
title: 'Giving Your Smart AI Companion a Voice!'  
batch: 'artificial-intelligence'
description: >  
  This is a workshop description introducing the concept of Artificial Intelligence and Machine Learning, focusing on creating a web-based AI Companion or Smart Voice Assistant using HTML, JS, and CSS, as well as tools like Teachable Machine by Google and Replit, and incorporating OpenAI API to recognize an audio or visual keyword, with examples of different ideas for AI Companions.
contributor: 'sahitid'  
thumbnail: 'https://cloud-1xtor5uxe-hack-club-bot.vercel.app/0thumbnail_2.png'
timeEstimate: '45 Min'  
difficulty: 'Beginner'
keywords: 'AI, ML, Machine Learning, Artificial Intelligence'  
language: 'JavaScript, HTML'
presentation: "" # TODO
presentationPlay: "" # TODO
presentationPDF: "" # TODO 
notes: "" # TODO
poster: # TODO 
video: "" # TODO
totalParts: 4
---

### Part 2/4 | Prerequisite: a little web dev knowledge (HTML, JS, CSS) | 45-60 minutes

Yay! I'm so glad you're continuing this adventure to build your own AI Companion!

Although this Jams goes over the fundamentals of using AI and ML, reign all your creative freedom to create a fully functioning smart assistant. I'm making an [Orpheus](https://workshops.hackclub.com/orpheus/) that'll embody Hack Club's mascot but you certainly don't have to.

In fact I encourage that you go out of your way to think of the most bizarre uses of your program. Take a look at what an AI came up with as ideas.

![chatgpt response with ideas for projects](https://cloud-jmwnkv7lq-hack-club-bot.vercel.app/0image.png)

In this part, we'll start coding our web app with JavaScript and HTML to set up our speech to text feature, start listening function, and stop listening function!

### **Outline:**
1. **Enter The Code Editor** *(start coding in your browser)*
2. **Set Up the HTML Some More** *(visualize the conversation with AI)*
3. **Let's Get Orpheus to Speak!** *(text to speech recognition!)*

## Enter the Code Editor

Firstly, let's get setup in the code editor! Head over to the [Replit Website](https://replit.com/languages/html) and open the project you were working in the last part of this Jams.

You should see your 3 files: index.html, script.js, and style.css respectively.

## Set Up the HTML Some More

Now let's get Orpheus to speak instead of a boring `console.log`.

There are two parts to this: 1) we want to hear it, but 2) we also want to see it, so we need to edit the HTML now.

That's easy! Go to `index.html` and add this to the `<body>`

```html
<body>
    <div id="startup">&middot; &middot; &middot;</div>
    <div id="messages"></div>
    <div id="loading">&middot; &middot; &middot;</div>
    <div id="result">&middot; &middot; &middot;</div>
</body>
```

Don't be scared of HTML entities! They are just descriptions for different symbols, here we are using the middle dot symbol (`middot` or . ) to represent loading bubble.

The `messages` div will store all the messages between us and Orpheus, `startup` is the initial loading of the Teachable Machine model, `loading` is for Orpheus' responses, and `result` is our responses.

Some of these will be invisible at first, so let's add some CSS:

```css
#result,
#loading {
  display: none;
}
```

## Let's Get Orpheus to Speak!

![orpheus plushie gif](https://cloud-lsz4bcbfi-hack-club-bot.vercel.app/0jams_gifs.gif)

Now we can create the two functions to first output the response through text onto the screen and then to output the speech

We will create 2 functions, one to output Orpheus' response to the screen and the other one to actually speak:

Okay, let's get Orpheus to speak now! We will create 2 functions in the JavaScript file, one to output Orpheus' response to the screen:

```js
function addMessage({ role, content }) {
  let message = document.createElement('div')
  message.innerText = content
  message.scrollIntoView(false) // Scroll to the message
}
```
*Here we are destructuring the argument because OpenAI returns responses as `{role, content}`* 

And the other one to actually speak:

It will be an async function, which means it runs asynchronously: talking takes time and we want to make sure it finishes talking before we move onto the next thing. To do this, we use _promises_, which tell us when a function is done running and whether or not it was successful.

```js
async function speak(message) {
  return new Promise((resolve, reject) => {
    let synth = window.speechSynthesis
    if (synth) {
      let utterance = new SpeechSynthesisUtterance(message)
      
      synth.cancel()
      synth.speak(utterance)
      utterance.onend = resolve
    } else {
      reject('speechSynthesis not supported')
    }
  })
}
```

The `speak` function takes a `message` as input and returns a promise. Inside the function, it checks if the browser supports speech synthesis. If it does, it proceeds with converting the `message` into speech.

It then creates a speech utterance (to represent the text to be spoken) and sets it up with options like voice and speaking rate (which are currently commented out in the code), and cancels any ongoing speech synthesis process.

Also, if the browser doesn't support speech synthesis, it rejects the promise with a message saying that speech synthesis is not supported.

#### Change Up Your AI Companion's Voice

Additionally, if you play around and add some lines of code under  `let utterance = new SpeechSynthesisUtterance(message)` you can change up the voice of your AI Companion. And there's lots of voices to choose from!

There are a lot of voices to choose from:

```js
const voices = synth.getVoices()
utterance.voice = voices[voices.findIndex(voice => voice.name === 'Good News')]
utterance.rate = 1
```

Play around with the voices! You can find a list of some voices [here](https://codepen.io/matt-west/full/DpmMgE). *(Try out Good News, it's hilarious!)*

And finally, let's edit up our already existing `listen` function:

```js
recognizer.listen(
  result => {
    const orpheusNoise = result.scores[1]
    if (orpheusNoise > THRESHOLD) {
          speak('Hey').then(() => {
            console.log("Done speaking")
          })
        }
  },
  {
    includeSpectrogram: true,
    probabilityThreshold: 0.75,
    invokeCallbackOnNoiseAndUnknown: true,
    overlapFactor: 0.5
  }
)}
```

In case it wasn't obvious enough, here is what we changed:

![before and after for code](https://cloud-8s76y8brd-hack-club-bot.vercel.app/0jams_gifs.png)

Notice that we replaced `console.log` with `speak('Hey!').then(() => ...)`. Because we used promises, we can say, once speak is done done running, we can **then** move on to the next thing, which is `console.log`ging "Done speaking

We need to also implement the `listening` variable so that Orpheus isn't listening and speaking at the same time that it is listening! It will tell Orpheus whether or not she should be speaking or listening *(that way, listening doens't overlap with Orpheus speaking, which could lead to problems).*

Initialize the following variable at the beginning of your program:

```js 
let listening = false
```

Now incorporate it in the `listen` function:
```js
recognizer.listen(
  result => {
    const orpheusNoise = result.scores[1]
    if (orpheusNoise > THRESHOLD && !listening) {
          listening = true
          speak('Hey').then(() => {
            console.log("Done speaking")
            listening = false
          })
        }
  },
  {
    includeSpectrogram: true,
    probabilityThreshold: 0.75,
    invokeCallbackOnNoiseAndUnknown: true,
    overlapFactor: 0.5
  }
)}
```

And finally we need to call the `init` function at the end!

```js
init()
```

## Full Code and Demo

```js
const URL = 'https://teachablemachine.withgoogle.com/models/hiSl8IOc-/'
const THRESHOLD = 0.9

let listening = false

async function speak(message) {
  return new Promise((resolve, reject) => {
    let synth = window.speechSynthesis
    if (synth) {
      let utterance = new SpeechSynthesisUtterance(message)
      const voices = synth.getVoices()
      utterance.voice = voices[voices.findIndex(voice => voice.name === 'Good News')]
      utterance.rate = 1

      synth.cancel()
      synth.speak(utterance)
      utterance.onend = resolve
    } else {
      reject('speechSynthesis not supported')
    }
  })
}

function addMessage({ role, content }) {
  let message = document.createElement('div')
  message.innerText = content
  message.scrollIntoView(false)
}

window.onload = () => {
  let recognizer;

  async function createModel() {
    const checkpointURL = URL + 'model.json'
    const metadataURL = URL + 'metadata.json'

    const recognizer = speechCommands.create(
      'BROWSER_FFT',
      undefined,
      checkpointURL,
      metadataURL
    )

    await recognizer.ensureModelLoaded()

    return recognizer
  }

  async function init() {
    recognizer = await createModel()

    recognizer.listen(
      result => {
        const orpheusNoise = result.scores[1]
        if (orpheusNoise > THRESHOLD && !listening) {
          listening = true
          speak('Hey').then(() => {
            console.log("Done speaking")
            listening = false
          })
        }
      },
      {
        includeSpectrogram: true,
        probabilityThreshold: 0.75,
        invokeCallbackOnNoiseAndUnknown: true,
        overlapFactor: 0.5
      }
    )
  }

  init()
}
```

<video src="https://cloud-18r0fzw3m-hack-club-bot.vercel.app/0jams_gifs__1_.mp4" controls="controls" style={{maxWidth: "720px"}}></video>

## Additional Challenge Hacking! (recommended)

It's that time you've all been waiting for! Let's Hack our Jam! Try doing one of the following:
![jam hacks](https://cloud-f7mhrygov-hack-club-bot.vercel.app/0jam_hacks_2.gif)

- Try adding a setting that lets people choose their voice option
- Have you ever looked into [Eleven Labs](https://beta.elevenlabs.io/) AI voices? How might one go about incorporating their API into this project for more realistic voices?
- Could you add a setting that lets people choose their assistant's voice when they open your web app?

## Stay Tuned To Build Your Very Own Smart Voice Assistant

We just gave our model a voice and the necessary tools to know *when* to listen. But we still need to give it the functionality to understand language and speech.

In the next part, we'll integrate the speech recognition API to convert our speech to text for the AI Companion to understand.
