const Discord = require('discord.js');
module.exports = {
	name: 'unmute',
    description: 'Unmute Member',
    guildOnly: true,
    execute(message, args) 
    {
        if (message.member.hasPermission(['MANAGE_MESSAGES']))
        {
            if (!message.mentions.users.size) 
            {
                return message.reply('you need to tag a user in order to unmute them!');
            }
            
            const taggedUser = message.mentions.members.first();
            const r = taggedUser.guild.roles.cache.find(role => role.name === "Muted");

            if (taggedUser.hasPermission(['MANAGE_MESSAGES']))
            {
                message.channel.send(taggedUser.displayName + ` can't be unmuted`);  
            }
            else
            {   
                taggedUser.roles.remove(r).then((taggedUser) => 
                {
                    message.channel.send(taggedUser.displayName + ` has been unmuted`);
                });
                
            }
            
        }
        
    }
};