//Javascript es un lenguaje orientado a objetos
//estos objetos se basan en prototipos

/** Debido a esta diferencia puede ser menos obvio 
 * que javascrip pueda trabajar con herencia y jerarquías
 * de objetos
 */

//Javascript no tiene clases, unicamente objetos
//javascript tiene metodos constructores en ves de clases

/** En un lenguaje basado en clases, creas una jerarquía de clases 
 * atraves de la definición de clases. En estas mismas se especifica 
 * que la clase es una subclase de otra y de ahi existe la herencia
 *  en la cual tendrá la subclase tendrá carácteristicas de la clase padre
 */

/**Javascript trabaja la herencia al usar las propiedades de un objeto
 * como un prototipado, por medio de este puedes pasar caracteristicas
 * a otro objeto.
 */

/**En los lenguajes basados en clases normalmente se crea una clase en
 * tiempo de compilación y luego se crean instancias de clase. No se 
 * pueden cambiar el número o el tipo de propiedades a un objeto una vez definido
 * 
 * En javascript por el contrario en tiempo se ejecución se pueden agregar 
 * o quitar propiedades a un objeto. 
 * 
 * Si se añade una propiedad a un objeto A que esta haciendo 
 * uso de propiedades que vienen de un prototipo de otro objeto B,
 * esta nueva propiedad se añade al listado de atributos dentro
 * del prototipo del objeto A que también contiene las del objeto B
 */

//https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Details_of_the_Object_Model

function Objeto_A(nombre) {
    this.nombre = nombre;
}
var obj1 = new Objeto_A("Objeto 1");
console.log(obj1);

function Objeto_AA() {
    this.edad = "";
}


Objeto_AA.prototype = new Objeto_AA;
Objeto_AA.prototype.textura = "Aspera";
var obj2 = new Objeto_AA();
Object.seal(obj2);
Objeto_AA.prototype.naturaleza = "Firme";
obj2.edad = 29;
obj2.color = "rojo";
obj2.textura = "Dura";
console.log(obj2);
console.log(obj2.__proto__);

obj2.__proto__.color = "azul";
console.log("------")
console.log(obj2);
console.log(obj2.__proto__);

//Propiedades heredadas en compilación

function Objeto_B() {
    this.contenedor = [1, 2, 3]
}


//Se pueden cambiar de prototipo en tiempo de ejecución, 
//si un objeto no hereda de ninguno será del tipo Object

//Esta paradoja hace pensar que como uno elemento hereda del otro
//al buscar el prototipo del que objeto que heredamos, pensariamos 
// que volveriamos a salir nosotros debido a que

var obj3 = new Objeto_B();
console.log(obj3);

obj3.__proto__ = new Objeto_A();
console.log(obj3)

console.log(obj1)

//console.log(obj1 instanceof Objeto_B)
//console.log(obj1 instanceof Object)
obj1.__proto__ = new Objeto_B();
console.log(obj1)


//Podemos realizar comparaciones para ver si un elemento hereda de otro
console.log(obj1)
console.log(obj1 instanceof Objeto_B)
console.log(obj1.__proto__ instanceof Objeto_B)