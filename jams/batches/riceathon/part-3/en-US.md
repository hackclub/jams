---
part: part-3
title: 'Rice time :D'
batch: 'riceathon'
description: >
   The final time to actually rice the desktop! this part will be the longest and most fun part of the batch. Of course you should not follow this part word for word and actually use your own preferences.
contributor: 'neongamerbot'
contributorSlackId: 'U07L45W79E1'
thumbnail: 'https://static-00.iconduck.com/assets.00/linux-mint-icon-512x459-nza5jg09.png'
timeEstimate: '1-2 Hours'
difficulty: 'Beginner'
keywords: 'linux, mint, setup, wakatime'
notes: "" 
video: ""
presentation: "https://docs.google.com/presentation/d/1todlyniII8Vd5lHdlJO9f9bDoqNSpRrO/edit?usp=drive_link&ouid=118013894948049836904&rtpof=true&sd=true"
totalParts: 4
---

Now we are ready to rice the desktop!
## Updating system
First we want to update the system to make sure we have the latest packages.
```bash
sudo apt update && sudo apt upgrade -y
```
## Creating Dotfiles 
first open terminal and create a new directory for the rice.
```bash
mkdir dotfiles
```
then cd into the directory
```bash
cd dotfiles
```
then open in vscode by running `code .`

## Install fonts
Installing fonts earlier makes a lot of ricing lot easier so lets get started with that.
So go to your fonts website and download the font.
Once you have your downloaded font if its a zip file extract it and find which variant you want to use.
Then open terminal and cd into the directory where the font is located.
```bash
cd Downloads
```
Then copy the font to the fonts directory.
```bash
mv my-font-here ~/dotfiles/font.ttf
```
Then symlink the font to the fonts directory.
```bash
mkdir -p ~/.fonts
ln -s ~/dotfiles/font.ttf  ~/.fonts/font.ttf
```
This will make it so you can include the font in your dotfiles & it will be available to all applications.
Your font folder should also look something like this:
![img](https://cloud-ddjg0wwb3-hack-club-bot.vercel.app/0image.png)
## Change default font
Now that we have the font installed we can change the default font. 
Open the app `Font selection` and then change the settings to ur preference.
this is how i setup mine!:
![img](https://cloud-igaz1ft9f-hack-club-bot.vercel.app/0image.png)

## Config vscode
First i want you to setup vscode to your liking. 
- Change the settings around to what feels most comfortable to you. (hint: you can access settings by opening the command palette with `ctrl+shift+p` and typing `settings`)
- Install any extensions you want to use.
Once you are done you will need to mv your vscode config to the dotfiles directory.
```bash
mv ~/.config/Code/User/settings.json ~/dotfiles/vscode-settings.json
```
Then symlink the vscode settings to the config directory.
```bash
ln -s ~/dotfiles/vscode-settings.json ~/.config/Code/User/settings.json
```
with a symlink this will make it when updating dotfiles it will update vscode settings as well.
This is what mine turned out to look like:
![img](https://cloud-nko4q6xyt-hack-club-bot.vercel.app/0image.png)

## Change Colorscheme & Icons themes
Please follow your installation settings based on the theme you picked. 
i changed most of the settings via the `Themes` app in the advanced section which lets you change the colorscheme, icons, cursors etc.
note you should be symlinking these with your dotfiles as well.
ex: the install steps from the colorschemes say `extract xyz at ~/.icons` instead of in your home directory run it in your `~/dotfiles` directory and symlink it to `~/.icons` this makes your dotfiles portable and easy to manage.
note: if symlinks dont work you should make note of it somewhere in the repo to manually install it/ copy files via script.

Here is how my theming turned out:
![img](https://cloud-ro12fdcbk-hack-club-bot.vercel.app/0image.png)


## Grub theme
Grub is the default boot loader and i recommend installing a theme for it.
i will be installing the catppuccin grub theme & catppuccin tty theme with it.

to add it correctly to the dotfiles run:
```bash
mkdir -p ~/dotfiles/grub
cp /etc/default/grub ~/dotfiles/grub/grub
```
then using your editor of choice edit the grub file to your liking!.
then create a symlink to the grub file.
```bash
sudo ln -s ~/dotfiles/grub/grub /etc/default/grub
# link themes
sudo ln -s ~/dotfiles/grub/themes /usr/share/grub/themes/
```
then update grub.
```bash
sudo update-grub
```
Then reboot to test the changes.
note: you will have to adjust `GRUB_TIMEOUT_STYLE` as linux mint trys to override it.

## Install polybar
polybar is a cool bar on top which you can customize to your liking. i will be theming this with catppuccin as well. note: you dont have to use this and can use other things/components to add to your desktop.
to install polybar run:
```bash
sudo apt install polybar
```
Then once you have applied your selected config symlink it to the dotfiles directory.
```bash
mv ~/.config/polybar ~/dotfiles/polybar
ln -s ~/dotfiles/polybar ~/.config/polybar
```
Then restart polybar to see the changes.
```bash
killall polybar
```
## Setting up wallpaper
im will be setting up a static png wallpaper.
you can do this by right clicking on the desktop and selecting `change desktop background` then selecting the wallpaper you want to use.
this is what mine turned out to look like:

## Make changes yourself
now there are many settings you can just change yourself to your liking.

## Conclusion
Now that you have riced your desktop you can now submit your hours to hacktime and show off your desktop to the world!.
Here is what mine came out to look like:
![img](https://cloud-3ekc7n190-hack-club-bot.vercel.app/0image.png) 
(please note this is a VM & very unstable)
my example was a lightweight  rice and most rices should have a lot more then what i have.

### Further reading
if you want there are some more in depth guides on how to rice mint (and more experinced) which you should check out.

Click [here](/batch/riceathon/part-4) to advance to the next session.
