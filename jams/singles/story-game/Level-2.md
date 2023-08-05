# Choose Wisely, Code Boldly; Styling a Choice Driven Game in Python
##  Level 2: Sonic Sagas
### Adding Music and Style to your Text-Based Adventure Game

![Adding music and style](https://cloud-3usasijgs-hack-club-bot.vercel.app/0copy_of_arial.gif)

Once again, great job in finishing ***Level 1: The Storyteller's Forge***. Now we're moving on to the second layer of the **pizza**, the *sauce*! A cool add on that gives a kick of flavor! In this level we will be learning how to add background music, sound effects, text animation, and color! 

{Insert Live Tutorial here}

Here is the example code of what we're going to create!: https://replit.com/@ConnemaraPony/Intermediate-CYOA?v=1


## Making Music

Before we learn how to incorporate music it is important to know where to *find* it. Nowadays, we have access to a variety of free music libraries. Here are some examples:
- YouTube Audio Library (Free)
- Slip.Stream (Pro and Free)
- Free Music Archive (Pro and Free)
- SoundStripe (Pro and Free)
- iMovie (Free)

Always remember that when publishing your work make sure the music or even graphics you use are *not* copyrighted because that can give you a headache in the legal department. Instead, try to find *royalty free* music or have a license to use it commercially. 

You can even make your own music! Here are some example options:
- Create a music generator!
- Use an existing music software on your device (ex. GarageBand)
- Make music on MuseScore

Once you figure out your music and sound effects... it's time to start!

### Adding backGround() Music

Adding music to your replit game is very simple! 
Let's start off by `import`ing the module `audio from` a package called `replit`. And add it at the very top of our game (I'll be using the pizza example from earlier):
```py
from replit import audio

# Rest of game code goes below
GameStart = "yes"

while GameStart == "yes":
	...
```

Now you have to make sure to import your music files to project. You can either drag and drop your files into the sidebar:

Or press "new file":

Once everything is downloaded let's define the music we're adding to our game. The function I'm going to `def` is the `backGround()` function and then `:` I'm going to show where the program can locate my music file or `source` . I'll set `source =` to my `audio.play_file('')` so that it knows to process and play my music, and inside the `''` i'll add my file name. In this case `'Mezzogiorno.mp3'` . 

*Note: Replit audio currently supports .wav, .mp3, and .aif files. If you file has a different extension then it will not work. *

Now I need to make sure my music *plays* when the game is running. To do that i'll just call the function in the main loop like so: `backGround()`

There you have it! Here is what the code should look like:
```py
"""
This is a block comment which is great for comments that are longer than one line.

Music creators! 
Background Music: Track: "Mezzogiorno"
Music provided by https://slip.stream
Free Download / Stream: https://get.slip.stream/p2t2Ot

"""
from replit import audio

def backGround():
	    source = audio.play_file('Mezzogiorno.mp3')
  
gameStart = "yes"
while gameStart == "yes":
  # this is a comment, something that will not appear in the final 
    game
  # It is great for taking notes and explaining code!
  # add all game related content inside this loop   
  
  backGround()
  
  ...
```

### Adding soundEffects() 

You use the *exact* same process for sound effects. But how can we determine the *duration* of it? To do that we will need to `import time` package. Then, we'll go to our `def` function and under the `source = ...` we'll add `time.sleep()`. This tells the computer how long the music should play for until it quits/sleeps. Inside the `()` add the duration. I'll make it set to `(2)`. Then, call on the function wherever you would like.

Here is our updated code with my `pop()` sound effect function:
```py
from replit import audio
import time

def backGround():
	source = audio.play_file('Mezzogiorno.mp3')

def pop():
	source = audio.play_file('Pop.mp3')
	time.sleep(2)
  
gameStart = "yes"
while gameStart == "yes":
  # add all game related content inside this loop   
  
  backGround()

  pop()
  print("Welcome to La Mia Pizzeria Preferita!")

...
  
```

## Text Animation

One of the most popular text animation for CYOA games are the typewriter effect. So, let's make it! To start off let's `def` a function called `typewriter()` and inside the parentheses let's determine what this function will effect which is `(text)`. Then `:` we want to say that `for` each letter `in` our `text` the program should then `:` `print()` our `letter` s side by side which can be wriiten as `end=""`, and it should be immediately printed or `flush`ed out  which means we have to `=True`. Similar to how we determined music length we need to determine how long each letter should wait until it's printed out, to do that we'll use `time.sleep()` and in the parentheses I'll set it to `(0.05)`.

We should have something like this:
```py
def typewriter(text):
  for letter in text:
    print(letter, end="", flush=True)
    time.sleep(0.05)
```

Now to call on it we can change any of the `print("")` functions we have to `typewriter("")`. Here is what our updated code should look like:

```py
from replit import audio
import time

def typewriter(text):
  for letter in text:
    print(letter, end="", flush=True)
    time.sleep(0.05)
    
def backGround():
	source = audio.play_file('Mezzogiorno.mp3')

def pop():
	source = audio.play_file('Pop.mp3')
	time.sleep(2)
  
gameStart = "yes"
while gameStart == "yes":
  # add all game related content inside this loop   
  
  backGround()

  pop()
  typewriter("Welcome to La Mia Pizzeria Preferita!")

...
```

## Coloring Text

Another cool thing we can do is changing our text's color! 

For this we need to head over to the tools side bar and go to shell. In shell let's type `pip install termcolor`. This is a package that will help us change the color of our text. It might take a couple of seconds to load. 

After, let's head back to our `main.py` file and `import termcolor`. Let's `def` a new function and name it `change_color()` in the parentheses we want to make sure it takes in two inputs: `(text, color)`. The purpose of this function is to take the `text` and change it to a given `color`. To make this possible we then `:` write `termcolor.cprint(text,color)`. 

We should have something like this:
```py
import termcolor

def change_color(text, color):
  termcolor.cprint(text, color)
  
```

Now to call on it we can change any of the `print("")` functions we have to `change_color(("add whatever text we like here"), ("add whatever color we like here"))`. Here is what our updated code should look like:
```py
from replit import audio
import time

def typewriter(text):
  for letter in text:
    print(letter, end="", flush=True)
    time.sleep(0.05)
    
def backGround():
	source = audio.play_file('Mezzogiorno.mp3')

def pop():
	source = audio.play_file('Pop.mp3')
	time.sleep(2)
  
gameStart = "yes"
while gameStart == "yes":
  # add all game related content inside this loop   
  
  backGround()

  pop()
  typewriter("Welcome to La Mia Pizzeria Preferita!", "red")
```

## Congratulations!

You have successfully finished ***Level 2: Sonic Sagas***! You now have your own Adventure Game with music and style which you can publish, share with family and friends, and play! 

#### Want to take your build to the next level? 

Let's add a Graphical User Interface (GUI) that will allow our player to interact with the game in a different way~ BUTTONS! 
Go to the next level now! 
