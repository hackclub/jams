---
part: "part-1"
batch: 'turquoise'
title: 'Turquoise'
timeEstimate: '60 Min'
contributor: 'Kaympe20'
contributorSlackId: 'U07HY92M9GA'
thumbnail: 'https://wallpapers.com/images/featured-full/linux-desktop-nf65sk0rdgsvfl3u.jpg'
difficulty: 'Intermediate'
keywords: 'turquoise, help me, oh dear god, help me please, linux, distro, ysws, you ship we ship'
presentation: ''
presentationPlay: ''
presentationPDF: ''
notes: ''
poster: ''
video: ''
---
## Preface
There are many ways to create a Linux distro. Many people will end up deciding to use [LinuxFromScratch](https://www.linuxfromscratch.org/), [NixOS](https://nixos.org/), or [Cubic](https://github.com/PJ-Singh-001/Cubic). This guide will go over creating a Fedora Silverblue derivative using [blue-build](https://blue-build.org/).
If at any point you get stuck, please use the [blue-build docs](https://blue-build.org/learn/getting-started/). If you are still stuck, feel free to ask in [#turquoise](https://hackclub.slack.com/archives/C08BAEP4SCX) on the [Hack Club Slack](https://hackclub.com/slack)

# Setup

## Development Environment

### Automatic setup using the BlueBuild Workshop

The automatic setup will apply some default configuration and set up cosign for you.

The Workshop is a currently work-in-progress part of BlueBuild that allows managing custom image repositories using a web interface. Report issues in the GitHub repository: [blue-build/workshop](https://github.com/blue-build/workshop).

1. Open https://workshop.blue-build.org/.
2. Press "Log in with GitHub".

![](https://hc-cdn.hel1.your-objectstorage.com/s/v3/d4310301408d5e031b845376c6932eae70f494ca_image.png)

3. Press "New custom image repository".

![](https://hc-cdn.hel1.your-objectstorage.com/s/v3/9fbab1c5372ec74101e8247c051573c63f314482_image.png)

4. Choose a name for your repository and press "Create repository".
    - This name should not contain spaces, slashes, or other special non-ascii characters. Using a dash (`-`) for delimitating words is recommended.

![](https://hc-cdn.hel1.your-objectstorage.com/s/v3/8ffb79c8c82f61f52a4c59a3cf714738615e62c0_image.png)

5. Wait for the repository to be set up

![](https://hc-cdn.hel1.your-objectstorage.com/s/v3/58aa8f7af07009c1d7bfa27ab9f652f35cd81fcd_image.png)

6. When prompted with setting up container signing, it is recommended to do it **automatically**.
    - If you have security concerns, skipping is an option too. Read more about this in the wizard.

![](https://hc-cdn.hel1.your-objectstorage.com/s/v3/e5fe5194fd1ce3392cdd8e2d1b4f9e463afbdd17_image.png)

7. After that step is completed, you're done! You can now clone your repository, open `recipes/recipe.yml` and start customizing! The [reference section](https://blue-build.org/reference/recipe/) of the documentation is your friend here.

