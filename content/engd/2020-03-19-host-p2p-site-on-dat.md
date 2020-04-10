+++
title= "Self Host a P2P site (with centralized backups)"
date= 2020-03-19
template= "page.html"
+++

Dat is a new internet communications protocol.

`dat://` URLs are akin to `https://` URLs. They can be accessed with Beaker Browser, plugins on mainstream browsers like Firefox, or CLIs. Instead of IP addresses, you locate them with a dat address – a 64-character string that is randomly generated when you create a dat. Like hypertext, you can also access dats with named alias.

This guide will show you how to create a website through Beaker Browser on the peer-to-peer `dat://` network, and then how to mirror it across a second `dat://` server – called a seeder – and two `https://` mirrors.

#### Requirements
1. A computer running [Beaker Browser](https://beakerbrowser.com/install/).  
One note of caution: This computer will act as the master server & owner of your dat. Do not choose a computer outside your own control.

2. A [Hashbase account](https://hashbase.io/register).  
Hashbase will seed your original dat, copy it to a second dat (with a new address),  and serve the site up across https. All services are free.

#### Recommendations
1. A [github account](https://github.com/).  
Github Pages will also host your site across `https://` for free, giving you another redundant server. Using Git also brings the benefits of version control to your site.  
Using Github requires [installing Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) on your system.

## Steps  
### Create the site in Beaker Browser
1. Launch Beaker Browser.

2. Click the `[☰]` trigram in the top right to open the main menu.

3. Click the `[+]` button to enter the "Create New" submenu.  
Now you have a choice:  
 - If you want to host an existing site via Dat, you can select "From Folder".  
 - If you want to jump-start a new website with Beaker's template, select "Website". This guide assumes you use the template.

### Modify the site in Beaker Browser
1. First, let's personalize your home page. Why not make the place yours?  
Click `Files/index.html` and the pencil icon in the right. This file should be very familiar to developers – it’s standard HTML. If it’s unfamiliar, read through [w3school’s HTML Tutorial](https://www.w3schools.com/html/) for the basics.  
Right now, your site has four paragraphs: A link to Beaker Browser, the dat-url in shorthand, a link to the `index.html` source code, and a button that change the site’s background color.  
Type up some quick information about yourself or your project! Hit ‘Save’, in the top right, when you are done. You can delete the old paragraphs, but know they are not be backed up by Beaker Browser. Use version control software like git to maintain backups & history.

2. Next, change your dat’s title:  
 - You can click the header text “Untitled” to type a new title.
 - Or, you can click the `dat.json` file. Once Beaker navigates to the file, click the pencil icon on the right. This will let you directly edit the title metadata. Click "Save" in the top right when you are done.

Additional metadata – like the description, icon, and donation link – can be edited by clicking “Settings” underneath your dat’s main title.

Warning: if you use the Settings page, it will overwrite any changes you manually encoded in `dat.json`!

You can also edit the `styles.css` stylesheet, the `script.js` script, or add new pages by hitting the `[+]` button on the right.

#### Preview and Share your Dat
On the top right, there is a “Share” button that will show you the full dat url. So long as your local instance of Beaker Browser is running, anyone can access your site with that url – no other server is required.

Anyone will be able to download your files, seeding them for other users to access. Your site will always be accessible so long as someone is running Beaker Browser (or a bare metal dat node) and seeding your files.

Anyone will be able to clone your site or edit your files – but can’t change the original.

Underneath the share button is your dat’s shorthand url. Clicking it takes you to the live site!

Beaker Browser is great for quickly creating, editing, and viewing sites. And with dat, anyone can access sites & store them offline, without central servers. But what about people who don’t use Beaker or dat? Can they access your site? Yes; in fact, you can host your site over `https://` from the exact same directory as `dat://`!

### Mirror your site with Hashbase
The most straightforward way to re-host is through hashbase.io, a community site catering towards the dat community. Hashbase will seed your raw dat, re-host it as a second backup dat, and mirror the site from `dat://` to `https://`.  

1. First, make an account on Hashbase.  
Confirm your account through Hashbase’s email before proceeding.  

2. Click “+Upload Archive” in the top right.  

3. Copy the 64-character dat url into the “URL” text field.  

4. Give your site a name – we recommend the same as you named it in Beaker. 

That’s it, you’re live! Your site is now accessible via three urls, hosted on two servers, and identical across all of them.  

### Mirror your site with Github Pages 
Another quick and dirty backup is GitHub Pages. There, you can give your site a canonical name that will allow anyone – in `dat://` or `https://` – to access it with a memorable name, instead of a 64-character dat url.

1. First, create an account on github.  
Confirm your account via Github’s email before proceeding to Github's home page.  
Create a new repository to store your site by hitting the `[+]` button in the top right. If you’re already versioning your site with git, pick “Import repository”; if not, click “New repository”.

2. Configure your repository's settings.  
Name your repository “[username].github.io’. Replace [username] with your GitHub username. For compatibility with GitHub Pages, the repo must follow this naming convention.  
Leave the visibility to Public and do not initialize the site with a README.

3. Back it Up
Click “Create Repository". You’ll be redirected to instructions for syncing the GitHub online repo to your local machine. Here's our summary: 

4. Create a local repository.  
In a terminal (cmd or git bash), navigate to the directory you’d like to hold your site folder.  
In the terminal, type and enter `git init`.  
In Beaker, go to your dat’s Settings and click “Set local folder.” Select the folder git initialized in the previous step.  
Once Beaker syncs your site to the folder, return to the terminal to type in the following commands: 

``` bash
    git add --all 
    # Tells git to track the state of all files.  
    git commit -m “First commit!”
    # This stores the current state of all the files you just started tracking.  
    git remote add origin https://github.com/<username>/<username>.github.io.git
    # Replace <username> with your username. 
    # This command adds a remote server named ‘origin’, 
    # pointing to the url you defined in Step 2 of mirroring. 
    git push
    # Your site is now backed up on a second hypertext server!
    # Check it out at https://<username>.github.io!
```

#### Congratulations!
You now have an extremely resilient online website. Your data is backed up on three servers, and accessible via both the centralized hypertext world wide web, and the decentralized dat meshnet.  

On the latter, your computer owns the master keys and write access, but anyone will be able to download and back up another copy of your site. At that point, while they can’t control your site, you can’t manage what they do with their copy. So don’t lose your computer or put any private info in the dat!  