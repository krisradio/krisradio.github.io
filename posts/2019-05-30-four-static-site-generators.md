---
layout: post
title:  Survey of Four Static Site Generators
date:   2019-05-30 10:00:00 -0800
---
Since the centralized web wants a heavyweight fight, with everything wrapped in hypertext markup, KRIS Radio has to move to a static site generator. Why not write an entry about the tournament we put the contestants through? 

This entry has been completely rewritten after realizing how flawed my methods were. I was installing each package and manually counting the changes, attempting to get a configuration, etc. An attempt, but simply examining each package on their manager gives the same information -- faster and without variation due to my local specs. 

I used codetab's [Count LoC](https://codetabs.com/count-loc/count-loc-online.html) to size up the codebases -- quite convenient as literally every option examined is based on github. 

To count dependencies, I just went to each option's package manager, be that rubygems.org, crates.io, or what have you. All told, here's how the numbers shake out: 

|                     |Ghost  |Jekyll|Metalsmith|mdBook|
|--------------------:|:-----:|:----:|:--------:|:----:|
|Lines of Code        |121,792|41,224|4,651     |16,082|
|Dependencies         |86     |12    |16        |25    |
|Sub-Dependencies     |273    |881   |?			|201   |
|Known Vulnerabilities|9      |5     |0         |2     |
|Sub-Vulnerabilities  |?      |84    |?         |0     |

Notice how many more dependencies are introduced than advertised, and how many more vulnerabilities those sub-dependencies introduce. This paralyzing code creep is exactly what KRIS Radio was created to combat. 

What is the point of running "open source software" if the code is so thick and overgrown, you close the book with a headache as soon as you open it? Furthermore, what is the point of blogging -- to fiddle around with code you don't understand all day, or to put words on the internet? We are here today for that purpose alone; to find the meanest publishing suite that will get the job done. So let's look at our contenders again. 

Besides the extreme size of the codebase, Ghost's paid options seem to be overtaking the free offering to the point where it feels more like a freemium product than FOSS. For erecting a walled garden, and letting it overgrow, we give Ghost the axe. 

Jekyll has been fairly inactive for some time. Jekyll is Github Pages' preferred static generator, and works on `dat://` just fine (like any other `https://` standard). Therefore, the decentralized blogger interested in a low-cost `https://` mirror compatible with `dat://` could do quite well using Jekyll. While 1/3 the size of Ghost, Jekyll introduces three times as many dependencies (perhaps there's a Law of Conservation hidden there...). For logorrhoic logic and derelict development, we give Jekyll the boot. 

Metalsmith seems like the answer to our demands for slim, trim generation. Unfortunately, I had a devil of a time getting it to work, and the zero-dependencies figure obscures the fact that large amounts of functionality are relegated to plugins. Additionally, only one developer actively maintains Metalsmith, so updates are probably seen as infrequently as in Jekyll. For lack of support, we ruefully show Metalsmith the door (but wish the community!). 

You've probably figured out who won by now. Quite simply, mdBook has a very slim, easily understood code base, and was the only one I tested that worked strraigh out the box. Even there, installing mdBook on my machine still required another 201 sub-dependent crates beyond the 25 advertised. And the package even has [two unlisted security vulnerabilities from fetching Google fonts -- and trackers](https://github.com/rust-lang-nursery/mdBook/issues/847). (Don't worry, that reference has been removed from dat://krisrad.io!) However, balance is about making sacrifices, and we're not trying to reinvent the wheel here. 

Now, if the big browsers had native support for markdown's elgant simplicity, like you find when [exploring the decentraweb on Beaker](https://explore.beakerbrowser.com/), this entry would add a mere 34 lines of text, rather than the 205 lines of html mdbook, necessarily, renders it to. In an era of expanding corporate control and declining natural resources, the choice is up to you: continue to trust Big Brother, watching him get fat off the bread while farmland burns? Or take what you can carry on your back, set out, start understanding this brave new world? 