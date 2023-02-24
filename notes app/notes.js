const fs = require("fs")

function getnotes (){
    return "getting notes...arguments."
}
function addnotes(title,body){ 
    const notes = loadnotes()
    const duplicatenotes = notes.filter(function(notes){
        return notes.title === title
    })
    if(duplicatenotes.length === 0){

        notes.push({
            title:title,
            body:body
        })
        savenotes(notes)
        console.log('new note addd!')
    }else{
        console.log("note title taken!")
    }

    
    
}
function loadnotes(){
    try{
        
            const databuffer = fs.readFileSync("notes.json")
            const datajson = databuffer.toString()
            
            return JSON.parse(datajson) 

    }catch(e){
        return []

    }


}
const savenotes =function (notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}
 

const removenotes = function(title){
    const notes = loadnotes()
    console.log(notes)
    notes.forEach(function(i,e){

        if ( notes[e].title === title){
            notes.splice(e,1)
            console.log("title remove")
            return
        }else{
            console.log("title not match")
        }
    })
    savenotes(notes)


}


module.exports = {
    getnotes:getnotes,
    addnotes:addnotes, 
    loadnote:loadnotes,
    removenotes:removenotes








}


