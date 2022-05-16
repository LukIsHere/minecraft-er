var {Client,Intents} = require("discord.js");
var conf = require("../minecraft.json").token
var bot = new Client({ intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS
]})
bot.once("ready",()=>{
    console.log("jestem online");
})
bot.on("messageCreate", msg =>{
    if(!msg.author.bot){
        var content = msg.content;
        var cmd = content.split(" ");
        console.log(cmd);
        if(content.charAt(0)=="!"){
            switch (cmd[0]) {
                case "!start":
                    msg.channel.send("ok");
                break;
        
                default:
                break;
        }
        }  
    }
    
})

class game {
    constructor(id,mode=0)
}
bot.login(conf)