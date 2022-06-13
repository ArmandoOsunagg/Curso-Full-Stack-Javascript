let bolsa = [
    { elemento: "Manzanas", valor: "39" },
    { elemento: "Bananas", valor: "40" },
    { elemento: "Peras", valor: "29" },
    { elemento: "Fresas", valor: "59" },
    { elemento: "Frambuesas", valor: "29" },
    { elemento: "Melones", valor: "60" },
]


for (let i = 0; i < bolsa.length; i++) {
    const element = bolsa[i];
    console.log(element)
}
console.log("--------------")
    //  Existen otros metodos para poder trabajar de mejor
    //  manera los arrays
bolsa.forEach(function(element) {
    console.log(element)
})


console.log("--------------")
    //Otra forma de trabajar con arrays
let nuevaBolsa = bolsa.map(function(element) {
    return (element)
})

console.log(bolsa)
console.log(nuevaBolsa)