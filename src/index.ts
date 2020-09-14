import * as dotenv from 'dotenv';
import { Client } from 'discord.js';

dotenv.config();
console.log(process.env.DISCORDJS_JS_BOT_TOKEN);
const client = new Client();
client.login(process.env.DISCORDJS_JS_BOT_TOKEN);
