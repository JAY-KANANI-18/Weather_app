const fs = require('fs');
const http = require('http');
const validator = require('validator');
const { option, demandOption } = require('yargs');
const yargs = require('yargs');
const notes = require('./notes.js')  
// import validator from 'validator'
// import http from 'http'
// import fs from 'fs'
// import chalk from 'chalk';
// import yargs from 'yargs';


// create file with content using fs module
// fs.writeFileSync("jay.js"," \n my Name is Kanani xxx")
// fs.appendFileSync("jay.js","\n console.log(5);")


// let j = 5
// sum = function(a,b){return a+b}

// module.exports = list= {
//     j:j,
//     k:10,
//     sum:sum
// }

// console.log(validator.isEmail("djada@gmai.com"))
// console.log(validator.isURL("djada@gmai.com"))

// console.log(chalk.blue('Hello') + chalk.green(' World') + chalk.red('!'));



// SHOW ARGS
// console.log(process.argv[2])
// SHOW YARGS
// yargs.version("1.1.0")
// console.log(process.argv);



yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },

    handler :function(argv){
        notes.addnotes(argv.title,argv.body)
    }
    // handler: function (argv) {
    //     console.log('Title: ' + argv.title)
    //     console.log('Body: ' + argv.body)
    // }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder:{
        title:{

            describe:"this is title",
            demandOption:true,
            type:'string'
        },
        
    },
    handler: function (argv) {
        notes.removenotes(argv.title)
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    // handler: function () {
    //     console.log('Listing out all notes')
    // }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    // handler: function () {
    //     console.log('Reading a note')
    // }
})

// console.log(yargs.argv)

// Same as  ==> console.log(yargs.argv)
yargs.parse()

start



// const zato = {
//     name:"jay kanani",
//     age:"21",
//     place:"Rajkot"
// }

// const parsed_zato = JSON.stringify(zato)

// fs.writeFileSync("jay.json",parsed_zato)

// const databuffer = fs.readFileSync('jay.json')

// const Jasondata = databuffer.toString()

// const data = JSON.parse(Jasondata)
//   data.age = 5;
//   data.name = "kanani"

// const new_data = JSON.stringify(data)
// fs.writeFileSync("jay.json",new_data) 

