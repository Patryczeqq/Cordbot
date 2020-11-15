<h1 align="center">
  Cordbot
  <br>
</h1>

<h3 align=center>A discord bot built with <a href=https://github.com/discordjs/discord.js>discord.js</a></h3>


<div align=center>

  <a href="https://discord.gg/CcUEu5G">
    <img src="https://discordapp.com/api/guilds/659793266786566145/widget.png?style=shield" alt="shield.png">
  </a>

  <a href="https://github.com/discordjs">
    <img src="https://img.shields.io/badge/discord.js-v12.3.1-blue.svg?logo=npm" alt="shield.png">
  </a>

  <a href="https://github.com/sabattle/CalypsoBot/blob/develop/LICENSE">
    <img src="https://img.shields.io/badge/license-GNU%20GPL%20v3-green" alt="shield.png">
  </a>

</div>

<p align="center">
  <a href="#about">About</a>
  •
  <a href="#features">Features</a>
  •
  <a href="#installation">Installation</a>
  •
  <a href="#setting-up">Setting Up</a>
  •
  <a href="#license">License</a>
</p>

## About

Cordbot is a simple and open source Discord bot. It comes packaged with a variety of commands and settings that can be tailored to your server's specific needs. It's codebase also serves as a base framework to easily create Discord bots of all kinds. You can join my server, [Indead Server](https://discord.gg/CcUEu5G) for all questions, suggestions, and assistance!

If you liked this repository, feel free to leave a star ⭐

## Features

  * **Moderation:** Commands such as `kick`, `ban`, and `mute` to assist your moderator staff
  * **Fun & Games:** Tons of fun commands like `inspire`, `slap`, `hug` , `kiss` and more
  * **Information:** Commands like `userinfo` and `serverinfo` for general utility

Cordbot also comes packed with afew extra features, such as:

  * **Auto role** assignment
  * **Welcome messages** and **farewell messages**
  * **Logging** for mod commands and various events


## Installation
Here's how to install the bot and host it

First, you'll have to clone this repo:
```
git clone https://github.com/Sushipie/Cordbot.git
```
After cloning, run:
```
npm install
```
to snag all of the dependencies. Of course, you need [node](https://nodejs.org/en/) installed. I also strongly recommend [nodemon](https://www.npmjs.com/package/nodemon) as it makes testing *much* easier.

## Setting Up

You have to create a `config.json` file in order to run the bot (you can use the example file provided as a base). Your file should look something like this:
```
{
  "token": "your_token_here",
  "tenorKey": "your_tenor_API_key_here",
}
```
Visit the Discord [developer portal](https://discordapp.com/developers/applications/) to create an app and use the client token you are given for the `token` option. To get an API key for Tenor, vist:

  
  * [Tenor API](https://tenor.com/gifapi/)

After your `config.json` file is built, you are pretty much done. Feel free to launch Cordbot using the command `node app.js` or `nodemon app.js`. If on Linux, you can also kick off using the `start.sh` script. If you need additional help setting up, join my server [Indead Server](https://discord.gg/CcUEu5G)!

## License

Released under the [GNU GPL v3](https://www.gnu.org/licenses/gpl-3.0.en.html) license.