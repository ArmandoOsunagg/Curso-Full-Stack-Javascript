//Sirven para agrupar elementos de cualquier elemento

let arreglo = [10, 20, 30]


console.table(arreglo)

arreglo[0] = 1;
arreglo[9] = 99;
arreglo[6] = 66;
arreglo[55] = 55;
console.table(arreglo)

//Agregar elementos con metodos

let miarrego = []

console.table(miarrego)
miarrego.push(3)

console.table(miarrego)
miarrego.push(2)

miarrego.push(500)

console.table(miarrego)

//Como agregar elementos al inicio del array


miarrego.unshift("Cero");
console.table(miarrego)
miarrego.unshift("Primero", "Segundo");
console.table(miarrego)