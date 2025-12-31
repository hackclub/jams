---
title: 'Build a Godot Platformer Game (Jumpstart)'
description: 'Create a platformer game using Godot, beginner-friendly'
contributor: 'themagicfrog'
contributorSlackID: 'U06UYA4AH6F'
thumbnail: 'https://hc-cdn.hel1.your-objectstorage.com/s/v3/c1d182e6d55d6d472b94f9e29c54eb572e2fa99e_screenshot_2025-08-14_at_9.16.19___pm.png'
timeEstimate: '100 min'
difficulty: 'Beginner'
keywords: 'game dev, platformer, godot, beginner, easy, jumpstart'
presentation: 'https://www.figma.com/slides/j0xld5JL1PLVmndZPV6YSi/Godot-Platformer-Guide--Jumpstart-?node-id=1-42&t=YvoFRsTHrLei0iRJ-1'
presentationPlay: 'https://www.figma.com/deck/j0xld5JL1PLVmndZPV6YSi'
presentationPDF: 'https://drive.google.com/file/d/1bbt2VDOZMVd7H8hwsGAknGL2x7eW59PF/view?usp=sharing'
notes: 'link to notes (optional)'
poster: 'link to poster (optional)'
video: 'https://youtu.be/G7iZHazD4wo?si=5D9utj8Dh03p6VCY'
slug: 'godot-platformer'
---

# Build a Godot Platformer Game

Welcome to [Jumpstart](https://jumpstart.hackclub.com/), a Hack Club game dev program! I'm Estella Gu, a 15-year old Hack Clubber from Massachusetts. Last year, I spent 100 hours building my first game, a space platformer called [Signal Lost](https://themagicfrog.itch.io/signal-lost). I'll be guiding you today through building a 2D game with a character that can run and jump around. There is also a slideshow presentation and a super helpful video going through this process on this Jam page!

You will use [Godot](https://godotengine.org/), a game engine that is super easy to learn. By the end (about 100 mins), you will have an AWESOME, UNIQUE game to share to your friends! You'll also know the basics of using [Github](https://github.com/) (a code-storing platform), and [Itch](https://itch.io/) (a website to share and play games). If you have any questions or problems, email estella@hackclub.com or ask your club leader.

## Overview of Steps
- Setup Godot
- Make a Github repo
- Build a basic platformer
- Customize your game
- Publish on Itch.io
- Submit your game

## Setup Godot
[Godot](https://godotengine.org/) is a free, open source game engine. Game engines are used to make games easily. Go to [godotengine.org](https://godotengine.org/) to install it. If you cannot install it, you can also use the web editor at [editor.godotengine.org](https://editor.godotengine.org/releases/latest/).

Open Godot, click Create New Project, name your game, select Mobile render, for Project Path select a Game folder, and click Create.

![godotsetup](https://hc-cdn.hel1.your-objectstorage.com/s/v3/925019504d2a7211_jumpstart_guide.gif)

## Make a Github Repo
[Github](https://github.com/) is a website that many developers use to store the different versions of their code and collaborate with others. Go to github.com and make an account. Create a new repository, name it, make it public, choose no README, no license, and no .gitignore.

Open the terminal on your computer and cd into your Godot game folder. Run 
```git init```. Run ```git branch -M main```. Copy your repo's web URL from Github, then run ```git remote add origin <your-link>``` . Run ```git add .```. Run ```git commit -m "initialize"```. Run ```git push -u origin main```.

## Important Commands
### Godot
Save your project often using cmd/ctrl+s.

Play your game with cmd/ctrl+b.

### Github
To update your repository:
   ```git add .```
   ```git commit -m “things-added”```
   ```git push```

“Things-added” is your commit message. It should be descriptive, like "added monster enemies" or "changed menu layout". Make sure to update often! Preferably, every hour. 

## Building the Base of Your Game

### Godot Layout
When you open Godot, you'll see a bunch of different sections. Take some time to familiarize yourself with the layout of Godot. Also use the top bar to change to 2D view instead of 3D view, since we are making a 2D game.
![godotlayout](https://hc-cdn.hel1.your-objectstorage.com/s/v3/22838c27e06c26a8_screenshot_2025-12-26_at_4.29.13___pm.png)

### 1. Create Scene
In the Scene section, you'll see options to create a root node, which is the starting point for your game. All the components will be in the main node. Select Other Node and select Node (with the white circle). Save your project with cmd/ctrl+s and title the scene main.tscn. You will see it show up in the FileSystem area below the Scene area.
![createscene](https://hc-cdn.hel1.your-objectstorage.com/s/v3/298052060d96b2bf_jumpstart_guide_scene.gif)

### 2. Create Player
Under the Node you just created, use the plus button or cmd/ctrl-A to create another node, CharacterBody2D. You'll see many different types of nodes that all have properties that make them fit a different purpose. In the Scene area, rename CharacterBody2D to be called Player.
![createplayer](https://hc-cdn.hel1.your-objectstorage.com/s/v3/23dbc0e7de854666_jumpstart_guide_animation.gif)

Sprite2D is a node that displays textures (images). Create a Sprite2D node under Player. In the Inspector section on the right, you'll see a Texture box that is currently empty. In the FileSystem, there is an icon.svg of the Godot logo, which will be our placeholder player image for now. Drag that image from the FileSystem into the Texture's box. You can then resize it in the main view. Size it accordingly to the thin purple rectangle in the main view, which is the game view.
![addspriteimage](https://hc-cdn.hel1.your-objectstorage.com/s/v3/5241469aa10109dc_jumpstart_guide_sprite_2d.gif)

### 3. Add a Collision Box
Add a CollisionShape2D to the Player. In the Inspector, select Rectangle as the shape. Resize the blue box that appears in the main view to cover the player. This node helps with the game physics when the player is jumping and walking around, so Godot will know the bounds of the player.
![addcollisionbox](https://hc-cdn.hel1.your-objectstorage.com/s/v3/5df24d1019b08fca_create_collision_box.gif)

### 4. Create a Tilset
Tilesets are used to easily make and customize grid-based 2D maps in games. Add a TileMapLayer node under the main Node (not under Player). In the Inspector, select New Tilset in the Tile Set option. In the bottom bar, navigate from TileMap to Tilset. Find an image for your tileset, a plain color will do for now. Add it to your FileSystem by simplying dragging it in. Then, drag that image from the FileSystem into the TileSet area. When prompted, select Yes to modifications.
![createtileset](https://hc-cdn.hel1.your-objectstorage.com/s/v3/0a4442be28afaa90_jumpstart_guide_tilemap.gif)

### 5. Add Collision For Tileset
Just like the player, each block of the map needs a collision box too (or else the player would just fall through the ground). Open TileSet in the Inspector and under Physics Layers, click Add Element. Then in the TileSet area in the bottom, change to the Pain tool and select Physics Layer 0 as the Paint Property. Then, select all the squares.
![tilsetcollision](https://hc-cdn.hel1.your-objectstorage.com/s/v3/d02b7f0c8cfab7e4_jumpstart_guide_tileset_physics.gif)

### 6. Draw a Map
In the bottom area, change from TileSet to TileMap. Use the pencil tool and select one cube. Then, you can freely draw a map in the purple rectangle (game view) in the main view. Design your game map however you want! You can also adjust the block size in Inspector, where there is Transform and Scale.
![drawmap](https://hc-cdn.hel1.your-objectstorage.com/s/v3/18a033325729cf5b_jumpstart_guide_map.gif)

### 7. Create a Player Script
To make it so the player can react to key presses by jumping and walking around, you need to code a script for the Player. Select the player, click the scroll with a green plus (in the Scene area) to create a script. Choose GDScript (the coding language Godot uses), check the Template box and choose CharacterBody2D: Basic Movement, then create the script.
![createscript](https://hc-cdn.hel1.your-objectstorage.com/s/v3/33f7ade44dcf07d8_make_player_script.gif)

### 8. Understand the Template Code
You can run your game now with ctrl/cmd+b or the play button. It works, but the template code is the minumum and we can improve it to make the movement better. First, it is important to understand the template code! Read through:
![templatecode](https://hc-cdn.hel1.your-objectstorage.com/s/v3/f9da1d6f0b0bb492_jumpstart_guide_template_explanation.png)

### 9. Make an Input Map
In the template code, the keys to move are ui_accept, left, and right. The user can't even use the up arrow to jump! We can adjust these and also add WASD controls using an input map. At the very top, go to project, Project Settings, then Input Map. Add three new actions called right, left, and jump. In each action, use the plus button on the right to add a key, which you can just press (WASD, arrows, space).
![inputmap](https://hc-cdn.hel1.your-objectstorage.com/s/v3/f15791e7ade16098_jumpstart_guide_input_map.gif)

In the player.gd script, replace "ui_accept", "ui_right", and "ui_left" with "jump", "right", and "left".

### 10. Tweak Movement in Code
The current code works, but the player's movement is rather slow. We can make some small changes in the code to make the movement sharper. On line 19, you can change the last value (SPEED) to other numbers, such as 900, to control how fast the player comes to a stop. You can make the gravity higher Project, Project, General, 2D Gravity, to a number like 2500. Change JUMP_VELOCITY to -900, making the Player jump higher. Use ctrl/cmd+b to run your game and test.
![movementtweak](https://hc-cdn.hel1.your-objectstorage.com/s/v3/7201b1d3c5a9be6f_movement_changes_gif_from_jumpstart_guide.gif)

### 11. Add a Camera
To make the camera follow the Player as it walks through the game, add a Camera2D node under Player. Edit its position in the main view so it is centered on the player. You can also add a cool camera lag effect in Inspector, enabling Position Smoothing, and setting the speed to be around 7. The lower the speed, the more camera lag there. 
![camera](https://hc-cdn.hel1.your-objectstorage.com/s/v3/c786bc1fba9fcd61_add_camera.gif)

### 12. Congrats!
The base of your platformer game is finished! You can run the game and see. 

## Customize Your Game
Now that you have all the base pieces, it's time to customize your game! Pick a fun theme for your game. Who is your player? Where are they? Where are they going? What does their world look like?

### 1. Change Player, Background, and Tileset
You can draw your own player, background, and tileset image, or also find assets online. 

### 2. Add more!
Some ideas include:
- Collectibles - Create coins, gems, or power-ups that the player can collect. Use Area2D nodes and signal to detect when the player touches them. [This](https://www.youtube.com/watch?reload=9&v=Rh_8UXjYTn4) is a useful video.
- Enemies - Add moving enemies that the player must avoid or defeat. Check out [this](https://www.youtube.com/watch?v=kBzV7vgdQfU) tutorial.
- Score System - Track the player's score based on collectibles, time, or other achievements. Display it on the UI using Label nodes.
- Sound - Import audio files and use AudioStreamPlayer nodes to add background music and sound effects for things like jumping. See [this](https://www.youtube.com/watch?v=dTL6Cpk5hY4) helpful tutorial.
- Anything else you can think of - There are tons of great tutorials online to help you! Do some searching :). Make your game like no other.

### Need inspiration?
Check out the awesome games that Hack Clubbers created as part of Jumpstart in the past! [Here](http://v2.jumpstart.hackclub.com/games/index.html).
![v2games](https://hc-cdn.hel1.your-objectstorage.com/s/v3/513a185633e1be49_v2gamse.gif)

## Publish on Itch.io
Once you're done buildling you game, it's time to upload it online so other people can experience it! Itch.io is a popular platform where games are shared. 

### Exporting from Godot
In the top bar, go to Projects, Export, Add, Web. Then, Manage Export Templates, Download and Install. When it is down installing, go back to Export, select the Web preset and click Export Project. Make a folder called Exports and save the index.index.html to it. In your File Explorer, compress all the contents in the Export folder into a .zip. Name it your-game-web.zip.

### Publish on Itch.io
Go to [itch.io](https://itch.io/) and make an account. In Itch.io's dashboard, click Create New Project. Title it, add a description. For Kind of Project, choose HTML. Upload the .zip file you made. Check the This file will be played in the browser box. Change Viewport Dimensions to the ones in Godot that you can find by going to Project, Project Settings, and Window.

Check the Fullscreen button and the SharedArrayBuffersupport box. Add tags, a cover image, and anything else you want. You can also edit the theme (colors and font) on your game page. 

### *IMPORTANT* 
You need to Save the page before making it Public. It is currently a Draft, so click Save & view page, then go back, and select Public under Visibility and Access. Make sure your itch.io page is public!!

Finally, you can share your game page's url for others to play. If you make updates in Godot, you just need to reupload a new .zip.

## Submit your Game!
CONGRATULATIONS!! You've built an AMAZING game in Godot. 
### Submission Checklist! Make sure that
- Your game is published publically on itch.io and the link works.
- Your code is on Github and the repository is public. There are .gd and .tscn files.
- You've tested your game and it runs without any errors.

Submit your game to [this](https://forms.hackclub.com/jumpstart-beginner) form!! Your game will be reviewed soon and you'll be emailed with information about the prize. :)





