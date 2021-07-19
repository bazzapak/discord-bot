require("dotenv").config();

const { Client } = require("discord.js");

const client = new Client({
  partials: ["MESSAGE", "REACTION"]
});

const PREFIX = "$";

client.on("ready", () => {
  console.log(`${client.user.tag} è loggato.`);
});

client.login(process.env.DISCORDJS_BOT_TOKEN);
