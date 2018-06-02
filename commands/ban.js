const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!bUser) return message.channel.send("En löydä käyttäjää!");
  let bReason = args.join(" ").slice(22);
  if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Ei.");
  if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Tätä henkilöä ei voi bännätä.");

  let banEmbed = new Discord.RichEmbed()
  .setDescription("Ban")
  .setColor("#cc0081")
  .setAuthor("LateZ Boat", "https://i.imgur.com/ldPxOse.png")
  .setFooter("LateZ Boat by: MasterFIN", "https://i.imgur.com/ldPxOse.png")
  .addField("Bännätty käyttäjä", `${bUser} ID: ${bUser.id}`)
  .addField("Bännääjä", `<@${message.author.id}> ID: ${message.author.id}`)
  .addField("Bännätty", message.channel)
  .addField("Aika", message.createdAt)
  .addField("Syy", bReason);

  let banChannel = message.guild.channels.find(`LateZ Group`, "varoitukset");
  if(!banChannel) return message.channel.send("En löydä kanavaa!");

  message.guild.member(bUser).ban(bReason);
  banChannel.send(banEmbed);

  return;
}

module.exports.help = {
  name: "ban"
}
