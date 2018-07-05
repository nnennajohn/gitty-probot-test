---
tags:
  - probot
title: "Conclusion"
tocTitle: "Conclusion"
description: "And its a wrap"
commit: 30939d5
---

# And it's a wrap!

This was super fun. A few hiccups initially, with figuring out how SMEE delivers webhooks to our local dev environment. But after that, it was all uphill from there. This whole process took two weekends, with the first weekend entirely dedicated to my previous mistake of deploying each time to see the webhook in Github, instead of using the SMEE channel.

## Takeaways!

I think the Probot team did an excellent job with the Documentation. Literally every step listed was on point and correct. I'd probably emphasis a bit more about the dev process of recieving webhooks on your local machine. Otherwise, there's really not much else to add.

This was a pleasurable experience. And I am now left thinking of all the cool bots I'd like to build. Well, when I'm not working.:)

As for our bot, I wanted to add a means for private repos to be able to use this, and started off by adding a config yml file, where they would need to input a read-only token from Circle-CI. The plan is to still go ahead and make a comment on a PR, but instead of a CI comment, it would be a reminder to update their gitty-probot.yml file with the correct token. But I figured, this might involve keeping count and doing this only once, as it might become annoying. But I imagine you would not install the bot if you don't want a comment. Either way, its something I'd explore next, as I work quite a bit with a few private repos, that all use Circle-CI.

As for improvements to the app is. Beyond supporting private repos, maybe add on Travis and any other popular CI.

---

Over all, I had a blast. And I remember calling a friend over when Gitty-Probot made its first comment. I was truly happy. Nothing more rewarding than when "IT" works. 🎉🎉🎉

## It's a Goal

There's a popular Nigerian song right now that describes my current feeling:

[ISSA GOAL](https://www.youtube.com/watch?v=D-zdHo4LJJI) -> Short for "It's a goal(WIN)"

<div>
  That's all for now! Keep hacking... <span>🎉<span>
</div>
