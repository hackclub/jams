---
part: "part-7"
batch: 'oscillart'
totalParts: '7'
title: 'Styling and Shipping'
description: "In this part of the Jam, you'll finalize your app design with CSS and ship it using GitHub pages."
contributor: "celesteroselli"
contributorSlackID: 'U06TV3F4HEU'
thumbnail: 'thumbnail image link'
timeEstimate: '30-45 min'
difficulty: '(Beginner, Intermediate)'
keywords: 'shipping, deploying, github pages, CSS, style'
presentation: 'https://docs.google.com/presentation/d/1RaRz1FgwdmI8gWgqsin43zvOVKRINS00O1hmpGoY6EA/edit?usp=sharing'
presentationPlay: 'https://docs.google.com/presentation/d/e/2PACX-1vQEpKgVJrdNELwuw0aKsybsVr3wqiwLfYXtCyF4UG6DgZNNvDQRQx21ArDxOezNMvz70wOvyul5jQkc/pub?start=true&loop=false&delayms=30000'
presentationPDF: 'https://hc-cdn.hel1.your-objectstorage.com/s/v3/7d752bbaa132749c540ec1a33ec765eb37beacbb_oscillart_7__1_.pdf'
notes: 'link to notes (optional)'
poster: 'link to poster (optional)'
video: 'link to video (optional)'
---

# Part 6: 30 min

## Table of Contents:
Let’s do a quick rundown on what we’re gonna do in this section. We are going to:

1. Go through some style choices, and how to make your project unique
2. Centering your divs, changing fonts, adding a colorful background
3. Go through how to submit your project on the form to earn artifacts

## Section 1: fancy schmancy

I am so proud of you, acolyte. You are AL. MOST. THERE! Now that you have most of the requirements for your app, we’ve approached the super fun part, with very little instruction from me: design.

Your app needs to be your own. I’m gonna go through how to:
Make the content on your app centered
Add a title and change fonts and colors

First, we’re going to center all of our elements by changing CSS on our container div - remember that from Part 1? All of your elements (canvas, buttons, inputs, etc.) should be inside that div:

```
<div id=”container”>
… //all of your HTML elements!!
</div>
```

To line them up, go into your styles.css file, and a section to edit the container div (which has an ID of container).

<Dropdown title="Go into styles.css. How did we add CSS to an HTML element based on an ID? Do the same thing for the container div!">
Answer: 

```
#container {

}
```
</Dropdown>

Now, inside of that section, we’re going to use the following methods:

`display: flex;`
:this sets up the div using CSS’s flex framework. It’s a layout module for arranging things in columns or grids.
`height: 100vh;`
:sets the height of the div to 100% of the screen height
`justify-content: center;`
:centers objects horizontally
`align-items: center;`
:centers objects vertically
`text-align: center;`
:makes all of the text inside the div centered
`flex-direction: column;`
:aligns all the objects in the div in one column, instead of one row
`gap: 10px;`
:puts a gap in between all of our elements so they’re not squished together

I’m not going to give you the exact CSS code to use here… think of this as a challenge to use the methods I’ve given you and play around. Learn the Hack Club way: by figuring it out.

Next, we’re going to add a title for our app and change its font and color to something cool. First, add the title in HTML, inside of our container div (so it gets centered). You can add a heading using the `<h1></h1>` tag, putting the title text inside.

To refer to an entire type of element in CSS, not just the ID or class, you’ll just add the element's name in styles.css, and then {} with your style code inside.

The styles you might want to use use here: 
`color: blue;`
:this sets text color to whatever you want it to be. You can use a hex code, rgb(), or a common color string like “red”, “blue”, etc.
`font-family: Arial, Helvetica, sans-serif;`
:use this to choose fonts for elements on your site. To figure out what fonts come automatic with your browser, check here. You can also choose general font-types such as sans-serif, serif, monospace, etc

I used all of the methods above in my stylesheet to customize my site. Here’s my end result!

![oscillart demo picture](https://hc-cdn.hel1.your-objectstorage.com/s/v3/72ebb828de43d89615be69cd44ed04451e968888_screenshot_2025-06-06_at_1.03.12___pm.png)

Now that I’ve gone through my suggestions, here are some ideas on what you could customize on your own. W3Schools is my favorite site for finding CSS inspiration. Go off and explore!
- Background images
- Canvas background colors
- Types of text/headings

## Section 2: time to ship!

![dancing-orpheus-gif](https://hc-cdn.hel1.your-objectstorage.com/s/v3/f606f18cca43d719f3e9aecaa9a6c23fd37baade_orpheus.gif)

WHOOP WHOOP PARTY TIME PARTY PARTY TIME 
(full credit to @msw for the gif)

You’ve done it! You’ve made an amazing web app, customized it, and now you’re about to ship it! If you’re new to Hack Club, shipping is a term for when you don’t just code a project, but you publish it on the internet for all the world to see!

In addition, if you’re completing this project for the Athena awards, by shipping this project, you’ll earn artifacts (which you can redeem for laptops, iPads, etc…) not to mention hours towards your certificate and flight to NYC [plane emoji]

We’re going to publish our sites to a URL using GitHub Pages. To do so, follow these steps:

![instructions #1](https://hc-cdn.hel1.your-objectstorage.com/s/v3/6134cbcedc6488f68621ebd8d2443c889f56a190_screenshot_2025-06-06_at_1.11.44___pm.png)

1. Go to your GitHub repository

![instructions #2](https://hc-cdn.hel1.your-objectstorage.com/s/v3/3ffe0b814f2e3e21de6919d8b8d187e67ba064bb_screenshot_2025-06-06_at_1.12.56___pm.png)

2. Go to Settings

![instructions #3](https://hc-cdn.hel1.your-objectstorage.com/s/v3/62a2848d3066a5a90bc3736c7e7394dcb31d2ad5_screenshot_2025-06-05_at_11.18.45___am.png)

3. On the left menu bar, click on Pages

![instructions #4](https://hc-cdn.hel1.your-objectstorage.com/s/v3/404ac5c32ff39d88e3ccdec134df62ca4c93690c_screenshot_2025-06-05_at_11.19.36___am.png)

4. Under Build and Deployment, then under Branch, click on None and in the dropdown, select Main

![instructions #5](https://hc-cdn.hel1.your-objectstorage.com/s/v3/cdb25d39224dc06b0b09948c70c3915c831de226_screenshot_2025-06-05_at_11.20.30___am.png)

5. Refresh the page, then click the URL after “Your site is live at…” at the top

6. Congrats! You have successfully shipped your very-own web app!!

## Section 3: Athena Awards

If you have done this project as on the Athena Awards guided track, go to [oscillart.athena.hackclub.com](oscillart.athena.hackclub.com) to find the form to submit your project for artifacts!