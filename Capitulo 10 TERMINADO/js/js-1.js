var monedas = 1000;
if (monedas == 3000) {
    console.log("Tienes 3000 Monedas")
} else {
    console.log("No cuentas con 3000 monedas exactas")
}



if (monedas != 0) {
    console.log("Puedes entrar a jugar");
} else if (monedas > 200) {
    console.log("Tienes más de 200 monedas, entra a jugar!");
} else if (monedas > 300) {
    console.log("Tienes más de 200 monedas, entra a jugar!");
} else {
    console.log("No tienes ni una moneda");
}

if (monedas === 1000) {
    console.log("Son iguales")
} else if (monedas !== 1000) {
    console.log("No son iguales")
}

if (monedas === "1000") {
    console.log("Son iguales")
} else if (monedas !== "1000") {
    console.log("No son iguales");
}