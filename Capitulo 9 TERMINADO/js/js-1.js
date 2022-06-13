function miFuncion() {
    console.log("Soy una funcion simple")
}


console.log(miFuncion);
miFuncion();
console.log("-----")
console.log(miFuncion());

function miFuncion2() {
    console.log("Soy una funcion simple2")
    return "Devuelvo este mensaje";
}
console.log("----------")
console.log(miFuncion2())

//Función con parametros
function miFconParametros(param1, param2) {
    console.log(param1 + param2);
}

//Llamada de función con argumentos
miFconParametros(6, 2);



//Como limpiar consola
console.clear()
    //Expression de funcion
const sumar = function() {
    console.log(2 + 1)
}

sumar();

const sumar2 = function() {
    console.log(2 + 1)
}

sumar2();



//Hoisting en javascript
console.clear()
    /**
     * Una de las ventajas en JavaScript de colocar 
     * (ponerlas en memoria) las declaraciones de funciones antes de
     *  ejecutar cualquier otro segmento de código es que permite 
     * utilizar una función antes de declararla en el código. 
     */

/* Al hablar de Hoisting o Elevar estamos diciendo que
    vamos a poner todas las declaraciones al principio
    del documento aunque en el código se vean en otras
    posiciones. IMPORTANTE: esto no aplica para las inicializaciones. */

/* var x = 5;

(function() {
    console.log("x:", x); // no obtenemos '5' sino 'undefined'
    var x = 10;
    console.log("x:", x); // 10
}()); */


var x = 5;
//Javascript solo afecta la declaración mas no la inicializacion

(function() {
    var x; // Se elevo la declaración
    console.log("x:", x); // undefined
    x = 10;
    console.log("x:", x); // 10
}());


var a = 1; // Inicializa x
console.log(a + " " + b); // '1 undefined'
var b; // Se elevo la declaración
b = 2; // Inicializa y