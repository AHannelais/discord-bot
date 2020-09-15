import * as dotenv from 'dotenv';
import { Client } from 'discord.js';

dotenv.config();
let jews: string[] = [];
console.log(process.env.DISCORDJS_JS_BOT_TOKEN);
const client = new Client();
const PREFIX = '/';
client.on('ready', () => {
    console.log(`${client.user?.username} has logged in`);
});
client.on('message', (message) => {
    if (message.author.bot) return;
    if (message.content.startsWith(PREFIX)) {
        const [CMD_NAME, ...args] = message.content.trim().substring(PREFIX.length).split(/\s+/);
        console.log(CMD_NAME);
        console.log(args);
        if (CMD_NAME === 'kick') {
            if (args.length === 0) return message.reply('please prodived an id');
            const member = message.guild?.members.cache.get(args[0]);
            if (member) {
                member.kick();
            } else {
                message.channel.send('member not found');
            }
        }
    }
});

client.login(process.env.DISCORDJS_JS_BOT_TOKEN);
