const telegramBot = require("node-telegram-bot-api");
const token = "6826266515:AAGvJj6fi0CWXNaE_cbqIizkZ_9_P9kJU2o";
const bot = new telegramBot(token, { pulling: true });

bot.on(/\/start/, (msg) => {
  console.log("connected");
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, "Welcome to the Telegram Bot API!");
})