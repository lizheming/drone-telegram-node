const render = require('drone-render');
const TelegramBot = require('node-telegram-bot-api');
const {format} = require('./utils');

const {
  PLUGIN_LANG,
  PLUGIN_TOKEN,
  PLUGIN_TO,
  PLUGIN_MESSAGE,
  PLUGIN_BASE_API_URL,
  TELEGRAM_TOKEN,
  TELEGRAM_TO
} = process.env;

const TOKEN = PLUGIN_TOKEN || TELEGRAM_TOKEN;
const TO = PLUGIN_TO || TELEGRAM_TO;

if(PLUGIN_LANG) {
  render.locale(PLUGIN_LANG);
}

const bot = new TelegramBot(TOKEN, {
  baseApiUrl: PLUGIN_BASE_API_URL
});
bot.sendMessage(TO, render(PLUGIN_MESSAGE));