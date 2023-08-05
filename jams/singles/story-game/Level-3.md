# Choose Wisely, Code Boldly; Finalizing a Choice Driven Game in Python
## Level 3: GUI,  the Final Boss

### Creating a Graphical User Interface 

![Putting everything together](https://cloud-8dmeqbifb-hack-club-bot.vercel.app/0arial.gif)

Once again, great job in finishing **_Level 2: Sonic Sagas_**. Now we're moving on to the third and **final** layer of the **pizza**, the *cheese*! It's the thing that all of our users will get to see and experience first before the storyline, music, etc. ***THE GUI!*** 

{Insert Live Tutorial here}

Here is the example code of what we're going to create!: https://replit.com/@ConnemaraPony/Advanced-CYOA?v=1

## Importing Libraries

To begin we need to import these packages in our Repl:
```py
import tkinter as tk
import time
from replit import audio
```
- `tkinter` is for creating the graphical user interface (GUI)
- `time` is for delays in the typewriter effect and or specifying music duration
- `audio` is for being able to read and play music 

## Point System

Like how we implemented in Level 1 :
```py
points = 0

def add_points(number_of_points):
    global points
    points += number_of_points

def print_points():
    points_label.config(text="You have {} adventure points.".format(points))

```
```py
# Place where you want players to get points + see num of points
add_points(30)
print_points()
```

## Text Animation

Similar to what we implemented in Level 2 but with a few minor changes: 
```py

def typewriter(text, text_widget):
    for letter in text:
        text_widget.config(state=tk.NORMAL)
        if letter == "\n":
            text_widget.insert(tk.END, "\n")
        else:
            text_widget.insert(tk.END, letter)
            text_widget.see(tk.END)
        text_widget.config(state=tk.DISABLED)
        text_widget.update()
        time.sleep(0.05)

```

- The function takes in two inputs instead of one `(text, text_widget)`
- It still loops over each `letter in text` string
- It makes our `text_widget` editable by setting its state to `tk.NORMAL` -- but what is that? 
	- `text_widget`s are GUI elements that allow for text to appear on windows/frames instead of the terminal/console! (like what your seeing here!)
-  If the letter is on a new line `("\n")` it adds a new line letter into the `text_widget` using the `insert` method. If character is *not* on a new line it inserts the letter in the widget using `insert`. Lastly it positions scrollbar to the end of the widget using `see(tk.END)` to make each letter visible.
- After each character is added, the widget is set to `tk.DISABLED` to make it read only (not editable by the user)
- The widget is updated to show the changes made with `update` method
- We still have the `time.sleep` function for a 0.05 second delay

## Defining Game Functions

This is by far one of ***the most*** important parts. If we don't define our functions properly, or if the computer can not reference them during the game then we'll be dealing with **A LOT** of errors. 

Here are some example functions we've already created:

`add_points(number_of_points)` which keeps track of the player's points throughout the game. 

`print_points()` which prints out the number of points the player has.

`typewriter(text, text_widget)` for simulating the typewriter effect. 

Here are some new ones: 

let's `def` a function called `start_game` which is called when our Start button is pressed. It then `:` hides or `pack_forget` the `welcome_frame` and shows our new frame (in this case where the user inputs their name) `name_frame.pack()`. 

```py
def start_game():
    welcome_frame.pack_forget()
    name_frame.pack()
```

Next let's `def` our `submit_name` that we talked about earlier (while this is for a user's name, you can rename the function for another question where the user input is unique)
```py
def submit_name():
	global points

	# retrieving user input to store in widget name_entry
    name = name_entry.get()
    
    # giving points
    add_points(10)
    print_points()
    
    # what the user sees
    typewriter(f"Hey {name}, now it's time to choose a morning 
               activity!", output_text)
    
    # move on to next frame and for get current 
    name_frame.pack_forget()
    activity_frame.pack()
    
```

Also make sure to add each part of your story under a `def` function. For example, from above if our player had to choose a morning activity we will `def` a function called `select_activity()`  where the player picks an `(activity)` button. Then `:` we can add our conditional statements and make sure to add `.pack_forget()` that closes a frame and `.pack` that opens a new frame where needed. 

```py
def select_activity(activity):
	
    if activity == "swimming":
        typewriter("You have chosen swimming!", output_text)
        
        add_points(10)
        print_points()
        
        typewriter("\nYou go to the beach but boating is the only 
                   thing available. You get a boat. Things are
                   going smoothly until your motor gives out.", 
                   output_text)
        
        typewriter("\nYou have two options: SOS (try to flag down a 
                   boat for help) or fix (fix the motor 
                   yourself).\n", output_text)
        
        activity_frame.pack_forget()
        helpSwim_frame.pack()
        
    elif activity == "hiking":
        add_points(5)
        print_points()
        
        typewriter("\nThere are no trail leaders available at this 
                   time. Try again later!", output_text)
        
    elif activity == "volunteer":
        add_points(5)
        print_points()
        
        typewriter("\nUnfortunately, they are still setting up 
                   different volunteer opportunities. You decide to 
                   rest in the shade and read a book.", output_text)
        
    else:
        
        typewriter("\nUnfortunately, this activity is closed for 
                   the day for repairs.", output_text)
        
        add_points(5)
        print_points()
        
        typewriter("Choose a different activity", output_text)
```

Then for the choices that branch out from the original should be `def`ined in a new function. By doing that, and adding a `helpSwim_frame.pack()` above, now I can extend my `swimming` adventure:
```py
def submit_helpSwim():
    global points
    helpSwim = helpSwim_entry.get()
    
    if helpSwim == "SOS":
        add_points(30)
        print_points()
        typewriter("You start waving your hands 
                   and yelling at the 
                   top of your lungs.", 
                   output_text)
        typewriter("\nEach second that passes, 
                   the boat is pulled 
                   further away from shore. No 
                   one is able to hear 
                   you.", output_text)
        typewriter("\nYou have to think of 
                   another solution.", 
                   output_text)
        typewriter("\nYour other option is to 
                   fix your motor...", 
                   output_text)
        typewriter("\nYou hop in the water to 
                   check. It is 
                   completely fried and there is 
                   some plastic 
                   tightly wrapped around it.", 
                   output_text)
        typewriter("\nThere is no chance for you 
                   to fix it without 
                   proper tools.", output_text)
        typewriter("\nYou end up deciding to 
                   swim back to shore.", 
                   output_text)
        typewriter("\nAs you are swimming back, 
			       a person on a boat 
                   spots you and helps you back 
                   to camp and 
                   explains what happened to the 
                   counselors.", 
                   output_text)
        typewriter("\nYou are safe.", 
                   output_text)
        
    elif helpSwim == "fix":
        add_points(30)
        print_points()
        typewriter("You consider yourself to be 
                   a pretty strong 
		           swimmer, so the strength of 
		           the currents doesn't 
		           faze you.", output_text)
        typewriter("\nYou hop off the boat and 
                  swim to the motor 
			      area in the back.", 
			      output_text)
        typewriter("\nYour motor is completely 
                  fried and there is 
		          some plastic tightly wrapped 
		          around it.", 
		          output_text)
        typewriter("\nThere is no chance for you                   to fix it without 
                  proper tools.", output_text)
        typewriter("\nYou end up deciding to 
                  swim back to shore.",
                  output_text)
        typewriter("\nAs you are swimming back, 
                  a person on a boat
                  spots you and helps you back
                  to camp and
                  explains what happened to the
                  counselors.", 
                  output_text)
        typewriter("\nYou are safe.", 
                  output_text)
    
    else:
        print_points()
```

This `submit_helpSwim()` function is called when the submit button (`helpSwim_button`) is clicked during the swimming activity. It gets the user's choice from the `helpSwim_entry` field and gives a different scenario based on the choice (what happens in the conditional statements).

Keep storing each part of your in `def` functions... after you're done, let's get to the fun part!

## Creating Main Window and Frames!

We've been talking a lot about windows and frames-- but what are they and what's the difference? Lastly, *how* do we *MAKE* them?

![Comparing windows and frames](https://cloud-p55izwnla-hack-club-bot.vercel.app/0digital.png)

This might sound crazy but imagine a house. The window is like an entire house. It has it's own structure, windows and doors (title bar, and controls), walls (size of window), etc. and it is the main thing that the user interacts with. 

Let's start by creating the `window` object and setting it `=` to the `Tk()` constructor from the `tk` module. This will create the main window of the application. 
```py
window = tk.Tk()
```
Next let's make the `title` bar by writing `window.title("")` and in the `""` writing our title. 

While we're at it, let's set the size of the window by writing `window.geometry("")` and in the `""` we can specify the size. For now, let's make it `("600x400")` pixels.  

This is more of a style choice, but I do not want the window to keep resizing depending on the amount of content inside it. To do this let's write `window.resizable()`. Inside the parentheses it has two arguments width and height. Let's make sure that they *do not* get resized by making them both `False`.

By the end we should have something like this:
```py
window.title("Camp Wildwood Adventure")
window.geometry("600x400")
window.resizable(False, False)
```

Next are frames! Building off of our house concept, frames are like the rooms inside of a house. They have their own walls, supports etc. and are areas where you can arrange your "furniture" items and other decor like text, input, buttons, etc. 

Each new event that happens in our game will have a `Frame`. 
To create a frame, first make a variable for example `welcome_frame` and set it `=` to `tk.Frame(window)`. 

Continue this for each scene change you have in the game. Here is what we have in our example:
```py
welcome_frame = tk.Frame(window)
name_frame = tk.Frame(window)
activity_frame = tk.Frame(window)
helpSwim_frame = tk.Frame(window)
```

## More GUI Components

Let's Create our Buttons and input using our  `def` function `helpSwim` from earlier as an example. 

All the GUI components we're going to create for each scenario will be connected to their respective frames. For `helpSwim` we have the `helpSwim_frame` from the previous step. 

### Crafting Labels!

First step is to create a `label` that `=` its respective `frame`, displays specified `text` like the question we want to ask the user to answer. Then we want to make sure our `label` is organized and displayed within our frame using the `.pack` method:

```py
helpSwim_label = tk.Label(helpSwim_frame,  
                        text="SOS (try to flag
                        down a boat for help) or 
                        fix (fix the motor 
                        yourself)?" 
    
helpSwim_label.pack() 
```

### User Text-Input!

Second step let's make this answer have text input, to do that let's create text `Entry()` widget, connect it to our `frame` and make sure it displays by using the `.pack` method:

```py
helpSwim_entry = tk.Entry(helpSwim_frame) helpSwim_entry.pack() 
```

### Buttons!

Third step let's create a submit button (this button format will also work if your asking your user to choose a button rather than add text input like above). 

First let's create a button widget using the `Button()` class from the `tk` library. The button widget is used to show differently scenarios when clicked by the user. We also need to connect it to its set `frame`, make sure we have `text` displayed on the button, that `= "Submit"` in this case. 

We also need our button to be called when it is clicked. To do that we need to use the `command` parameter and set it `=` to our `def` function, in this case `submit_helpSwim` which we defined earlier. 

Let's also make things fun and change the button color! To do this we use `bg` and set it `=` to a color name. Let's just use `"purple"` for now. 

Like before, our *last step* is using `.pack()` to make sure it is displayed correctly~ we should have something like this:

```py
helpSwim_button = tk.Button(helpSwim_frame, text="Submit",                            command=submit_helpSwim, bg="purple") 

helpSwim_button.pack()
```

### Text Widgets!

Let's also make sure that our storyline has a place to get displayed by creating a `Text` widget that can display multi line text that is set to read only (so that our users can not alter it). 

Let's create a variable called `output_text` which creates our text widget. Let's use the `Text()` parameter from the `tk` library. We need to make sure it is placed in our `window` so that it always appears, set our `height =` to what we want, and our `width =` to what we want. 

We also want to make sure our text is pleasing to look at, and if a word exceeds the width it should go to a new line. To do that we'll use the `wrap` parameter that does just that and set it `=` to `tk.WORD` so that it doesn't break apart words and ensures that whole words are shown on a single line. 

It should look something like this:

```py
output_text = tk.Text(window, height=10,  
			         width=50, wrap=tk.WORD) 
```

As said before we want to make sure our text is on *read only*. To do that we will configure or `config()` the state of the `output_text` widget and setting it `=` to `tk.DISABLED` which doesn't allow the user to edit it. 

Lastly we *need* to `.pack` it to make sure it displays properly:

```py
output_text.config(state=tk.DISABLED) 
output_text.pack()
```

Repeat the the first three for all scenarios in your game! Feel free to play around with different questions having user input be either buttons or text, and even have multiple text widgets!

## Displaying Frames and Starting Loop

Finally it's time for our open house! We can now display the welcome frame and start the GUI event loop using `mainloop()`:
```py 
welcome_frame.pack()
window.mainloop()
```


## Congratulations!

You have successfully finished **_Level 3: GUI the Final Boss_**! You now have your own Adventure Game with music, style, and a fully functioning GUI which you can publish, share with family and friends, and play!

#### What's next from here?

Well adventurers, there is nowhere to go but up from here! The sky's the limit to what *YOU* can create! Some fun ideas might be to 

- continue your coloring journey 
- add pictures, maybe videos or gifs 
- try out different storylines, quizzes, etc. 

Most importantly USE YOUR RESOURCES! 
There are plenty of amazing YouTube videos to learn more about programming with python, more jams to create, lessons, books, and much more!

The Replit Documentation can also play a great role in your exploration: 
https://docs.replit.com/

Feeling stuck? Want new challenges or prompts? Head on over to HackClub's slack where you can connect with a wonderful community of creators and get feedback and help! 
