const discord = require("discord.js");
const db = require("quick.db");
const ayar = require("../settings.json");

let iltifatSayi = 0;
let iltifatlar = [
    "Gecemi aydınlatan yıldızımsın.",
    "Ponçik burnundan ısırırım seni",
    "Salaklıkta az evvel yeni bir dünya rekoru kırdın. Tebrik Ederim.",
    "Yapında bozukluk varsa benden mimarlık bekleme",
    "Aklını alırdım ama ucuz mal bende alerji yapıyor..",
    "Açık sözlü değilsin, sen çok boş konuşuyorsun",
    "Arada makyaj malzemeslerini ye de, biraz da için güzelleşsin",
    "Dağlarda keklik var kovalar mısın şuramda sertlik var ovalar mısın",
    "Sıkma canını okşa patlıcanını",,
    "Ben çoktan şairdim ama senin gibi şiiri ilk defa dinliyorum.",
    "Ne tatlısın sen öyle. Akşam gel de iki bira içelim.",
    "Gecemi aydınlatan yıldızımsın.",
    "Süt içiyorum yarım yağlı, mutluluğum sana bağlı.",
    "Müsaitsen aklım bu gece sende kalacak.",
    "Gemim olsa ne yazar liman sen olmadıktan sonra...",
    "Sabahları görmek istediğim ilk şey sensin.",
    "Çok yorulmuş olmalısın. Bütün gün aklımda dolaşıp durdun.",
    "Çocukluk yapsan da gönlüme senin için salıncak mı kursam?",
    "Sen birazcık huzur aradığımda gitmekten en çok hoşlandığım yersin.",
    "Telaşımı hoş gör, ıslandığım ilk yağmursun.",
    "Kahveyi sütsüz seni tereddütsüz seviyorum",
    "Dur beynimi çıkarayım, eşit şartlarda konuşalım",
    "Kafamı yaşasan kafana sıkarsın",
    "Sen beni bir de sevgilinken gör",
    "Ankarada deniz sende karakter",
    "O kadar haklısın ki... seni öpesim var",
    "Gözlerimi senden alamıyorum çünkü benim tüm dünyam sensin.",
    "Çikolatalı keksin bu alemde teksin",
    "Şey gözlerin çok güzelmiş tanışalım mı ?",
    "Akıllara zarar bi mükemmelliğin var",
    "Gülüşün şimşek içermiyiz birer milkşeyk ?",
    "Ölüm ani dünya fani bi kere sevsen nolur ki yani ?",
    "Benim için mutluluğun tanımı, seninle birlikteyken geçirdiğim vakittir."
];

module.exports = (message) => {
    let iltifat = iltifatlar[Math.floor(Math.random() * iltifatlar.length)];
    if (ayar.genelChat && message.channel.id === ayar.genelChat && !message.author.bot) {
        iltifatSayi++;
        if (iltifatSayi >= 50) {
            iltifatSayi = 0;
            message.reply(iltifat);
        };
    };
};

module.exports.configuration = {
    name: "message"
};