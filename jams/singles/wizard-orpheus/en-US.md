---
title: 'Make an AI Game in 40 Lines'
description: >
    In this Jam, you will make your own AI Game in 40 lines of code using Wizard Orpheus! Wizard Orpheus is a JavaScript library that makes it easy peasy to build AI apps in JavaScript with minimal prior knowledge!
contributor: 'zachlatta'
thumbnail: 'https://cloud-njbdwayky-hack-club-bot.vercel.app/00rugmerchant__1_.png'
timeEstimate: '60 Min'
difficulty: 'Beginner'
keywords: 'AI, Web'
language: 'JavaScript'
presentation: ''
presentationPlay: 'https://www.figma.com/proto/NbF4B2LzkN1GSYEEuSFkpp/AI-Orpheus?page-id=0%3A1&type=design&node-id=1-2&viewport=411%2C392%2C0.3&t=lAQeAkJIJzYIFPzn-1&scaling=scale-down-width&mode=design'
presentationPDF: 'https://cloud-7vhdadbef-hack-club-bot.vercel.app/0ai_orpheus_compressed__1_.pdf'
notes: 'https://github.com/hackclub/wizard-orpheus/blob/main/README.md'
poster: ''
video: ''
contributorSlackID: 'U0266FRGP'
slug: 'wizard-orpheus'
---

In this Jam, you will make your own AI Game in 40 lines of code using Wizard Orpheus! [Wizard Orpheus](https://github.com/hackclub/wizard-orpheus) is a JavaScript library that makes it easy peasy to build AI apps in JavaScript with minimal prior knowledge!

You will get to come up with your own story, game variables, and fun mechanics. The Jam concept & library was made by [Zach Latta](https://hackclub.slack.com/team/U0266FRGP) (founder of Hack Club) and the slides / document were produced by [Thomas](https://hackclub.slack.com/team/U041FQB8VK2).

**Outline:**
1. **Fork and Run Replit**
2. **Add ability for users to send a message**
3. **Add ability for bot to respond**
4. **Create a variable to keep score**
5. **Update the background with variables** 
6. **Customize prompt to make your own game**

## Fork & Run Replit 
Visit [hack.club/wow-starter](https://hack.club/wow-starter
) and tap Fork & Run. You'll need to create a Replit account for this to work. 

![Wizard Orpheus Fork & Run Gif](https://cloud-rfnb1efui-hack-club-bot.vercel.app/0wizard-orpheus-fork-and-run.gif)
## Add ability for users to send a message
Currently when the user taps enter... 
![user tapping enter](https://cloud-wd3hweveh-hack-club-bot.vercel.app/0noenter.gif)

It does not send the message! Let's change that

Let's go into our script.js file. 

In that file, beneath our prompt (on the first line), let's add this section of code

```
myGame.createUserAction({
  name: 'message',
  parameters: ['Message from user to game'],
  howBotShouldHandle: 'Respond to the user'
})

document.getElementById('input').addEventListener('keyup', function(e) {
  if (e.code == 'Enter') { // if the user presses enter
    let userInput = document.getElementById('input').value
    myGame.message(userInput)

    document.getElementById('conversation').innerHTML += '<p>' + userInput + '</p>'

    document.getElementById('input').value = ''
  }
})
```

This code is giving the user the ability to send a message when they tap Enter. It also clears out the input afterwards so that the input is ready for the next message. 

![new code segment shown working](https://cloud-prej9qe5y-hack-club-bot.vercel.app/0newcodesegment.gif)

## Add ability for bot to respond
We're able to send a message, but we're not currently getting a response. 

With the segment of code below, we're going to give the game bot the ability to respond to our message and place it onto the screen

```
myGame.botAction('respond', 'Send a text response to the user', { message: 'What you want to say to the user' }, data => {
  // Add the bot's response to the conversation
  document.getElementById('conversation').innerHTML += '<p>' + data.message + '</p>'
})
```

Now we're able to get a response to our messages!

![getting response](https://cloud-ajjskyyoq-hack-club-bot.vercel.app/0getmeout.gif)

## Create a variable to keep score
To add more complexity to our game, we can add variables. Variables can be anything from the mood of the character you're talking with to the darkness of the room you're in. 

In this example below, let's implement a score into the game (although feel free to implement whatever variable you'd like)

```
myGame.variable('score', 'Current score. Changes (positive and negatively) as the user does things.', 0)

myGame.botAction('respond', 'Send a text response to the user', { message: 'What you want to say to the user' }, data => {
document.getElementById('conversation').innerHTML += '<p>' + data.message + '</p>'

document.getElementById('score').innerHTML = data.currentVariables.score.value
})
```

Keep in mind that you're *adding to the bot action* instead of creating a whole new bot action.

![Change my score](https://cloud-3so5m9g4f-hack-club-bot.vercel.app/0changemyscore.gif)


## Update the background with variables
You can also change the styles of the game using variables.

For example, you can change the background using variables. 

```
myGame.variable('scaredLevel', 'How scared the user is. This changes quickly. From 0 (not scared) to 50 (very scared).', 0)

myGame.botAction('respond', 'Send a text response to the user', { message: 'What you want to say to the user' }, data => {

  document.body.style.backgroundColor = `rgba(0, 0, 0, ${data.currentVariables.scaredLevel.value / 50})`

})
```

![Darken screen](https://cloud-detca5vdf-hack-club-bot.vercel.app/0darkerscreen.gif)

## Customize prompt to make your own game

Now you can change the prompt on your first line

```
var myGame = new WizardOrpheus('', `
You are an employee at the Capybara Cafe, a place rumored to use capybaras in its beverages. While the public face of the cafe is that of a charming spot offering coffee and tea, there are secrets about the ingredients used that must be kept from prying eyes, especially investigators who might disguise themselves as customers to unearth the truth.
`)
```

After you change the prompt in your game logic (script.js), you can change the content of the UI by going to your index.html file, and altering the paragraph text on line 12.

```
  <p>You are a private investigator working to uncover secrets of the Capybara Cafe. Figure out the secret and win the
    game.</p>
```

Please come up with your own game! A great example is Zach's rug merchant game where you have to convince a rug merchant to sell you a rug for only $100 when the merchant wants $200.

I was able to get the merchant to give it to me for free in a single message. Try to beat my high score (maybe that means them giving you money + the rug or maybe even giving you more rugs for free). 

Here's the link to Zach's game: [Zach's rug merchant game](https://hack.af/qv9xy)

Please share your game on the Hack Club Slack when you finish it! 
