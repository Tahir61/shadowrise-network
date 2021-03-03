const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
exports.run = async (client, message) => {
 let prefix = ayarlar.prefix;
  let botadi = ayarlar.botadi;

  const fynxcode = new Discord.MessageEmbed()
    .setColor("BLACK")
    .setAuthor(`${botadi} Davet Menüsü`)
    .setDescription(
      "**:white_small_square: Botun Davet Linki [DAVET ET](https://discord.com/oauth2/authorize?client_id=814956684522553365&scope=bot&permissions=8&response_type=code)**\n\n**:white_small_square: Web Sitemiz Çok Yakında Sizlerle**"
    )
    .addField(
      `__Bilgilendirme__`,
      `<a:like:815282443086725151>  \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n <a:like:815282443086725151> \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz \n <a:like:815282443086725151> \`${prefix}siteler\` | ShadowRise Network Sitelerini Görürsün`
    )
    .setFooter(`${message.author.username} Komutu Kullandı`)
    .setTimestamp()
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/814942471792361522/816656849310318592/3caed152951498ef3ff31ea94cb55f93.png"
    )

  return message.channel.send(fynxcode);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["davet"],
  permLevel: 0
};

exports.help = {
  name: "davet",
  description: "Davet Menüsü",
  usage: ""
};
