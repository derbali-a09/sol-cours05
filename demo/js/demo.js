//en JAVA
//public void sayHello(){

//}


//en JavaScript
function sayHello(){
    let firstName = document.getElementById("firstname")    
    //alert("Hello " + firstName.value)
    let message = document.getElementById("message")
    message.innerHTML = "Hello "  + firstName.value
}

var btnHello = document.getElementById("btn_hello") //récupère le bouton de HTML par son ID
btnHello.addEventListener('click', sayHello)

var numbers1  = []
var numbers2  = new Array()

numbers1[0] = 13
numbers1.push(25)

var today = new Date() // la date actuelle
var today2 = Date.now() // la date actuelle

var newYear = new Date(2023,0,1)


