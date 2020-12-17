
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Done!'));

app.listen(port, () =>
	console.log(`Orqnge listening at http://localhost:${port}`)
);

// ================= START BOT CODE ===================

require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
	client.user.setActivity(` with oranges | orq help | Merry Christmas!`)
});

//Commands
client.on('message', msg => {
	if (msg.content === "orq help") {
		msg.reply("orq mr/orq mrorange | orq regular | orq purple | orq red | orq green | orq annoy | orq weird | orq trump | orq car");
	} else if (msg.content === "orq mr") {
		msg.reply("Mr Orange is here! https://imgur.com/a/DcBf79q");
	} else if (msg.content === "orq mrorange") {
		msg.reply("Mr Orange is here! https://imgur.com/a/DcBf79q");
	} else if (msg.content === "orq regular") {
        msg.reply("the fruit you always eat: orange https://imgur.com/a/YvqZ8nh");
	} else if (msg.content === "orq purple") {
		msg.reply("purple orange!? https://imgur.com/a/p4uGNAQ");
	} else if (msg.content === "orq red") {
		msg.reply("ahhhh blood https://imgur.com/a/ll6jufB");
	} else if (msg.content === "orq green") {
		msg.reply("alien orange, i wonder if it's from outer space https://imgur.com/a/SKmo2bm");
	} else if (msg.content === "orq annoy") {
		msg.reply("we all know the annoying orange, right!? https://imgur.com/a/VWyDklf");
	} else if (msg.content === "orq weird") {
		msg.reply("wait thats illegal https://imgur.com/a/kFdjbqs");
	} else if (msg.content === "orq trump") {
		msg.reply("look at this dude https://imgur.com/a/7yESyvg");
  } else if (msg.content === "orq car") {
    msg.reply("would you drive this lol https://imgur.com/a/ZVdKFyg");
  } else if (msg.content === "orq partyblob")
    msg.reply("Looks like you requested this, sooo  :partyblob: ");

});

//DISCORD_TOKEN
client.login(process.env.DISCORD_TOKEN);
