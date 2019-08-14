---
layout: post
title:  Survey of Four Static Site Generators 
date:   2019-05-20 10:00:00 -0800
---
Since the centralized web wants a heavyweight fight, with everything wrapped in hypertext markup, KRIS Radio has to move to a static site generator. Why not write an entry about the tournament we put the contestants through? 

This entry has been completely rewritten after realizing how flawed my methods were. I was installing each package and manually counting the changes, attempting to get a configuration, etc. An attempt, but simply examining each package on their manager gives the same information -- faster and without variation due to my local specs. 

I used codetab's [Count LoC](https://codetabs.com/count-loc/count-loc-online.html) to size up the codebases -- quite convenient as literally every option examined is based on github. 

To count dependencies, I just went to each option's package manager, be that rubygems.org, crates.io, or what have you. All told, here's how the numbers shake out: 

|              |Ghost |Jekyll|Metalsmith|mdBook|
|-------------:|:----:|:----:|:--------:|:----:|
|Lines of Code |121,792|41,224 |4,651      |16,082 |
|Dependencies  |86    |12    |0         |19 (+6[^1])|  

However, this obscures the information about code vulnerabilities in those packages, or sub-dependencies! While doing it the hard way my packaged managed counted almost two hundred vulnerabilities between Ghost and Jekyll, and hundreds more packages installed than advertised as dependencies. Even my selected generator, mdBook, has [two unlisted security vulnerabilities from fetching Google fonts -- and trackers](https://github.com/rust-lang-nursery/mdBook/issues/847). (Don't worry, that reference has been removed from dat://krisrad.io!)

So, in the end, mdBook won out due to it's small code base, active developer support (Metalsmith is smaller, but only has one main developer), and the fact that I've been learning rustlang anyways. 

Ghost and Jekyll are respectable platforms, but Ghost's paid options seem to be overtaking the free offering to the point where it feels more like a freemium product than FOSS. Jekyll has been fairly inactive for some time. Jekyll does, however, cohabitat with github pages and `dat://` pretty well. 

But more to the point, what is the point of running "open source software" if the code is so thick and overgrown, you close the book as soon as you open it? Now, if mainstream browsers had native support for markdown rendering, this site wouldn't be any thicker than before this entry: a whole 24 lines of code. But we've picked mdBook, and now the only thing to do is dive in headfirst. Until next time! 

[^1]: crates.io lists six dependencies of mdBook as "optional". So the total could be 19 or 25, depending on how you take that. 