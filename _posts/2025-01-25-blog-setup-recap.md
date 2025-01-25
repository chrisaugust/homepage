---
title: "Blog setup recap"
layout: post
---

Turns out, setting up Jekyll was easy! What was tricky was knowing what to ignore from the old setup. There was a CNAME record that I wasn't sure how to deal with... And for some reason, configuration changes I had made to the Jekyll project in an attempt to run it on Heroku were interfering with proper display of styling, as well producing 404 codes when clicking the links to individual posts. Broken left and right :(

When I find myself in a situation like this, the best way forward is often to start over with a clean slate. 

Deleted my local and remote repos, and installed a new Jekyll project. Made the necessary changes to `_config.yaml`, rewrote my first post, and linked the new local repo to a new repo on GitHub. After configuring GitHub Pages to use Jekyll, and pointing it to my domain name, it created the necessary CNAME file. And the weird styling issue (or rather lack of styling) that was occurring earlier is fixed. Cool cool cool.  

Oh, I also made a fun logo to use for the homepage, using a toy JavaScript app (doodlepad) I wrote a couple years back. Now I just need to figure out how to get the image to show up in the template for the main page...

![Luminous Emptiness](/images/mu.png)
