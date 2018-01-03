---
date: 2018-01-04T00:00:00+00:00
title: Telegram
author: lizheming
tags: [ notifications, chat ]
repo: lizheming/drone-telegram-node
logo: logo.svg
image: lizheming/drone-telegram-node
---

The Telegram plugin posts build status messages to your account. The below pipeline configuration demonstrates simple usage:

```yaml
pipeline:
  telegram:
    image: lizheming/drone-telegram-node
    token: xxxxxxxxxx
    to: telegram_user_id
```

Example configuration for success and failure messages:

```diff
pipeline:
  telegram:
    image: lizheming/drone-telegram-node
    token: xxxxxxxxxx
    to: telegram_user_id
+   when:
+     status: [ success, failure ]
```

Example configuration with a custom message template:

```diff
pipeline:
  telegram:
    image: lizheming/drone-telegram-node
    token: xxxxxxxxxx
    to: telegram_user_id
+   message: >
+     {% if success %}
+       build {{build.number}} succeeded. Good job.
+     {% else %}
+       build {{build.number}} failed. Fix me please.
+     {% endif %}
```

# Parameter Reference

token
: telegram token from [telegram developer center](https://core.telegram.org/bots/api)

to
: telegram user id (can be requested from the @userinfobot inside Telegram)

message
: overwrite the default message template


# Template Reference

repo.owner
: repository owner

repo.name
: repository name

commit.sha
: git sha for current commit

commit.branch
: git branch for current commit

commit.link
: git commit link in remote

commit.author
: git author for current commit

commit.email
: git author email for current commit

commit.message
: git current commit message

build.status
: build status type enumeration, either `success` or `failure`

build.event
: build event type enumeration, one of `push`, `pull_request`, `tag`, `deployment`

build.number
: build number

build.tag
: git tag for current commit

build.link
: link the the build results in drone

build.started
: unix timestamp for build started

build.finished
: unix timestamp for build finished

# Template Filter

uppercasefirst
: converts the first letter of a string to uppercase

datetime
: converts a unix timestamp to a date time string. Example `{{datetime build.started}}`, you can see more info in [nunjucks-date-filter](https://www.npmjs.com/package/nunjucks-date-filter)

More filter can see [builtin-filters](https://mozilla.github.io/nunjucks/templating.html#builtin-filters)