const discord = require("discord.js");
const db = require("quick.db");
const ayar = require("../settings.json");
let selamlar = ["sa", "selam", "selamın aleyküm", "selamın aleykum", "sea", "sA", "selamın aleykm", "selamün aleyküm", "selamun aleykum"]
let taglar = ["tag", ".tag", "!tag", "-tag", "TAG", "Tag"]
let gnydn = ["gm","günaydın","good morning","gndyn","gmm","gunaydın","gunaydin","günaydin","gnydn"]
let igclr = ["gn","iyigeceler","ıyıgeceler","iyi geceler","ii geceler","iyi gclr","ii gclr","gnn","iii gecelerr","iyi geceler","ıyı geceler"]
module.exports = (message) => {
    if (message.author.bot) return;
    if (selamlar.some(s => message.content.toLowerCase() === s)) {
        message.channel.send(`${message.author}, Aleyküm selam hoş geldin.`)
    }
    if (taglar.some(t => message.content.toLowerCase() === t)) {
        message.channel.send(`${ayar.tag}`)
    }
    if (message.author.bot) return;
    if (gnydn.some(s => message.content.toLowerCase() === s)) {
        message.channel.send(`${message.author}, Günaydınnn <a:muah:831630941720936543> ` )    
}
    if (message.author.bot) return;
      if (igclr.some(s => message.content.toLowerCase() === s)) {
    message.channel.send(`${message.author}, İyi geceelerr <:yorgun:833325562264027196>  ` )
    }
};

module.exports.configuration = {
    name: "message"
};