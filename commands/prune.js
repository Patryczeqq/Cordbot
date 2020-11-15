module.exports = {
	name: 'prune',
    description: 'Prune Messages',
    guildOnly: true,
	execute(message, args) {
		const amount = parseInt(args[0]);
    
        if (isNaN(amount)) {
            return message.reply('that doesn\'t seem to be a valid number.');
        }
        else if (amount < 1 || amount > 100) {
            return message.reply('you need to input a number between 2 and 100.');
        }
        
        message.channel.bulkDelete(amount + 1);
},
};