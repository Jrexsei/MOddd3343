const { MessageEmbed } = require("discord.js");
const ayar = require("../settings.json");
const db = require("quick.db")
const kdb = new db.table("kullanıcı");
const moment = require("moment");
exports.run = async(client, message, args) => {
    if (!message.member.roles.cache.has(ayar.botCommands) && !message.member.roles.cache.has(ayar.muteHammer) && !message.member.hasPermission("ADMINISTRATOR")) return message.react(ayar.no)
    let embed = new MessageEmbed().setColor('RANDOM').setTimestamp().setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))


    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    let user = message.guild.member(member)
    if (!user) return message.channel.send(embed.setDescription(`${message.author}, Eksik arguman kullandınız, \`.unjail @etiket/ID\``))//.then(m => m.delete({ timeout: 10000 }) && message.delete({ timeout: 10000 }))

    if (user.id === message.author.id) return message.react(ayar.no)
    if (user.id === client.user.id) return message.react(ayar.no)
    if (user.hasPermission(8)) return message.react(ayar.no)

    let data = await kdb.get(`durum.${user.id}.jail`)
    if (!data) return message.react(ayar.no)
    user.roles.set([ayar.kayıtsız])
    kdb.delete(`durum.${user.id}.jail`)



    client.channels.cache.get(ayar.jailLog).send(embed.setDescription(`
${user} Adlı kullanıcının jail cezası kaldırıldı.
`))




};
exports.conf = {
    name: "unjail",
    aliases: ["uj"],
    permLevel: 0
};