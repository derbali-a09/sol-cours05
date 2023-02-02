//en JAVA
//public void sayHello(){

//}


//en JavaScript
function sayHello(){
    var firstName = document.getElementById("firstname")    
    //alert("Hello " + firstName.value)
    var message = document.getElementById("message")
    message.innerHTML = "Hello "  + firstName.value
}

var btnHello = document.getElementById("btn_hello") //récupère le bouton de HTML par son ID
btnHello.addEventListener('click', sayHello)

