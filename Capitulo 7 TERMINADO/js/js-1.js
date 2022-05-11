//https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Details_of_the_Object_Model

const nombre = "Armando";
const edad = "24";
const hobby = "programar";



//Objeto Literal
const persona = {
    nombre: "Juan Perez",
    edad: "34",
    hobby: "bailar",
}
console.log(persona)
    //crear nuevos atributos al objeto
persona["fuerza"] = "moderada"
persona.color_ojos = "cafe"

console.log(persona["color_ojos"])

console.log(persona.fuerza)

console.log(persona)

///borrar atributos de los objetos

delete persona.color_ojos
console.log(persona)

//Extracción de valores

var nombre_n = persona.nombre;
console.log(nombre_n)

//Destructuring
//Al intentar obtener una variable que no existe en el objeto
//este crea una nueva variable pero no inicializada (undefined)
let { nombre_n2, edad_n } = persona;
//nombre_n2 = 2
console.log(nombre_n2);

let { fuerza } = persona;
console.log(fuerza);

console.log(persona)