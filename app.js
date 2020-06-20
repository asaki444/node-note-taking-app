const validator = require('validator')
const yargs = require('yargs')
const chalk = require('chalk');

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
        console.log('Title', argv.title)
        console.log('Body', argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function(){
        console.log('Removing the note!')
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

