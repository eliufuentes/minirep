/** declaracion de variables y constantes */
/**
 * let
 * const
 * var
 */

//scope
var nombre = "Kenia"; //string
var nombre = "Maria";
nombre = "Jose";
let apellido = "Paiz";
let contador_vocales = 0; //int
apellido = "";
const PI = 3.1416; //float
//clean code JS
let booleano = true;
let imagen = null;
//undefined
let mensaje;

//arreglos, objetos, funciones
let frutas = ["manzana","pera","fresas"];
console.log(frutas[3]);

//console.log(random); //no existe


let gato = {
    nombre: "Pancho",
    edad: 10,
    color: "cafe"
}
console.log(gato.edad);
class Persona{}

/**
 * funcion: bloque de codigo reutilizable
 */

verificarVotacion()

//funcion declarativa
function verificarVotacion(){
    //code..
}
verificarVotacion()
verificarVotacion()


//Saludar() //error

//Funcion de flecha
const Saludar = () => {
    //code..
}
Saludar()
Saludar()

//expresion de funcion
const Despedida = function(){
    //code..
}
Despedida()
Despedida()

/**
 * Estructuras de control
 */

/**
 * parametros
 * argumentos
 */
//condicionales
function votar(edad){
    //let edad = 20;
    // if(edad >= 18){
    //     console.log("Puedes votar en las elecciones");
    // }else{
    //     console.log("Eres menor de edad, no puedes votar");
    // }

    //operador ternario 
    return edad >= 18 ? "Puedes votar en las elecciones" : "Eres menor de edad, no puedes votar";
    //code..
}
console.log(votar(10));
votar(18);

//else if = evaluar varias condiciones
/**Elabore un algoritmo para una tienda de café que tenga una promoción de descuento para vender al por mayor, 
esto dependerá del número de café que compre las personas, si son más o igual de 5 café pero menor o igual a 10 tendrán un 20% de descuento, 
si compra más de 10 pero menor o igual a 20 tendrán un 40% de descuento, si compra más de 20 tendrá el 50% de descuento.

Nota: El precio del café es de $25.00 */

function calcularDescuento(cantidad){
    const NUM = parseFloat(cantidad);
    const PRECIO = 25;
    const PRECIO_SIN_DESC = PRECIO * NUM;
    let descuento = 0;

    if(NUM >= 5 && NUM <= 10){
        descuento = PRECIO_SIN_DESC - (PRECIO_SIN_DESC * 0.2)
        console.log("Obtuviste un descuento del 20% y tu total a pagar es " + descuento);
    }else if(NUM > 10 && NUM <= 20){
        descuento = PRECIO_SIN_DESC - (PRECIO_SIN_DESC * 0.4)
        console.log("Obtuviste un descuento del 40% y tu total a pagar es " + descuento);
    }else if(NUM > 20){
        descuento = PRECIO_SIN_DESC - (PRECIO_SIN_DESC * 0.5)
        console.log("Obtuviste un descuento del 50% y tu total a pagar es " + descuento);
    }else{
        console.log("Tu total a pagar es " + PRECIO_SIN_DESC);
    }
}
calcularDescuento(12);

function calcularDescuento(cantidad) {
    PRECIO_UNITARIO_CAFE = 25.00;
    let descuento = 0;

    switch (forma_pago) {
        case (cantidad >= 5 && cantidad <= 10):
            descuento = 0.20;
            break;
        case (cantidad > 10 && cantidad <= 20):
            descuento = 0.40;
            break;
        case (cantidad > 20):
            descuento = 0.50;
            break;
    }

    const precioSinDescuento = cantidad * PRECIO_UNITARIO_CAFE;
    return precioSinDescuento * (1 - descuento);
}

const cantidadCafes = 12;
console.log(`El precio para ${cantidadCafes} cafés es: $${calcularDescuento(cantidadCafes).toFixed(2)}`);


//Estructuras repetitivas: for, while, do while


