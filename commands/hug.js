const Discord = require("discord.js");
module.exports = {
  name: "hug",
  description: "Hug Member",
  guildOnly: true,
  execute(message, args) {
    if (!message.mentions.users.size) {
      return message.reply("you need to tag a user in order to hug them!");
    } else {
      const taggedUser = message.mentions.members.first();
      const mention = taggedUser.id;
      tenor.Search.Query("anime hug", "10").then((Results) => {
        var images = [];
        var i = 0;
        Results.forEach((Post) => {
          images[i] = Post.url;
          i++;
        });
        const response = images[Math.floor(Math.random() * images.length)];
        message.channel.send(
          `<@` +
            mention +
            `>` +
            ` has been hugged by ` +
            message.author.username +
            " " +
            response
        );
      });
    }
  },
};
