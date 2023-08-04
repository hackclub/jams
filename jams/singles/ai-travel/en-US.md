---  
title: 'Make an AI Trip Planner for a Club Adventure'  
description: >  
  This Jam will teach you how to use ChatGPT and AI to create a trip itinerary planner. It is extremely customizable and gives a foundation for you to expand upon with your own ideas!
contributor: 'ShubhamPatilsd'  
thumbnail: 'https://cloud-7kw4nqs0s-hack-club-bot.vercel.app/0image.png'  
timeEstimate: '60 Min'  
difficulty: 'Intermediate'  
keywords: 'API, chatgpt, openai, ai, ai api, trip itinerary, itinerary planner ai, planner ai, website, javascript, HTML, CSS, replit'  
language: 'HTML, JS'  
presentation: 'https://www.figma.com/file/eT0znn6hYdESlhCSfmmwBG/Untitled?type=design&node-id=1%3A2&mode=design&t=6KWZTxjPBdL20osY-1'  
presentationPlay: 'https://www.figma.com/proto/eT0znn6hYdESlhCSfmmwBG/Untitled?type=design&node-id=1-2&t=jECJDbIDCUZQwKjc-1&scaling=contain&page-id=0%3A1&mode=design'  
presentationPDF: 'https://cloud-opfk4nagv-hack-club-bot.vercel.app/0ai_trip_itinerary_planner.pdf'  
notes: ''  
poster: ''  
video: ''  
slug: 'ai-travel'  
---

As a club, it's time to have a 5 day club retreat! Y'all can go on vacation anywhere, but the question is, where?

Take some time as a club to brainstorm the greatest place to take a vacation. Maybe it could be San Francisco, Los Angeles, New York City? Whatever it is, take a minute to think of what this vacation would look like and what you all would do.

However, you might have run into a problem: you can't think of things to do! For example, in San Francisco, you might think of going to the Golden Gate Bridge, but what else?

This is where we can use AI and code to solve our problem by making an AI travel itinerary planner:
![Live Demo Gif](https://cloud-j37pzs32q-hack-club-bot.vercel.app/0plantripwithaigif.gif)

Try it out [here](https://replit.com/@ShubhamPatilsd/AI-Trip-Itinerary)!

## Steps
1. Clone a starter template for HTML CSS and JS 
2. Add inputs: trip destination, trip start date, trip end date
3. Configure OpenAI API and get your API key 
4. Validate that all inputs are filled in
5. Send a request to the OpenAI API, with a custom prompt including all the details. Make sure the response comes back in JSON
7. When results come back, parse the JSON and display the events in a list
8. Go on your next trip

## Humble beginnings
So, you decide to get started! You log onto your laptop then realize that your school has disabled downloading _anything_ to your computer.

You take two deep breaths and realize that you can just use Replit to do this.

So you go to https://replit.com and sign up for an account.
![login page](https://cloud-2vb2zquzl-hack-club-bot.vercel.app/0pasted_image_20230714142545.png)

Then, you create a new project with the HTML, CSS, and JS template
![create repl](https://cloud-2vb2zquzl-hack-club-bot.vercel.app/1pasted_image_20230714142701.png)


## Inputting information
For our code to know the details of our club trip, we need to have some way to input the destination and dates of our trip.


<Dropdown title="What are some ways we can do this?">

1. Making an `<input>` element for the location of the trip 
2. Making another `<input>` element for the start date of the trip 
3. Making a third `<input>` element for the end date of the trip 

</Dropdown>

### Inputting trip location
While there are many places we can visit in this world, the club must only select one. To do that, we have to add an `<input/>` element of type `text` to your HTML code and give it an easy to remember `name`:
```html
<input type="text" name="location" />
```

If you save and run your code, on the right side of your screen you should be able to see a textbox that you can type in!

### Adding trip dates
Now that we can input our trip destination, we need to define some travel dates. The process is similar to adding a text input, but instead of having an `<input/>` of `type="text"`, we have an input that has `type="date"`.


<Dropdown title={`What does changing it to "date" do?`}>
Having a `type` of `"date"` tells the browser to render a calendar picker where we can select a date. So, to have a start and end date, we will have two `<input/>` elements with `type="date"`
</Dropdown>

Underneath your `location` input, add two of these and assign them unique names:
```html
<input type="date" name="myUniqueName" />
```

At this stage, you should have something like this:
![result](https://cloud-2vb2zquzl-hack-club-bot.vercel.app/2pasted_image_20230715110807.png)


### Adding more inputs
Hey, sometimes we need more customization for our trips. We can do this by adding more `<input/>` elements that serve different purposes!

<Dropdown title="Here are some ideas for more inputs:">
1. Specifiying the types of activities (e.g. outdoors, museums, food only)
2. Specifying the budget that your club has for this trip
3. Having one club member plan meals and have another club member plan activities
</Dropdown>

## Configuring ChatGPT
ChatGPT. ChatGPT is the magical black box of the modern age. We don't know how it works, but it can spit out useful information, and we can especially use it to plan a club outing. 

![chatgpt gif](https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHNhMXRoN2U4ZzVjcGVhM2lzamgwZHZsdTl1MW96bTZnbDh6b253MCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/qAtZM2gvjWhPjmclZE/giphy.gif)

ChatGPT is actually so powerful that you can give it any trip destination and it will spit out a planned itinerary back. It's practically magic!

Usually, we're used to interacting with ChatGPT using their [website](https://chat.openai.com) like so:
![](https://images.squarespace-cdn.com/content/v1/5f04f767ded4a14e876e6190/e99dd562-e62c-469b-8301-3eb8b2dd0f9c/YouTube+Script.gif)

However, we can't go and interact with the website using our code! This is why we use the official ChatGPT API.

## What's an API?
API Textbook Definition:
>  A · P · I <br/>
> An application programming interface (API) is a specification intended to be used as an interface by software components to communicate with each other.

Our Cool And Easy to Digest™ Definition:
> A · P · I <br/>
> **An API is the way our code can talk to someone else's code.** Sounds weird right? In this case OpenAI has their ChatGPT code running in some server somewhere, and our app needs to use ChatGPT. Many people like us also want to use ChatGPT in our code, so OpenAI created something called the "ChatGPT API" so we can use ChatGPT's code in our app.


<Dropdown
title="So which API are we using?"
>
Great question! Let's break down the API structure for ChatGPT!
![explanation of API](https://cloud-647cibhzc-hack-club-bot.vercel.app/0hack_club_jam.png)

We are going to be using the `/v1/chat/completions` endpoint to get the job done; it's the core technology behind ChatGPT!

> *Psst: Get it? Completions? Like how ChatGPT can "complete" an answer to a prompt?*
</Dropdown>

<Dropdown title="How do I talk to an API?">
Don't worry, talking to APIs is much easier than talking to people ;)

We can send a ***"request"*** to our API in order to talk to it.
</Dropdown>

### Types of Requests
There are four types of requests: GET, POST, PUT, and DELETE

![](https://cloud-c8wbo8ip9-hack-club-bot.vercel.app/0image2.png)

> GET: We tell the API to fetch some data for us to use<br/>
> POST: We tell the API to create some data for us<br/>
> PUT: We tell the API to update some data for us<br/>
> DELETE: Obviously, we tell the API to delete some data for us

We can select which type of request we want to send from our client!

> ⚠️🚨 **Make sure to specify the correct request type!** For example, if you send a `GET` request to an endpoint that requires a `POST` request, your request won't go through :(

### Communicating with the ChatGPT API
The ChatGPT API that we're using (`https://api.openai.com/v1/chat/completions`) requires a `POST` request.

<Dropdown title="But hey! POST is for creating data right? Shouldn't we use GET instead, because we're asking data from the API?">

Well, the truth is that API developers set the request type arbitrarily. There's no hard rule whether to set your API endpoint to use `GET`, `POST`, `PUT`, or `DELETE`, it's completely up to the person making that API.

And since the person making that API wants to build it quickly, they choose the easiest/best option to use, in this case it is a `POST` request.
</Dropdown>

<Dropdown
title="But why is POST the easiest/best in this situation?"> 

[Security](https://security.stackexchange.com/questions/33837/get-vs-post-which-is-more-secure). A `POST` request is more secure than a `GET` request.
</Dropdown>
### Request Body
Since we're going to be sending a `POST` request, that also means that we have to send a **request body** as well.

Think of the request as a cardboard box and the body being the stuff that goes inside that box. We (our browser) can then package and ship that box to the API.

![explanation of api request body](https://cloud-iux06nddt-hack-club-bot.vercel.app/0untitled.png)

Here's the request body that we use to communicate with the ChatGPT API:
```json
{
      'model': 'gpt-3.5-turbo',
      'messages': [
        {
          'role': 'user',
          'content': `What US state is Shelburne in?`


        }
    ],
}
```

Let's break this down:
- `model` is selecting which "brain" ChatGPT uses. Some brains are specialized in things other than text, such as image processing or writing code, but we want to use the one that's the smartest and has an overarching view of the world: `gpt-3.5-turbo`. This is the model that the ChatGPT website uses, so it's always a good choice.
- `messages` is an array of the JSON objects (the messages) that you want to sent to this "brain" of ChatGPT. The main use of having this array is to add previous responses in order to ask ChatGPT follow-up questions (e.g. "What US state is Shelburne in?", "What country is that state in?")
- The structure of a message:
	- `role` is the person who is saying the message. In this case, since we are the sending the message, we will assume the role of `user`
	- `content` is the actual message that you want to send to ChatGPT (*psst: This is what you type in on the ChatGPT website*)

## Let's get back to coding!
![we've got an app to code meme](https://i.imgflip.com/7t49qs.jpg)

Go to `script.js` from your Replit editor and create a function. I called it `getItinerary()` but feel free to call it anything!

```js
function getItinerary() {
  console.log("hello there!")
}
```

### Getting the value of our `<input/>`s
Remember the `<input/>` elements that we created in `index.html`? Yeah, we need to extract the information that the user inputs into them!

### Wrapping with `<form/>`
To get the value of our input elements, we need to wrap them with the `<form/>` element. Think of this as an element that bundles our inputs into an easy-to-manage way.

```html
 <form>
    <input type="text" name="location" />
    <input name="startdate" type="date">
    <input name="enddate" type="date">
  </form>
```

<Dropdown
title="Hmm, we have a form, but no way to submit it?"
>
Yes, that's correct.
</Dropdown>


**We need to add a submit button!** 

<Dropdown title="Is this a regular <button/>?">
  
  Not really. Our browser will render it as a button, but in reality, it is another `<input/>` element.
</Dropdown>


<Dropdown title="What? How would an <input/> element be a button?">
You know how all of our current input elements have a `type` attached to them? Well that's the secret behind the submit button: it's an `<input/>` element with `type="submit"`
</Dropdown>

<Dropdown
title={`Think with your club, how could we create a button that says "Submit"?`}
>
  So here is how that would look like:
  ```html
   <input type="submit" value="Submit" />
  ```
  The `type` specifies that this input element is the button that submits the form. The `value` is the actual text that shows up on the button.
</Dropdown>


<Dropdown
 title="Where should I put this button?"
 >
For the form to be submitted, the button should be placed inside the `<form/>` tags! Our code for the form should now look like this:

```html
 <form>
    <input type="text" name="location" />
    <input name="startdate" type="date">
    <input name="enddate" type="date">
    <input type="submit" value="Submit" />
  </form>
```

</Dropdown>

## Getting the values into our JavaScript code
If you submit the form right now, all it does is reload and clear the values from the form.

<Dropdown title="Why is this happening?">
Since we haven't told the form where/how to submit its information, it's doing nothing right now. **We can tell the form how to submit information using the `onsubmit` property**
</Dropdown>

We can add this to the opening form tag like so:
```html
<form onsubmit="">
```

Ideally this form should be able to pass the values of our `<input/>` parameters to our JavaScript code, so we can set the `onsubmit` property to the name of our function in the `script.js` file. In my case, it would look like this:

```html
<form onsubmit="getItinerary()"
```

> *⚠️ Key tip*: Keep ALL of your HTML code below the `<script src="script.js"></script>` tag for your JavaScript to run  

Let's try running this and see if we get a `console.log` in the browser console!

Hint: Open the developer tools in Replit to see the console! It's the wrench icon right here:
![open the wrench icon in replit to see dev tools](https://cloud-88lqktoh1-hack-club-bot.vercel.app/0image.png)

---

**WHAT?** That didn't work?

Hmm, [seems like we need to debug this out](https://www.youtube.com/watch?v=ySDX02WD0og)

<Dropdown title="
Riddle me this: what's the current behavior of the code right now?
">
Hmm, it seems like the browser is refreshing without even running the code!
</Dropdown>

<Dropdown title="How do you think we should go about fixing it?">
We could sit here for hours trying to think of our solutions, but how about we save some time and Google it! 
</Dropdown>

After a little seaching, I found [this](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault). Maybe it could help us?

The form's default action is to just refresh the page, but we need to prevent that (since we need it to run our JavaScript code).

The `preventDefault()` function needs to be run from our JavaScript, and `onsubmit` is considered an event, so we can pass this event to our JS code!

We can pass the event like so:
```html
<form onsubmit="getItinerary(event)">
```

Then, in our JavaScript, we can accept the event as a function parameter:
```js
function getItinerary(event) {...}
```

Then, we can run `event.preventDefault()` to prevent the form from just refreshing the page:
```js
function getItinerary(event) {
	event.preventDefault()
	console.log("Hello there")
}
```

Nice! We just got something in the console!
![console.log output showing in the console](https://cloud-lx8djo7vn-hack-club-bot.vercel.app/0image.png)

### We're making so much progress! Great work!
![great work gif](https://gifdb.com/images/high/great-job-guys-jimmy-fallon-wsvujhpbhgk80bh7.gif)

### Another secret in `event`
> Now, how do we actually get the values that the user types/selects in our `<input/>` elements?

**Through our very trusty `event` parameter!**

More specifically, we can access them under [`event.target`](https://developer.mozilla.org/en-US/docs/Web/API/Event/target)

```js
//ex: San Francisco
event.target.NAME_OF_INPUT.value
```

The code above is an example of how we can get the value of any of our inputs.

Go ahead, under the `event.preventDefault()`, add three more `console.log` calls to get the value of each `<input/>` (remember to substitute the `NAME_OF_INPUT` with the actual name of the input elements. In my case, they would be something like `location`, `startdate`, and `enddate`).

Here's how I did it (if you have different `<input/>` names you should use those):
```js
function getItinerary(event) {

  event.preventDefault()

  console.log(event.target.location.value);
  console.log(event.target.startdate.value);
  console.log(event.target.enddate.value);
  
  console.log("Hello there")
}
```

**Also remember to add any additional input elements that you made at the start!**

Run your code, type in your location and dates, click submit and check in the console! This is what I got:
![result with everything printed](https://cloud-giko7ueoa-hack-club-bot.vercel.app/0image.png)

## Interacting with the ChatGPT API
This is going great so far! We have all the values from our input elements. Now the only thing left is to communicate with the ChatGPT API.

### Calling the API with `fetch`
![](https://media.tenor.com/h2ADJoJya-YAAAAd/playing-fetch-playing.gif)
To make a request to our API, we're going to be using something called `fetch`. It's a tool baked into every browser, and it enables us to send HTTP requests.

Here's a general skeleton of how to use `fetch`:

```js
fetch('API_URL', {
    method: '', //GET, POST, PUT, DELETE
    //optional, meant for security checks (authentication)
    headers: {
      ...
    },
    //NOT needed with GET request
    body: JSON.stringify({
     ...
    })
})
```

> _Break it down for me_

Sure!
- `API_URL` is the first parameter of the `fetch` function. Here, we should put the URL of the API that we want to make a request to.
- `method` is the type of HTTP request that we want to send (remember `GET`, `POST`, `PUT`, `DELETE`?)
- `headers` is meant for authentication data such as an API key. It basically allows us to put information so that the API can verify if we are allowed to access an endpoint! This is not always required, but the ChatGPT API requires us to add this information.
- `body` is the body of the request (the stuff that we put inside it)

**Let's add this skeleton into our code**
Copy paste that and put it underneath all the `console.log` statements that we had. 

> Don't mind the red squiggly lines/errors that come up, we'll resolve those! 
> ![cat red error gif](https://media.tenor.com/TY8N6z1MGKsAAAAM/evil-cat-red-screen-evil-cat.gif)

Let's replace a couple of those placeholder values:
<Dropdown title="What should we replace API_URL with?">
We should replace it with `https://api.openai.com/v1/chat/completions`
</Dropdown>

<Dropdown title="What should we replace method with?">
We should replace it with `POST`
</Dropdown>

Let's make some of those changes:
```js
fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    //optional, meant for security checks (authentication)
    headers: {
      ...
    },
    //NOT needed with GET request
    body: JSON.stringify({
     ...
    })
})
```

### What's this `headers` thing?
Well, some APIs need to verify that we're authorized to use them. This could be because it's too expensive to run those APIs and they need some way to limit usage or keep track of who is using them.

Let's add something to our diagram:
![headers are like the labels on a package](https://cloud-27qdx0gbm-hack-club-bot.vercel.app/0untitledheaders.png)

You know how the labels on a package can identify who sent the package? Likewise, request headers also identify who is sending the request.

Most often, APIs use something called an **API key** to check who sent the information. They distribute these keys and each one is unique, which means that given a key, they can find out who they handed it out to.

![the api developer hands out keys to each unique user](https://cloud-hqp06ld4l-hack-club-bot.vercel.app/0keyexplanation.png)

To contact the ChatGPT API, we need to send these `headers` in the `fetch` request:
```js
headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer OPENAI_API_KEY'
},
```

Let's break this down:
- `Content-Type` tells the API what kind of data the `headers` and `body` are. In this case, we are sending both in `JSON` format, so we specify that we're sending `JSON`.
- `Authorization` is to send the API key that we have

**Hmm, what API Key should I get?**
Good observation, we need an API key. Here are the steps on how to do so:
1. Create an account on the [OpenAI Platform](https://platform.openai.com/)
2. Go to the API keys page:![click the user profile and in the popup, click view api keys](https://cloud-873naq3sb-hack-club-bot.vercel.app/0image.png)
3. Create a new API key secret:![button to create new api key secret](https://cloud-ee2akama4-hack-club-bot.vercel.app/0image.png)
4. Replace `OPENAI_API_KEY` with your new API key!

Now, your `fetch` request should look something like this:
```js
fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    //optional, meant for security checks (authentication)
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer OPENAI_API_KEY'
	},
    //NOT needed with GET request
    body: JSON.stringify({
     ...
    })
})
```

### What should I put `body`?
Remember, the code that we had earlier for the request body? We need to modify that a little bit.

Here's what we're starting with:
```json
{
      'model': 'gpt-3.5-turbo',
      'messages': [
        {
          'role': 'user',
          'content': `What US state is Shelburne in?`


        }
    ],
}
```

The main thing we need to edit is the value in `messages`. We can keep the `role` as it is, but we need to change `content`.

Now what exactly should our `content` be? Well, it has to be a prompt for ChatGPT!

Take some time with your club to think of a prompt. If one of your club members is making a meal planner for your trip, their prompt should include something about food. If you have additional `<input/>` elements that specify the type of trip, you should add them here.

<Dropdown title="How do I add <input/> values in the prompt?">
You can do this using [template literal strings](https://www.w3schools.com/js/js_string_templates.asp)

For example, you could do something like this to add the location to your prompt (remember to use backticks for the string):

```js
'content':`plan a trip to ${event.target.location.value}`
```
</Dropdown>


If you need some inspiration here is what my prompt looks like:
```js
{
      'model': 'gpt-3.5-turbo',
      'messages': [
        {
          'role': 'user',
          'content': `plan a trip itinerary for someone going to ${event.target.location.value} from ${event.target.startdate.value} to ${event.target.enddate.value}. have about 3 or 4 things to do per day. respond ONLY with an array that has JSON objects with the parameters \`date\` \`eventTitle\` \`startTime\` \`endTime\`
          \`\`\`
          `
        }
    ],
}
```

Here, we're asking a response in `JSON` format so that we can parse it later on. In this array of `JSON` objects, it will have the date, title, start time, and end time of each event in our trip itinerary. It will give us about 3-4 events per day, which will be great for our users!

Notice how we are asking ChatGPT to return certain values in our JSON. Think about what else we could ask it to return.

<Dropdown title="Here are some ideas">
1. The estimated cost of the trip/each event
2. How far each event is from the previous one
3. How long it would take to get there from the previous event
</Dropdown>

> **Note:** I'm using `event.target.location.value`, `event.target.startdate.value`, and `event.target.enddate.value` here. If you used different values you should change these, along with the custom inputs that you added

## Progress check
Your `fetch` request should look something like this now (with your own custom prompt):
```js
fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer OPENAI_API_KEY'
    },

    body: JSON.stringify({
      'model': 'gpt-3.5-turbo',
      'messages': [
        {
          'role': 'user',
          'content': `plan a trip itinerary for someone going to ${event.target.location.value} from ${event.target.startdate.value} to ${event.target.enddate.value}. have about 3 or 4 things to do per day. respond ONLY with an array that has JSON objects with the parameters \`date\` \`eventTitle\` \`startTime\` \`endTime\`
          \`\`\`
          `
        }
      ],
    })
  })
```

## Parsing the API response
At this point, we are making a request to the ChatGPT API, but we aren't getting its output. 

Our `fetch` call returns a [JavaScript promise](https://javascript.info/promise-basics), so we need to use `.then()` to get the response from the API.

```js
fetch('...',{
...    
).then(result => result.json()) //convert to JSON
```

Our first `.then()` **resolves** the API request and extracts what it returns. It then converts it to JSON, which contains all of the itinerary details.

However, `result.json()` returns ***another*** promise. 
<Dropdown title="What should we do in this case?">
We need to add another `.then()`!
</Dropdown>



```js
fetch('...',{
...    
).then(result => result.json()) //convert to JSON
 .then(eventsResponse =>{
	 console.log(eventsResponse)
 })
```

Here is an example of what `eventsResponse` looks like:
```json
{
  "id": "chatcmpl-7eGsZyLk57VhjL9NE5BTMB7fxLGyh",
  "object": "chat.completion",
  "created": 1689832359,
  "model": "gpt-3.5-turbo-0613",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "..."
      },
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 76,
    "completion_tokens": 276,
    "total_tokens": 352
  }
}
```

This is JSON output, and we need to get to the `content` key. We can do that with `eventsResponse.choices[0].message.content`:
```js
fetch('...',{
...    
).then(result => result.json()) //convert to JSON
 .then(eventsResponse =>{
	 console.log(eventsResponse)
	 console.log(eventsResponse.choices[0].message.content)
 })
```

If we run this and check the second `console.log`, we'll see a massive (almost cryptic) string. This is [because `content` is of type `string`, not a JavaScript Object.](https://www.youtube.com/watch?v=912_cPllMyg)

Here's how we can convert `content` to a JS object:
```js
fetch('...',{
...    
).then(result => result.json()) //convert to JSON
 .then(eventsResponse =>{
	const events = JSON.parse(eventsResponse.choices[0].message.content)

	console.log(events)
 })
```
Now, the variable `events` is a JavaScript object, and we can access the data that it has!

If we `console.log(events)`, it should look something like this:
```js
[
  {
    "date": "2023-07-19",
    "eventTitle": "Visit Golden Gate Bridge",
    "startTime": "10:00",
    "endTime": "12:00"
  },
  {
    "date": "2023-07-19",
    "eventTitle": "Explore Fisherman's Wharf",
    "startTime": "14:00",
    "endTime": "17:00"
  },
  {
    "date": "2023-07-19",
    "eventTitle": "Enjoy dinner at Chinatown",
    "startTime": "18:00",
    "endTime": "20:00"
  },
  {
    "date": "2023-07-20",
    "eventTitle": "Visit Alcatraz Island",
    "startTime": "09:00",
    "endTime": "12:00"
  },
  {
    "date": "2023-07-20",
    "eventTitle": "Explore the Exploratorium",
    "startTime": "14:00",
    "endTime": "17:00"
  },
  {
    "date": "2023-07-20",
    "eventTitle": "Watch a baseball game at AT&T Park",
    "startTime": "19:00",
    "endTime": "22:00"
  }
]
```

## Adding itinerary events to the page
This has been going great so far! We're so close, we just need to add a couple things.

Now we need to show the itinerary on the main page. We can do this is by adding a new HTML "card" for each event in the itinerary.

Go to `index.html` again and add a `<div>` element with any `id`. This is how our JavaScript code identifies which element to add the itinerary to.

> Note: put this underneath the `<form>`
```html
<div id="eventlist"></div>
```


**Back to our JavaScript code!**\n
This is what it looks like right now:
```js
fetch('...',{
...    
).then(result => result.json()) //convert to JSON
 .then(eventsResponse =>{
	const events = JSON.parse(eventsResponse.choices[0].message.content)

	console.log(events)
 })
```

Since `events` is an array of JS objects, we can use a simple `for` loop to go through the array. In the loop, we can generate some HTML with the event's details in order to add it to the page.

First, let's create a `for` loop:
```js
for(const event of events){

}
```

Now, `event` represents each individual event in the itinerary. Here's an example of how it looks:
```js
{
    date: "2023-07-19",
    eventTitle: "Visit Golden Gate Bridge",
    startTime: "10:00",
    endTime: "12:00"
},
```

Let's edit the loop to give us back some 
```js
for(const event of events){
	let htmlGenerated = `<div>

      <h3>${event.eventTitle}</h3>
      <p>${new Date(event.date).toLocaleDateString(undefined, { dateStyle: "medium" })}</p>

      <p>${event.startTime} - ${event.endTime}</p>

      </div>`
}
```

Let's break some things down here:
- We're creating a string that has HTML elements inside of it. This is sort of a "template"
- Then, we can add the details of each specific event using template literals

<Dropdown title="What's going on with the event.date here?">
 
It looks scary, I know. Let's break that down:
- If we look at `event.date`, it looks very unreadable. Let's make it readable!
- `.toLocalDateString()` makes our date look very pretty and readable. Here's `dateStyle:"medium"` shortens it (instead of `December 10th, 2023`, we get `Dec 10, 2023`)
- The `.toLocalDateString()` function needs a `Date` object to work with
- Since `event.date` is a `string`, we convert it to a date with `new Date()`

</Dropdown>

<Dropdown title="Remember to add anything else we requested from ChatGPT. Here are some ideas we can do with that data:">
1. With the estimated cost of the trip/each event, express that cost in terms of Starbucks frappucinos (for example, a $20 ticket to a museum would be 4-5 Starbucks fraps)
2. Convert the distance from each itinerary event and express it in terms of Subway sandwitches
3. Express the time needed to drive between destinations in terms of dog days (i.e. it would take 1 dog day to drive between Vermont and New Hampshire) 
</Dropdown>

If we `console.log` the variable `htmlGenerated` now, we should get something like this:
```
<div> <h3>Cable Car Ride</h3> <p>Jul 19, 2023</p> <p>3:30 PM - 5:30 PM</p> </div>
```

Notice how it looks like HTML? Now we need to add this to the page.

**Back to the `fetch` request!**
Here's how it's lookin' right now:
```js
fetch('...',{
...    
).then(result => result.json()) //convert to JSON
 .then(eventsResponse =>{
	const events = JSON.parse(eventsResponse.choices[0].message.content)
	for(const event of events){
		let htmlGenerated = `<div>

      <h3>${event.eventTitle}</h3>
      <p>${new Date(event.date).toLocaleDateString(undefined, {dateStyle: "medium" })}</p>

      <p>${event.startTime} - ${event.endTime}</p>

      </div>`
	}
 })
```

Now, `htmlGenerated` needs to be added to the website.

1. Let's move the `htmlGenerated` declaration to outside the `for` loop like so:
```js
let htmlGenerated=""

for(const events of events){
	...
}
```
2. Then, tack on each generated string to this `htmlGenerated variable` like so:
```js
let htmlGenerated=""

for(const events of events){
	//add it on
	htmlGenerated += `<div>

      <h3>${event.eventTitle}</h3>
      <p>${new Date(event.date).toLocaleDateString(undefined, {dateStyle: "medium" })}</p>

      <p>${event.startTime} - ${event.endTime}</p>

      </div>`
}
```

Now that all the events are in HTML in `htmlGenerated`, we now have to shove this all inside the `<div/>` we created earlier:
```html
<div id="eventlist"></div>
```

Under the `for` loop, we can add this line of code:
```js
document.getElementById("eventlist").innerHTML += htmlGenerated
```

Let's break this down:
1. We select the `<div>` from our HTML code
2. We put our HTML of events inside the `<div/>`

This would mimic writing HTML like this, for example:
```html
<div id="eventlist">
	<div> <h3>Cable Car Ride</h3> <p>Jul 19, 2023</p> <p>3:30 PM - 5:30 PM</p> </div>
</div>
```

Notice how our event is inside the `<div/>`, which means that it will now get rendered on the page!

This is my entire `script.js` file as of now:
```js
function getItinerary(e) {

    e.preventDefault()

    console.log(e.target.location.value)

    fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer OPEN_AI_API_KEY'
        },

        body: JSON.stringify({
            'model': 'gpt-3.5-turbo',
            'messages': [{
                'role': 'user',
                'content': `plan a trip itinerary for someone going to ${e.target.location.value} from ${e.target.startdate.value} to ${e.target.enddate.value}. have about 3 or 4 things to do per day. respond ONLY with an array that has JSON objects with the parameters \`date\` \`eventTitle\` \`startTime\` \`endTime\`
          \`\`\`
          `
            }],
        })
    }).then(result => result.json()).then(eventsResponse => {

        const events = JSON.parse(eventsResponse.choices[0].message.content)
        let htmlGenerated = ""
        for (const event of events) {
            //add it on
            htmlGenerated += `<div>
      <h3>${event.eventTitle}</h3>
      <p>${new Date(event.date).toLocaleDateString(undefined, {dateStyle: "medium" })}</p>

      <p>${event.startTime} - ${event.endTime}</p>

      </div>`
        }

        document.getElementById("eventlist").innerHTML = htmlGenerated
    });
}
```

And this is my `index.html` file:
```html
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>replit</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>

<body>
  Hello world
  <script src="script.js"></script>

  <form onsubmit="getItinerary(event)">
    <input type="text" name="location" />
    <input name="startdate" type="date">
    <input name="enddate" type="date">
    <input type="submit" value="Submit" />
  </form>
  
  <div id="eventlist"></div>
</body>

</html>
```

## Done! 🎉

Now, if you run this code, type in some inputs, you should get a trip itinerary beautifully displayed on your screen!

**Result:**
![result](https://cloud-r7dc1z25v-hack-club-bot.vercel.app/0image.png)


---

# What next?

![](https://i.giphy.com/media/KkOCoWiqwTztjUPZRR/giphy.webp)

And now we have our club trip planned! You might be wondering what we should do now. Since we have the core functionality, you're free to take this demo home and tinker with it!

**Ideas:**
Maybe we can add some functionality to only go to Starbucks or only go to boba shops on the trip? Maybe we can make it look a bit nicer! The possibilities are endless.

![you're a wizard](https://media.tenor.com/IoIn9W74-lcAAAAC/youre-a-wizard-hagrid.gif)
We hope that you've built this and came out with more knowledge about ChatGPT! Now you're truly an AI wizard 😎