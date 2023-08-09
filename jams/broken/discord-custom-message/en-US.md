<!-- ---
title: 'BROKEN-Create your own Club Crypto Currency'
description: >
  In this Jam, we'll be working on creating stunning shapes and graphics using Python and its pre-installed Turtle library.
contributor: 'zsh'
originalAuthor: 'YashKalbande'
thumbnail: 'https://cloud-36kk4uh0h.vercel.app/turtle_benzene_ring.gif'
timeEstimate: '45 Min'
difficulty: 'Beginner'
keywords: 'Beta, Python, Art'
language: 'Python'
presentation: 'https://www.figma.com/file/UFFlwD9kEFmMkygaY8yG3h/Untitled?type=design&node-id=0%3A1&mode=design&t=9UnEZB6EYxvg2aQv-1'
presentationPlay: 'https://www.figma.com/proto/UFFlwD9kEFmMkygaY8yG3h/Untitled?type=design&node-id=2-2&t=IebotsxN9M6q3Edr-1&scaling=contain&page-id=0%3A1&mode=design'
presentationPDF: 'https://cloud-fplorbj3h-hack-club-bot.vercel.app/0make_your_own_club_token_w_solidity.pdf'
notes: 'https://cloud-mrmhmej0t-hack-club-bot.vercel.app/0notes_for_this_jam__for_learner_to_note__jot_down_.pdf'
poster: 'https://cloud-5bv8lvd9u-hack-club-bot.vercel.app/0red_modern_and_minimalist_crypto_tips_your_story.png'
video: ''
slug: 'discord-custom-message'
---


title: 'Discord Custom Message Bot'
description: >
  In this Jam, we're going to create a Discord bot that allows users to save custom messages that they can have the bot send at any time.
contributor: 'zoya-hussain'
originalAuthor: 'wollygfx'
thumbnail: 'https://cloud-bj4vorj8t.vercel.app/examplebot.png'
timeEstimate: '45 Min'
difficulty: 'Intermediate'
keywords: 'Beta'
language: ''
presentation: ''
presentationPlay: ''
presentationPDF: ''
notes: ''
poster: ''
video: ''
slug: 'custom-discord-bot'


 Howdy! In this Jam, we're going to create a Discord bot that allows users to save custom messages that they can have the bot send at any time. By the end you will have programmed a sweet bot to add to your Discord server! Are you ready? Let's begin!

<img src="https://cloud-bj4vorj8t.vercel.app/examplebot.png" width="380" alt="Message Example">

## Outline
1. **Setup**: Establish the groundwork for your Discord bot project by setting up your bot, Repl.it, and JS file.
2. **Write, Get, Delete, List, and Help Commands:** Learn how to write several commands that can be executed by your bot.
3. **Add the Bot to your Server:** Test out your new bot in your own Discord server.
4. **More that you can make with Source Code**: Wondering where to go from here? Find new ways to expand on your project.
5. **Hacks**: Find additional challenges to boost your project to the next level.

## Bot Setup
Let's set up a bot through Discord before creating its features! Click [here](https://discord.com/developers/applications).

Click the "New Application" button at the top right.
<img src="https://cloud-noinx6mnk.vercel.app/0screenshot__1379_.png" width="900" alt="New Application Button">
This creates a new bot where you can customize the name, description, and profile picture!
<img src="https://cloud-jlzsnh85x.vercel.app/0screenshot__1380_.png" width="900" alt="Bot Profile">

Now click the "Bot" tab on the right side of your screen.
<img src="https://cloud-e5r0obhgo.vercel.app/0screenshot__1381_.png" width="900" alt="Bot Side Bar">

Click "Add Bot" to generate a bot token. This identifies the bot. Give it to nobody!
<img src="https://cloud-lix7k1shj.vercel.app/0screenshot__1382_.png" width="900" alt="Bot Token">
<img src="https://media4.giphy.com/media/pvl3qUsgblNOo/200.gif" width="380" alt="Zelda Gif">

## Repl.it Setup

We're going to use [Repl.it](https://repl.it/~) to host the bot. It is an online IDE that makes it easy to setup and run the bot!

Create a new repl and use Node.js as the language.

<img src="https://cloud-otu0relhe.vercel.app/0screenshot__1383_.png" width="600" alt="Node.js Repl">

Make sure to set it to private. You'll be adding sensitive information to this project, so you don't want other people accessing your code.

<img src="https://cloud-6u5f66efw.vercel.app/0screenshot__1418_.png" width="600" alt="Node.js Repl">

## Initial Setup

Let's start coding!

<img src="https://media1.tenor.com/images/d17514e2c03ec6b0e67ba7f18439a011/tenor.gif" width="380" alt="Shawn Sheep Gif">

You should see a file called `index.js`. This is where you'll write the code for the bot.

But first, create a file called `msgs.json` by clicking on the "Add file" button at the top left of your sidebar. This file is where your bot's messages will be stored.

JSON is a file format that allows you to store data as a JavaScript object (key/value pair). If you want to learn more, [check here](https://www.json.org/json-en.html).

Once you create the `msgs.json` file, add two curly braces, like so:

<img src="https://cloud-gh7l7h2q1.vercel.app/json_example.png" width="380" alt="Write Command Example">

### Writing JavaScript!

In your `index.js` file, start off by adding the following code. It will be explained below.

```js
const Discord = require('discord.js')
const client = new Discord.Client()
const fs = require('fs')
client.msgs = require('./msgs.json')
prefix = '!'

client.once('ready', () => {
  console.log('Ready!')
})

client.on('message', (message) => {})

client.login('token') // make sure you replace token with your bot token
```

Let's start by explaining what the prefix is. It allows you to use an exclamation mark to call the bot! Some people have other prefixes such as a dash or pound symbol. It's up to you, so you can set any custom prefix for your bot.

```js
prefix = '!'
```

Now let's explain these lines.

```js
const fs = require('fs')
client.msgs = require('./msgs.json')
```

[fs](https://nodejs.org/api/fs.html#fs_file_system) is a file system node module. It allows you to interact with file systems, which we will need later when writing to your JSON file.

We then specify that our JSON file will have messages written to it.

Right after the lines where you import everything you need, add:

```js
client.once('ready', () => {
  console.log('Ready!')
})
```

This code lets you know the bot is on when you run it.

## Write Command

Yay! We've successfully completed our initial setup!

<img src="https://i.pinimg.com/originals/ca/38/b8/ca38b8f7e096956f258d406a7820c7ba.gif" width="380" alt="Snoopy Gif">

Now let's start with a command that allows you to add your own custom messages. The user will provide a key that the message will be saved to and the message itself.

<img src="https://cloud-kb9kganvz.vercel.app/write_message.png" width="380" alt="Write Command Example">

We'll want the bot to respond to `!write {messageKey} {message}`.

Within your `client.on` brackets add this if statement:

```js
client.on('message', (message) => {
  if (message.content.startsWith(`${prefix}write `)) {
  
  }
})
```

This makes sure your bot command starts with `!write`. The `message.content` part of this just looks at the message that the user typed. In addition, you can customize your `!write` command to have more features, such as specifying message colors, using the embed system, and attachments.

Within the if statement, add:

```js
client.on('message', (message) => {
  if (message.content.startsWith(`${prefix}write `)) {
    var tempSplits = message.content.split(' ', 2)
    var keyVal = tempSplits[1]
    var messageVal = message.content.slice(tempSplits[0].length + tempSplits[1].length + 2)
  }
})
```

These three lines of code separate the key value and the message into two separate strings.

- The first line splits into two strings into an array based on the spaces. The two represents how big the array will be. Documentation is [here](https://www.w3schools.com/jsref/jsref_split.asp). The key value will be the second of the two strings.
- The second line assigns the second array value to the keyVal string.
- The third line takes the original user message and cuts out everything but the message part of the command.

Now, let's add the user to the json file.

```js
client.on('message', (message) => {
  if (message.content.startsWith(`${prefix}write `)) {
  // Code we already wrote previously would be here
    if (client.msgs[message.author.id] == undefined) {
      client.msgs[message.author.id] = {}
    }
    client.msgs[message.author.id][keyVal] = messageVal
  }
})
```

If the user does not exist in the json, we are adding them. We are doing this based on ID rather than username because every ID is unique.

Then, we are adding the message under the user ID in the json.

```js
client.on('message', (message) => {
  if (message.content.startsWith(`${prefix}write `)) {
  //Code we already wrote previously would be here
    if (client.msgs[message.author.id] == undefined) {
      client.msgs[message.author.id] = {}
    }
    client.msgs[message.author.id][keyVal] = messageVal
    //New Stuff!
    fs.writeFile('./msgs.json', JSON.stringify(client.msgs, null, 4), (err) => {
      if (err) throw err
      message.channel.send('message written')
    })
```

This writes the message to a JSON and sends a message to the Discord channel to confirm that you saved your message.

Your entire command should look like this!

```js
client.on('message', (message) => {
  if (message.content.startsWith(`${prefix}write `)) {
    var tempSplits = message.content.split(' ', 2)
    var keyVal = tempSplits[1]
    var messageVal = message.content.slice(tempSplits[0].length + tempSplits[1].length + 2)

    if (client.msgs[message.author.id] == undefined) {
      client.msgs[message.author.id] = {}
    }
    client.msgs[message.author.id][keyVal] = messageVal

    fs.writeFile('./msgs.json', JSON.stringify(client.msgs, null, 4), (err) => {
      if (err) throw err
      message.channel.send('message written')
    })
  }
}
```

Yay! The `!write` command is done!

## Get Command

<img src="https://media2.giphy.com/media/xT9DPiHFM8Iy3hiC3e/giphy.gif" width="380" alt="Spongebob Gif">

Now let's do the `!get` command. This allows you to get the message you saved!

<img src="https://cloud-eing65rqs.vercel.app/get_message.png" width="380" alt="Get Command Example">

```js
client.on('message', (message) => {
  // The !write command we previously wrote would be here
  if (message.content.startsWith(`${prefix}get `)) {
    let getMessage = message.content.slice(5)
    let _msg = client.msgs[message.author.id][getMessage]
    message.channel.send(_msg)
  }
}
```

- The if statement checks if the message starts with `!get`
- The first line in the if statement gets rid of the `!get` part of the message to isolate the message
- The second line gets the message in the JSON file.
- The third line has the bot send the message in the Discord channel.
  
As well, you can modify your `!get` command to allow for retrieving messages, specifying channels, and sort messages by other factors such as keywords or timestamps.

## Delete Command

<img src="https://media3.giphy.com/media/26xBIUj4Y6K2LcIz6/source.gif" width="380" alt="Delete Gif">

Now, let's write a command to delete a message.

<img src="https://cloud-uvlarb2g1.vercel.app/delete_message.png" width="380" alt="Delete Command Example">

```js
client.on('message', (message) => {
  // The Write & Get Commands we wrote would be here
  if (message.content.startsWith(`${prefix}delete `)) {
    let getMessage = message.content.slice(8)
    delete client.msgs[message.author.id][getMessage]
    fs.writeFileSync('./msgs.json', JSON.stringify(client.msgs))
    message.channel.send(getMessage + ' has been deleted.')
  }
}
```

- As usual, the if statement makes sure the message starts with `!delete`
- The first line in the if statement isolates the message
- The second line deletes the message in the JSON
- The third line updates the JSON with the message now deleted
- The fourth line sends a message to let the user know the message was deleted

## List Command

<img src="https://media1.giphy.com/media/j2wpZyLy2s70ul4TKo/giphy-downsized-medium.gif" width="380" alt="List Gif">

Now let's allow the user to get the list of all their saved messages.

<img src="https://cloud-2ghj25por.vercel.app/list_message.png" width="380" alt="List Command Example">

```js
client.on('message', (message) => {
  // The other commands we wrote would be here!
  if (message.content == `${prefix}list`) {
    var messageList = ''

    for (var key in client.msgs[message.author.id]) {
      messageList += key + ', '
    }

    message.channel.send(messageList)
  }
}
```

- The if statement just makes sure the message starts with `!list`
- The first line inside the if statement creates an empty string named messageList
- The for loop cycles through all the key value pairs messages that the user has saved.
- The inside of the loop adds the messageKey to the messageList.
- The final line sends the messageList string to the Discord channel.

## Help Command

![Help Gif](https://media1.tenor.com/images/361687b43fe908864be1cffd6beda642/tenor.gif?itemid=16034496)

Finally, let's create a help command that allows the user to see all the available commands.

<img src="https://cloud-8qig9t4bs.vercel.app/help_message.png" width="380" alt="Help Command Example">

```js
client.on('message', (message) => {
  // The other commands we wrote would be here
  if (message.content == `${prefix}help`) {
    message.channel.send("To send a message do: !write {messageKey} {message}\nTo get a message do: !get {messageKey}\nTo delete a message !delete {messageKey}\nTo view your messages !list");
  }
}
```

This message just sends a message to Discord with all the available commands. You can add to it if you create more! As well, try modifying your help command to allow for more comprehensive and understandable instructions when using the bot's functions.

## Final Source Code

```js
const Discord = require('discord.js')
const client = new Discord.Client()
const fs = require('fs')
client.msgs = require('./msgs.json')
prefix = '!'

client.once('ready', () => {
  console.log('Ready!')
})

client.on('message', (message) => {
  if (message.content.startsWith(`${prefix}write `)) {
    var tempSplits = message.content.split(' ', 2)
    var keyVal = tempSplits[1]
    var messageVal = message.content.slice(tempSplits[0].length + tempSplits[1].length + 2)


    if (client.msgs[message.author.id] == undefined) {
      client.msgs[message.author.id] = {}
    }
    client.msgs[message.author.id][keyVal] = messageVal

    fs.writeFile('./msgs.json', JSON.stringify(client.msgs, null, 4), (err) => {
      if (err) throw err
      message.channel.send('message written')
    })
  }

  if (message.content.startsWith(`${prefix}get `)) {
    let getMessage = message.content.slice(5)
    let _msg = client.msgs[message.author.id][getMessage]
    message.channel.send(_msg)
  }

  if (message.content.startsWith(`${prefix}delete `)) {
    let getMessage = message.content.slice(8)
    delete client.msgs[message.author.id][getMessage]
    fs.writeFileSync('./msgs.json', JSON.stringify(client.msgs))
    message.channel.send(getMessage + ' has been deleted.')
  }

  if (message.content == `${prefix}list`) {
    var messageList = ''

    for (var key in client.msgs[message.author.id]) {
      messageList += key + ', '
    }

    message.channel.send(messageList)
  }

  if (message.content == `${prefix}help`) {
    message.channel.send("To send a message do: !write {messageKey} {message}\nTo get a message do: !get {messageKey}\nTo delete a message !delete {messageKey}\nTo view your messages !list");
  }
})

client.login('token')
```

## Add the bot to your server

Now that we've written all of the code, it's time to add this bot to your Discord server!

Go [here](https://discordapi.com/permissions.html#).

<img src="https://cloud-1ca9lqh0p.vercel.app/0screenshot__1384_.png" width="450" alt="Adding Bot to Your Server">

Add your permissions, click the link at the bottom, and choose what server you want to add it to!

## Hacks

Congratulations! You've now finished your Discord bot. If you're looking to level up your project from here, check out our challenges below:

🌶️ **MILD:**
- Setting Custom Response Triggers:
	- Use custom response triggers (such as a word or phrase) which, when mentioned, is responded to with a message
- Embed Support:
	- Modify to send messages using Discord's embed feature, which allows for more visually appealing messages (choosing colors, images/GIFs)
🌶️ 🌶️  **MEDIUM:**
- Tagging System:
	- Create a command that allows for sorting and filtering by different tags
- Random Message Sending:
	- Allow for server members to retrieve a random message from the user's saved messages
🌶️ 🌶️ 🌶️  **HOT:**
- 8-Ball Bot:
	- Turn your bot into an 8-ball by responding with a random response when users ask a question
- Message Liking System
	- Add a tracking feature that shows the number of reactions on a saved message

**More that you can make with Source Code**
- [Original Bot](https://repl.it/@CosmicSnowman/Discord-Bot-Workshop#index.js)
- [Expanded Bot with Community Messages](https://repl.it/@CosmicSnowman/WorkshopExpanded1#index.js)
- [Expanded Bot with Message Limits](https://repl.it/@CosmicSnowman/WorkshopExpanded2#index.js)
- [Expanded Bot with Random Messages](https://repl.it/@CosmicSnowman/WorkshopExpanded3#index.js) -->