---
tags:
  - probot
title: "Core Development"
tocTitle: "Core Development"
description: "Let's really get this party started!"
---

# The Game Plan

At this point, we have everything we need to get this app working. Below is a sample screenshot of smee reporting and pushing all webhook actions directly to our local machine. Pure Joy.

![SMEE Live updates](/images/probot-03-smee-live-updates.png)

Any event we listen for on our local machine will show up here.

To get a good vision of what we want our bot to do, let's list it out:

## Gitty-Probot Guideline

- [x] Our Bot should post a comment when our CI, in this case Circle-CI has passed or failed our test.
- [x] Our Bot should not respond to any other status. Including `pending`, `open`, etc.
- [x] Our Bot should not respond to any other event, except `status` and `installation.created` event.
- [x] Our Bot shall not crash! 😊
- [x] Our Bot has to be a happy bot. Test Failure or Success, we stay happy.
- [x] During development, our Bot code should be written in plain easy-to-understand language, so we can encourage anyone to build upon it and contribute. No cryptic code!
- [x] Our Bot should have succinct descriptive tests that cover the scenarios listed above.
- [x] And lastly, empathy. No profane language will be coming from our Bot. 😊

## Starting Simple

To get things rolling, I started with a very basic version of our app. I decided to test the app functionality by responding to a single event. In this case, the `installation.created` event.

```javascript
app.on('installation.created', async (context) => {
  app.log('App has been successfully installed. Yay!.');
  const [owner, repo] = await context.payload.repositories[0].full_name.split(
    '/',
  );
  app.log(`repo: ${owner}/${repo}`);
  createConfigYML(context, { owner, repo });
});
```

In the above, we are simply listening for the `installation.created` event and logging a happy message to the console. I add the createConfigYML later to attempt to handle private repos down the line.

Once I had the above line in, I went ahead and installed the app on a test repo, and lo and behold, I got feedback in my console that with the logs expected. Magic!🎉

We are officially in business.

Everything else I did followed this format. Write a simple listener, verify that it works. Then extend it. Each time, building upon what already works. This has the benefit of helping me maintain as much simplicity and readability as possible.

Once I had the above working, before doing anything else, I wrote some tests.

<div class="aside">
  NOTE: We cover test setup in the next section. But to get a headsup, you can view the docs here: <a href="https://probot.github.io/docs/testing/">Probot Testing Guide</a>.
</div>

## Building Out

The rest of the process from here on out was pretty smooth. There was a bit of challenge finding out all that's available in the context passed to the bot. I also ran into some challenge trying to figure out how to get the Cicle-ci logs.

But I just continued down the path of creating small increments and testing along the way. The entirety of the app can be seen below, with the core being just three listeners, and delegating most of the work done to smaller utility functions.

![Core Dev](/images/probot-03-core-dev.png)

## Summary of Dev Logic

Below is a summary/outline of the micro steps I took:

- On app load, log a success message
- On app Install, log another success message and create a configYML file for Circle-CI Token on private repos
- On app event `status`, we do the following:
  - Is this coming from an event triggered by CircleCI? If no, do nothing
  - If it is, we construct an object with all the info we will need, so we can pass the object around to somewhat pure functions.
  - Once we have our object, all our checks moving on will be against this object. This way, we also save having to query the context each time.
  - We check if the `event.status` state is a `success`. If yes, we pass the `context`and `gittyData` object to a `processSuccessMessage` function.
  - The `processSuccessMessage` function simply takes what data it needs from the `gittyData` object, constructs a comment, and posts it with the `createComment` method available on the `context.github.issues`
  - If the `event.status` state is a `failure`, we do the same exact steps above, with only one small modification. We introduce a new utitility async `processCircleCI` func, that handles making the XHR request to CircleCI, to get the build logs.
  - Once we have the build log from CircleCI, the message format is similar, except we add the `ciMessage` we got back from the `processCircleCI` func above. And of course, we swap out some verbiage and emojis. 😅
  - And really, that's all there is to it.

## Does it really work?

Ha ha. Of course it does. But we will verify a lot of this in the next section on tests.

Feel free to push some tests to Circle and verify that this all does what it should do.

<div>
  See you on the test-flip-side in the next section! <span>🎉<span>
</div>
