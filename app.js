const validator = require('validator')
const yargs = require('yargs')
const chalk = require('chalk');

yargs.version('1.1.0');

// Create add command

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function (){
        console.log('Adding a new note')
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

