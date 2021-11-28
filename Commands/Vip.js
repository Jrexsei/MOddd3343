const Discord = require("discord.js");
const db = require('wio.db');
exports.run = (client, message, args) => {
    const fraudmisafir = message.guild.roles.cache.find(r => r.id === " "); //kayıtsız rol id
    const vip = message.guild.roles.cache.find(r => r.id === " "); //verilen vip rol id
  
  const log = message.guild.channels.cache.find(c => c.id === " "); //log kanalı id 
  if(!message.member.roles.cache.array().filter(r => r.id === " ")[0]) { //yetkili rolu id
    return message.channel.send("Rolü Verebilmek İçin Yetkin Yok Napıyosun?");
  } else {
    let member = message.mentions.users.first() || client.users.cache.get(args.join(' '))
      if(!member) return message.channel.send("Bir kullanıcı girin.")
    const c = message.guild.member(member)
    c.roles.add(vip)

     const fraud = new Discord.MessageEmbed()
    .setDescription(`
    <a:onay:831631087750348861>  Rol Verme Başarılı 

• Vip Verilen Üye: **${c.user}** 
• Verilen Rol: ${vip}
`)
         
     message.channel.send(fraud).then(m => m.delete({ timeout: 10000 }) && message.delete({ timeout:10000 }))
     
    

    const fraudsc = new Discord.MessageEmbed()
    .setDescription(`
**Bir Vip Rolu Verildi! **

• Vip Verilen Üye: **${c.user.tag}**
• Veren Yetkili: **${message.author.tag}**

**Rol Bilgileri Aşağıda Yazmakta.**

• Verilen Rol: ${vip}

`)
    
   
    log.send(fraudsc)
  }
}
exports.conf = {
    name: "vip",
    aliases: ["vipmiş"],
    permLevel: 0
};