<!-- > This extension uses MV2 and will not work after January 2023. As such development for this extension has been ceased until proven otherwise. See [this](#why-mv2) for details. -->
> I have decided that I will make this extension MV3 compatible. Even if Google made it purposely hard for adblocker devs like me to make it, someone will have to do it and release it on Chrome's ~~malware~~ [disease-ridden web store](https://www.youtube.com/watch?v=8piNvWJHXLY) (that website is a lost cause at this point). The extension will likely be hosted on a seperate repository at some point in the future or in a seperate folder in this repo.

# AdBlockingStuff

A *slightly* better adblocker.

## Introduction
AdBlockingStuff is a Chrome extension that blocks ads.

Like the better and prettier ad/privacy blockers (uBlock Origin, AdBlockPlus etc.) this blocks ads, trackers, adware and everything in between. The only difference I can think of is the size of the extension, this only occupies less than 1.5 MB (including config.js and the adlists), so its tiny compared to other adblockers on the market with their fancy UIs, and their categorization of domains blocked and all that jazz. And that how little memory it uses, I guess. AdBlockPlus uses 1.45GB of RAM max, mostly for the "Acceptable Ads" feature. And uBlock uses 0.9GB (both are according to this article [here](https://medium.com/@robleathern/do-ad-blockers-use-more-memory-57ac474f7fbc)).

## Installation

<!-- **NOTE**: For reasons I will get to later, its best to install this extension (and any extension of that matter) locally ([how (chrome)](https://developer.chrome.com/docs/extensions/mv3/getstarted/#manifest), [how (firefox)](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension#installing)).
tl;dr, navigator.plugins will not index locally installed extensions. -->

Installation is easy if you know where to look:

1. Download the extension.
2. Open the chrome extension page (chrome://extensions) and locate the "Developer mode" switch, in the top-right corner of the page.
3. Locate then click the "Load unpacked" button, this takes you to a navigation window. Locate the `src` folder. Select this folder and ignore any warnings regarding MV2 deprecation.

You can change the preferences by going to `src/config.js` file.

## Features

- Simple - This extension is as bare as (and similar to) a command line utility, meaning no pretty eye-candy CSS only GUI for you (uses the extension's Devtools console).
- Lightweight - A command line-like utility like this does not take much to load up and can be used in resource intensive scenarios such as using OBS Studio to record a Google Meet, while compiling Yandere Simulator with maximum optimizations while browsing for a Hypercam keygen at a sketchy site at the same time on an Intel Pentium 4 Space Heater™ CPU and 5GB of DDR3 RAM.
- Image caching behavior - Bypass favicon fingerpinting by simply saying "nope, don't cache any image that this website will eventually load"*¹.
- "The trees speak in Vietnamese" said the Lorax - The [icon](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE91JM1Tpkah40rsSm0YJmQEg7GJMCGImEGQ&usqp=CAU) isn't supposed to be a permanant solution but, its here to stay.

*¹ - Sometimes certain favicons fall through and get stored in the non-erasable favicon cache. You cannot get around this.

## What it can and cannot do

### Can:
1. Block ads, badware and trackers - Obviously.
2. Reduce your online fingerprint - Reduce how much data advertising companies get from you.
3. Reduce the amount of data a website uses - Reduce the number of requests a website makes, most of which are not needed for the website to function. This includes analytics, ads, unnecessary website ad-ons like the "Share on [insert social media platform here]" buttons etc.
4. Act as a safety net in browsing sessions - So that you can accidentally go to some sketchy site without worrying if your computer just got hacked (sometimes).

### Cannot:
1. Keep you invincible in shady parts of the interwebs - Domain name registration is as simple as whipping out your credit card and smashing your keyboard until the domain gets registered. So the list has to be massive for the time being.
2. Keep you safe from accidentally viewing ~~lewd depictions of your waifu at a funeral~~ things that you don't want others to see in a certain gathering - While there is a special section for porn sites, this does not block ALL porn sites (i.e. pornhub, onlyfans etc.). I also made another extension which redirects you to funny [images](https://i.redd.it/qs7uh1ivs4d21.jpg) or helpful [websites](https://reddit.com/r/HentaiFree) if you visit said porn sites. Will release the extension in the not-so-distant future.
3. Autoremove the "DiSablE YouR AdBloCker oR We wiLL DIsaBlE YouR ChIld" banners - This adblocker is meant to be stealthy and thus most websites will not even notice that you are blocking ads. But some do slip through, but there is this cool tool called DevTools which can remove elements and modify the site's CSS including unblurring text.

## Permissions
The extension will request certain permissions, but are otherwise not needed for it's function:
1. Read your browsing history - To log out where a request came from which website, this can be disabled by setting `log.opts.origin` to false in the config.js file.
2. Record caught requests - Record requests blocked by the extension. This includes what page URL the file came from, when it happened, what kind of request was it making, etc.

The extension also doesn't make HTTP requests or connect to the internet at all. Again, no fancy interface for you, you control it by it's developer console.

## About navigator.plugins

The Navigator object in Javascript has been an Achilles Heel in fingerprinting prevention. Not only is it a valuable resource for many sites using the feature for checking if you have Adobe Flash installed or to get your Do-Not-Track options using Javascript, it like many good things are abused for the benefit of multi-million advertising companies wanting to make you their submissive piggy gank by fingerpinting and giving you targeted ads even if you clear all of your cookies.

One such example is the navigator.plugins object. This is where a website can look at what extensions you have installed on your computer such as if you have Shockwave Flash installed, so that a site is not executing to thin air. It is also used by many fingerprinting JavaScript libraries to track you as you go. But a simple way to bypass this is to install an extension locally, thereby websites can tell that you don't have any extensions installed, apart from extensions that are core parts of Chromium. Some drawbacks include: Inability to update extensions via the update URL, CORS, and some other things.

## Why MV2?
I made (and actively use) this extension loong before I even thought of uploading this, which explains all of the sloppy unoptimized code. This extension was in active development shortly before I knew that Google demanded that 80% of extensions [must become inoperable by 2023](https://developer.chrome.com/docs/extensions/mv3/mv2-sunset/). And frankly, I'm too lazy<sup>[1]</sup> to make a MV3-compatible adblocker because of the extra hurdles and the fact that 1/4 of the features (most of which are this extension's magnum opus) will be nerfed anyway in the MV3 version.

> Notes:
>
> \[1\] -  May be subject to change.

## License
Under the [MIT](https://choosealicense.com/licenses/mit/) license.
<!-- With exception for certain entries that are in [the adlist that comes with this extension](src/lists/), those belong to their respective owners. -->