---
part: "part-4"
batch: 'java-discord-bot'
totalParts: '4'
title: 'Examples.'
description: 'In this final (Optional) step we will make some example commands :)'
contributor: 'Kipp-ie'
contributorSlackID: 'U07HBU94Q1E'
thumbnail: 'https://github.com/user-attachments/assets/1678411f-a278-4883-a053-155c5e8bed70'
timeEstimate: '1 hour'
difficulty: 'Beginner'
keywords: 'java, discord-bot'
presentation: 'https://www.figma.com/slides/zmb4kWADcE6d8rKWsG0GIe/Untitled?node-id=1-32&t=E11NlCiFb5enyqGi-1'
presentationPlay: 'https://www.figma.com/deck/zmb4kWADcE6d8rKWsG0GIe/Untitled?node-id=1-32&t=E11NlCiFb5enyqGi-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1'
presentationPDF: 'https://github.com/Kipp-ie/jamassets/blob/main/part-4.pdf'
---

# Welcome! (for the last time :()

This adventure is coming to an end, welcome to the last step, the example step. I will guide you to make examples and explain every single part of the code. This will be a steep learning curve, but i believe in you :).

# /avatar commands
Goal: Create an /avatar command where you can select an user.

First, let's make the command.

You already know how to make a command, but let's add some advanced features.

``` java
commands.add(Commands.slash( "avatar", "Get someone's avatar"));
```

This is something new:

``` java
commands.add(Commands.slash( "avatar", "Get someone's avatar")
    .addOption(OptionType.USER, "user", "Select an user to grab a avatar from", true));
```
Now you can select an user with the slash command, the **true** means that the option is **required**.

Like this:

![image](https://github.com/user-attachments/assets/344b6c9a-8a9f-41be-84e2-ed2523f16f51)

Let's move onto the command.

Like we did in Step 2 create a class with the name of your choice. If you don't know this anymore go back to step 2!

You should have something like this:

``` java
    public class Avatar extends ListenerAdapter {
    @Override
    public void onSlashCommandInteraction(SlashCommandInteractionEvent event) {
        if (event.getName().equals("slashname")) {
            
        }
    }
}
```

First let's begin by getting the avatar url, that's pretty straightforward

1. Create a string with the name url
2. Get the user someone chose with the slashcommand
3. Get their avatar.

``` java
    public class Avatar extends ListenerAdapter {
    @Override
    public void onSlashCommandInteraction(SlashCommandInteractionEvent event) {
        if (event.getName().equals("slashname")) {
            String url = event.getOption("user").getAsUser().getAvatarUrl();
            
        }
    }
}
```
We now have a String (**url**) that contains the avatar url.

Let's make it into an embed!

``` java
    public class Avatar extends ListenerAdapter {
    @Override
    public void onSlashCommandInteraction(SlashCommandInteractionEvent event) {
        if (event.getName().equals("slashname")) {
            String url = event.getOption("user").getAsUser().getAvatarUrl();
            EmbedBuilder embed = new EmbedBuilder();
            embed.setImage(url);

        }
    }
}
```

You now have a embed with the avatar url, now let's send it.

``` java
    public class Avatar extends ListenerAdapter {
    @Override
    public void onSlashCommandInteraction(SlashCommandInteractionEvent event) {
        if (event.getName().equals("slashname")) {
            String url = event.getOption("user").getAsUser().getAvatarUrl();
            EmbedBuilder embed = new EmbedBuilder();
            embed.setImage(url);
            event.replyEmbeds(embed.build()).queue();
        }
    }
}
```

Last step, add this class to the Main class.

If you did that you should be done! Let's test it out!

![image](https://github.com/user-attachments/assets/c2327be7-af0f-4b0e-a011-4788a6eacada)

As you see it works!

Let's move on to our second and last example.

# Let's create a kick command.

Sometimes when someone is so annoying you litteraly want to kick them, well, you can. Let's fix that ;)

First let's create a slash command.

``` java
commands.add(Commands.slash( "kick", "Kick someone")
                .addOption(OptionType.USER, "user", "Choose the user to kick", true)
                .setDefaultPermissions(DefaultMemberPermissions.enabledFor(Permission.KICK_MEMBERS)));
```

It creates a slash command with:
- An option to select the user.
- That only people with the **KICK_MEMBERS** permission can kick people.

Now create a main class.

Add the same base as the example above (Including if (event.getName.equals))

You should now have this:

``` java
public class Kick extends ListenerAdapter {
    @Override
    public void onSlashCommandInteraction(SlashCommandInteractionEvent event) {
        if (event.getName().equals("kick")) {
            Member member = event.getOption("user").getAsMember();
        }
    }
}
```

We want:
- Getting the user from the option
- Kicking the user
- Replying to the event.

First:

``` java
public class Kick extends ListenerAdapter {
    @Override
    public void onSlashCommandInteraction(SlashCommandInteractionEvent event) {
        if (event.getName().equals("kick")) {
            Member member = event.getOption("user").getAsMember();
        }
    }
}
```

We want to get the user as a member because otherwise it gets someone as a user and now it gets someone as a member, so part of the server otherwise you can't kick them!

Now let's do the kicking part!

``` java
public class Kick extends ListenerAdapter {
    @Override
    public void onSlashCommandInteraction(SlashCommandInteractionEvent event) {
        if (event.getName().equals("kick")) {
            Member member = event.getOption("user").getAsMember();
            member.kick().queue;
        }
    }
}
```

Done! Now let's do the replying part

``` java
public class Kick extends ListenerAdapter {
    @Override
    public void onSlashCommandInteraction(SlashCommandInteractionEvent event) {
        if (event.getName().equals("kick")) {
            Member member = event.getOption("user").getAsMember();
            member.kick().queue;
            event.reply("Member has been kicked!").queue();
        }
    }
}
```

Add this class to your main class. 

Let's test your bot! Now it's up to you. No screenshot this time, why? Because i don't want that your bot ends up as mine! You should use your creativity! See coding as a form of art! 

But the most important thing is, having fun. I hoped i learned you something new. 

Now use this talent!

Good luck ;)





