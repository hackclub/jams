---
part: 'part-2'
title: 'Crafting Weapons, Shields, and Armor in TinkerCAD'  
batch: '3DArmory'
description: >  
    In this Jam, you will be finishing the hilt of the sword that we made in the last jam part. You will have fun customizing your product while learning both how to use TinkerCAD AND how to think like a 3D Modeler! 
contributor: 'thesuperRL'  
thumbnail: 'https://media.discordapp.net/attachments/893657462790557716/1131005602185875466/Screenshot_2023-07-18_at_4.32.23_PM.png?width=1442&height=1064'
timeEstimate: '30 Min'  
difficulty: 'Beginner'
keywords: 'Sword, CAD, 3D Design'  
language: 'N/A'
presentation: "" 
presentationPlay: "" 
presentationPDF: "" 
notes: "" 
poster: ""
video: "" 
---

![Excalibur?](https://media.discordapp.net/attachments/893657462790557716/1131005602185875466/Screenshot_2023-07-18_at_4.32.23_PM.png?width=1442&height=1064)

*(Mountains and crystal models from TinkerCAD's Library)*

![woscenery](https://media.discordapp.net/attachments/893657462790557716/1131006927158120518/Screenshot_2023-07-18_at_4.37.41_PM.png?width=1318&height=1064)

*(and now without scenery)*

*(The finished example sword. It's always possible to make more decorations!)*

After you have already learned the ways to use TinkerCAD from the last part, this is just going to move much faster and utilize the things you know.

And for ease of communication, from now on I will just call the longer non-height measurement of whatever shape as the length, and the shorter non-height measurement as the width. 

I'm also going to stop giving you rigid length measurements, to force you to be creative and find lengths and proportions you like.

# **Outline:**

1. **Deconstructing the Hilt** *(planning how to model the hilt)*
2. **Fusing the Pieces** *(finally putting everything together)*
3. **Forging the Blade (but actually this time)** *(making the bone of your sword)*
4. **Sharpening the Tip** *(creating the top of the blade)*

# Deconstructing the Hilt

Let's do a similar process with 

![Wikipedia Image of Sword Parts](https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Sword_parts-en.svg/2560px-Sword_parts-en.svg.png)

	(By Traced by User:Stannered; original by Nathan Robinson of myArmoury.com.This SVG image was created by Medium69.Cette image SVG a été créée par Medium69.Please credit this : William Crochot - Derivative of File:Sword Parts.jpg, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=1878416)

When you are modeling (like when you are programming), it's always helpful to break big items into smaller parts. Modeling individual pieces and grouping them together is always easier than trying to do the whole thing. 

As such, let's break the hilt itself into the three key parts: the cross-guard, grip, and pommel.

## Cross Guard

Let's take a look at a real one

![Cross Guard Sample Image](https://www.darksword-armory.com/wp-content/uploads/2014/09/medieval-knight-one-handed-sword-cross-guard.jpg)

It looks already quite simple, but we can make it simpler. It's basically the same as the blade (a diamond prism shape) but stretched way wider and being shorter.

![Hilt Base](https://cdn.discordapp.com/attachments/893657462790557716/1130989780038066358/Screenshot_2023-07-18_at_3.29.29_PM.png)

If you wanted a straight handguard, we are done. But we can do better than that. 

A problem with TinkerCAD is that it's hard to curve objects that aren't already curved. However, remember that we have a lot of shapes that we can work with, and remember the three key ways we can make a weird shape:

- Combine a few shapes (Addition)
- Subtract shapes from each other (Subtraction)
- Deform another shape to make what you want (Modification)

In this case, let's try subtraction since it's hard to add a curve or do anything with deforming shapes in TinkerCAD. 

Let's grab a cylinder and rotate it 90 degrees. Stretch it out lengthwise and decrease its height to make its curve more gradual. 

![Cylinder Modifying](https://media.discordapp.net/attachments/893657462790557716/1130991448620286074/Screenshot_2023-07-18_at_3.36.10_PM.png?width=2160&height=784)

Let's duplicate it (either by using Ctrl C and Ctrl V, or just Ctrl D). Move it so that they are barely touching, and use our old friend the align tool to, well, align them. 

![Align](https://media.discordapp.net/attachments/893657462790557716/1130992061567483904/Screenshot_2023-07-18_at_3.38.33_PM.png?width=2160&height=588)

Notice how I will only click the red dot (align width-wise) and not the middle dot on the long side, since that will just make them overlap. We get this:

![Cyl2](https://media.discordapp.net/attachments/893657462790557716/1130991744977215598/Screenshot_2023-07-18_at_3.37.19_PM.png?width=2160&height=536)

Group them, and align them with the red hilt body. You can make a few adjustments to the height and length of the cylinder abomination, and make sure to move it up a bit since we want to cut the top, not the bottom of the red shape.

![Example](https://media.discordapp.net/attachments/893657462790557716/1130993981459800146/Screenshot_2023-07-18_at_3.46.14_PM.png?width=2160&height=722)

Now we address what you see here: Holes. 

![Holes](https://cdn.discordapp.com/attachments/893657462790557716/1130992380514934794/Screenshot_2023-07-18_at_3.39.50_PM.png)

You're probably wondering how we can do subtraction, if so far all I showed you is combining two shapes into one. To that I say, we use **holes**. 

Grouping a hole with a solid cuts holes in it. Let's make the orange shape a hole, and then use the group tool on it and the red shape. 

Before the grouping:
![pregroup](https://media.discordapp.net/attachments/893657462790557716/1130994280043905124/Screenshot_2023-07-18_at_3.47.25_PM.png?width=2160&height=606)

After the grouping:
![postgroup](https://media.discordapp.net/attachments/893657462790557716/1130994368547913808/Screenshot_2023-07-18_at_3.47.46_PM.png?width=2160&height=654)

A small tip with holes: remember that you can use an object you've already cut shapes out of as another hole! 



##### Optional Challenge with this tip in mind

With this technique I made the bottom curve as well. Try to figure out how I did that as a challenge, or simply move on if you'd like. 

![chal](https://media.discordapp.net/attachments/893657462790557716/1130995317546963054/Screenshot_2023-07-18_at_3.51.32_PM.png?width=2160&height=570)

Great! You can stay here to decorate more, but for our purposes (whether you did the challenge or not) this hilt is more than enough. Now let's move on. 

## Grip

This is much easier. All we need is a cylinder that shrinks as you get higher. If you want to be technical about it, this is called a frustum, or in our case a cone frustum.

... Oh wait that isn't a pre-made shape? Let's make it then!

If you search up frustum you will probably see diagrams like this:

![Cone Frustum](https://media.discordapp.net/attachments/893657462790557716/1130997133135323217/Screenshot_2023-07-18_at_3.58.44_PM.png?width=882&height=1062)

Hey, isn't that just a cone but with the tip cut out? We can do that with holes!

Since you already know how to use holes (and are probably tired with my rambling), I'm not going to elaborate much. I'll just show pictures.

![frust1](https://media.discordapp.net/attachments/893657462790557716/1130997922922758234/Screenshot_2023-07-18_at_4.01.52_PM.png?width=548&height=1062)

![f2](https://media.discordapp.net/attachments/893657462790557716/1130998059036311602/Screenshot_2023-07-18_at_4.02.25_PM.png?width=618&height=1062)

Easy right? Shapes like this gets easier and easier to identify as you model more and more.

## Pommel

The pommel is probably the most flexible bit of the sword. As such, I highly suggest you come up with your original idea.

I'm just going to show some pictures of me making an easy cylinder pommel if you run out of cool ideas. 

![c1](https://media.discordapp.net/attachments/893657462790557716/1131001286762971156/Screenshot_2023-07-18_at_4.15.15_PM.png?width=1286&height=1064)

![c2](https://media.discordapp.net/attachments/893657462790557716/1131001427276341248/Screenshot_2023-07-18_at_4.15.47_PM.png?width=1440&height=996)

![c3](https://media.discordapp.net/attachments/893657462790557716/1131001522159898674/Screenshot_2023-07-18_at_4.16.10_PM.png?width=1096&height=960)


# Fusing the Pieces

Let's look at our inventory.

![Inventory](https://media.discordapp.net/attachments/893657462790557716/1131003584645955734/Screenshot_2023-07-18_at_4.24.21_PM.png?width=1198&height=1064)

(I just made all of them a bit smaller because TinkerCAD was yelling at me about a size limit... oops)

After some resizing and combination, we are (FINALLY) done!

![End product](https://media.discordapp.net/attachments/893657462790557716/1131004094618800128/Screenshot_2023-07-18_at_4.26.26_PM.png?width=568&height=1064)

Fit for a king!

Now, go ahead and forge your own path in the world of 3D Modeling!

