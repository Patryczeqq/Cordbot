const Discord = require('discord.js');

module.exports = {
	name: 'rules',
	description: 'Rules Info',
	guildOnly: true,
	execute(message, args) {
	if (message.member.hasPermission(['MANAGE_MESSAGES']))
	{
	const bewm = ("<:BEWM:750938464299515925>");

	const rulesEmbed = new Discord.MessageEmbed()	

	.setTitle("Rules of BEWM")
	.addFields(
		{ name: `${bewm}` + " " + '(1)', value: "“Hi, It’s a pleasure to meet you” — Keep chat mature, and wholesome. Do not worry about earning a ban straight off the bat, remember that we are all human beings with common sense, and are there to have light-hearted fun. If something offends you, say it. If it doesn’t, send some praise! And so on.", inline: false},
		{ name: `${bewm}` + " " + '(2)', value: "“Oh, I’m sorry, but I didn’t get that” — Be respectful and polite to others you meet. Do not personally attack other users, and respect different views and opinions. Talk and topics that suggest and/or include racism, sexism, ableism, transphobia, homophobia, racial slurs, etc are not tolerated.", inline: true},
		{ name: `${bewm}` + " " + '(3)', value: "“I don’t do well with hints” — Act in the best interest of everyone, including yourself. Simply be polite, honest, civil, and outright (you can when needed).", inline: false },
		{ name: `${bewm}` + " " + '(4)', value: "“Oh, I’ll post this here!” — Keep the chat relevant and posts to their respective channel. For example, pictures in <#718997147319533608>, and daily talk within <#659795407961980928>. If you wish to ask more on this, feel free to ask your ‘gods of the server’ (also known as your Admin and Moderators).", inline: true},
		{ name: `${bewm}` + " " + '(5)', value: "“Hm. I want to share something! But…should I really be sending this?” —Posting content that is Not Safe For Work (NSFW), Not Safe for Life (NSFL), racist, derogatory, or shock content is not allowed and it is not appreciated either. This includes inappropriate usernames and avatars. Also to note: Definitely do not post memes about recent tragedies.", inline: false },
		{ name: `${bewm}` + " " + '(6)', value: "“So, wanna talk about what’s going on in the world?” — There will be the talk of politics or religion, and/or more similar topics. For this, OBVIOUSLY you can steer clear from the conversation as you wish. If you do take part, just remember to be mindful of other users and therefore move it to another text-channel other than <#659795407961980928>.", inline: true},
		{ name: `${bewm}` + " " + '(7)', value: "“I don’t want to tell you yet” — Respect privacy, confidentiality, and anonymity. You are free to share what information you wish, but do it at your own discretion and awareness. We also ask that you don't share or ask for anyone’s personal info unless they consent to it. More importantly, they are okay with it.", inline: false },
		{ name: `${bewm}` + " " + '(8)', value: "“Do no harm and take no crap” — This is part of the yin-yang balance of this server. Basically, be aware of what you do so that it does not hurt others while knowing to also take no disrespect and intentional harm from others (Preferably handled with grace). For petty things, solve it amongst yourselves respectfully. You have the Admin and Moderators at your service for advice and help should you run into any problem, and if there is anything of concern you would like to bring attention to…Just ping your gods of the neighbouhood <@&659795382070542360>, <@&670592649459138560>, and/or <@&659795382745694210>. Any of these roles will do.", inline: true},
		{ name: `${bewm}` + " " + '(9)', value: "“Learn to enjoy the silence” — If nobody is talking to you, means they aren’t talking to you. Or are busy, AFK, etc. But you will always find a friend somewhere in the server~ Everyone has different timezones anyway!", inline: false },
		{ name: `${bewm}` + " " + '(10)', value: "“Enjoy your time” — Have fun, spread the word of our server's conquest to ‘destroy the world’, Be playfully rude to users you know can take it, and…make the most of your time here!", inline: true},
		{ name: "About Bans", value: ":warning: This server is not subject to your definition of fairness. You get three strikes, after that you will be banned. In extreme cases, a ban will take place without warning at the discretion of the Admin and Moderators and will not be for a personal reason. We respect you too, so respect our rules and fam-friends on the server in return! :heart:", inline: false},
	);
	message.channel.send(rulesEmbed);
	}
},
};