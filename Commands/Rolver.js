const Discord = require('discord.js');
exports.run = (client, message, args) => {

  if (!message.guild) return;
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply('Bunun için gerekli iznin yok');
  let guild = message.guild
  let rol = message.mentions.roles.first()  
  let user = message.mentions.members.first() 

  if (!user) return message.reply('**Kime Rol Verceğimi Yazmadın!**').catch(console.error);
  if (rol.length < 1) return message.reply('**Rol idsini belirtmedin**');
user.roles.add(rol)
const embed = new Discord.MessageEmbed()
        .setDescription(`${user} kullanıcısından başarıyla ${rol} rolü verildi!`)
        .setFooter('Firaud', client.user.avatarURL())
        .setColor(rol.hexColor)
        .setTimestamp()
    message.channel.send(embed)

};

exports.conf = {
    name: "rolver",
    aliases: ["rv"],
    permLevel: 2
};