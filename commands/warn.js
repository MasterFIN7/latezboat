const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("Ei.");
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!wUser) return message.reply("En löydä käyttäjää!");
  if(wUser.hasPermission("MANAGE_MESSAGES")) return message.reply("Ei.");
  let reason = args.join(" ").slice(22);

  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };

  warns[wUser.id].warns++;

  fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err);
  });

  let warnEmbed = new Discord.RichEmbed()
  .setDescription("Warns")
  .setAuthor(message.author.username)
  .setFooter("LateZ Boat by: MasterFIN", "https://i.imgur.com/ldPxOse.png")
  .setColor("#cc0081")
  .addField("Varoitettu käyttäjä", `<@${wUser.id}>`)
  .addField("Varoitettu", message.channel)
  .addField("Varoitusten määrä", warns[wUser.id].warns)
  .addField("Syy", reason);

  let warnchannel = message.guild.channels.find(`LateZ Group`, "varoitukset");
  if(!warnchannel) return message.reply("En löydä kanavaa!");

  warnchannel.send(warnEmbed);

}

module.exports.help = {
  name: "warn"
}
