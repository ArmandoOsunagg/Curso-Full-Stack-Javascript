var dinero = 999;

var deuda = 0;
deuda = 999;


if (dinero > deuda) {
    console.log("La deuda se puede pagar");
} else {
    console.log("No tienes el dinero suficiente")
}

if (dinero < deuda) {
    console.log("No tienes el dinero suficiente");
} else {
    console.log("La deuda se puede pagar");
}

if (dinero == deuda) {
    console.log("Puedes pagar justo")
} else if (dinero > deuda) {
    console.log("Puedes pagar la deuda y te sobra")
} else {
    console.log("No tienes el dinero suficiente")
}



//Switch


var formaPago = "Efectivo";

function pago() {
    console.log("Pago realizado...")
}

switch (formaPago) {
    case "Efectivo":
        console.log("Estas pagando con efectivo...")
        pago()
        break;
    case "Credito":
        console.log("Pagando con credito")
    case "Debito":
        console.log("Pagando con tarjeta de debito")
    default:
        console.log("Error al ingresar el metodo de pago.")
        break;
}