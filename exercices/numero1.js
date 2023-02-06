//EN JAVA
//System.out.println()

//EN JavaScript
var prompt = require('prompt-sync')()

console.log('Numéro 1')
var ageEnfant = prompt("Saisir l'age de votre enfant: ") // par exemple 
var categorie = "Pas de catégorie"
if(ageEnfant >=6 && ageEnfant<=7){
    categorie = "Poussin"
}else if (ageEnfant >=8 && ageEnfant <=9){
    categorie = "Pupille"
}else if (ageEnfant>=10 && ageEnfant <=11){
    categorie = "Minime"
}else if(ageEnfant >=12 && ageEnfant <= 14){
    categorie = 'Cadet'
}
console.log('Categorie est ' + categorie)