const TelegramBot = require('node-telegram-bot-api');
const {format} = require('./utils');

const {
  PLUGIN_TOKEN,
  PLUGIN_TO,
  PLUGIN_MESSAGE,
  PLUGIN_BASE_API_URL
} = process.env;

const bot = new TelegramBot(PLUGIN_TOKEN, {
  baseApiUrl: PLUGIN_BASE_API_URL
});
bot.sendMessage(PLUGIN_TO, format(PLUGIN_MESSAGE));