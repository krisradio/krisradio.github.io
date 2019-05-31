---
layout: post
title:  Survey of Three Static Site Generators 
date:   2019-05-20 10:00:00 -0800
---
The results are in. 
Installing *Ghost* resulted in `8,416 changed files with 608,083 additions and 0 deletions`. That was one `package-lock.json` and 8,415 files in `node_modules`. That's a much tidier, consolidated install than our other two options.

That is, however, in addition to installing `ghost-cli`. `ghost-cli` is installed globally. Here's the output from that install. npm only warned me about one deprecation (far less than for Metalsmith): 
    $ npm install -g ghost-cli@latest

        npm WARN deprecated cross-spawn-async@2.2.5: cross-spawn no longer requires a build toolchain, use it instead
        C:\Users\Sacred Icon\AppData\Roaming\npm\ghost -> C:\Users\Sacred
        Icon\AppData\Roaming\npm\node_modules\ghost-cli\bin\ghost
        + ghost-cli@1.10.1
        added 359 packages from 191 contributors in 115.609s

Installing *Jekyll* created `9,674 changed files with 1,251,621 additions and 0 deletions`. After the basic library, I also had to install `gulp-cli`, anogolous to ghost-cli above. That gave me another `1,090 changed files with 41,289 additions and 293 deletions.`

`npm install`, meaning we are just installing the jekyll library locally, listed several depracated packages and the distribution of 39 vulnerabilities between them. The final report:

    added 893 packages from 462 contributors and audited 10535 packages in 281.321s
    found 84 vulnerabilities (39 low, 28 moderate, 17 high)

( I did not record the console outut for installing `gulp-cli`. )

Installing *Metalsmith* resulted in `470 changed files with 62,866 additions and 0 deletions`, far less. However, Metalsmith had several more config files in the root directory: `package.json`, `package-lock.json`, `metalsmith.json`, and `build.js`. 

    [ghost install console output goes here]

In the end, we had a lot of bits moved around, the numbers on which I'd like to analyze by the metrics of size, reliability, & security. But there are three more important data points: *none of them worked out of the box*. 

I didn't give up as soon as I saw an instruction book, either. Granted, trying to install into a directory already plugged up with files is a losing gambit. I am not weighing out giving any three of these tools another shot. 

However, I did spend quite a bit of time troubleshooting. Meanwhile, this `.md` entry is going up on `dat://`, `2 changed files with 36 additions and 0 deletions`.