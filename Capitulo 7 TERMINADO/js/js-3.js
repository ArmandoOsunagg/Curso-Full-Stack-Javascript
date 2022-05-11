"use strict";
//Objeto Literal
const persona = {
    nombre: "Juan Perez",
    edad: "34",
    hobby: "bailar",
    datos: {
        profesion: "Maestro",
        tiempo_trabajando: " 3 años",
        paises_visitados: {
            pais1: "taiwan",
            pais2: "mexico",
            pais3: "canada",
        }
    }
}

const nombre = "Carlos Perez"

//No se puede cambiar
//nombre = "e"0

persona.nombre = nombre
console.log(persona.nombre)



const carro = {
        llantas: 4,
        precio: 238100,
        modelo: "BMW FORTE",
    }
    //No funciona
    //x = 29
var x = 29
console.log(x)


console.log(carro)

//Como congelar un objeto en cuestión
Object.freeze(carro);

//No funciona
//carro.modelo = "VS GOLF"

console.log(Object.isFrozen(carro))

//No hay forma de descongelar un objeto congelado


//Como sellar un objeto con SEAL
//Con seal no deja modificar las variables y 
//tampoco se pueden borrar o añadir nuevas variables

const robot = {
    motor: "1569 MTR",
    precio: 855555,
    modelo: "KYO-NYA 300",
}

Object.seal(robot);

//delete robot.modelo;
//robot.nueva_variable = "Si";

robot.modelo = "ASEFWERWE";
console.log(Object.isSealed(robot))