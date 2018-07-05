---
tags:
  - probot
title: "Testing Setup"
tocTitle: "Testing Setup"
description: "Let's setup our test and add some text fixtures"
---

# Getting some Test Fixtures

To get our tests up and running, we need to setup some test fixtures. All Test fixtures really means is a `fixed state` used as a baseline for running tests in Software testing.

In our particular use case, we need to consistently simulate a fixed return state for all the events our bot will be responding to.

Again, the Probot and Github team shines here. This was really a breeze. There are two ways to get these fixtures for our events. One is directly on Github via the Advanced tab in the Bot settings page. The other is directly on SMEE. I went with the Github route, only because I think after our app is deployed and we have our own server recieving the webhooks, this is probably the route we will stay with. The SMEE route had the advantage of listing out the event name, making it easier to find the specific fixture you want, as seen below.

### SMEE Recent Webhook Deliveries

![SMEE Recent Webhook Deliveries](/images/probot-04-smee-deliveries.png)

### Github Recent Webhook Deliveries

![Github Recent Webhook Deliveries](/images/probot-04-github-deliveries.png)

---

Both instances provided a button to redeliver the webhook event. And SMEE nicely provided a copy-to-clipboard button which would be very valuable is copying over a large payload.

### SMEE Recent Webhook Expanded

![SMEE Recent Webhook Deliveries](/images/probot-04-smee-deliveries-expanded.png)

### Github Recent Webhook Expanded

![Github Recent Webhook Deliveries](/images/probot-04-github-deliveries-expanded.png)

## Using our Test Fixtures.

Thas's really all we did for this section. As you can see, both provide a very easy way to get test fixtures for any event we'd like to test. I went ahead and triggered all three events I was interested in. `installation.created`, `status` with a failed state, and `status` with a success state. Downloaded all three to json files in the test/fixtures folder and gave them appropriate names to match the payload, so its easy to recognize what's doing what.

In the next section, we will use these fixtures to simulate and write some tests.

<div>
  Excited yet? Let's do this! <span>🎉<span>
</div>
