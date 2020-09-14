import * as dotenv from 'dotenv';
import { Client } from 'discord.js';

dotenv.config();
console.log(process.env.DISCORDJS_JS_BOT_TOKEN);
const client = new Client();
client.on('ready', () => {
    console.log(`${client.user?.username} has logged in`);
});
client.on('message', (message) => {
    console.log(`${client.user?.username} has logged in`);
});

client.login(process.env.DISCORDJS_JS_BOT_TOKEN);
