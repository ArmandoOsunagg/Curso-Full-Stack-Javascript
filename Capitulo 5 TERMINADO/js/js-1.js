var num = 136;

var num2 = "137";

var num3 = 10;


var res = num3 < num;
console.log(res)

res = num3 > num;
console.log(res)
res = num > num3;
console.log(res)

//Comparando numeros con strings
res = num < num2;
console.log(res)

var a = "12";
var b = 2;
var c = "2";

var d = "00100";
console.log(a > b)

console.log(c > a)

console.log(d > b)

console.log(a == b)

console.log(a != c)

console.log(20 == 20)
console.log(20 == "20")
console.log(20 === "20")
console.log(typeof(20))
console.log(typeof("20"))
console.log(20 === parseInt("20"))


console.log(20 != 20)
console.log(20 != "20")
console.log(20 !== "20")
console.log(typeof(20))
console.log(typeof("20"))
console.log(20 !== parseInt("20"))

//Null y Undefined
let numberA;

//Undefined es un valor primitivo de Javascript
//Funciones sin un return especifico devuelven undefined

console.log(numberA)
console.log(typeof(numberA))
let numberB = null;


//Null es un valor
console.log(numberB)
    //ECMA define que null debe ser tipo objeto
    //Representa la intencional ausencia de un valor
console.log(typeof(numberB))

console.log(numberA == numberB)
console.log(numberA === numberB)
console.log(typeof("A") === 'string')
console.log(typeof(null) === 'object')
console.log(typeof(null) === 'undefined')
console.log(typeof(undefined) === 'undefined')

console.log(NaN)
console.log(typeof(NaN))

console.log(null == undefined)
console.log(NaN == undefined)
console.log(NaN == null)