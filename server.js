const {notStrictEqual} = require("assert")
const express = require("express")
const fs = require("fs")
const path = require("path")
const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static('public'))
app.get("/notes",function(req,res){
res.sendFile(path.join(__dirname,"/public/notes.html"))
})

app.get("/",function (req,res){
res.sendFile(path.join(__dirname,"/public/index.html"))
})
fs.readFile(path.join(__dirname,"/db/db.json"),(error,data) => {
if (error)
throw error
const notes= JSON.parse(data)
app.get("/api/notes",function(req,res){
    res.json(notes)

}) 
app.post("/api/notes", function (req,res){
const newNote = req.body
const { v4: uuidv4 } = require('uuid')
newNote.id=uuidv4()

notes.push(newNote)
console.log(notes)

fs.writeFile(path.join(__dirname,"/db/db.json"),JSON.stringify(notes),function(error){
    if (error)
    console.log(error)
    else console.log ("file was written")
})
res.status(200).send(req.body)
})
}

)


app.listen(3001,function(){
    console.log("app is listening on port 3001")
} )
