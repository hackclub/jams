---
part: part-2
title: 'Setting up hacktime & an editor'
batch: 'sprig'
description: >
    To actually get your hours credit you must have some POW. This part also includes some ideas to brainstorm what you are going to theme.
contributor: 'neongamerbot'
contributorSlackId: 'U07L45W79E1'
thumbnail: 'https://static-00.iconduck.com/assets.00/linux-mint-icon-512x459-nza5jg09.png'
timeEstimate: '15-30 Min'
difficulty: 'Beginner'
keywords: 'linux, mint, setup, wakatime'
presentation: "https://docs.google.com/presentation/d/1wL0310I3xCqIHYiEAi8PYISchrtT8pSw/edit?usp=drive_link&ouid=118013894948049836904&rtpof=true&sd=true"
# presentationPlay: "https://www.figma.com/proto/mYayY1K4DjZxj8cGsWLdAC/Sprig-%231?page-id=236%3A2&type=design&node-id=236-1250&viewport=346%2C360%2C0.06&t=5XhFfrVWyRo8L9CB-1&scaling=contain&starting-point-node-id=236%3A1250&mode=design" 
# presentationPDF: "https://cloud-pxftj80n6-hack-club-bot.vercel.app/0sprig__1.pdf" 
notes: "" 
video: ""
totalParts: 4
---

So once you have rebooted you should be greeted to a screen which looks similar to this.
![img](https://cloud-egrftwb57-hack-club-bot.vercel.app/0image.png)

After you login you will see the welcome to linux mint screen. You can close this popup or read it if you want.

## Setup hackatime

Hackclub has there own [wakatime](https://wakatime.com) instance called [hacktime](https://waka.hackclub.com) which is what we will be using to count hours spent ricing the PC.
First go to [hacktime](https://waka.hackclub.com) and sign in/sign up for an account.
Once you have logged in you want to copy your api key.
![img](https://cloud-lz470t0hu-hack-club-bot.vercel.app/0image.png)

### Terminal plugin (optional)
I recommend installing the terminal plugin for wakatime to gain more hours for the ricing.
To install the terminal plugin (bash) i will be  following the instructions [here](https://wakatime.com/terminal).
First open terminal. 

1. Then install [git](https://github.com) `sudo apt install -y git`
2. run `git clone https://github.com/gjsheep/bash-wakatime.git` to get the required files.
3. then run `nano ~/.bashrc` and append `source ~/bash-wakatime/bash-wakatime.sh` to the end of the file.
4. update `~/.wakatime.cfg` file with the following:
```
[settings]

# Your Hackatim server URL
api_url = https://waka.hackclub.com/api

# Your Hackatim API key (get it from the web interface after having created an account)
api_key = YOUR_KEY_HERE
```
5. reload the terminal with `source ~/.bashrc`

## Setup an editor 
You can use any editor that is [wakatime](https://wakatime.com/plugins) compatible. I will be using [vscode](https://code.visualstudio.com/).

1. install vscode from the [website](https://code.visualstudio.com/)
![img](https://cloud-6krc5g7ak-hack-club-bot.vercel.app/0image.png)
2. Once you have installed vscode open it.
![img](https://cloud-ixzvy6scv-hack-club-bot.vercel.app/0image.png)
3. Open extensions and search wakatime and install it.
![img](https://cloud-4lazcx4zv-hack-club-bot.vercel.app/0image.png)
4. Then it will prompt you to enter your api key which you will paste your key.
5.  update `~/.wakatime.cfg` file with the following:
```
[settings]

# Your Hackatim server URL
api_url = https://waka.hackclub.com/api

# Your Hackatim API key (get it from the web interface after having created an account)
api_key = YOUR_KEY_HERE
```

### Tip.
incase wakatime is not the best at counting i recommend taking screenshots which will serve as further proof of the hours spent ricing.

## Brainstorming
So you we are about ready to start ricing but first we need to brainstorm what we are going to theme. So here are some recommendations:
1. [r/unixporn](https://www.reddit.com/r/unixporn/) you can find insporation from other peoples setups.
2. [r/startpages](https://www.reddit.com/r/startpages/) you can find some cool startpages to use.
3. [r/wallpapers](https://www.reddit.com/r/wallpapers/) you can find some cool wallpapers to use.
4. [r/rofi](https://www.reddit.com/r/rofi/) you can find some cool rofi configs to use.
5. [r/polybar](https://www.reddit.com/r/polybar/) you can find some cool polybar configs to use.

### Color & icon schemes
You need to pick a colorscheme to rice around i will be using catppucin mocha which you can find [here](https://catppuccin.com/)

Some popular color schemes are:
1. [gruvbox](https://github.com/gruvbox-community)
2. [nord](https://www.nordtheme.com/)
3. [dracula](https://draculatheme.com/)
4. [onedark](https://github.com/one-dark)

You will also need an icon's pack i will be using [catppuccin icons](https://www.gnome-look.org/p/1715570). Some other popular icon packs are:
1. [blackout](https://www.gnome-look.org/p/1341332)
2. [hatter](https://www.pling.com/p/2146096/)
3.  [papirus](https://github.com/PapirusDevelopmentTeam).
   
### Fonts
You will also need a font to use i will be using [fira code](https://www.programmingfonts.org/#firacode). Some popular ones are:
1. [fira code](https://www.programmingfonts.org/#firacode)
2. [hack](https://sourcefoundry.org/hack/)
3. [mononoki](https://madmalik.github.io/mononoki/)
4. [cascadia code](https://github.com/microsoft/cascadia-code)
5. [iosevka](https://typeof.net/Iosevka/)

### Wallpaper
For my wallpaper i will be using this [one](https://github.com/er2de2/catppuccin_walls/blob/master/wallpapers_png/bios_update.png) since it matches with my colorscheme. I recommend using a wallpaper which matches your colorscheme.


### Conclusion
To conclude i hope you have an idea of how you want your desktop to look like. In the next part we will be installing the required software to rice the desktop.

Click [here](/batch/riceathon/part-3) to advance to the next session.