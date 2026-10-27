const { Client, GatewayIntentBits } = require('discord.js');
const express = require('express');
const path = require('path');

// إعدادات بوت الديسكورد
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.once('ready', () => {
    console.log(`تم تسجيل الدخول بنجاح كـ ${client.user.tag}! البوت يعمل بكفاءة.`);
});

// أوامر البوت
client.on('messageCreate', message => {
    if (message.content === '!داحم') {
        message.reply('أهلاً بك في منصة داحم كود للبرمجة! 🚀');
    }
});

// توكن البوت
client.login('MTU2NDQwNzc0Mjc0NjMzMzI5NQ.Gg8HGm.I1OMilSuLm_8-qXgf6PJDYeNhWnjYc0lClEC8Q');

// إعداد سيرفر الويب للموقع
const app = express();
const PORT = process.env.PORT || 3000;

// ربط مجلد الموقع
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`الموقع يعمل على البورت: ${PORT}`);
});
