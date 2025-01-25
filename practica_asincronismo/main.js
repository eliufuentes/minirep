import logger from "./logger";
import { PI, sumar, saludo } from "./operaciones";
import { promise } from "./promesa";
import { dividir, convertirNumero } from "./test";


console.log(PI);
//console.log(logger("Hola desde una exportacion prederteminada"));
console.log(logger);
console.log(saludo);

console.log(dividir(10, 5));
//validando el resultado de la division
try{
  //code..
  let resultado = dividir(10, 0);
  console.log('Resultado: ', resultado);
}catch(error){
  console.log('Ocurrio un error:', error.message);
}

//console.log(dividir(10, 0));
console.log(parseInt("5") + 5); //concatenar
console.log("$5" - 5);

console.log(convertirNumero("100"));
console.log(convertirNumero("100b"));





