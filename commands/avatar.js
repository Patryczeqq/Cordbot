const Discord = require("discord.js");
module.exports = {
  name: "avatar",
  description: "Display Avatar",

  execute(message, args) {
    if (!message.mentions.users.size) {
      const avatarEmbed = new Discord.MessageEmbed()

        .setDescription(`Your Avatar`)
        .setURL(message.author.displayAvatarURL())
        .setImage(message.author.displayAvatarURL());

      //return `${user.username}'s Avatar: ${user.displayAvatarURL()}`;
      message.channel.send(avatarEmbed);
    } else {
      const taggedUser = message.mentions.users.first();

      const avatarEmbed = new Discord.MessageEmbed()
        .setDescription(taggedUser.tag + `'s Avatar`)
        .setURL(taggedUser.displayAvatarURL())
        .setImage(taggedUser.displayAvatarURL());

      //return `${user.username}'s Avatar: ${user.displayAvatarURL()}`;
      message.channel.send(avatarEmbed);
    }
  },

  // send the entire array of strings as a message
  // by default, discord.js will `.join()` the array with `\n`
};
