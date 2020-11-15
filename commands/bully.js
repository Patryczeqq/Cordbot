const Discord = require("discord.js");
module.exports = {
  name: "bully",
  description: "Bully Member",
  guildOnly: true,
  execute(message, args) {
    if (!message.mentions.users.size) {
      return message.reply("you need to tag a user in order to bully them!");
    } else {
      const taggedUser = message.mentions.members.first();
      const mention = taggedUser.id;
      tenor.Search.Query("anime bully", "10").then((Results) => {
        var images = [];
        var i = 0;
        Results.forEach((Post) => {
          images[i] = Post.url;
          i++;
        });
        const response = images[Math.floor(Math.random() * images.length)];
        const embed = new Discord.MessageEmbed()
          .setDescription(
            `<@` +
              mention +
              `>` +
              ` has been bullied by ` +
              message.author.username
          )
          .addField(response)
          .setFooter("ouch");
        message.channel.send(embed);
      });
    }
  },
};
