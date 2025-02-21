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
(If at any point you get stuck, please use the [blue-build docs](https://blue-build.org/learn/getting-started/))

# Setup

## Development Environment

### Automatic setup using the BlueBuild Workshop

The automatic setup will apply some default configuration and set up cosign for you.

The Workshop is a currently work-in-progress part of BlueBuild that allows managing custom image repositories using a web interface. Report issues in the GitHub repository: [blue-build/workshop](https://github.com/blue-build/workshop).

1. Open https://workshop.blue-build.org/.
2. Press "Log in with GitHub".
3. Press "New custom image repository".
4. Choose a name for your repository and press "Create repository".
    - This name should not contain spaces, slashes, or other special non-ascii characters. Using a dash (`-`) for delimitating words is recommended.
5. When prompted with setting up container signing, it is recommended to do it **automatically**.
    - If you have security concerns, skipping is an option too. Read more about this in the wizard.
6. After that step is completed, you're done! You can now clone your repository, open `recipes/recipe.yml` and start customizing! The [reference section](/reference/recipe/) of the documentation is your friend here.

