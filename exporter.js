//{"score":4912,"nick":"luktvpl#3144","date":"2022-06-24 21:34:37"}
import * as fs from "fs"
var data = JSON.parse(fs.readFileSync("scores.json"))
var out = ""
Object.keys(data).forEach(usr=>{
    var mo = data[usr]

    out += (usr+':{"name":"'+mo.nick.slice(0,mo.nick.length-5)+'","score":"'+mo.score+'"}\n')
})
fs.writeFileSync("out.txt",out,"utf-8");