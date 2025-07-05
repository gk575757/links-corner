const TelegramBot = require('node-telegram-bot-api');
const token = '7668392833:AAGnME4dVihf5Rg1zxq_LPm_CEXIt82f8_w';
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Hello! I'm your bot. 👋");
});

bot.on('message', (msg) => {
  bot.sendMessage(msg.chat.id, msg.text);
});