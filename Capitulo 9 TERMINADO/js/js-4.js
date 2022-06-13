//Funciones anonimas pero más simples


const funcion_flecha = () => {
    console.log("Hola")
}

///Las arrow functions tienen implicito el return de lo ultimo descrito
//Solo cuando hay una sola linea
var funcion_flecha2 = () => "Mundo";

console.log(funcion_flecha())
console.log(funcion_flecha2())


//Pasar parametros
var a_f = (a, b) => {
    res = a + b;
    return res;
}

console.log(a_f(2, 3));

//Todavia más simplificado
var a_f2 = a => {
    return a + 3;
}
console.log(a_f2(7));

//Aplicaciones
let arr = [1, 2, 3, 4, 5, 6, 7]

const recorrido_array = arr.map((element) => {
    console.log(element)
})
console.log(arr);


var mi_obj = [
    { nombre: "Armando", apellido: "Osuna" },
    { nombre: "BMW", motor: "RTYH7888" },
    { nombre: "Maestro", antiguedad_anios: "3" }
]

recorrido_mi_obj = mi_obj.map((element) => {
    console.log(element.nombre)
});

console.log("-----------------------")

recorrido_mi_obj = mi_obj.forEach((element) => {
    console.log(element.nombre)
});