const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
let botadi = ayarlar.botadi;
exports.run = async (client, message, args, level) => {
  const toplamkomut = new Discord.MessageEmbed()

    .setTitle(``)
    .setAuthor(`${botadi} Toplam Komut Sayısı`)
    .setDescription(
      `<a:bit:815283242479124511> ${botadi} | Toplam ` +
        client.commands.size +
        ` Komut Vardır!`
    )
    .setColor("BLACK")
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/814942471792361522/816656849310318592/3caed152951498ef3ff31ea94cb55f93.png"
    )
    .setTimestamp()
    .setFooter(`${botadi} | 2021`, client.user.avatarURL());

  return message.channel.send(toplamkomut);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "komutlar",
  description: "Toplam Komut",
  usage: "toplamkomut"
};
