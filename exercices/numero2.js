var prompt = require('prompt-sync')()

var quantite = prompt('Entrer une quantité en secondes: ')


var heures = Math.floor( quantite / 3600)
var minutes  = Math.floor((quantite % 3600) / 60)
var secondes  = (quantite % 3600) % 60
console.log("Il y a " + heures + " heures, " + minutes + " minutes, " + secondes  + " secondes.")