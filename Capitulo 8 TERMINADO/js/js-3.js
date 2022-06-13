//Sirven para agrupar elementos de cualquier elemento

//Forma declarativa de crear arreglos
//las anteriores formas con push y unshift es 
//de la forma imperativa

let vacio = []
let bolsa = ["jabon", "shampo", "esponja"]
let arreglo;


arreglo = [...bolsa, 1, ...vacio]

console.log(arreglo)
arreglo = [...arreglo, 2, 3]

console.log(arreglo)

//Eliminar elementos

//Elimina al final
arreglo.pop()
console.table(arreglo)

//Eliminar al inicio del arreglo
arreglo.splice(1, 1)

console.table(arreglo)
    //Agregar un elemento en una posicion
arreglo.splice(4, 0, "Nuevo Elemento")

console.table(arreglo)

//Destructuring en Arreglos

const valores = [1, 2, 3, 4, 5, 6];

const [primero] = valores;
console.log(primero)
console.table(valores)

const [primero2, segundo, tercero, cuarto] = valores;
console.log(tercero)
console.table(valores)


const [, segundo2, , cuarto2, ...restantes] = valores;
console.log(cuarto2)
console.log(segundo2)
console.log(restantes)