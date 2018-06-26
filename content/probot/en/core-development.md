---
tags:
  - probot
title: "Core Development"
tocTitle: "Core Development"
description: "Getting started by going through Probot Docs and Github Webhook API"
---

# Getting Started

The first thing I did, like I always do when starting something new, is to go through the docs. It's interesting discovering everyday how little you know of what you think you know.

## Probot Docs and Github Webhook API

The very first section of the [Probot Guide](https://probot.github.io/docs/hello-world/) led me to discover Github webhooks. I've never built an app for Github or had any reason until now to use them, though I have used several pre-existing apps. So I was quite fascinated at the amount of events and informations that webhooks make available. So many use-cases. But let's stay on track. :smile:

Since our current task is to built a bot that posts a comments when our CI tests fail, I tried to figure out what event our new bot should be subscribed to. It was not immediately apparent what event we should listen to. I settled on the [StatusEvent](https://developer.github.com/v3/activity/events/types/#statusevent) after going through a summary of its Event API Payload.

![Github Webhook StatusEvent](/images/probot-01-getting-started-github-webhook.png)

<div class="aside">
  NOTE: You can view the full list of all Github Webhook Events <a href="https://developer.github.com/webhooks/#events">here</a>.
</div>

## Narrowing down our event.

From the docs on Probot site, it's just a Node.js module that exports a function:

```js
module.exports = (robot) => {
  // your code here
};
```

And since the issue event is what we will be listening for, the handle example below straigh from the docs seems like it will be a solid place to start building out our bot.

<div class="aside">
  Example of an autoresponder app that comments on opened issues:
</div>

```js
module.exports = (robot) => {
  robot.on('issues.opened', async (context) => {
    // `context` extracts information from the event, which can be passed to
    // GitHub API calls. This will return:
    //   {owner: 'yourname', repo: 'yourrepo', number: 123, body: 'Hello World!}
    const params = context.issue({ body: 'Hello World!' });

    // Post a comment on the issue
    return context.github.issues.createComment(params);
  });
};
```

Ok. This is looking a little too easy, and I am very much tempted to stop reading here and fire up my editor. :smile: But I've since learned to **READ THE DOCS**. All too often, I run into problems that I might have easily surpassed, if I just had a little more patience and read through the docs.

## Go Read the Docs.

Ok. Since you are already here, you might as well go [read the docs](https://probot.github.io/docs/hello-world/) as well. It's just a few pages, and should probably take no more than an hour. And hopefully, in the next chapter, we get to the fun part - Building our bot.

<div>
  See you on the flip-side! <span>🎉<span>
</div>
