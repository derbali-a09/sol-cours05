var prompt = require('prompt-sync')()
var estVrai = false;
do{
    let saisie =  prompt('Entrer un nombre: ')
    if(isNaN(saisie)){
        console.log('Attention!' + saisie+' n\'est pas numérique')
    }else{
        estVrai = true
        console.log('Bravo!' + saisie+' est numérique')
    }
}while(!estVrai)