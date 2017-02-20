# trello-to-slack-hooks
Simple service to send slack message via integrated webhook on certain trello condition

### Initial Installation

Current service is built using Node.js Express.

Install the dependencies and devDependencies and start the server.

```sh
$ cd {project-folder}
$ npm install
$ npm start
```

### Trello Configuration

Before deploying this service - please follow these instructions to properly configure service:

1. Open config.js file
2. Go to https://trello.com/app-key - and copy application key into "TRELLO_API_KEY" field in config.js
3. Replace YOUR_API_KEY to proper value in following url and go to that url: https://trello.com/1/connect?key=[YOUR_API_KEY]&name=MyApp&response_type=token&expiration=never&scope=read
4. In the window appeared, please click 'allow'.
5. Copy the received token from browser page and add it into "TRELLO_USER_TOKEN" field in config.js
5. Replace 'api.url' section in config.js with corresponding domain name where the service will be hosted
6. Run the service
7. Go to service root path. There you will find a list of available boards with corresponding id's.
8. Copy board id's you need into 'boards' section of config.js file

### Slack configuration

1. Open https://api.slack.com/incoming-webhooks
2. Find and click "Start by setting up an incoming webhook integration in your Slack team to try these features out"
3. For each channel you need please create new webhook.
4. Copy webhook url into proper place in config.js file - 'filter section'


The service is ready, up and running.
