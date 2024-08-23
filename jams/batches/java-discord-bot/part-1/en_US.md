---
part: "part-1"
batch: 'java-discord-bot'
totalParts: '4'
title: 'Basics'
description: 'First we are going to register the bot at Discord and making the bot run.'
contributor: 'Kipp-ie'
contributorSlackID: 'Kipp-ie'
thumbnail: 'https://cloud-9wqwm2von-hack-club-bot.vercel.app/0image.png'
timeEstimate: '1 Hour'
difficulty: 'Beginner'
keywords: 'java, discord-bot'
presentation: 'link to figma slides'
presentationPlay: 'link to figma slides in presentation mode'
presentationPDF: 'link to pdf of slides'
notes: 'link to notes (optional)'
poster: 'link to poster (optional)'
video: 'link to video (optional)'
---

# Hi 👋

You might have heard of Discord Bots before, if you don't i will give a short description for you. A Discord bot is a bot designed with multiple features for a Discord Server, think of a message when you join or sending random funny memes. Let's make one today!

First go to [Discord Developer Applications](https://discord.com/developers/applications). You'll probably need to sign in.

![Discord Developer Home Page](https://cloud-6p1pvbaeh-hack-club-bot.vercel.app/0image.png)

Click on **New Application**

![Application Creation](https://cloud-cqn2d1ojp-hack-club-bot.vercel.app/0image.png)

You can choose any name wou want here. Proceed by clicking the **check box** to accepts Discord's TOS (You should read them!).

![Bot page](https://cloud-ief8tg9tb-hack-club-bot.vercel.app/0image.png)

Click on the page **Bot**. On this page you can customize the bot anyway you want!

![Resetting bot token](https://cloud-69uxismjr-hack-club-bot.vercel.app/0image.png)

A bot token is how you can communicate with a Discord Bot, think of it like an account password. You need to keep this code safe, otherwise if someone else gets the code they can hijack your bot. Save this token for now in a notepad/word file.

![Permissions](https://cloud-j9k09iazm-hack-club-bot.vercel.app/0image.png)

You need to enable all these Privileged Gateway Intents, otherwise your bot won't function!

You have now changed all the settings needed, let's invite this bot to our server!

![OAuth](https://cloud-4upqdgtaj-hack-club-bot.vercel.app/0image.png)

Click on the tab **OAuth2**

![Bot](https://cloud-1y24aht1v-hack-club-bot.vercel.app/0image.png)

Check **bot**

![Check administrator](https://cloud-fitsonnil-hack-club-bot.vercel.app/0image.png)

Check **Administrator**

![Copy LINK](https://cloud-5ze8tu4h1-hack-club-bot.vercel.app/0image.png)

On the bottom click on **Copy**

Paste this link in a new tab and proceed by following the instructions.

# You now invited your own Discord Bot to your server, good job!

Let's now proceed by actually writing the code.

We will be using **JDA** (Java Discord API).

The recommended IDE for Java is **Intellij** but you can use any IDE you want (However i will be using Intellij so it may be harder to follow if you use another IDE).

Now, let's create a new project.

You can give the bot/project any name you want. When you chose a name make sure the project is set on Maven instead of Gradle. Click on **Create**.

![IntellIJ](https://cloud-f4tqhukr8-hack-club-bot.vercel.app/0image.png)

At the left your files should look something like this.

Open pom.xml.

And add this to the file:

```
<dependencies>
    <dependency>
        <groupId>net.dv8tion</groupId>
        <artifactId>JDA</artifactId>
        <version>5.0.2</version> <!-- replace $version with the latest version -->
    </dependency>
    </dependencies>
```

Press Ctrl + Shift + Q

![Example pom](https://cloud-8k7a2wspb-hack-club-bot.vercel.app/0image.png)

It should look like this.

In main.java delete everything except package (your name).

Paste this in your main.java, make sure to replace BOT_TOKEN with the bot token we got earlier.

```
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

If it boots, then the hardest part is behind you! If it doesn't try to retrace the steps to see if you maybe went somewhere wrong.

Ready for the next step? If so you can follow part 2!

















