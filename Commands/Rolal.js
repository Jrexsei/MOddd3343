exports.run = (client, message, args) => {
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send(`Bu Komudu Kullanmaya İznin Yok! \n <@${message.author.id}>`)
    let role = message.mentions.roles.first();
    let member = message.mentions.members.first();
    if (!role) return message.reply('**Lütfen Almak İstediğiniz Rolü Etiketleyin!**')
    if (!member) return message.reply('**Lütfen Rol Almak İstediğiniz Kişiyi Etiketleyin!**')
    member.roles.remove(role)
    const { MessageEmbed } = require("discord.js")
    const embed = new MessageEmbed()
    .setAuthor(`Roller Değiştirildi`)
    .setDescription(`**Rol Alınan Kullanıcı: **${message.mentions.users.first()}\n**Alınan Rol: **${role}`)
    .setFooter(`${message.author.tag} Tarafından Değiştirildi`)
    .setTimestamp()
    .setColor('ORANGE')
    message.channel.send(embed)
};
exports.conf = {
    name: "rolal",
    aliases: ["ra"],
    permLevel: 2
};