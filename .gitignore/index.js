const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
  bot.user.setGame("WolfGalaxy | !help");
  console.log("Le bot a bien été connecter");
})

bot.login("Mzk5Mjk1NzE3MjIwNTQ4NjE5.DTLBVA.0YiFuiN_ihn7QX4yl95xM7qdFm4");
