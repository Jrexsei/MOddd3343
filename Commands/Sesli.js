const { MessageEmbed } = require("discord.js");
const ayar = require("../settings.json")
exports.run = async(client, message, args) => {
    let embed = new MessageEmbed().setColor('RANDOM').setTimestamp().setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))

    if (!message.member.roles.cache.has(ayar.botCommands) && !message.member.hasPermission(8)) return message.react(ayar.no)

    let ses = message.guild.members.cache.filter(x => x.voice.channel).size
    let pub = message.guild.members.cache.filter(x => x.voice.channel).filter(x => x.voice.channel.parentID === ayar.pubID).size
    let priv = message.guild.members.cache.filter(x => x.voice.channel).filter(x => x.voice.channel.parentID === ayar.privID).size
    let alone = message.guild.members.cache.filter(x => x.voice.channel).filter(x => x.voice.channel.parentID === ayar.aloneID).size
    let teyit = message.guild.members.cache.filter(x => x.voice.channel).filter(x => x.voice.channel.parentID === ayar.teyitID).size


    message.channel.send(embed.setDescription(`
\`•\` **Public kanallarda \`${pub}\` üye bulunmakta.**
\`•\`** Priv kanallarda \`${priv}\` üye bulunmakta.**
\`•\`** Alone kanallarda \`${alone}\`üye bulunmakta.**
\`•\`** Teyit kanallarda \`${teyit}\` üye bulunmakta.**
`))//.then(m => m.delete({ timeout: 10000 }) && message.delete({ timeout: 10000 }))
};
exports.conf = {
    name: "sesli",
    aliases: ["ses"],
    permLevel: 0
};