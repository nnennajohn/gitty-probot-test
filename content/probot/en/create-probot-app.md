---
tags:
  - probot
title: "Create Robot App"
tocTitle: "Create Robot App"
description: "Bootstrapping our App With Create Probot App"
---

# Shall We Begin?

Ok. So the quick reading from the last chapter took me much longer than I expected. I did not follow my own advice, and ended up firing up my code editor in the middle of still reading up. However, it was not too long before I had several questions, and went right back to the docs.

## Boostrapping

The process of bootstrapping a new app was pretty painless. I followed the exact steps listed on the website.

```shell
Let's create a Probot app!
? App name: my-first-app
? Description of app: A "Hello World" GitHub App built with Probot
? Author's full name: Katie Horne
? Author's email address: katie@auth0.com
? Homepage:
? GitHub user or org name: khorne3
? Repository name: my-first-app
created file: my-first-app/.env.example
created file: my-first-app/.gitignore
created file: my-first-app/.travis.yml
created file: my-first-app/LICENSE
created file: my-first-app/README.md
created file: my-first-app/app.json
created file: my-first-app/index.js
created file: my-first-app/package-lock.json
created file: my-first-app/package.json
created file: my-first-app/docs/deploy.md
Finished scaffolding files!

Installing Node dependencies!

Done! Enjoy building your Probot app!
```

Once this was done. I did a quick tour to familiarize myself with the files created. I noted that it already had jest setup. Nice. Also noted that it had linting setup, which was also nice.
However, I did go ahead and install eslint, as the built-in lint was not giving me any feedback during development. While it did show all lint errors, when you run lint, I am kind of used to getting more realtime feedback during development. I did remove the eslint installation after I was done coding and ready to push up my commit, as it was more a personal preference, and not sure it would be valuable to anyone else that might want to clone the repo.

---

I went on to the site and followed the rest of the instructions on creating a Github app, and setting up a Channel with SMEE.

<https://probot.github.io/docs/development/>

Now, this is where things went wrong for me. While I followed every step listed, and got the webhook running on my local machine, it was not until much... much... much... later, that I realized having the channel open, means your bot is techically live, and that any changes you make locally will be reflected on any repo that has your bot installed.

---

Not sure if it was just an oversight on my part, but missing that key information almost made me give up. Almost. :) But we don't quit.

I went on a merry-go-round of pushing up my changes, deploying it. Then checking if my bot did what it was supposed to do.

The above piece of information should probably be spelt out more clearly on the Probot docs. I literally pushed and deployed 20 or more times, before I thought, really, there has to be somethig I am missing.

<div class="aside">
  Once I figured out you can develop locally and get realtime access to webhooks, it became an uphill win.😄
</div>

![SMEE Open Challenge](/images/probot-02-smee-open-channel.png)

## Progress. 💪

Ok. I'm not even going to fake it. Again, just the above took me a good weekend. I kept making changes locally, deploying, and checking. 😰 And since I still have to work, I had to postpone the next parts to the following weekend. Sadly, our few hours weekend project is going to take a little bit longer.

But but but, there's goodnews. It truly became a really fun experience after this particular hurdle.

Let's press on and get this bot rolling. In the next part, we verbally code our app, and decide all the bits we need. And get to implementing it.

<div>
  See you on the flip-side! <span>🎉<span>
</div>
