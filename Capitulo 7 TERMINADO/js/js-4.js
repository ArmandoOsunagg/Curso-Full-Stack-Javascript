const marca = {
    nombre: "BMW",
    fecha_fundada: "07-03-1916",
    precio: 1234456789,
}



const carro = {
    llantas: 4,
    precio: 238100,
    modelo: "BMW FORTE",
}

console.log(carro);
console.log(marca);

//Con asign hacemos una mezcla de ambos objetos
//si ambos objetos comparten una misma propiedad
// la propiedad conserva el valor del ultimo objeto descrito
const objeto_mixto = Object.assign(carro, marca);

console.log(objeto_mixto);

//Spread Operator o Rest Operator
//los tres puntos indican que se crear una copia del objeto
const obj_mix = {...carro, ...marca }
console.log(obj_mix)