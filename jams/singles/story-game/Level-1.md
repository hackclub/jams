# Choose Wisely, Code Boldly; Creating a Choice Driven Game in Python
## Level 1: The Storyteller's Forge
### Create your Text-Based Adventure Game

{Insert Live Tutorial here}

Here is the example code of what we're going to create!: https://replit.com/@ConnemaraPony/Beginner-CYOA?v=1

Building a Choose Your Own Adventure Game is kinda like making a **pizza**! First, the base! The most important part, and the thing that holds everything up... *drum roll please...* the story line!

![The storyline, the base of all games, is like the dough of a pizza. ](https://cloud-kck0n0txs-hack-club-bot.vercel.app/0copy_of_copy_of_arial.gif)

## What Makes Text Based Adventure Games SO Playable?

CYOA's are interactive experiences that transport players into imaginative worlds through text based narratives. They normally have rich storylines which make players embark on thrilling quests, solve puzzles, and make choices that shape the course of the game!

Embracing the power of imagination, these games are extremely immersive and invite players to visualize the game world and become active participants in the unfolding story. 

Moral of the story is that text adventure games have a huge emphasis on storyline and user interaction. The adventures had are timeless and engaging gaming experiences for players of all ages. 

So what's the most important part? Planning.


## Game Design

![You need to branch out with Gane Design](https://cloud-d4qej17bj-hack-club-bot.vercel.app/0story2.gif)

### Choosing a Theme or Setting! 


Start brainstorming different themes or settings for your story! It could be a mysterious haunted mansion, fantastical forest, or anything that sparks your imagination! Here are some ideas to get started:

- You discover a secret cave with mysterious tunnels each housing... peculiar creatures
- You and a group of friends decide to go to a haunted mansion, but things aren't at all what they seem
- You're being chased and have to escape a maze
- You're opening your own pizza shop
- You're stranded on a desert island
- You're the mayor of a small and... quiet... town
- Create a short "what  ___ am I?" quiz
- Create a realistic roleplay 
- Each person is gifted a special power... what's yours?

The best part is the sky's the limit! Keep brainstorming until you find something you want to start with.

Also consider the potential story choices, depth, and player engagement.

### Planning Game Structure!
![Planning a player's journey](https://cloud-ojeynixq6-hack-club-bot.vercel.app/0untitled_design-removebg-preview.png)

Define what the game structure by figuring out the overall goal that players will strive to achieve. It can be finding treasure, surviving on an abandoned island, solving a mystery, or saving the world!

In this stage determine the key challenges, events, or puzzles the players will face through their journey. You can also take this time to divide your game into different chapters/levels if you would like. 

Now figure out your player's choices. Imagine a tree, and each choice is a different branch of the story. Identify these "branching off" points in the narrative where the player's choices will affect the outcome. 

### Characters!
![Characters](https://cloud-8yiaur9jb-hack-club-bot.vercel.app/0untitled_design__2_.gif)

This is also a good time to figure out any potential non-player characters (NPC's). These are characters that the player can interact with and can make the storyline richer.  

Here are some tips that can help your character become more fleshed out, relatable, and believable, hooking the user to your game:

- Make your characters have "strong" and or detailed backstories that can include their past experiences, goals, motivations, etc.
- Give your characters unique personalities! Think about their temperament, speech patterns, and quirks. How do they express themselves and relate to others? 
	- When writing their dialogue pay attention to how they speak and their language; make sure it reflects their personality and background.
- These NPCs can even have a character arc throughout the story, or perhaps the user's character can influence them. 
	- You could even create side quests that allow the user to strengthen their relationship with them allowing the, to unlock other levels. 
		- This can allow your player to have a more immersive experience.
- You can also make your characters complex by considering their relationships with other NPC characters in the game or the user's. 

Once you're all done writing everything up- let's start programming!


## Setting Up Replit
![Replit.com Home Page](https://cloud-rmnz8besq-hack-club-bot.vercel.app/0replit_sigh_up.gif) 

Before continuing further, make sure to set up or log in to your https://replit.com account. 

![Create a New Repl](https://cloud-lthzt6trl-hack-club-bot.vercel.app/0untitled_design.gif)

Once there click on 'Create a New Repl'

Pick 'Python' as your programming language. 

And name the file what you would like ex. CYOA_Part_1


### Main Game loop

To start we have to have something that will loop for the game checking if the player wants to quit or start over.  To do this we will be using a `while` loop. 

Now what is that? Why is it important?

Well we want something to loop/run through the code for an *unlimited* amount of time that checks whether or not our game will end. 

That is *exactly* what a `while` loop is! It is a repetitive loop that runs until a certain condition becomes *false*! 

Let's start by creating our game's status. We would like the game to keep running until the game's status goes from "yes" to "no". Here's an example: `gameStart == "yes"`  . 

Then we need to set our loop to continuously check that our game's status is equal to "yes". For this we will write `while` followed by our condition (`gameStart == yes`) and a colon. 

Then we have to make sure that our player can add their input to determine whether they want to play or not. Inside the while loop we will add our variable again: `gameStart` but we'll set it `=` to `input("")` and inside the `""` we can add the question of whether or not they would like to quit.

*Note: keep in mind that if they would like to restart or continue with the game it has to equal what our variable was, in this case "yes" if they input anything else the game will quit.*

Yay! We've successfully created a `while` loop that check whether or not our game has ended based on the player's input.

This is what an example of the should look like:

```py
gameStart = "yes"

while gameStart == "yes":
    gameStart = input("Would you like to restart? ")

```


## Let's Make Our Game Design Come to Life!

### Input System 

Let's say for this game we are crafting a pizza and have different choices for special edition toppings: Potatoes or Champignon Mushrooms using the `print` function.

```py
gameStart = "yes"

while gameStart == "yes":

    # this is a comment, something that will not appear in the 
      final game
    # It is great for taking notes and explaining code!
    # add all game related content inside this loop

    print("Welcome to La Mia Pizzeria Preferita!")
    print("What would you like for your toppings? Potatoes or 
          Champignon Mushrooms")

    gameStart = input("Would you like to restart? ")

```

Like earlier we would like our player to be able to *choose* what they would like to do. To do that let's create a variable to store our user's input for this particular question and name it `pizza_choice` .  Like earlier, we're going to set `pizza_choice` = to `input("")` . 

`input(" *insert text/question here* ")` prompts our player to respond, allows the program to wait for user input, and store that in the variable it is = to for further processing later on (ex. what happens when they choose different options). 

it will look something like this: `pizza_choice = input("Please choose one > ")`

### Choices (Conditionals)

But how will we use the input?

Simple! Conditionals! These are composed of `if`, `elif`, and `else` statements which enable your program to perform different actions or execute different blocks of code based on whether a condition is true or false! 

*unlike `while` loops* they do *not* run forever. 

Using our example from before: `if pizza_choice`  is `==` to `"Potatoes"` then `:` let's `print("")` "You chose" `+` `pizza_choice` `+`  "! That's delicious! Coming right up!"

But our other if/else if or in python, `elif pizza_choice` is `==` to `"Champignon Mushrooms"` then `:` let's `print("")` "You chose" `+ pizza_choice +` "! It is a fan favorite!"

But what if our user inputs something different? If we don't plan for that, then our program will have an `error` and the game will stop. So, if our player writes anything `else` or other than our option, then `:` we'll `print("")` out "Sorry we do not have that item. Come back another time."

The final code would look something like this: 
```py
gameStart = "yes"

while gameStart == "yes":

    # this is a comment, something that will not appear in the 
      final game
    # It is great for taking notes and explaining code!
    # add all game related content inside this loop

    print("Welcome to La Mia Pizzeria Preferita!")
    print("What would you like for your toppings? Potatoes or 
          Champignon Mushrooms")

    pizza_choice = input("Please choose one > ")

    if pizza_choice == "Potatoes":
        print("You chose" + pizza_choice + "! That's delicious!
              Coming right up!")

    elif pizza_choice == "Champignon Mushrooms":
	        print("You chose" + pizza_choice + "! It is a fan   
	              favorite!")

    else:
        print("Sorry we do not have that item. Come back another 
              time.")
    gameStart = input("Would you like to restart? ")

```

### Point Systems

If you are also interested in making a point system for your game start by making a variable, let's call it `points` and set it ` = 0` (or whatever number of points you want your character to start with).

Next we need to define (`def`) our function that adds the points the player gets throughout the game let's call it `add_points(number_of_points)`. Then `:` we're going to make our `points` variable `global` meaning that it can be easily accessed and changed anywhere throughout the code. 

Under that we need to say that our `points` will get combined `+=` with the `number_of_points` the player earns. 

To tell our player how many points they got let's create another `def` for our function `print_points()` then `:` say `print("You have {} points.")` and let's insert the number of points our player got by adding `.format(points)` which will change our place holder `{}` with the number of points our player has.

Here is what we should get:
```py
points = 0

def add_points(number_of_points):
  global points
  points += number_of_points

def print_points():
  print("You have {} adventure points.".format(points))
```

To add points we should call the `add_points()` function and determine in the `()` how many points to add.

To `print` how many points the player has just use the `print_points()` function. 

```py
add_points(30)
print_points()
```

With this base you can now use a combination of while loops, conditionals, print, and input functions to build fabulous tales!


## Congratulations!

You have successfully finished ***Level 1: The Storyteller's Forge***! You now have your own Adventure Game which you can publish, share with family and friends, and play! 

#### Want to take your build to the next level? 

Let's add some music and customization options (like colors and text animation!)
Go to the next level now! 
