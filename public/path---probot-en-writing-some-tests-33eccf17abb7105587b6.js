webpackJsonp([0xe9202d47b528],{659:function(e,t){e.exports={data:{currentPage:{html:"<h1>Test!</h1>\n<p>Ok. Here we go. I know some of us have a love hate relationship with tests. :) I take an incremental approach to tests, writing a bit at a time as I develop, while keeping them as simple as possible, enough to properly cover the core functionality of the app or function under test.</p>\n<h2>Setup up our Test Context.</h2>\n<p>When we bootstrapped with the Create Robot app, it alread setup a very simplistic test suite for us. And already had jest setup for us(Very Nice). But what it had would not be enough to get the proper context of our Bot. The Probot site to the rescue! The guide and sample code provided was spot on.</p>\n<pre><code class=\"language-javascript\">// Requiring probot allows us to initialize an application\nconst { Application } = require('probot');\n// Requiring our app implementation\nconst plugin = require('');\n// Create a fixtures folder in your test folder\n// Then put any larger testing payloads in there\nconst payload = require('./fixtures/payload');\n\ndescribe('your-app', () => {\n  let app;\n  let github;\n\n  beforeEach(() => {\n    // Here we create an `Application` instance\n    app = new Application();\n    // Here we initialize the app\n    app.load(plugin);\n    // This is an easy way to mock out the GitHub API\n    github = {\n      issues: {\n        createComment: jest.fn().mockReturnValue(\n          Promise.resolve({\n            // Whatever the GitHub API should return\n          }),\n        ),\n      },\n    };\n    // Passes the mocked out GitHub API into out app instance\n    app.auth = () => Promise.resolve(github);\n  });\n\n  describe('your functionality', () => {\n    it('performs an action', async () => {\n      // Simulates delivery of a payload\n      // event is the X-GitHub-Event header sent by GitHub (for example \"push\")\n      // payload is the webhook payload body\n      await app.receive({ event: 'push', payload });\n      // This test would pass if in your main code you called `context.github.issues.createComment`\n      expect(github.issues.createComment).toHaveBeenCalled();\n    });\n  });\n});\n</code></pre>\n<hr>\n<p>There's not much more to add to it. My setup was an exact replica, with the only modication being to add a couple more github mocks for some additonal funcs I used.</p>\n<pre><code class=\"language-javascript\">// Mock out the GitHub API\ngithub = {\n  issues: {\n    createComment: jest.fn(),\n  },\n  repos: {\n    createFile: jest.fn().mockReturnValue(Promise.resolve(true)),\n  },\n  pullRequests: {\n    getAll: jest.fn(),\n  },\n};\n</code></pre>\n<p>And here is an example of a test I had to check that it comments on PR failure. Notice the use of the fixture we setup earlier in the previous chapter:</p>\n<pre><code class=\"language-javascript\">describe('Create Comment on Failure', () => {\n  it('correctly creates comment on failure', async () => {\n    await app.receive({\n      event: 'status',\n      payload: ciFailurePayload,\n    });\n    // Should immediately create comment on failure payload\n    const createCommentCalls = github.issues.createComment.mock.calls;\n\n    const expectedReturnRepo = 'gitty-probot-test';\n    const expectedReturnOwner = 'nnennajohn';\n\n    // Test that createComment func got called.\n    expect(github.issues.createComment).toHaveBeenCalled();\n    expect(createCommentCalls.length).toBe(1);\n\n    // // Return Value of successfully creating comment\n    const returnRepo = createCommentCalls[0][0].repo;\n    const returnOwner = createCommentCalls[0][0].owner;\n    expect(returnRepo.startsWith(expectedReturnRepo)).toBeTruthy();\n    expect(returnOwner.startsWith(expectedReturnOwner)).toBeTruthy();\n  });\n});\n</code></pre>\n<p>And that's all there really is to it. You can def do more and test as much as possible, but in this case, I was mostly interested in testing the 3 events we were listening for. I also added a test to make sure it does not comment on anything outside the 3 events we are listeniing for.</p>\n<p>And its a wrap! Almost!</p>\n<div>\n  Next up. Let's deploy this Botty Botty Bot! <span>🎉<span>\n</div>",frontmatter:{title:"Writing Some Tests",description:"Testing the testing the testing!",commit:null},fields:{slug:"/probot/en/writing-some-tests/",chapter:"writing-some-tests",framework:"probot",language:"en"}},site:{siteMetadata:{title:"Probot Gitty Test",toc:["getting-started","create-probot-app","core-development","test-fixture-setup","writing-some-tests","deployment","conclusion"],languages:["en"],githubUrl:"https://github.com/nnennajohn/gitty-probot-test",codeGithubUrl:"https://github.com/nnennajohn/gitty-probot",siteUrl:"https://weekendprojects.io/"}},pages:{edges:[{node:{frontmatter:{tocTitle:"Create Robot App",title:"Create Robot App",description:"Bootstrapping our App With Create Probot App"},fields:{slug:"/probot/en/create-probot-app/",chapter:"create-probot-app"}}},{node:{frontmatter:{tocTitle:"Conclusion",title:"Conclusion",description:"And its a wrap"},fields:{slug:"/probot/en/conclusion/",chapter:"conclusion"}}},{node:{frontmatter:{tocTitle:"Core Development",title:"Core Development",description:"Let's really get this party started!"},fields:{slug:"/probot/en/core-development/",chapter:"core-development"}}},{node:{frontmatter:{tocTitle:"Testing Setup",title:"Testing Setup",description:"Let's setup our test and add some text fixtures"},fields:{slug:"/probot/en/test-fixture-setup/",chapter:"test-fixture-setup"}}},{node:{frontmatter:{tocTitle:"Deployment",title:"Deployment",description:"Hello from the other side!"},fields:{slug:"/probot/en/deployment/",chapter:"deployment"}}},{node:{frontmatter:{tocTitle:"Getting started",title:"Getting started",description:"Getting started by going through Probot Docs and Github Webhook API"},fields:{slug:"/probot/en/getting-started/",chapter:"getting-started"}}},{node:{frontmatter:{tocTitle:"Writing Some Tests",title:"Writing Some Tests",description:"Testing the testing the testing!"},fields:{slug:"/probot/en/writing-some-tests/",chapter:"writing-some-tests"}}}]}},pathContext:{slug:"/probot/en/writing-some-tests/",framework:"probot",language:"en",chapter:"writing-some-tests"}}}});
//# sourceMappingURL=path---probot-en-writing-some-tests-33eccf17abb7105587b6.js.map