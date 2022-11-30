const { Client, GatewayIntentBits } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');
require("dotenv").config();
// const keepAlive = require('./server');

// Set up client and log in.
const client = new Client({
  "intents": [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers,
  GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});
// keepAlive();
client.login(process.env.TOKEN);

// Create an array of all event files.
const eventFiles = fs.readdirSync('events').filter(file => file.endsWith('.js'));
console.log(`\nEvent files:\n${eventFiles}\n`);

// Add each file to an event listener.
for (const fileName of eventFiles) {
  const event = require(path.join(__dirname, 'events', fileName));

  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args));
  } else {
    client.on(event.name, (...args) => event.execute(...args));
  }
}