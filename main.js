console.log("soy externo")
// para acceder a un ID


let parrafo1 = document.getElementById("pConId")
console.log(parrafo1)

//para acceder a una clase

let parrafo2 = document.getElementsByClassName("pConClass")
console.log(parrafo2)

// para acceder a una etiqueta

let parrafo3 = document.getElementsByTagName("p")
console.log(parrafo3)

// cambiar texto con un boton
function cambiarTitular(){
let titular1 = document.getElementById("titular")

titular1.innerText = "Hola cosa"
}

 


