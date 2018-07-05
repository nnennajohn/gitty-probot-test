---
tags:
  - probot
title: "Writing Some Tests"
tocTitle: "Writing Some Tests"
description: "Testing the testing the testing!"
---

# Test!

Ok. Here we go. I know some of us have a love hate relationship with tests. :) I take an incremental approach to tests, writing a bit at a time as I develop, while keeping them as simple as possible, enough to properly cover the core functionality of the app or function under test.

## Setup up our Test Context.

When we bootstrapped with the Create Robot app, it alread setup a very simplistic test suite for us. And already had jest setup for us(Very Nice). But what it had would not be enough to get the proper context of our Bot. The Probot site to the rescue! The guide and sample code provided was spot on.

```javascript
// Requiring probot allows us to initialize an application
const { Application } = require('probot');
// Requiring our app implementation
const plugin = require('');
// Create a fixtures folder in your test folder
// Then put any larger testing payloads in there
const payload = require('./fixtures/payload');

describe('your-app', () => {
  let app;
  let github;

  beforeEach(() => {
    // Here we create an `Application` instance
    app = new Application();
    // Here we initialize the app
    app.load(plugin);
    // This is an easy way to mock out the GitHub API
    github = {
      issues: {
        createComment: jest.fn().mockReturnValue(
          Promise.resolve({
            // Whatever the GitHub API should return
          }),
        ),
      },
    };
    // Passes the mocked out GitHub API into out app instance
    app.auth = () => Promise.resolve(github);
  });

  describe('your functionality', () => {
    it('performs an action', async () => {
      // Simulates delivery of a payload
      // event is the X-GitHub-Event header sent by GitHub (for example "push")
      // payload is the webhook payload body
      await app.receive({ event: 'push', payload });
      // This test would pass if in your main code you called `context.github.issues.createComment`
      expect(github.issues.createComment).toHaveBeenCalled();
    });
  });
});
```

---

There's not much more to add to it. My setup was an exact replica, with the only modication being to add a couple more github mocks for some additonal funcs I used.

```javascript
// Mock out the GitHub API
github = {
  issues: {
    createComment: jest.fn(),
  },
  repos: {
    createFile: jest.fn().mockReturnValue(Promise.resolve(true)),
  },
  pullRequests: {
    getAll: jest.fn(),
  },
};
```

And here is an example of a test I had to check that it comments on PR failure. Notice the use of the fixture we setup earlier in the previous chapter:

```javascript
describe('Create Comment on Failure', () => {
  it('correctly creates comment on failure', async () => {
    await app.receive({
      event: 'status',
      payload: ciFailurePayload,
    });
    // Should immediately create comment on failure payload
    const createCommentCalls = github.issues.createComment.mock.calls;

    const expectedReturnRepo = 'gitty-probot-test';
    const expectedReturnOwner = 'nnennajohn';

    // Test that createComment func got called.
    expect(github.issues.createComment).toHaveBeenCalled();
    expect(createCommentCalls.length).toBe(1);

    // // Return Value of successfully creating comment
    const returnRepo = createCommentCalls[0][0].repo;
    const returnOwner = createCommentCalls[0][0].owner;
    expect(returnRepo.startsWith(expectedReturnRepo)).toBeTruthy();
    expect(returnOwner.startsWith(expectedReturnOwner)).toBeTruthy();
  });
});
```

And that's all there really is to it. You can def do more and test as much as possible, but in this case, I was mostly interested in testing the 3 events we were listening for. I also added a test to make sure it does not comment on anything outside the 3 events we are listeniing for.

And its a wrap! Almost!

<div>
  Next up. Let's deploy this Botty Botty Bot! <span>🎉<span>
</div>
