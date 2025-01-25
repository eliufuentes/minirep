//Manejo de errores
export function dividir(a, b){
    //validamo si el segundo numero no sea cero
    if(b == 0){
        throw new Error('Division por cero no es permitida');
    }

    return a / b;
}

//Uso de manejo de errores "34" / 34 "34.5"
export function convertirNumero(str){
    //si la cadena es un numero lo imprimos pero si no es un numero vamos mandar un error (try/catch)
    try{
        //codigo
        let numero = Number(str);
        if(isNaN(numero)){ //no es numero
            throw new Error("Formato Invalido");
        }
        return numero;
    }catch(error){
        return 'Error:', error.message;
    }
}
