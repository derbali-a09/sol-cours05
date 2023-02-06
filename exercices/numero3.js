var prompt = require('prompt-sync')()

var dateFete = prompt('Entrer vote date de fête (JJ/MM/AAAA): ')
var aujourdhui = new Date()
var anneeCourante =  aujourdhui.getFullYear()   //2023 
var anneeFete = dateFete.substring(6)  // parseInt(dateFete.substring(6))
console.log("Votre age est " + (anneeCourante - anneeFete) + " ans.")
