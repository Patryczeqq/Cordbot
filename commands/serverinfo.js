const Discord = require("discord.js");

module.exports = {
  name: "serverinfo",
  description: "Server Info",
  guildOnly: true,
  execute(message, args) {
    //message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);

    const serverInfoEmbed = new Discord.MessageEmbed()
      .setThumbnail(message.guild.iconURL())
      .setTitle(message.guild.name)
	  .addField("Total Members", message.guild.memberCount, true)
	  .addField("Total Channels", message.guild.channels.cache.size, true)
	  .addField("Server Owner", message.guild.owner.user.username);
    message.channel.send(serverInfoEmbed);
  },
};
