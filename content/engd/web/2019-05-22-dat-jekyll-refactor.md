+++
layout= "post"
title=  "Refactoring from Jekyll to Dat"
template= "page.html"
weight = 4
+++
This is a live walkthrough of refactoring a Jekyll blog into a Dat site. Comparing our site on `https://` to `dat://` is quite interesting. I'm currently encoding entries in markdown, which is natively supported by Beaker -- not so much by the major browsers. However, with the site hosted on Github, Hashbase, and my own computer, we will have a strong hand of backups - and mutations - to examine. 

1. We initialize a new Dat in the already-existing git repository. My repositiory was setup as a Jekyll blog, so there's already a few files existing in the folder. We're going to hold onto some of the configuration files and the old `/_posts` folder, and build a new architecture around them.  
 [Fig. 001: Directory after Dat init.](2019-05-22-dir-after-dat-init.PNG)  
 Creating a new Dat from Beaker Browser's main menu initializes the .datignore files. Compared to a commercial solution, we obviously have a lot of control here. For now, I intend to stay agile while exploring the ecosystem of Dat & Hashbase, and their border with `https://`. So, I'm keeping the architecture will minimal while I focus on writing new content for the site. 

2. Jekyll left behind a lot of `gem` and `yaml` files, so I delete most of them. Some of the data in `_config.yml` I transfer over to `dat.json`. Json formatting is more common and standardized than Yaml, but the beautiful thing is I have the freedom to pick either. Unfortunately, editing a `dat.json` in Beaker's UI deletes all data other than what their UI opens to you (e.g., Name & Description), [as I took issue with on Beaker's tracker](https://github.com/beakerbrowser/beaker/issues/1409). For that reason, I highly recommend editing `dat.json` locally, and dealing with the lack of titles in Beaker. 
 As for the information I'm including in `dat.json`, I'm not developing for a specific API, but I have the information that all of them use. It would be pretty easy to interact with sockets on the `dat` ecosystem that use common fields like title, url, email, twitter_username, and github_username, the handful I saved from jekyll's `_config.yaml`, and I can easily add more.

3. Finished with the initial rollback of jekyll, I had to decide on a static site generator, or try rolling my own. After surveying a few options [detailed in my "Survey of Four Static Site Generators" entry](2019-05-30-four-static-site-generators.html), I've decided to roll with `mdBook`. The short size of the code base was a big factor, plus I'm pretty stoked on rustlang. Check out [that entry](2019-05-30-four-static-site-generators.html) to see how the Big Bads like Ghost and Jekyll competed with underdogs like Metalsmith and our winner, mdBook! 

4. Before we continue our easy-reading experience with mdBook, I'd like to take a moment to remember this site's alien birth, when it couldn't decide which dimension to live in and cried out for stability and comfort. 
	+ [Fig. 002: The frankensite on `https://`](2019-05-22-mirrors-https.png).  
	[Fig. 003: Frankensite humanized on `dat://`](2019-05-22-mirrors-dat.png).  
	Dat appears much more user-friendly, as Beaker Browser natively renders Markdown. I really wish that was true in major browsers like Firefox, Opera, Chrome, & Explorer - why do we keep all this html metadata around? - as well as on mobile browsers. Not supporting markdown is why I need to pick a static site generator, which is really more hassle than needed, as shown by Dat.  
	+ However, it is very interesting to see their mutated attempts. The Hashbase `https://` mirror only shows the file structure; users can't view files in-browser. Github Pages renders my `index.md` and `nav.md` files, which lack any yaml frontmatter - but 404's on my actual posts. Navigating to the raw posts on github.com, however, does show the yaml frontmatter - rendered as a table.  
	+ I used a few different protocols here that were not designed with each other in mind. This feels as much like an art experiment as a devlog. Or a breeding lab, feeding radioactive data to different browsers and seeing which can adapt, survive, & thrive. 