const Discord = require('discord.js');
const request = require('request');

module.exports = {
	name: 'inspire',
	description: 'Send inspirational image!',
    execute(message, args) 
    {
        request('http://inspirobot.me/api?generate=true', function (error, response, body)
        {
            if (!error && response.statusCode == 200) 
            {
                message.channel.send({
                    embed: {
                      image: {
                        url: body
                      }
                    }
                  });
            }
        });
    }
}
