function mensaje(texto = "No agrego un mensaje", segundo_mensaje) {
    console.log(texto);
    if (segundo_mensaje == undefined) {
        console.log("No hay segundo mensaje")
    }
}


mensaje("Hey hola")
mensaje()
console.clear()
    //Encadenamiento de funciones
function f1() {
    console.log("Mensaje 1")
        //return f2();
}

function f3() {
    console.log("Mensaje 3")
        //return "Fin del código";
}

function f2() {
    console.log("Mensaje 2")
        //return f3();
}
f1();
//console.log(f1());


let miObj = {
    miMetodo: function() {

    }
}