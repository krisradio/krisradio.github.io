---
layout: post
title:  Refactoring from Jekyll to Dat
date:   2019-05-20 10:00:00 -0800
---
This is a live walkthrough of refactoring a Jekyll blog into a Dat site. Comparing our site on `https://` to `dat://` is going to be interesting. I'm currently encoding entries in markdown, which is natively supported by Beaker -- not as much by most major browsers. However, with the site hosted on Github, Hashbase, and my own computer, we will have a strong host of backups - and mutanted sites to examine. 

1. We initialize a new Dat in the already-existing git repository. My repositiory was setup as a Jekyll blog, so there's already a few files existing in the folder. We're going to hold onto some of the configuration files and the old `/_posts` folder, and build a new architecture around them.  
 [Fig. 001: Directory after Dat init.](2019-05-22-dir-after-dat-init.PNG)  
 Creating a new Dat from Beaker Browser's main menu initializes the .datignore files. Compared to a commercial solution, we obviously have a lot of control here. For now, I intend to stay agile while exploring the ecosystem of Dat, Hashbase, and their border with `https://`. So, I'm keeping the architecture will minimal while I focus on writing new content for the site. 

2. Jekyll left behind a lot of `gem` and `yaml` files, so I delete most of them. Some of the data in `_config.yml` I transfer over to `dat.json`. Json formatting is more common and standardized than Yaml -- again, that's not a very scientific judgement -- but the beautiful thing is the level of freedom I have here.  
 I'm not developing for a specific API, but I have the information that all of them use. It would be pretty easy to write interact with sockets on the `dat` ecosystem that use common fields like title, url, email, twitter_username, and github_username, the handful I grabbed from `_config.yaml`, and I can easily add more.

3. That essentially brings this entry up to real time. The next steps are two:
    + Investigate more stable and supported blogging suites. There are many decentralized and open source options to consider. There is also the hands-off stability of contracting professional services. Maintaining a minimal architecture leaves the door open to pivot to either. [Ghost](https://ghost.org/) & [Ridder](dat://ridder.seed.hex22.org/) are two interesting options.  
    + Investigate how the site currently appears on Github pages (https), Hashbase.io (https & dat), *and* my direct Dat address. Initially, they vary in appearance a lot more than what I saw in web development between different mainstream browsers. Hopefully, the functionality is intact across all three, but I can't conclusively say that yet. 