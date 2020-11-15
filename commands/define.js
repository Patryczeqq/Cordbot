const fetch = require("node-fetch");
const querystring = require("querystring");
module.exports = {
  name: "define",
  description: "Find a definition on Urban Dictionary",
  execute(message, args) {
    if (!args.length) {
      return message.channel.send("You need to supply a search term!");
    }

    const query = querystring.stringify({ term: args.join(" ") });

    const list = fetch(
      `https://api.urbandictionary.com/v0/define?term = ${query}`
    ).then((response) => response.json());
    if (!list.length) {
      return message.channel.send(
        `No results found for **${args.join(" ")}**.`
      );
    }

    message.channel.send(list[0].definition);
  },
};
