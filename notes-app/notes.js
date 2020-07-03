const fs = require('fs')
const chalk = require('chalk')
const getNotes = () => {
   return "Your notes..."
}

const addNote = function (title, body) {
   const notes = loadNotes()
   const duplicatedNotes = notes.filter((note) => note.title === title)
   if (duplicatedNotes.length === 0) {
      notes.push({
         title,
         body
      })


      saveNotes(notes)
      console.log(notes)

   }

}
const saveNotes = function (notes) {
   const dataJSON = JSON.stringify(notes);
   fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function () {
   try {
      const dataBuffer = fs.readFileSync('notes.json')
      const dataJSON = dataBuffer.toString();
      return JSON.parse(dataJSON)
   } catch (e) {
      return [];
   }
}

const removeNote = function (title) {
   const notes = loadNotes();
   const notesToKeep = notes.filter((note) => {
      return note.title !== title;
   })

   if (notes.length > notesToKeep.length) {
      console.log(chalk.green.inverse('note removed!'))
      saveNotes(notesToKeep)
   } else {
      consol.log(chalk.red.inverse('no note found'))
   }
}

module.exports = {
   getNotes,
   addNote,
   removeNote
}