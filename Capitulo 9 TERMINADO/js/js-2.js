//Javascrip cuenta con muschisimas funciones precargadas


//Busca ParseInt y ParseFloat en window
console.log(window)
valores = Object.keys(window)
console.log()
    //Recorrer todos los atributod que tiene
console.log(valores.length)
for (let i = 0; i < valores.length; i++) {
    console.log(typeof(window[valores[i]]))
}
console.clear()

//Diferencia entre funciones y metodos
const valor1 = "A";
const valor2 = "20";

//Metodos son los que estan dentro de objetos
//Funciones son las que no estan dentro de objetos

console.log(parseInt(valor1))
console.log(parseInt(valor2))

//Lo anterior es metodo o función? veamos...

const miObjeto = {
    nombre: "Armando",
    edad: function() {
        console.log("24")
    }
}

miObjeto.edad() //Esto es un metodo porque viene de un objeto
miFuncion() //Esto es una funcion

function miFuncion() {
    console.log("Soy una funcion")
}


//Entonces ParseInt() es función o metodo???
//La regla de parametros y argumentos es la misma
// tanto para funciones y metodos
console.clear()

//Existe la sobrecarga de funciones en Javascript??
//La respuesta es No, debido a que javascript es 
// orientado a prototipos, no vamos a hondar mucho

console.clear()

/* function lecturaDatos(param1, param2) {
    console.log("Hola2")
} */

function lecturaDatos() {
    console.log("Hola")
}

lecturaDatos("Hola", "Mundo");
//Se sobrescribe la funcion por la ultima descrita
function lecturaDatos(param1, param2) {
    console.log("Hola2")
}
console.clear()

function lecturaDatos() {
    console.log("Hola Mundo")
    console.log(arguments)
    console.log(typeof(arguments))
}
lecturaDatos(1, "Hola", { nombre: "Armando" }, 4, 5, 6, 7)


console.clear()


function lecturaDatos() {
    console.log("Hola Mundo")
    console.log(arguments)
    console.log(typeof(arguments))


    if (arguments.length == 0) {
        console.log('No argument is passed.');
    }

    //Solo un argumento
    else if (arguments.length == 1) {
        console.log('You have to pass at least two arugments to perform addition.');
    }

    //Multiples argumentos
    else {
        let sum = 0;
        let length = arguments.length;
        for (var i = 0; i < length; i++) {
            sum = sum + arguments[i];
        }
        console.log("Sum is " + sum);
    }
}

console.clear()
console.log("--------------------")
lecturaDatos()
console.log("--------------------")
lecturaDatos(1, 2)
console.log("--------------------")
lecturaDatos(1, 2, 3, 4, 5, 6, 7)
console.log("--------------------")


/* Estar buscando cantidades de argumentos 
    o estar filtrando por tipos de datos de argumentos
    para intentar simular sobrecarga de funciones no es
    una buena practica, debido a que es tardado y poco mantenible.

    En cambio si necesitas realizar algo así, lo mejor que puedes hacer
    es declarar parametros que siempre vas a ocupar (si no no los pongas)
    y al final adicionar un objeto como argumento con los valores.
    Asi tendrás una forma de saber identificarlos en caso de que
    existan dentro de tu función.
*/
console.clear()

function lecturaDatos(param1, param2, restantes) {

    console.log(arguments)
    console.log(param1)
    console.log(param2)
    console.log(restantes)

    if (restantes) {
        if (restantes["cinco_cuatro"]) {
            console.log(restantes["cinco_cuatro"])
        }
        if (restantes["nombre_objeto"]) {
            console.log((restantes.nombre_objeto));
        }
    }

}

//Asi no
lecturaDatos(1, 2, null, "4", 5.4, { nombre: "Armando" })
    //Asi si
console.clear()
lecturaDatos(1, 2, {
    valorNulo: null,
    cuatro_s: "4",
    cinco_cuatro: 5.4,
    nombre_objeto: { nombre: "Armando Osuna" }
})