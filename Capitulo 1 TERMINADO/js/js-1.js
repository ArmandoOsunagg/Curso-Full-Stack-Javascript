//Pide al usuario su nombre
const nombre = prompt("Cual es tu nombre?")
    //Se cambia el texto del elemento container
document.querySelector(".container").innerHTML = `Hola ${nombre}`



//Cosas para poner en la consola para demostrar lo que se puede hacer en la consola

console.time("mi_timer")

const mensaje = "Hola mundo"
console.log(mensaje)

console.log([1, 2, 3, 4]);

console.table([1, 2, 3, 4, 5]);

console.warn("Advertencia")

console.timeEnd("mi_timer")


const obj = {
    nombre: "juan"
}

console.log(obj)

function mi_funcion() {
    console.log("Bienvenidos al curso")
}