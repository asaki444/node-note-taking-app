const validator = require('validator')
const yargs = require('yargs')
const chalk = require('chalk');
const notes = require('./notes.js')

yargs.version('1.1.0');

// Create add command

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
       notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
     title: {
         describe: 'Note title',
         demandOption: true,
         type: 'string'
     }
    },
    handler: function(){
        notes.removeNote(argv.title)
    }

})

yargs.command({
    command: 'read',
    describe: 'read a note',
    handler: function(){
        console.log('read a note')
    }

})

yargs.command({
    command: 'list',
    describe: 'list notes',
    handler: function(){
        console.log('list all the notes')
    }

})
//add , remove, read, list 

console.log(yargs.argv)

