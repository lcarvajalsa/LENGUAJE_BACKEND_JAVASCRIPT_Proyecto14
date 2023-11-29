const inputTarjeta = document.getElementById("inputTarjeta");
const inputFecha = document.getElementById("inputFecha");
const inputCVV = document.getElementById("inputCVV");

const mascaraNumero = document.getElementById("####-####-####-####");
const mascaraFecha = document.getElementById("##/##");
const mascaraCVV = document.getElementById("###");

let TarjetaNumero = [];
let FechaNumero = [];
let cvvNumero = [];

inputTarjeta.addEventListener("keydown", (e) => {
    if (e.key === "Tap") { /* Guarda el compotamiento */
        return;
    }
    e.preventDefault(); /*detener un evento por defecto*/
    ingresoDatos(mascaraNumero, e.key, TarjetaNumero);
    inputTarjeta.value = TarjetaNumero.join(""); /*guarde lo que envia el usuario en el arreglo */
});

inputFecha.addEventListener("keydown", (e) => {
    if (e.key === "Tap") {
        return;
    }
    e.preventDefault(); /*detener un evento por defecto*/
    ingresoDatos(mascaraFecha, e.key, TarjetaNumero);
    inputFecha.value = TarjetaNumero.join(""); /*guarde lo que envia el usuario en el arreglo */
})