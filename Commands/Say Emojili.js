const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args) => {

  if (!message.member.roles.cache.has("everyoneROL:ID") && !message.member.hasPermission("MANAGE_MESSAGES") ) 

   return message.channel.send(hata).then(m =>m.delete({timeout:10000}))
    const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
    let count = 0;
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
  var msg = message;
  var üyesayısı = msg.guild.memberCount.toString().replace(/ /g, "    ")
    var üs = üyesayısı.match(/([0-9])/g)
  üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs) {
    üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
      return {
    '0': `<a:fraud0:879826252838613103>`,
    '1': `<a:fraud1:879826299479289866>`,
    '2': `<a:fraud2:879826329627922453>`,
    '3': `<a:fraud3:879826353527074826>`,
    '4': `<a:fraud4:879826378491564092>`,                       
    '5': `<a:fraud5:879826397407871027>`,
    '6': `<a:fraud6:879826419813855294>`,
    '7': `<a:fraud7:879826442878324796>`,
    '8': `<a:fraud8:879826476134969354>`,
    '9': `<a:fraud9:879826504689795114>`}[d];
      })
    }/////////////////////////////
  var sessayı = count.toString().replace(/ /g, "    ")
  var üs2 = sessayı.match(/([0-9])/g)
  sessayı = sessayı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs2) {
    sessayı = sessayı.replace(/([0-9])/g, d => {
      return {
        '0': `<a:fraud0:879826252838613103>`,
        '1': `<a:fraud1:879826299479289866>`,
        '2': `<a:fraud2:879826329627922453>`,
        '3': `<a:fraud3:879826353527074826>`,
        '4': `<a:fraud4:879826378491564092>`,                       
        '5': `<a:fraud5:879826397407871027>`,
        '6': `<a:fraud6:879826419813855294>`,
        '7': `<a:fraud7:879826442878324796>`,
        '8': `<a:fraud8:879826476134969354>`,
        '9': `<a:fraud9:879826504689795114>`}[d];
      })
    }

  /////////////////////////////////////////

  //////////////////////////////////////////
  var onlayn = message.guild.members.cache.filter(x => x.presence.status !== "offline").size.toString().replace(/ /g, "    ")
  var üs4= onlayn.match(/([0-9])/g)
  onlayn = onlayn.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs4) {
    onlayn = onlayn.replace(/([0-9])/g, d => {
      return {
        '0': `<a:fraud0:879826252838613103>`,
        '1': `<a:fraud1:879826299479289866>`,
        '2': `<a:fraud2:879826329627922453>`,
        '3': `<a:fraud3:879826353527074826>`,
        '4': `<a:fraud4:879826378491564092>`,                       
        '5': `<a:fraud5:879826397407871027>`,
        '6': `<a:fraud6:879826419813855294>`,
        '7': `<a:fraud7:879826442878324796>`,
        '8': `<a:fraud8:879826476134969354>`,
        '9': `<a:fraud9:879826504689795114>`}[d];
      })
    }
/////////////////////////////
var boost = message.guild.premiumSubscriptionCount.toString().replace(/ /g, "    ")
var üs5 = sessayı.match(/([0-9])/g)
boost = boost.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs5) {
    boost = boost.replace(/([0-9])/g, d => {
    return {
        '0': `<a:fraud0:879826252838613103>`,
        '1': `<a:fraud1:879826299479289866>`,
        '2': `<a:fraud2:879826329627922453>`,
        '3': `<a:fraud3:879826353527074826>`,
        '4': `<a:fraud4:879826378491564092>`,                       
        '5': `<a:fraud5:879826397407871027>`,
        '6': `<a:fraud6:879826419813855294>`,
        '7': `<a:fraud7:879826442878324796>`,
        '8': `<a:fraud8:879826476134969354>`,
        '9': `<a:fraud9:879826504689795114>`}[d];
    })
  }
/////////////////////////////
var boostlevel = message.guild.premiumTier.toString().replace(/ /g, "    ")
var üs6 = sessayı.match(/([0-9])/g)
boostlevel = boostlevel.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs6) {
    boostlevel = boostlevel.replace(/([0-9])/g, d => {
    return {
        '0': `<a:fraud0:879826252838613103>`,
        '1': `<a:fraud1:879826299479289866>`,
        '2': `<a:fraud2:879826329627922453>`,
        '3': `<a:fraud3:879826353527074826>`,
        '4': `<a:fraud4:879826378491564092>`,                       
        '5': `<a:fraud5:879826397407871027>`,
        '6': `<a:fraud6:879826419813855294>`,
        '7': `<a:fraud7:879826442878324796>`,
        '8': `<a:fraud8:879826476134969354>`,
        '9': `<a:fraud9:879826504689795114>`}[d];
    })
  }
/////////////////////////////

  
const emoji1 = client.emojis.cache.get("");

 var embed1 = new MessageEmbed()
 .setColor('000000')
 .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
 .setDescription(`\`•\` **Sunucumuzda toplam ${üyesayısı} üye var.**
 \`•\` **Seste toplam ${sessayı} çevrimiçi üye var.**
 \`•\` **Sunucumuzda toplam ${onlayn} çevrimiçi üye var.**
 \`•\` **Sunucumuza toplam ${boost} takviye yapılmış, ${boostlevel}. seviye.**
 `)
 
     var hata = new MessageEmbed()
    .setColor('000000')
    .setAuthor(`Hata`)
    .setDescription(`**Bu komutu kullanmak için gerekli yetkiniz yok!**`)
 
  msg.channel.send(embed1);
  
 
  }
exports.conf = { 
  enabled: true,
  guildOnly: true,
  aliases: ["total",'toplam','sayy','info'],
  permLevel: 0
};
exports.help = {
  name: 'sayy'
}

