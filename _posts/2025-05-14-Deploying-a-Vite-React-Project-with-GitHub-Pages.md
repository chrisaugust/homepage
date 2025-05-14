---
layout: post
title: "Deploying a Vite/React App to GitHub Pages"
---
This site, a Jekyll blog, is on GitHub pages, and the deployment process
was straightforward. So it was a bit surprising when I ran into roadblocks attempting to deploy my friend's Vite/React site to the web using GitHub Pages. In order to keep a record of what worked, and share it with anyone who stumbles across this blog post, I've decided to document the process that finally worked.

# 1. Modify the `base` property in `vite.config.js`, as well as the `homepage` property in `package.json`, to reference the desired web address.

// vite.config.js
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/<my-cool-site>",
  plugins: [react(),]
}}

```

// package.json
```javascript
{
    "name": "my-cool-site",
    "homepage": "https://<my-github-username>.github.io/<my-cool-site>"
    ...
    
```

# 2. Install the `gh-pages` package.

```
npm install gh-pages
```

# 3. Add `predeploy` and `deploy` scripts to `package.json`.

```javascript
    "scripts": }
      ...
      "predeploy": "npm run build",
      "deploy": "gh-pages -d dist"
    },
```

# 4. Commit the changes and push to remote repo on GitHub.

```
git add .
git commit -m "Configure for gh-pages deployment"
git push
```
# 5. Run the `deploy` script

```
npm run deploy
```

This builds the static version of the app in the `dist` directory, creates a new gh-pages branch on GitHub containing the static files, and deploys them to the specified address (`homepage` and `base` from step 1).

On the GitHub page for the repository, navigate to Settings (top nav bar), then Pages (side nav bar), and if all has gone well you'll see the message "Your site is live at <address-you-specified>", and you can click the link to see the deployed site.

# Final note: troubleshooting broken image links

When my deployment finally succeeded (partly), none of the site's images were displayed. Thankfully the fix was simple: remove the preceding '/' for the src attribute of the img tags. E.g. `<img src='/images/heroImg.png' ... />` ----> `<img src='images/heroImg.png' ... />`.





