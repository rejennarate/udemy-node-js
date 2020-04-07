
const getNotes = require("./notes.js")
const fs = require('fs')

fs.writeFileSync('notes.txt', "god damn it fuck node")
fs.appendFileSync('notes.txt', "\nquiero morir")

const returnValue = getNotes()
console.log(returnValue)

