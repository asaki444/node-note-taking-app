const fs = require('fs')

const getNotes  = () => {
   return "Your notes..."
}

const addNote =  function (title, body){
  const notes  = loadNotes()
  const duplicatedNotes = notes.filter((note) => note.title === title)
  if(duplicatedNotes.length === 0 ){
   notes.push({
      title,
      body
   })
 
 
   saveNotes(notes)
   console.log(notes)

  }

}
const saveNotes = function (notes){
   const dataJSON = JSON.stringify(notes);
   fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function (){
   try {
      const dataBuffer = fs.readFileSync('notes.json')
      const dataJSON = dataBuffer.toString();
      return JSON.parse(dataJSON)
   } catch (e){
        return [];
   }
}

const removeNote = function (title){
   
}

module.exports = {
   getNotes,
   addNote,
   removeNote
}