const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on('message', function (message) {
  if (message.content === '!!help') {
    message.channel.send('**``` Aide : ```**');
    message.channel.send("``` !!site : Affiche l'adresse web du site officiel de la team. \n !!help : Affiche l'aide concernant le bot WolfGalaxy```");
  }
  if (message.content === '!!site') {
    message.channel.send('**``` Site Web : ```**');
    message.channel.send("**Rejoins nous :wink: : http://wolfgalaxy.000webhostapp.com/index.php**");
  }
})

bot.on("ready", function() {
  bot.user.setGame("WolfGalaxy | !!help");
  console.log("Le bot a bien été connecter");
})

bot.login("Mzk5Mjk1NzE3MjIwNTQ4NjE5.DTLBVA.0YiFuiN_ihn7QX4yl95xM7qdFm4");
