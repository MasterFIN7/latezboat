const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let botembed = new Discord.RichEmbed()
  .setAuthor("LateZ Boat", "https://i.imgur.com/ldPxOse.png")
  .setColor("#cc0081")
  .setDescription("Infoa Botista")
  .setFooter("LateZ Boat By: MasterFIN", "https://i.imgur.com/ldPxOse.png")
  .setThumbnail(bot.user.displayAvatarURL)
  .addField("Botin nimi", bot.user.username)
  .addField("Botin prefix", "!")
  .addField("Luotu", bot.user.createdAt);

  return message.channel.send(botembed);

}

module.exports.help = {
  name: "botinfo"
}
