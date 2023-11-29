const inputTarjeta = document.getElementById("inputTarjeta");
const inputFecha = document.getElementById("inputFecha");
const inputCVV = document.getElementById("inputCVV");

const mascaraNumero = "####-####-####-####";
const mascaraFecha = "##/##";
const mascaraCVV = "###";

let TarjetaNumero = [];
let FechaNumero = [];
let cvvNumero = [];

inputTarjeta.addEventListener("keydown", (e) => {
    if (e.key === "Tab") { /* Guarda el compotamiento */
        return;
    }
    e.preventDefault(); /*detener un evento por defecto*/
    ingresoDatos(mascaraNumero, e.key, TarjetaNumero);
    inputTarjeta.value = TarjetaNumero.join(""); /*guarde lo que envia el usuario en el arreglo */
});

inputFecha.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
        return;
    }
    e.preventDefault(); /*detener un evento por defecto*/
    ingresoDatos(mascaraFecha, e.key, FechaNumero);
    inputFecha.value = FechaNumero.join(""); /*guarde lo que envia el usuario en el arreglo */
});

inputCVV.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
        return;
    }
    e.preventDefault(); /*detener un evento por defecto*/
    ingresoDatos(mascaraCVV, e.key, cvvNumero);
    inputCVV.value = cvvNumero.join(""); /*guarde lo que envia el usuario en el arreglo */
});

function ingresoDatos(mascara, key, arreglo) {
    let numeros = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    if (key === "Backspace" && arreglo.length > 0) { /*si hay mas de un lo borra */
        arreglo.pop();
        return;
    }
    if (numeros.includes(key) && arreglo.length + 1 <= mascara.length) { /*inferior al limite de los datos */
        if (mascara[arreglo.length] === "-" || mascara[arreglo.length] === "/") {
            arreglo.push(mascara[arreglo.length], key);
        } else { /*si no  solo guarde lo que esta ingresando */
            arreglo.push(key);
        }
    }
};