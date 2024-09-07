---
part: "part-3"
batch: 'java-discord-bot'
totalParts: '4'
title: 'Fancy Messages (Embeds)'
description: 'Making ✨*fancy*✨ messages (Embeds)'
contributor: 'Kipp-ie'
contributorSlackID: 'U07HBU94Q1E'
thumbnail: 'https://github.com/user-attachments/assets/23ed59d0-4399-4058-a38d-c6d1da922c0b'
timeEstimate: '1 Hour'
difficulty: 'Beginner'
keywords: 'java, discord-bot'
presentation: 'https://www.figma.com/slides/NEKjZ1qZwYBTTCSc5DUVdC/Untitled?node-id=1-32&t=E11NlCiFb5enyqGi-1'
presentationPlay: 'https://www.figma.com/deck/NEKjZ1qZwYBTTCSc5DUVdC/Untitled?node-id=1-32&t=E11NlCiFb5enyqGi-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1'
presentationPDF: 'https://github.com/Kipp-ie/jamassets/blob/main/part-3.pdf'
---

# Welcome back! 👋

You know what my view is on learning new stuff? Experimentation. Let's do that!

Let's make some ✨*fancy*✨ messages.

In *programmer language* we call that **Embeds**.

Here's an example of an embed.

![image](https://github.com/user-attachments/assets/94f3d9b6-daa0-4c66-9fda-efa4d3bd57f2)


To create an embed we use this:

``` java
EmbedBuilder embed = new EmbedBuilder();
```

Using embed you can make ✨*fancy*✨ messages.

Here's a list of things you can do with embeds!

```
embed.setTitle("Title"); 
embed.setDescription("Description"); 
embed.setColor("Hexcode color");
embed.addField("Field title", "Field description", false);
embed.setFooter("Footer");
embed.setAuthor("Author");
embed.setImage("Imageurl");
```

There are a couple more but these are the most important.

Remember our Ping command? Let's make it ✨*fancy*✨! 

This was where we left of:

```java
    public class Ping extends ListenerAdapter {
        @Override
        public void onSlashCommandInteraction(SlashCommandInteractionEvent event) {
            if (event.getName().equals("ping")) {
                event.reply("Pong").queue();
            }
        }
    }
```

First lets add the Embed Builder.

```java
    public class Ping extends ListenerAdapter {
        @Override
        public void onSlashCommandInteraction(SlashCommandInteractionEvent event) {
            if (event.getName().equals("ping")) {
                EmbedBuilder embed = new EmbedBuilder();
                event.reply("Pong").queue();
            }
        }
    }
```

Now let's give the embed a title!

```java
    public class Ping extends ListenerAdapter {
        @Override
        public void onSlashCommandInteraction(SlashCommandInteractionEvent event) {
            if (event.getName().equals("ping")) {
                EmbedBuilder embed = new EmbedBuilder();
                embed.setTitle("Pong!");
                event.reply("Pong").queue();
            }
        }
    }
```

If you look at our code you see event.reply, this does not send out embed, let's fix that!

```java
    public class Ping extends ListenerAdapter {
        @Override
        public void onSlashCommandInteraction(SlashCommandInteractionEvent event) {
            if (event.getName().equals("ping")) {
                EmbedBuilder embed = new EmbedBuilder();
                embed.setTitle("Pong!");
                event.replyEmbeds(embed.build()).queue();
            }
        }
    }
```

You need to build an embed before sending it, that's why it's embed.build().

Let's add some color! I was thinking of orange #ff7308. But you should choose the color you like! For color you need to add Color.decode(hexcode).

```java
    public class Ping extends ListenerAdapter {
        @Override
        public void onSlashCommandInteraction(SlashCommandInteractionEvent event) {
            if (event.getName().equals("ping")) {
                EmbedBuilder embed = new EmbedBuilder();
                embed.setTitle("Pong!");
                embed.setColor(Color.decode("#ff7308"));
                event.replyEmbeds(embed.build()).queue();
            }
        }
    }
```

Maybe add a text field?

```java
    public class Ping extends ListenerAdapter {
        @Override
        public void onSlashCommandInteraction(SlashCommandInteractionEvent event) {
            if (event.getName().equals("ping")) {
                EmbedBuilder embed = new EmbedBuilder();
                embed.setTitle("Pong!");
                embed.setColor(Color.decode("#ff7308"));
                embed.addField("Ping", "Pong", false);
                event.replyEmbeds(embed.build()).queue();
            }
        }
    }
```

You can add anything you want to the embed! Experiment please! You will learn!

Let's try it now :)

![image](https://github.com/user-attachments/assets/ad9132cb-cfce-40c1-828a-2d5f8cade7fd)

This was pretty cool, right? In Part 4 we will explore examples and you will learn more advanced ways to use embeds and events. But you can also use your creativity, you will learn more if you figure it out yourself. The choice is yours :).

# Nice job ;) Maybe i will see you in the last part, maybe not! Hope i could help ;).
