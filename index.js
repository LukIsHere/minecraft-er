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
                    generateow();
                break;
        
                default:
                break;
        }
        }  
    }
    
})
var blocks = {
    dirt:"dirt",
    grass:"grass",
    stone:"stone",
    air:"air",
    log:"log",
    leaves:"leaves",
    player:"player",
    bedrock:"bedrock",
    deepslate:"deepslate"
}
class game {
    constructor(id,mode=0,map){
        this.id = id;
        this.id = mode;
        this.map = map;
    }
}
class world {
    constructor(world=0){
        //64x192
        //0-4 bedrock
        //5-64 deepslate
        //64-128 stone
        //128-192 air
        var out = generateow;
        this.chunk=[]
    }
}
function render(mapa,x,y){
    
}
generateow();
function generateow(){
    //bedrock
    var out = [];
    //[warstwa-][|wbok]
    var lsbedrock = 3;
    for(var iset=0;iset<192;iset++){
        out[iset]=[];
    }
    for(var bdi=0;bdi<64;bdi++){
        var gut = rand(7);
        switch (gut) {
            case 1:
                if(lsbedrock>1)lsbedrock -=1;
                break;
            case 2:

                break;
            case 3:
                if(lsbedrock<4)lsbedrock +=1;
                break;
            case 4:
                if(lsbedrock<4)lsbedrock +=1;
                break;
            case 5:
                if(lsbedrock<4)lsbedrock +=1;
                break;
            case 6:
                if(lsbedrock>1)lsbedrock -=1;
                break;
            case 7:
                if(lsbedrock>1)lsbedrock -=1;
                break;
            default:
                break;
        }
        for(var ibdr = 0;ibdr<lsbedrock;ibdr++){
            out[ibdr][bdi] = blocks.bedrock;
        }
    }
    
    
    //console.log(out);
    //deep slate
    var dslatel = 0;
    for(var bdi=0;bdi<64;bdi++){
        var gut = rand(7);
        switch (gut) {
            case 1:
                if(dslatel>1)dslatel -=1;
                break;
            case 2:
                if(dslatel<4)dslatel +=1;
                break;
            case 3:
                break;
            case 4:
                break;
            case 5:
                break;
            case 6:
                break;
            case 7:
                break;
            default:
                break;
        }
        for(var ibdr = 0;ibdr<dslatel+1;ibdr++){
            out[ibdr+64][bdi] = blocks.deepslate;
        }
        for(var i=0;i<64;i++){
            if(out[i][bdi]==undefined)out[i][bdi]=blocks.deepslate;
        }
        
    }
    //stone
    var slatel = 0;
    for(var bdi=0;bdi<64;bdi++){
        var gut = rand(7);
        switch (gut) {
            case 1:
                if(slatel>1)slatel -=1;
                break;
            case 2:
                if(slatel<4)slatel +=1;
                break;
            case 3:
                break;
            case 4:
                break;
            case 5:
                break;
            case 6:
                break;
            case 7:
                break;
            default:
                break;
        }
        for(var ibdr = 0;ibdr<slatel+1;ibdr++){
            out[ibdr+128][bdi] = blocks.stone;
            out[ibdr+129][bdi] = blocks.dirt;
            out[ibdr+130][bdi] = blocks.dirt;
            out[ibdr+131][bdi] = blocks.dirt;
            out[ibdr+132][bdi] = blocks.grass;
            //drzewa
            if(rand(20)==7){
                out[ibdr+133][bdi] = blocks.log;
                out[ibdr+134][bdi] = blocks.leaves
                out[ibdr+135][bdi] = blocks.leaves
                out[ibdr+134][bdi+1] = blocks.leaves
                out[ibdr+134][bdi-1] = blocks.leaves

            }
        }
        for(var i=0;i<128;i++){
            if(out[i][bdi]==undefined)out[i][bdi]=blocks.stone;
        }
        
    }
    //air
    for(var fix1=0;fix1<192;fix1++){
        for(var fix2=0;fix2<64;fix2++){
            if(out[fix1][fix2]==undefined)out[fix1][fix2]=blocks.air;
        }
    }
    
    
    
    //out
    console.log(out);
    //advanced out
    out.forEach(v1=>{
        var outt="";
        v1.forEach(v2=>{
            outt+=v2.charAt(0);
        })
        console.log(outt);
    })
    return out;
}
function rand(to){
    var r = Math.round(Math.random()*10);
    return r%to+1;
}
bot.login(conf)