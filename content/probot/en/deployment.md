---
tags:
  - probot
title: "Deployment"
tocTitle: "Deployment"
description: "Hello from the other side!"
---

# Ship it!

What greater joy that to push your hardwork out to the world. 😍😍😍

## Zeit Now, Heroku or Glitch

Probot guide again shines here. This was a breeze and the guide provided was spot on! So I won't bore you. Just read and follow along with the guide on the [Probot Site](https://probot.github.io/docs/deployment/).

I initially tried Glitch, mostly because I was not quite familiar with it. It was a seamless experience and my app was up and live in a few minutes. However, maybe I was missing something, but if I made any change to my local copy, I could not figure out how to make the change to through to Glitch short of copying it over. So I quickly ditched this route. And went with now, mostly because I use it currently. But Glitch was still a very nice new discovery for me.

## And we are LIVE!

The deployment with Zeit was pretty straightforward. And we can say out Bot found a good home. Remember to update the Webhook URL both on your local env file and in the Github App Settings Page.

I found that using the env setting in now.json, it was not properly reading the .data.private-key file. So I just created a snippet in a DEPLOY.md file, that I added to gitignore. Then run now, with the snippets that has all the ENV variables specified in the Probot guide.

```bash
now -e APP_ID=XXXXX \
-e WEBHOOK_SECRET=development \
-e NODE_ENV=production \
-e PRIVATE_KEY_BASE64="$(cat ./.data/private-key.pem | base64)" \
-e LOG_LEVEL=trace
```

After which I addded an alias like so:

`now alias set https://gitty-probot-hsmuipeqzu.now.sh https://gitty-probot.now.sh`

And then now scale to keep our bot up and running

`now scale https://gitty-probot.now.sh 1`

To ever remove a deployment if you run into an error saying you have too many instances up, run:

`now rm https://gitty-probot-eitbbbhqts.now.sh`

And again, remember to update Github app settings. Since I am using an alias, I only have to do this once.

![Gitty Bot Live on Zeit NOW](/images/probot-05-now-deployment-live.png)

And that's all. How cool! Our very First Bot 🎉🎉🎉. Hopefully, one of many more.

<div>
  Shall we say this was a success? Ok. Let's wrap this up! <span>🎉<span>
</div>
