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
            pais3: "Canada",
        }
    }
}

console.log(persona)

console.log(persona.datos)

//-

let { datos: { profesion }, edad, datos: { paises_visitados: { pais3 } } } = persona;
console.log(profesion)
console.log(edad)
console.log(pais3)
console.log(persona)