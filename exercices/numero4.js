var prompt = require('prompt-sync')()
var tabSalaires = []
//remplissage des salaires
do{
    let salaire = prompt('Entrer un salaire: ')
    tabSalaires.push(parseInt(salaire))  //convertir explicitement en Int
    var next  = prompt('Encore un autre y/n ? ')
}while(next == 'y')

console.log(tabSalaires)
//foreach sur le tableau des salaires pour trouver les employés cadres
tabSalaires.forEach(salaire => {
    if(salaire >= 90000){
        console.log('Employé.e cadre avec un salaire de ' + salaire + ' $')
    }
})

//foreach sur le tableau des salaires pour augmentation des salaires
var tabNouveauxSalaires = new Array()//[]
const TAUX_AUG_CADRE = 0.02
const TAUX_AUG_NORMAL = 0.015

tabSalaires.forEach(salaire => {
    if(salaire >= 90000){
        tabNouveauxSalaires.push(salaire  +  (salaire * TAUX_AUG_CADRE))
    }else {
        tabNouveauxSalaires.push(salaire  +  (salaire * TAUX_AUG_NORMAL))
    }
})

console.log(tabSalaires)
console.log(tabNouveauxSalaires)