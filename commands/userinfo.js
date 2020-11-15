const Discord = require("discord.js");
module.exports = {
  name: "userinfo",
  description: "User Info",
  guildOnly: true,
  execute(message, args) {
    if (!message.mentions.users.size) {
      //message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);

      const userInfoEmbed = new Discord.MessageEmbed()
        .setTitle(`User Info`)
        .setThumbnail(message.author.displayAvatarURL())
        /*
			.addField('Your Username', message.author.tag, true)
			.addField('Your ID', message.author.id, true)
			.addField(`Created On`, message.author.createdAt, true)
			*/
        .addFields(
          { name: "Your Username", value: message.author.tag },
          { name: "Your ID", value: message.author.id, inline: true },
          { name: "Created On", value: message.author.createdAt, inline: false }
        );

      message.channel.send(userInfoEmbed);
    } else {
      const taggedUser = message.mentions.users.first();
      //message.channel.send(`Username: ${taggedUser.username}\nUser ID ${taggedUser.id}`);

      const userInfoEmbed = new Discord.MessageEmbed()
        .setTitle(`User Info`)
        .setThumbnail(taggedUser.displayAvatarURL())
        /*
			.addField('Username', taggedUser.tag, true)
			.addField('User ID', taggedUser.id, true)
			*/
        .addFields(
          { name: "Username", value: taggedUser.tag },
          { name: "ID", value: taggedUser.id, inline: true },
          { name: "Created On", value: taggedUser.createdAt, inline: false }
        );
      message.channel.send(userInfoEmbed);
    }
  },
};
