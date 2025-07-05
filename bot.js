const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Minimal HTTP server for Render
app.get('/', (req, res) => res.send('Bot Active ✅'));
app.listen(PORT);

// Telegram Bot
const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

// Handle /start command
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Hello! Send me a text message');
});

// Handle messages
bot.on('message', (msg) => {
  if (msg.text && !msg.text.startsWith('/')) {
    bot.sendMessage(msg.chat.id, `You said: ${msg.text}`);
  } else if (!msg.text) {
    bot.sendMessage(msg.chat.id, '⚠️ Please send text only');
  }
});

console.log('Bot running with HTTP server...');
