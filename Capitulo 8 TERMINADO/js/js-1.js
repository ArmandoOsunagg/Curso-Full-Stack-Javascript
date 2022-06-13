//Sirven para agrupar elementos de cualquier elemento

let arreglo = [10, 20, 30]
let objeto = new Array('10', '20', '30')


//Manejan indices
console.log(arreglo)
console.log(objeto)

//Los arreglos son un tipo de dato complejo
//Son del tipo Object
console.log(typeof(arreglo))
console.log(typeof(objeto))

//Acceso a valores
let nuevoarreglo = [10, "10", 20, "20", [1, 2, 3], { nombre: "Armando Osuna", edad: "24" }, true]
console.log(nuevoarreglo)

console.table(nuevoarreglo)
console.log(nuevoarreglo[2])
console.log(nuevoarreglo[99])

let recorrido = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

console.log(recorrido[0])
console.log(recorrido[1])
console.log(recorrido[2])
console.log(recorrido[3])

//Tamaño del arreglo
tam = recorrido.length
console.log("------")
console.log(tam)
console.log("------")

for (let i = 0; i < recorrido.length; i++) {
    const element = recorrido[i];
    console.log(`El valor del array es su posición ${i} es: ${element}`);

}