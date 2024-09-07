---
part: "part-1"
batch: 'java-discord-bot'
totalParts: '4'
title: 'Basics'
description: 'First we are going to register the bot at Discord and making the bot run.'
contributor: 'Kipp-ie'
contributorSlackID: 'U07HBU94Q1E'
thumbnail: 'https://github.com/user-attachments/assets/ef4418ba-c9c2-4648-92d5-8df8a198a713'
timeEstimate: '1 Hour'
difficulty: 'Beginner'
keywords: 'java, discord-bot'
presentation: 'https://www.figma.com/slides/XYXBH3tG4jlvZJMyFQCXsT/Untitled?node-id=5-297&t=OpU8bpu74eR06IRE-1'
presentationPlay: 'https://www.figma.com/deck/XYXBH3tG4jlvZJMyFQCXsT/Untitled?node-id=5-117&t=wFGI7lZsBox5fgGX-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1'
presentationPDF: 'https://github.com/Kipp-ie/jamassets/blob/main/part-1.pdf'
---

# Hi 👋

You might have heard of Discord Bots before, if you don't i will give a short description for you. A Discord bot is a bot designed with multiple features for a Discord Server, think of a message when you join or sending random funny memes. Let's make one today!

First go to [Discord Developer Applications](https://discord.com/developers/applications). You'll probably need to sign in.

Click on **New Application**

![Discord Developer Home Page](https://cloud-6p1pvbaeh-hack-club-bot.vercel.app/0image.png)

You can choose any name wou want here. Proceed by clicking the **check box** to accepts Discord's TOS (You should read them!).

![Application Creation](https://cloud-cqn2d1ojp-hack-club-bot.vercel.app/0image.png)

Click on the page **Bot**. On this page you can customize the bot anyway you want!

![Bot page](https://cloud-ief8tg9tb-hack-club-bot.vercel.app/0image.png)

A bot token is how you can communicate with a Discord Bot, think of it like an account password. You need to keep this code safe, otherwise if someone else gets the code they can hijack your bot. Save this token for now in a notepad/word file.

![Resetting bot token](https://cloud-69uxismjr-hack-club-bot.vercel.app/0image.png)

You need to enable all these Privileged Gateway Intents, otherwise your bot won't function!

![Permissions](https://cloud-j9k09iazm-hack-club-bot.vercel.app/0image.png)

You have now changed all the settings needed, let's invite this bot to our server!

Click on the tab **OAuth2**

![OAuth](https://cloud-4upqdgtaj-hack-club-bot.vercel.app/0image.png)

Check **bot**

![Bot](https://cloud-1y24aht1v-hack-club-bot.vercel.app/0image.png)

Check **Administrator**

![Check administrator](https://cloud-fitsonnil-hack-club-bot.vercel.app/0image.png)

On the bottom click on **Copy**

![Copy LINK](https://cloud-5ze8tu4h1-hack-club-bot.vercel.app/0image.png)

Paste this link in a new tab and proceed by following the instructions.

# You now invited your own Discord Bot to your server, good job!

Let's now proceed by actually writing the code.

We will be using **JDA** (Java Discord API).

The recommended IDE for Java is **Intellij** but you can use any IDE you want (However i will be using Intellij so it may be harder to follow if you use another IDE).

Now, let's create a new project.

You can give the bot/project any name you want. When you chose a name make sure the project is set on Maven instead of Gradle. Click on **Create**.

At the left your files should look something like this.

![IntellIJ](https://cloud-f4tqhukr8-hack-club-bot.vercel.app/0image.png)

Open pom.xml.

And add this to the file:

``` xml
<dependencies>
    <dependency>
        <groupId>net.dv8tion</groupId>
        <artifactId>JDA</artifactId>
        <version>5.0.2</version> <!-- replace $version with the latest version -->
    </dependency>
</dependencies>
```

Press Ctrl + Shift + Q

It should like like this.

![Example pom](https://cloud-8k7a2wspb-hack-club-bot.vercel.app/0image.png)

In main.java delete everything except package (your name).

Paste this in your main.java, make sure to replace BOT_TOKEN with the bot token we got earlier.

``` java
public class Main {



    private ShardManager shardManager;

    public Main() throws LoginException, InterruptedException {
        DefaultShardManagerBuilder builder = DefaultShardManagerBuilder.createDefault(BOT_TOKEN);
        builder.setStatus(OnlineStatus.DO_NOT_DISTURB);
        builder.setActivity(Activity.watching("Hi hackclub!"));
        builder.enableIntents(GatewayIntent.GUILD_MEMBERS, GatewayIntent.GUILD_MESSAGES, GatewayIntent.DIRECT_MESSAGES, GatewayIntent.MESSAGE_CONTENT);
        shardManager = builder.build();
        shardManager.addEventListener(
        );


    }

    public static void main(String[] args) {
        try {
            Main bot = new Main();
        } catch (LoginException e) {
            System.out.println("Bot token invalid!");
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
    }
}
```
Click on the things that are red, then Alt + Enter and Import Class.

Also make sure that the bot token is between "" example: "dwah8esfsehfhsnvcb"

Now you can try running the main.java file and seeing if the bot boots.

If it boots, then the hardest part is behind you! If it doesn't try to retrace the steps to see if you maybe went somewhere wrong. Feel fry to dm me on Discord @kippenboutske or tag me/dm me on the Hack Club Slack: @Kipp-ie.

Ready for the next step? If so you can follow part 2!

















