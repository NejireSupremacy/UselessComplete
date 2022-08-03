import { Session } from '@biscuitland/core';
import { GatewayIntents } from '@biscuitland/api-types';

import { readyE } from './events/ready.js';
import { messageCreateE } from './events/messageCreate.js';
import { interactionCreateE } from './events/interactionCreate.js';

import 'dotenv/config';

const intents =
	GatewayIntents.Guilds |
	GatewayIntents.GuildMessages |
	GatewayIntents.MessageContent;

const session = new Session({ token: process.env.TOKEN, intents });

session.events.once('ready', (client) => readyE(client, session));

session.events.on('messageCreate', (message) => messageCreateE(message));
session.events.on('interactionCreate', (interaction) => interactionCreateE(interaction));

session.start();
