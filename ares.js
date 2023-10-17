const { Client,MessageEmbed} = require('discord.js-selfbot-v13');
const client = global.client = new Client({checkUpdate:false});
const { CustomStatus } = require('discord.js-selfbot-rpc');
var clc = require("cli-color");
require('dotenv').config();

client.on('ready', async()=>{ 
console.log(clc.greenBright(clc.bold("[STARDEV 🌟] "+client.user.username +" Hesabına Giriş Yapıldı!")));

    let status = 'idle'; // Rahatsız Etmeyin = "dnd" // Boşta = "idle" // Çevrimiçi = "online"
    let state = 'Star Development'; // Durumunuzda Yazmasını İstediğiniz Şey
    let emoji = '🪐'; // Durumunuzda Gözükücek Olan Emoji (Discordda Bulunan Emojilerden Koyunuz!)

 const ares = new CustomStatus()
        .setStatus(status) 
        .setState(state)
        .setEmoji(emoji);

    client.user.setPresence(ares.toData());
    console.log(clc.blueBright(clc.bold("[STARDEV ✨] Hesabın Durumu Oynuyoru Ayarlandı!")));

})
  
// Mantık discord.js ile aynı aşşağıda basit örnek ile gösterdim

client.on('messageCreate', async(message) => {
   if(message.author.bot)return;
   if(message.author.id == client.user.id)return;

   if(message.content.toLowerCase().includes("stardev")){message.reply(`https://discord.gg/7CWf85EaEJ`);}
   if(message.content.toLowerCase().includes("ares")){message.reply(`https://github.com/aresxrd`);}
    
});


// '.env' Dosyasını Doldurunuz ~ Şu Şekilde Olması Gerekiyor ||  token=<tokeniniz>

client.login(process.env.token);