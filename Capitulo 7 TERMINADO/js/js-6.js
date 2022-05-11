const refresco = {
    nombre: "Nuevo Refresco",
    precio: 14,
    sabor: "Cola",
    en_venta: true,
    ver_informacion: function() {
        console.log(`El ${this.nombre} de sabor ${this.sabor} tiene un precio de ${this.precio} pesos`)
    }
}


console.log(Object.keys(refresco));
console.log(Object.values(refresco));
console.log(Object.entries(refresco));