const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let hEmbed = new Discord.RichEmbed()
  .setAuthor("LateZ Boat", "https://i.imgur.com/ldPxOse.png")
  .setThumbnail("https://i.imgur.com/ldPxOse.png")
  .setFooter("LateZ Boat by: MasterFIN", "https://i.imgur.com/ldPxOse.png")
  .setColor("#cc0081")
  .addField("Komennot:", "ban\nbotinfo\nhelp\nkick\nping\nsay\ntempmute\nwarn");

  message.channel.send(hEmbed);

}

module.exports.help = {
  name: "help"
}
