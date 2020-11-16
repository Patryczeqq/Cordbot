const Discord = require('discord.js');

module.exports = {
	name: 'info',
	description: 'Bot Info',
	guildOnly: true,
	execute(message, args) {
		//message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
	
	const serverInfoEmbed = new Discord.MessageEmbed()	
    .setTitle(`Cordbot`)
    .setDescription('General purpose and moderation bot')
    .setFooter(`Created by Sushipie (2020)`);
	message.channel.send(serverInfoEmbed);
       
},
};
