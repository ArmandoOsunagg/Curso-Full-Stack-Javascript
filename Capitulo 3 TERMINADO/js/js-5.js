const frase = "Mi nuevo taller de nombretema"

//replace para remplazar textos
console.log(frase)
console.log(frase.replace("nombretema", "Excel"))

//slice para cortar string
console.log(frase.slice(0, 5))
console.log(frase.slice(5))
console.log(frase.slice(5, 1))

//substring alternativa a slice
console.log(frase.substring(0, 5))
console.log(frase.substring(5, 0))


const nombre = "Armando Osuna"

console.log(nombre.substring(0, 1))
console.log(nombre.charAt(0))