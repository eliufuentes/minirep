//Creamos una nueva promesa
//resolve = funcion que determina si la promesa es un exito
//reject = funcion que determina si la promesa fallo
export const promise = new Promise((resolve, reject) => {
    //simulamos una operacion que tomara un segundo, validamos si es verdadero la promesa se cumplio sino fallo
    setTimeout(() => {
        let operacion = false;
        if(operacion){
            resolve('Operacion Exitosa');
        }else{
            reject('Operacion Fallida');
        }
    }, 1000);
})

console.log(promise);
//validamos si la promesa se cumple o no se cumple (then / catch)
promise.then((message) => {
    console.log(message);
}).catch((message) => {
    console.log(message);
})

