---
part: "part-2"
batch: 'java-discord-bot'
totalParts: '4'
title: 'Commands'
description: 'Creating some simple commands.'
contributor: 'Kipp-ie'
contributorSlackID: 'U07HBU94Q1E'
thumbnail: 'https://github.com/user-attachments/assets/01c63e14-014b-4dce-9b90-b3468deca8fd'
timeEstimate: '1 Hour'
difficulty: 'Beginner'
keywords: 'java, discord-bot'
presentation: 'https://www.figma.com/slides/OPzkpUPcVzR78sXNefuGLk/Untitled?node-id=1-238&t=E11NlCiFb5enyqGi-1'
presentationPlay: 'https://www.figma.com/deck/OPzkpUPcVzR78sXNefuGLk/Untitled?node-id=1-32&t=E11NlCiFb5enyqGi-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1'
presentationPDF: 'https://github.com/Kipp-ie/jamassets/blob/main/part-2.pdf'
---

# 👋 Welcome back!

So our bot is kinda lifeless right now, let's give it some spark ;). So the way you communicate with Discord Bots are slash commands. Let's make some!

So first, we need to make a system that will register slash commands with the Discord Servers.

So, create a **package**, it's like a folder for Java.

Right click on the folder where main.java is located.

Click on New, then package.

Name it whatever you want but for simplicity you could call it Managers.

It should now look like this.

![Package Creation](https://cloud-36n8smf7u-hack-club-bot.vercel.app/0image.png)

Click create again, then **class**, name it SlashCommandManager (Or something else! Be creative ;).

So the point of the SlashCommandManager is communicating to the Discord Servers like "Hey Discord Servers, look at this cool command, okay now make sure this bot can use it".

You know how it works now, let's make it B).

Open SlashCommandManager, it should like like this:

``` java
public class SlashCommandManager {

}
```

add extends ListenerAdapter behind SlashCommandManager, like this!

``` java
public class SlashCommandManager extends ListenerAdapter {
}
```
Make sure your textcursor is between the brackets.

Click Ctrl + O

Search for OnGuildReady and click enter.

What CTRL + O does is it shows you what events your bot can pick up. For example onSlashCommand If someone does a slashcommand it sends a signal to the class that uses onSlashCommand, you can use that for example sending a message when someone does /message. 

Remove super.onGuildReady(event);

It should now look like this:

``` java
public class SlashCommandManager extends ListenerAdapter {
    @Override
    public void onGuildReady(GuildReadyEvent event) {
    }
}
```

So you can now register your commands in public void onGuildReady(GuildReadyEvent event) {}

Add this to onGuildReady:
List<CommandData> commands = new ArrayList<>();

and

event.getGuild().updateCommands().addCommands(commands).queue();

If anything becomes red click on it then Alt + Enter, please remember this, you will need it more in the future.

Now it should look like this:

``` java
public class SlashCommandManager extends ListenerAdapter {
    @Override
    public void onGuildReady(GuildReadyEvent event) {
        List<CommandData> commands = new ArrayList<>();
        # Place your slashcommands here!
        event.getGuild().updateCommands().addCommands(commands).queue();
    }
}
```

So now we can make some commands!

Place the command in between onGuildReady and event.getGuild().updateCommands().addCommands(commands).queue();

For making a command you do:

commands.add(Commands.slash("name of your command", "description of your command"));

The name should be all lowercase, description can be with anything.

Lets make the name "ping", the description can be anything you want (Let your imagination choose something ;))

Any class we make in Java we have to add to Main.java.

Like this:

![Main.java](https://cloud-rey8pf8mq-hack-club-bot.vercel.app/0image.png)

If you add more classes to the main make sure to sepperate them with ,

Like this

``` java
new pongcommand(),
new xcommand
```

# Let's try it out!

Run the bot, go to your Discord Server, and type /ping. Does it show up? If it doesn't please retrace your steps.

It should look like this.

![/ping test](https://cloud-o35vh3hmp-hack-club-bot.vercel.app/0image.png)

You have maybe noticed but if you send /ping it doesn't really do anything, that's because we need to create a Ping class. So i talked about events, we need to create a class that picks up SlashCommands with the name "ping" or whatever you chose.

You will get this error if you don't make a onSlashCommand.

![/ping error](https://cloud-udjw1d4l7-hack-club-bot.vercel.app/0image.png)

Let's do that!

So first create a Package called commands (Or whatever you want.).

Then create a class in the package with the name whatever you want, nameing the classes with what command it is will help.

Like this:

![Ping Class](https://cloud-q5vhpib42-hack-club-bot.vercel.app/0image.png)

In the class add extends ListenerAdapter\

Press CTRL + O and type onSlashCommand and click enter.

Remove super.onSlashCommandInteraction(event);

Okay this will get pretty complicated so read very good.

In onSlashCommand add:
``` java
if (event.getName().equals("ping")) {

}
```
So what this does is check is the slash command has the name **ping**
If it does we can reply!

With:

``` java
event.reply("Message what you want to reply with!").queue;
```

It should look like this now!

![ping command class](https://cloud-84sly80bm-hack-club-bot.vercel.app/0image.png)

Okay this class is pretty good look now, let's add it to our main class! (You should probably know how! If not scroll a bit up!)

Try /ping now! If you followed the instructions it should reply now instead of that error. If not retrace steps. Feel fry to dm me if you are stuck on Discord @kippenboutske or tag me/dm me on the Hack Club Slack: @Kipp-ie.

# Good job, you can create slashCommands now! Pretty epic, right?








