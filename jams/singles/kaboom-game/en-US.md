---
title: "Build a game (with explosions!)"
description: >
  In this Jam, you'll be designing and creating a fun platformer-style game and sharing it with your friends.
contributor: 'ajs256'
thumbnail: 'https://cloud-86mea0y22-hack-club-bot.vercel.app/0thumb-cropped.gif'
timeEstimate: '30 minutes'  
difficulty: 'Intermediate'  
keywords: 'Web, Game, js, JavaScript, glitch, kaboom, gamedev' 
language: 'JavaScript'  
presentation: "https://www.figma.com/file/fUIpjYIAnybmQXUOr8rEPn/KaboomJam?type=design&node-id=0%3A1&mode=design&t=HnYTGbk8JkUTZmWg-1" 
presentationPlay: "https://www.figma.com/proto/fUIpjYIAnybmQXUOr8rEPn/KaboomJam?type=design&node-id=1-2&t=phUMnwxbFt7UStva-1&scaling=contain&page-id=0%3A1&mode=design" 
presentationPDF: "https://cloud-93xagowus-hack-club-bot.vercel.app/0kaboomjam__1_.pdf" 
notes: "" 
poster: "" 
video: "" 
slug: 'kaboom-game'
---


Hello!! In this Jam, you will be designing and building a web game. When you're all done, it'll look a bit like this:
![A demonstration of a completed platformer game](https://cloud-4p2y0vzmm-hack-club-bot.vercel.app/0screen_recording_2023-08-04_at_11.06.53_am.gif)

## So how are we gonna do this?
Here are the steps we'll go through to build your own game:
1. Get started with [Glitch](https://glitch.com)
2. Start with a simple template game
3. Add more levels to the template
4. Share your game!
---
## Get set up
First, let's get started on [🎏 Glitch](https://glitch.com).
<Dropdown title="Hey, what's Glitch?">  
           Glitch is a site that makes it super simple to build web apps. You can code in your browser and see your results live.
</Dropdown>
1. Go to [glitch.com](https://glitch.com) and click `Sign Up`.
   ![Glitch.com's header, with an arrow pointing to the Sign Up button](https://cloud-ic6sx4m6w-hack-club-bot.vercel.app/0scr-20230714-psiv-3.png)
2. Choose how you'd like to sign up - you can use a GitHub account or a Google account, or if you don't have either, click `Email Magic Link` and you'll get a link and code in your email. 
3. Either click the link in the email or enter the code from the message in your browser.
4. Wahoo! You're ready to code!
---
## Start coding
Now, it's time to code!

Start by remixing my template. Head to https://glitch.com/~kaboom-game-template, then scroll down and click `Remix your own` below the preview. Now you've got your own code editor!

Before we go any further, let's take a look at the structure of a Kaboom game.
```js
kaboom()
```
Every Kaboom game's code will start with this - it initializes the library and gets everything set up. Here's what it looks like:
![A blank checkerboard canvas](https://cloud-6n8dlncke-hack-club-bot.vercel.app/0image.png)

Pretty boring. Let's get some action going!
```js
loadSprite("bean", "https://cdn.glitch.global/6e7edbfb-3679-4519-bb57-df3008b83592/bean.png?v=1688618964513")
```
This loads in a sprite so you can use it later. You pass in a name for the sprite (here, it's `bean`) and a URL. I've included a bunch of sample sprites in the project (check the `📦 Assets` tab in the sidebar!).

```js
add([ 
	sprite("bean"), 
	pos(80, 40), 
])
```
This adds a sprite to the screen. 
![The same background, but now there's a frog-bean-like sprite on it](https://cloud-65jcy7vy5-hack-club-bot.vercel.app/0image.png)

Right now, it doesn't do much. Let's change that!
```js
const bean = add([ 
	sprite("bean"), 
	pos(80, 40), 
	area(),
	body(),  
]);
```
In Kaboom, each *game object* is composed of multiple *components*. Each component will give the game object certain functionality.

> A game object is basically any character in the game, like the player character, an enemy, a rock, or a cloud.

For example, there might be a component to decide the shape of an object, whether gravity affects it, its color or even how much health it has. Let's take a deeper look at that sample:
- The `const bean` part saves the object we're making, so we can refer to it later. You don't always need to do this, but for parts you need to use again later, it's super useful.
- The `add()` method wraps all the components together, a bit like the tortilla of your object burrito. 
- `sprite("bean")` tells Kaboom "render this object with the `bean` sprite I loaded earlier". 
- `pos(80, 40)` gives it a position, at X=80, Y=40.
- `area()` gives it an area that can collide with other objects.
- `body()` gives it a physical body, which makes it affected by gravity and lets it jump.

Now, head back to your code. You'll notice I've left a comment in the code with some steps to make the game work better. Try to fill them in! If you need help with one, check below.

<Dropdown title="1. Making Bean more floaty">  
           Do you see anything that changes the world's gravity? Try changing the value there.
</Dropdown>
<Dropdown title="2. Making coins collectible">  
           You might need to look at the [Kaboom docs](https://kaboomjs.com) for this one. Take a look at the methods under `Game Obj`. What looks like it does what you want?
           For where to put it, try to find a place where _collisions_ are handled. What looks right?
</Dropdown>
<Dropdown title="3. Make the level bigger">  
           There's a place in the code where the level is laid out with symbols. Can you try to add more?
</Dropdown>
Once you're done, your game should look a bit like this:
![a screenshot of a platformer game with a wider platform and more coins](https://cloud-7rnuby5u8-hack-club-bot.vercel.app/0image.png)

> Psst.. here's a tip. Hit <kbd>F1</kbd>. See all those blue boxes? Those are the collision areas of each object in your game. Now hover over one of those objects. Now you can see every object's components! It's a bit like those [x-ray specs](https://en.wikipedia.org/wiki/X-ray_specs) that there used to be ads for in comic books, but it actually works. 
> 
> *(Did nothing happen? If you're on macOS, hold the <kbd>fn</kbd>  key as you press F1. If you're on Windows or Linux, try toggling <kbd>Fn Lock</kbd>.)*
---
## Add another level!
Now, let's add another level to our game. Find this section of the code:
```js
const levels = [
[
// Design the level layout with symbols
"@  ^ $$",
"=======",
],
// TODO add more levels
]
```
Try duplicating everything within the inner set of brackets and designing a new level! 
<Dropdown title="Done? Take a look at what it should look like.">  
	   My level looked a bit like this, but you can make yours whatever you like! Notice how I added another line to the level in order to add more stuff.
	   ```js
const levels = [
[
// Design the level layout with symbols
"@  ^ $$",
"=======",
],

[
"  $  $   ",
"@        ",
"== == ===",
],
]
```
</Dropdown>

But how does Bean get to the next level? I'll leave this as an exercise for you. 

<Dropdown title="I'm a little lost, give me some steps...">  
Here are the general steps you'll need to do in order to do this. You can pull down any of them for some guidance. (Hint: each one corresponds to about one line of code.)
<Dropdown title="1. Import a sprite to use for the goal">  
	   Go to the `📦 Assets` tab in your project and find a sprite you want to use for the goal. Click on it and choose `Copy URL`. Then find the place in the code where we load in sprites. Add your new sprite!
</Dropdown>
<Dropdown title="2. Add it to each level (except the last one)">  
	   Remember when you added some more space to the previous level? Do that again, but use a _different_ symbol.
</Dropdown>
<Dropdown title="3. Map the symbol you used to your sprite">  
	   Now take a look at the `renderNewLevel` function in the code. This function includes a dictionary of all the sprites used in each map. Go ahead and add the portal to that dictionary! 
</Dropdown>
<Dropdown title="4. Add some code to move to the next level">  
	Look at the bottom of the code. Remember when you added code to make the coin collectable? Try to copy that for the portal. When the player hits the portal: you'll want to **increase the `levelID` counter** and **render the next level**.
</Dropdown>
</Dropdown>

---
## Add more stuff!

You can also add more sprites, [some sound effects](https://kaboomjs.com/play?example=audio), or even change the look of the entire game! Check out the Kaboom [docs](https://kaboomjs.com) for documentation on how to use every feature of the library, and the [playground](https://kaboomjs.com/play) for examples! 


--- 
## Sharing your game
Now that you've made the perfect game, it's time to let others play it. Just follow these steps: (On my end, I've had issues with the "Edit project details" menu. This works a lot better for me.)
1. Click `🎏 Settings` in the top left, above the file list.
2. Click `Go to project page`
3. On that page, click `👆 Edit details`
4. Enter your new project name, then save it!
5. Click the `Edit project` button to get back to coding.

To get a link that your friends can use to play your game, click the big purple `Share` button at the top, then copy the `Live site` link.
![A screenshot of Glitch's share dialog with the "Live site" link highlighted](https://cloud-mmr3sh0b9-hack-club-bot.vercel.app/0image.png)
