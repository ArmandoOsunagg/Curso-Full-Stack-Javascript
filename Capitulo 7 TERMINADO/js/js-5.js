var nombre = "a";
var precio = "b";
var sabor = "c";

const refresco = {
    nombre: "Nuevo Refresco",
    precio: 14,
    sabor: "Cola",
    en_venta: true,
    ver_informacion: function() {
        console.log(`El ${this.nombre} de sabor ${this.sabor} tiene un precio de ${this.precio} pesos`)
    }
}

refresco.ver_informacion();

//Otra forma de crear objetos que no sea Object Literal
//para mejor usar Object Constructor
function Refresco(nombre, precio, sabor) {
    this.nombre = nombre;
    this.sabor = sabor;
    this.precio = precio;
    en_venta = true;

    this.ver_informacion = function() {
        console.log(`El ${this.nombre} de sabor ${this.sabor} tiene un precio de ${this.precio} pesos`)
    }
}

var mi_refresco = new Refresco("Otro refresco", 16, "Fresa");
console.log(mi_refresco);
mi_refresco.ver_informacion();