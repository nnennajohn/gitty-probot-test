webpackJsonp([33760466627649],{657:function(t,e){t.exports={data:{currentPage:{html:'<h1>Getting Started</h1>\n<p>The first thing I did, like I always do when starting something new, is to go through the docs. It\'s interesting discovering everyday how little you know of what you think you know.</p>\n<h2>Probot Docs and Github Webhook API</h2>\n<p>The very first section of the <a href="https://probot.github.io/docs/hello-world/">Probot Guide</a> led me to discover Github webhooks. I\'ve never built an app for Github or had any reason until now to use them, though I have used several pre-existing apps. So I was quite fascinated at the amount of events and informations that webhooks make available. So many use-cases. But let\'s stay on track. :smile:</p>\n<p>Since our current task is to built a bot that posts a comments when our CI tests fail, I tried to figure out what event our new bot should be subscribed to. It was not immediately apparent what event we should listen to. I settled on the <a href="https://developer.github.com/v3/activity/events/types/#statusevent">StatusEvent</a> after going through a summary of its Event API Payload.</p>\n<p><img src="/images/probot-01-getting-started-github-webhook.png" alt="Github Webhook StatusEvent"></p>\n<div class="aside">\n  NOTE: You can view the full list of all Github Webhook Events <a href="https://developer.github.com/webhooks/#events">here</a>.\n</div>\n<h2>Narrowing down our event.</h2>\n<p>From the docs on Probot site, it\'s just a Node.js module that exports a function:</p>\n<pre><code class="language-js">module.exports = (robot) => {\n  // your code here\n};\n</code></pre>\n<p>And since the issue event is what we will be listening for, the handle example below straigh from the docs seems like it will be a solid place to start building out our bot.</p>\n<div class="aside">\n  Example of an autoresponder app that comments on opened issues:\n</div>\n<pre><code class="language-js">module.exports = (robot) => {\n  robot.on(\'issues.opened\', async (context) => {\n    // `context` extracts information from the event, which can be passed to\n    // GitHub API calls. This will return:\n    //   {owner: \'yourname\', repo: \'yourrepo\', number: 123, body: \'Hello World!}\n    const params = context.issue({ body: \'Hello World!\' });\n\n    // Post a comment on the issue\n    return context.github.issues.createComment(params);\n  });\n};\n</code></pre>\n<p>Ok. This is looking a little too easy, and I am very much tempted to stop reading here and fire up my editor. :smile: But I\'ve since learned to <strong>READ THE DOCS</strong>. All too often, I run into problems that I might have easily surpassed, if I just had a little more patience and read through the docs.</p>\n<h2>Go Read the Docs.</h2>\n<p>Ok. Since you are already here, you might as well go <a href="https://probot.github.io/docs/hello-world/">read the docs</a> as well. It\'s just a few pages, and should probably take no more than an hour. And hopefully, in the next chapter, we get to the fun part - Building our bot.</p>\n<div>\n  See you on the flip-side! <span>🎉<span>\n</div>',frontmatter:{title:"Getting started",description:"Getting started by going through Probot Docs and Github Webhook API",commit:"30939d5"},fields:{slug:"/probot/en/getting-started/",chapter:"getting-started",framework:"probot",language:"en"}},site:{siteMetadata:{title:"Probot Gitty Test",toc:["getting-started","create-probot-app","test-fixture-setup","core-development","writing-some-tests","deployment","conclusion"],languages:["en"],githubUrl:"https://github.com/nnennajohn/gitty-probot-test",codeGithubUrl:"https://github.com/nnennajohn/gitty-probot",siteUrl:"https://weekendprojects.io/"}},pages:{edges:[{node:{frontmatter:{tocTitle:"Core Development",title:"Core Development",description:"Getting started by going through Probot Docs and Github Webhook API"},fields:{slug:"/probot/en/core-development/",chapter:"core-development"}}},{node:{frontmatter:{tocTitle:"Create Robot App",title:"Create Robot App",description:"Getting started by going through Probot Docs and Github Webhook API"},fields:{slug:"/probot/en/create-probot-app/",chapter:"create-probot-app"}}},{node:{frontmatter:{tocTitle:"Conclusion",title:"Conclusion",description:"Getting started by going through Probot Docs and Github Webhook API"},fields:{slug:"/probot/en/conclusion/",chapter:"conclusion"}}},{node:{frontmatter:{tocTitle:"Getting started",title:"Getting started",description:"Getting started by going through Probot Docs and Github Webhook API"},fields:{slug:"/probot/en/getting-started/",chapter:"getting-started"}}},{node:{frontmatter:{tocTitle:"Deployment",title:"Deployment",description:"Getting started by going through Probot Docs and Github Webhook API"},fields:{slug:"/probot/en/deployment/",chapter:"deployment"}}},{node:{frontmatter:{tocTitle:"Testing",title:"Testing",description:"Getting started by going through Probot Docs and Github Webhook API"},fields:{slug:"/probot/en/test-fixture-setup/",chapter:"test-fixture-setup"}}},{node:{frontmatter:{tocTitle:"Writing Some Tests",title:"Writing Some Tests",description:"Getting started by going through Probot Docs and Github Webhook API"},fields:{slug:"/probot/en/writing-some-tests/",chapter:"writing-some-tests"}}}]}},pathContext:{slug:"/probot/en/getting-started/",framework:"probot",language:"en",chapter:"getting-started"}}}});
//# sourceMappingURL=path---probot-en-getting-started-851defd9cfc8014c3e74.js.map