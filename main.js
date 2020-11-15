// require the discord.js module
const fs = require("fs");
const Discord = require("discord.js");
const request = require("request");
const { prefix, token, tenorKey } = require("./config.json");
const Tenor = require("tenorjs").client({
  Key: tenorKey, // https://tenor.com/developer/keyregistration
  Filter: "off", // "off", "low", "medium", "high", not case sensitive
  Locale: "en_US", // Your locale here, case-sensitivity depends on input
  MediaFilter: "minimal", // either minimal or basic, not case sensitive
  DateFormat: "D/MM/YYYY - H:mm:ss A", // Change this accordingly
});

// Create a new Discord client
const client = new Discord.Client();

// Create a new Tenor client
tenor = Tenor;

//Create a new collection
client.commands = new Discord.Collection();

//File Handler
const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  // set a new item in the Collection
  // with the key as the command name and the value as the exported module
  client.commands.set(command.name, command);
}

//Bot Ready
client.on("ready", () => {
  console.log("Ready!");

  const statuses = ["with forks", "with knives", "with fluff", "with soap"];
  setInterval(() => {
    const response = statuses[Math.floor(Math.random() * statuses.length)];
    client.user.setActivity(response, { type: "PLAYING" });
  }, 5000);
});

//Command Handler
client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(" ");
  const commandName = args.shift().toLowerCase();

  if (!client.commands.has(commandName)) return;
  const command = client.commands.get(commandName);

  if (command.guildOnly && message.channel.type !== "text") {
    return message.reply("I can't execute that command inside DMs!");
  }

  if (command.args && !args.length) {
    let reply = `You didn't provide any arguments, ${message.author}!`;

    if (command.usage) {
      reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
    }

    return message.channel.send(reply);
  }

  try {
    command.execute(message, args);
  } catch (error) {
    console.error(error);
    message.reply("there was an error trying to execute that command!");
  }
});

//Delete invite links
client.on("message", (message) => {
  //whenever a message is sent
  if (
    message.content.includes(
      "discord.gg/" || "discordapp.com/invite/" || "discord.com/invite/"
    )
  ) {
    //if it contains an invite link
    message
      .delete() //delete the message
      .then(
        message.channel.send(
          "Link Deleted:\n**Invite links are not permitted on this server**"
        )
      );
  }
});

//Join/Leave Functions
//Member Join
client.on("guildMemberAdd", (member) => {
  const channel = member.guild.channels.cache.find(
    (ch) => ch.name === "general"
  );
  if (!channel) return;

  channel.send(`Welcome to the server, ${member}!`);

  const logChannel = member.guild.channels.cache.find(
    (ch) => ch.name === "bot-logs"
  );
  if (!logChannel) return;

  logChannel.send(`${member} has joined.`);

  const r = member.guild.roles.cache.find((role) => role.name === "Member");
  member.roles.add(r);
});

//Member Leave
client.on("guildMemberRemove", (member) => {
  const logChannel = member.guild.channels.cache.find(
    (ch) => ch.name === "bot-logs"
  );
  if (!logChannel) return;

  logChannel.send(`${member} has left.`);
});

// login to Discord with your app's token
client.login(token);
