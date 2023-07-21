---
title: 'Create a Machine Learning App w/ Gradio'
description: >
  Learn how to take any Python function and turn it into a web application in 1 line using Gradio. You can deploy anything from a simple calculator to machine learning apps with Gradio.
contributor: 'ganning127'
thumbnail: 'https://cloud-8frt1opir-hack-club-bot.vercel.app/0gradiojam.png'
timeEstimate: '55 Min'
difficulty: 'Intermediate'
keywords: 'Web, Gradio, Python, Machine Learning'
language: 'Python'
presentation: ''
presentationPlay: ''
presentationPDF: ''
notes: 'https://hackmd.io/@rjx6FSzMQA2Hd6leC-LWPg/Hy60-70_n'
poster: ''
video: ''
slug: 'python-web-ml'
---


> 50-60 minutes, intermediate difficulty. 

Hey there hacker! 👋 These are examples of what your finished web app might look like. Just remember that you'll be making your own version though, so yours WILL look completely different!

**Sample Code (with Live Demos)**: [Sample Google Colab Link](https://colab.research.google.com/drive/1vr1cypSrJizQpNprbzcPPOvuwRhgjUAf?usp=sharing)


![](https://cloud-c00uxy7uq-hack-club-bot.vercel.app/0image.png)

![](https://cloud-islsyhh9o-hack-club-bot.vercel.app/0image.png)

<Dropdown title="Can't see the live demos on Google Colab?">
    Unfortunately Google Colab has a timeout. Thus, to access shareable links, open the link and head to `Runtime` > `Run all`. Then, scroll through and wait for the live web-apps to generate.
</Dropdown>

<br />

> WOAH, but before we get started, let's show YOU how you can play around with Gradio.

Head to [www.gradio.app](https://www.gradio.app/) and scroll down until you see "Sketch Recognition". With the people around you, try to draw the following items and see if the computer can predict it correctly: `lightning`, `chair`, `smiley_face`. 

If you have some extra time (like 5 minutes), **make this a competition**! Pass one laptop around your table, and the give everyone a word to draw. If that person successfully draws that word, they get a point. Whoever has the most points at the end of the five minutes wins :) 

Anyways, this is just a glimpse of what Gradio can do. To look at the code behind the sketch recognition app, click [this link](https://huggingface.co/spaces/gradio/pictionary/blob/main/run.py).

---

We'll be building these web apps using Python completely on the web (using [Google Colab](https://colab.research.google.com/)). You'll have the freedom to code whatever you want, before deploying it as a web app.

This workshop will be split into **3** main sections:
1. Python Basics
2. Coding your own Python Function
3. Deploying your new function on Gradio


You'll also have the opportunity to customize your finished product to your heart's content ❤️, and share your creation with friends & family.

Also, don't worry if you don't have prior coding experience. We'll take you from this:
![](https://cloud-5dl29viqz-hack-club-bot.vercel.app/0200w.gif)

to this:
![](https://cloud-ns7olx1nf-hack-club-bot.vercel.app/0200.gif)

**Outline**
- **Python Basics**
    - Google Colab Overview & Setting up Google Colab 
    - Python hello world, variables, functions
- **Coding your own Python Function**
- **Deploying your new function on Gradio**
- **Bonus**: Permanant Hosting on HuggingFace

Ready to go? Let's get started :) 

## Python Basics
> 💡 We'll first start with Google Colab (where we'll be writing our code) and move into the basics of the Python code :)

### Setting up Google Colab
> 💡 Gotta do some housekeeping first, we'll first run through how to use Google Colab.

<Dropdown title="What is Google Colab?">
    Google Colab is completely free and accessible via any browswer. If you already know how to open a Python Notebook in Google Colab, please feel free to skip this section.
</Dropdown>


        Creating a Colab file | Step by step walkthrough

    
1. If you do not already have a Google account, please create one using [this link](https://support.google.com/accounts/answer/27441). 
2. Once you have a Google Account, head to Google Drive: [drive.google.com](https://drive.google.com/).
3. To create a Google Colab file, click the `+ New` button in the upper left corner. 
4. Hover over `More` and select `Google Colaboratory`. This will create a new Python Notebook for you to play around in. If you don't know what a Python Notebook is, no worries, we'll guide you through it.

**If you do not see `Google Colaboratory` under `More`, DO THIS**
This just means you need to connect Google Colab to your account!
1. Click on `Connect more apps`
2. In the popup, search for `Colaboratory`
3. Click on the first result and install it.
4. Refresh your page and jump back to #3 from the above section!

### A Tour of Colab
Once you create a new Google Colab file (AKA a Python Notebook file), you'll see the following: 

![](https://hackmd.io/_uploads/S15mp_X92.png)

I'm going to type some code into my screen and I'll explain it.

![](https://hackmd.io/_uploads/HyKiI7RO3.png)

There are three main components in a Python Notebook
1. **Markdown cells**: you don't need to worry much about these. Markdown cells just provide a place to write notes about your code. The `Deploying Python Functions As Web-Apps Using Gradio` title is written in in a markdown cell.
2. **Code cells**: write Python code here! The `print("hello world")` is written in a code cell.
3. **Output**: below each code cell is an output. For example, the `hello world` is the output from its corrosponding code cell. 

In this Jam, you'll be mainly focusing on code cells and their output.

> This jam document was originally written in markdown :)

### Hello World, Variables, Functions
> 💡 Now for the fun part. Let's dive into how to use Python (not the snake, of course).

Let's run through the basics of Python. Feel free to skip ahead to whichever portion suits your skill level. 

For all the code below, feel free to follow along by typing them into code cells, running them, and seeing the output:

<video controls style={{maxWidth: "400px"}}> <source src="https://cloud-qdpx99s9h-hack-club-bot.vercel.app/0screen_recording_2023-07-17_at_10.50.09_pm.mp4" type="video/mp4"/> </video>


<Dropdown title="Hello World">
When learning a new programming language, it's customary to create a "hello world" program (basically a piece of code in the new language that outputs "hello world"). Type the following into a Python code cell on Colab and click the run button!
    
```python
print("hello world")
```
</Dropdown>

<Dropdown title="Variables">
Variables in Python store information. For example, the `coolName` variable below stores the value 13 (because of order of operations!).
    
```python
coolName = 4 + 3 * 3
```
    
To print a variable to the output, you can use:
    
```python
print(coolName)
```
</Dropdown>



<Dropdown title="Functions">
In programming, a function is like a reusable set of instructions that performs a specific task. It's like having a recipe for a dish that you can use again and again to cook the same meal.

Imagine you want to make a sandwich. You have a list of steps you need to follow: first, you spread butter on the bread, then you add some cheese, lettuce, and tomato, and finally, you put another slice of bread on top. Instead of repeating these steps every time you want to make a sandwich, you can create a function called "make_sandwich" that contains these instructions.

Once you define the "make_sandwich" function, you can use it whenever you want to make a sandwich. You simply call the function by its name and it will execute all the steps automatically, saving you time and effort.

    
```py
def make_sandwich(meat, cheese, bread):
    print("making a sandwich with " + meat + " cheese " + " and " + bread)
```
</Dropdown>

For more Python basics practice, head to [this Colab notebook](https://colab.research.google.com/drive/1fxVQj6Tk98u4uXOf93YyoxX68C9B-3iR?usp=sharing). Additionally, [this youtube video by Programming with Mosh](https://youtu.be/kqtD5dpn9C8) is also really good.

## Make your own Python function
> 💡 Now, you'll make your own function! No copying mine hehe

Now that you know the basics of Python functions, spend 15-20 minutes to code a Python function of your choice. This can be as simple as a function and returns their sum, or as complicated as a function that runs a machine-learning sketch recognition prediction. For example, here's my Python function!

```python 
def addTwoNums(num1, num2):
    return num1 + num2
```

**Don't want to answer your English class' homework questions? Let Python do it for you!**
*Cheating on English class homework is not endorsed by Hack Club.*

```python 
from transformers import AutoModelForQuestionAnswering, AutoTokenizer, pipeline
model_name = "deepset/roberta-base-squad2"
nlp = pipeline("question-answering", model=model_name, tokenizer=model_name)

# Example data
example_context = "The Amazon rainforest, also known in English as Amazonia or the Amazon Jungle, is a moist broadleaf forest that covers most of the Amazon basin of South America. This basin encompasses 7,000,000 square kilometres (2,700,000 sq mi), of which 5,500,000 square kilometres (2,100,000 sq mi) are covered by the rainforest. This region includes territory belonging to nine nations. The majority of the forest is contained within Brazil, with 60% of the rainforest, followed by Peru with 13%, Colombia with 10%, and with minor amounts in Venezuela, Ecuador, Bolivia, Guyana, Suriname and French Guiana. The Amazon represents over half of the planet's remaining rainforests, and comprises the largest and most biodiverse tract of tropical rainforest in the world, with an estimated 390 billion individual trees divided into 16,000 species."
example_question = "Which continent is the Amazon rainforest in?"

def predict(context, question):
  res = nlp({"question": question, "context": context})
  return res["answer"], res["score"]

predict(example_context, example_question) # outputs South America
```

**Want to figure out the breed of a dog? Python can also do that!**
Simply upload an image (JPG, PNG, or even a GIF)
```python
import torch
import requests
from torchvision import transforms

model = torch.hub.load('pytorch/vision:v0.6.0', 'resnet18', pretrained=True).eval()
response = requests.get("https://git.io/JJkYN")
labels = response.text.split("\n")

def predict(inp):
  inp = transforms.ToTensor()(inp).unsqueeze(0)
  with torch.no_grad():
    prediction = torch.nn.functional.softmax(model(inp)[0], dim=0)
    confidences = {labels[i]: float(prediction[i]) for i in range(1000)}    
  return confidences
```

Here's an example of the image classification:
![](https://cloud-jegnfq7t4-hack-club-bot.vercel.app/0image.png)


Well, it only sometimes works :)
![](https://cloud-lr70ll374-hack-club-bot.vercel.app/0image.png)



**Want your computer to figure out if some text is positive or negative?** We can do that with this sentiment analysis function (though you'll need to make your own, don't copy mine hehe)
```python
import nltk
from nltk.sentiment.vader import SentimentIntensityAnalyzer

nltk.download("vader_lexicon")
sid = SentimentIntensityAnalyzer()

def sentiment_analysis(text):
    scores = sid.polarity_scores(text)
    del scores["compound"]
    return scores


sentiment_analysis('i love this jam so much!')
```

For more examples of what Python functions you can make, head to [gradio.app/demos](https://www.gradio.app/demos)! There's a ton there, but NO COPYING.

## Let's deploy it!
> 💡 This is the moment you've been waiting for, getting a live web app for your Python function. Lucky for you, it's really easy to do!

Now for the fun part hehe. We'll be taking the Python function you just wrote and deploying it as a web-app using Gradio.

First, you'll need to install gradio onto Colab. Run the following line:

```
!pip install gradio
```

Next, we'll deploy your Python function using one line (make sure to replace the `<placeholders>` with what you need!):

```python
gradio.Interface(fn=<yourFunctionName>, inputs=["<type>"], outputs=["<type>"]).launch(share=True)
```
- the `inputs` argument should be a comma-separated Python list with the same length as your Python function. Each input represents an argument to your function.
- the `outputs` argument is a comma-separated Python list that represents what your function returns. To return multiple things from a function, use `return item1, item2` and you can have multiple items in your `outputs` list. 

For example, here's the gradio code to deploy my addTwoNums function from earlier.
```python
gradio.Interface(fn=addTwoNums, inputs=["number", "number"], outputs=["number"]).launch(share=True)
```

To deploy the **question-answering** function, we'll use this:
```python
gradio.Interface(
    predict,
    inputs=[
        gradio.inputs.Textbox(lines=7, default=context, label="Context Paragraph"),
        gradio.inputs.Textbox(lines=2, default=question, label="Question"),
    ],
    outputs=[gradio.outputs.Textbox(label="Answer"), gradio.outputs.Textbox(label="Score")],
).launch(share=True)
```
    
To deploy the **image classification** function:
```python 
demo = gr.Interface(fn=predict, 
         inputs=gr.inputs.Image(type="pil"),
         outputs=gr.outputs.Label(num_top_classes=3),
)
```


To deploy the **sentiment analysis** function, we'll use this code!
```python 
demo = gr.Interface(
    fn=sentiment_analysis, 
    inputs=gr.Textbox(placeholder="Enter a positive or negative sentence here..."), 
    outputs="label", 
    interpretation="default",
    examples=[["This is wonderful!"]]
).launch(share=True)
```
    
    
## Permanant Hosting on HuggingFace
AHA, so you want to get a permanant URL (more than just 72 hours). Well, you've come to the right place :)

1. Create an account on [huggingface.co](https://huggingface.co/)
2. After creating an account, create a Space (kind of like a GitHub repository): [hugginface.co/new-space](https://huggingface.co/new-space)
3. Give your space a name, and make sure the space SDK is set to Gradio. All other defaults will work great.
4. In the upper right hand corner, click on `Files`
5. In the upper right corner of the files table, click `Add file` > `Create a new file`
6. Name your file `requirements.txt` and type in each of the packages that you are using on a new line each. You do not need to include `gradio` in this list, as HuggingFace already has it downloaded for all spaces by default. Additionally, feel free to leave this file blank if you do not have any dependencies.
7. Commit the `requirements.txt` file to the `main` branch.
8. Create a new file called `app.py`
9. Copy and paste the code you have from Google Colab that you want deployed into `app.py`. For example, an `app.py` file for a basic Python function would be:
```python=
import random
import gradio

def greet(name):
  greetings = ["good morning", "howdy", "hellooo", "hiiii", "heyy"]
  random_greeting = random.choice(greetings)
  lets_say_this = random_greeting + " " + name
  return lets_say_this

def add(num1, num2):
  return num1 + num2

# make sure you remove `share=True` when deploying on HuggingFace
gradio.Interface(fn=greet, inputs=["text"], outputs=["text"]).launch() 
```
10. Click on the `App` tab in the upper right hand corner and wait for your app to deploy!

> If you run into any errors or copy and paste your code wrong, you'll get the error message after clicking on the `App` tab in the last step. To fix any errors, you can edit your `app.py` or `requirements.txt` file.

11. To get the permanent link for your deployed Python function, click `Use via API` on the bottom and copy the `xxxx.hf.space` link!
