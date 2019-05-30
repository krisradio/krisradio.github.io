---
layout: post
title:  Refactoring from Jekyll to Dat
date:   2019-05-20 10:00:00 -0800
---
This is a live walkthrough of refactoring a Jekyll blog into a Dat site. Comparing our site on `https://` to `dat://` is going to be interesting. I'm currently encoding entries in markdown, which is natively supported by Beaker -- not as much by most major browsers. However, with the site hosted on Github, Hashbase, and my own computer, we will have a strong host of backups - and mutations - to examine. 

1. We initialize a new Dat in the already-existing git repository. My repositiory was setup as a Jekyll blog, so there's already a few files existing in the folder. We're going to hold onto some of the configuration files and the old `/_posts` folder, and build a new architecture around them.  
 [Fig. 001: Directory after Dat init.](2019-05-22-dir-after-dat-init.PNG)  
 Creating a new Dat from Beaker Browser's main menu initializes the .datignore files. Compared to a commercial solution, we obviously have a lot of control here. For now, I intend to stay agile while exploring the ecosystem of Dat, Hashbase, and their border with `https://`. So, I'm keeping the architecture will minimal while I focus on writing new content for the site. 

2. Jekyll left behind a lot of `gem` and `yaml` files, so I delete most of them. Some of the data in `_config.yml` I transfer over to `dat.json`. Json formatting is more common and standardized than Yaml -- again, that's not a very scientific judgement -- but the beautiful thing is the level of freedom I have here.  
 I'm not developing for a specific API, but I have the information that all of them use. It would be pretty easy to write interact with sockets on the `dat` ecosystem that use common fields like title, url, email, twitter_username, and github_username, the handful I grabbed from `_config.yaml`, and I can easily add more.

3. That essentially brings this entry up to real time. The next steps are two:
    + Investigate more stable and supported blogging suites. There are many decentralized and open source options to consider. There is also the hands-off stability of contracting professional services. Maintaining a minimal architecture leaves the door open to pivot to either. [Ghost](https://ghost.org/) & [Ridder](dat://ridder.seed.hex22.org/) are two interesting options.  
    + Investigate how the site currently appears on Github pages (https), Hashbase.io (https & dat), *and* my direct Dat address. Initially, they vary in appearance a lot more than what I saw in web development between different mainstream browsers. Hopefully, the functionality is intact across all three, but I can't conclusively say that yet. 
	
4. Results of the above:
    + In comparing Jekyll, Ghost, Cryogen, and Metalsmith. In the end I'm picking Metalsmith.  
	The main benefits with Jekyll were it's extensive integration with Github Pages, which is one of the three current mirrors of my site.  
	Ghost is well-established and seems to have a really strong team behind it, and good value from their Pro subscriptions.  
	Cryogen looks to be pretty lightweight, with a similar idealogy as Jekyll and Metalsmith. 
	Our winner, Metalsmith however, is the simplest; matches the Yaml front matter format I'm currently using; and is based on pure JavaScript, not Ruby, Node.js, or Clojure. The simplicity and bare-metal approach wins out in my analysis, as I really want to keep this blog light and nimble - my focus is my other projects. It's also better-optimized for the p2p web, as bandwidth and processing power is limited for us.
	
	+ [Fig. 002: The site viewed on `https://`](2019-05-22-mirrors-https.png).  
	[Fig. 003: The site viewed on `dat://`](2019-05-22-mirros-dat.png).  
	Dat appears much more user-friendly, as Beaker Browser natively renders Markdown. I really wish that was true in major browsers like Firefox, Opera, Chrome, & Explorer - why do we keep all this html metadata around? - as well as on mobile browsers. Not supporting markdown is why I need to pick a static site generator, which is really more hassle than needed, as shown by Dat.  
	However, it is very interesting to see their mutated attempts. The Hashbase `https://` mirror only shows the file structure; users can't view files in-browser. Github Pages renders my `index.md` and `nav.md` files, which lack any yaml frontmatter - but 404's on my actual posts. Navigating to the raw posts on github.com, however, does show the yaml frontmatter - rendered as a table.  
	I'm using a few different protocols here that were not designed with each other in mind. This feels as much like an art experiment as a devlog. Or a breeding experiment, feeding radioactive data to different browsers and seeing which comes out on top. 
	
5. Knowing what the next step is, I'll round out this entry on refactoring from Jekyll to pure Dat - really just gutting Jekyll with no alternative - with some thoughts on the p2p web.
    + First, there are some interesting ways Dat lacks transparency or privacy. I'm still trying to understand how keys work. One thing is clear, multiwriter support requires integrating other libraries, namely [Hyperdrive](https://awesome.datproject.org/hyperdrive-multiwriter). That means using differnt computers, or even just upgrading to a new one, introduces new dependencies. And dat p2p protocol extension on firefox requires [extensive permissions (Fig. 004)](2019-05-22-firefox-dat-ext-permissions.PNG), introducing security and privacy concerns. 
	+ Pushing changes to Beaker removes some of the json data I added to `dat.json`. That's not surprising, but it still crosses my sense of independence. I'm sure I'll have to swallow more changes in refactoring to Metalsmith. 
	+ However, it is supremely easy to get up and running with `dat://`! Anyone in the world could access and download this entire website. I have a constellation of backups and mirrors that took no money, and almost no time, to spin up. It's much more user-friendly than my experiences with BitTorrent and Tor. I'm quite excited to continue the experiment!