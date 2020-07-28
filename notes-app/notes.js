const fs = require('fs')
const chalk = require('chalk')
const getNotes = () => {
   return "Your notes..."
}

const addNote = function (title, body) {
   const notes = loadNotes()
   const duplicatedNote = notes.find(note => note.title === title)
   if (!duplicatedNote) {
      notes.push({
         title,
         body
      })
      saveNotes(notes)
      console.log(chack.green.inverse('New note added!'))
   } else {
      console.log(chalk.red.inverse('Note title taken!'))
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
      console.log(chalk.red.inverse('no note found'))
   }
}

const listNotes = () => {
   const notes = loadNotes();
   console.log(chalk.inverse('Your notes'))
   notes.forEach((note) => {
      console.log(note.title)
   })
}

const readNote = (title) => {
   const notes = loadNotes();
   const note = notes.find(note => note.title === title)

   if (note) {
      console.log(chalk.inverse(note.title))
      console.log(note.body)
   } else {
      console.log(chalk.red.inverse('Note not found'))
   }
}

module.exports = {
   getNotes,
   addNote,
   removeNote,
   listNotes,
   readNote
}