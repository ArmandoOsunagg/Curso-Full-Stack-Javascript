let resultado;

//GLOBAL PI
resultado = Math.PI;
console.log(resultado);
//Redondeos
/* resultado = Math.round(2.8);
console.log(resultado);
resultado = Math.round(2.2);
console.log(resultado);
resultado = Math.round(2.6);
console.log(resultado);
resultado = Math.round(2.5);
console.log(resultado);
 */

//redondear hacia arriba
resultado = Math.ceil(2.1);
console.log(resultado);
//redondear hacia abajo
resultado = Math.ceil(2.9);
console.log(resultado);

//Obtener raiz cuadrada
resultado = Math.sqrt(144);
console.log(resultado);

//Valor absoluto
//redondear hacia abajo
resultado = Math.abs(-500);
console.log(resultado);

//Potencia
resultado = Math.pow(2, 3);
console.log(resultado);

// Minimo de serie de numeros
resultado = Math.min(2, 4, 5, 6, 7, 0, 10, -2, 3)
console.log(resultado)


// Maximo de serie de numeros
resultado = Math.max(2, 4, 5, 6, 7, 0, 10, -2, 3)
console.log(resultado)


// Maximo de serie de numeros
resultado = Math.random()
console.log(resultado)

// Maximo de serie de numeros
resultado = Math.floor(Math.random() * 40)
console.log(resultado)