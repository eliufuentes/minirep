import FigurasGeomtericas from "./figuras";

export class Circulo extends FigurasGeomtericas{
    radio:number;

    constructor(radio:number){
        super();
        this.radio = radio;
    }

    //sobreescribimos el metodo
    calcularArea(): void {
        //let result = Math.PI * this.radio * this.radio;
        let result  = Math.PI * Math.pow(this.radio, 2);
        console.log(`El area del circulo es ${result.toFixed(2)}`);
    }
}

let objeto = new Circulo(23);

//Clase abstracta (padre) -> compartir sus atributos y metodos a sus clases hijas
abstract class Prueba{
    //atributos

    //metodos
    despedir(){
        //comportamiento que yo quiero
        return "Adios chicos!";
    }

    //cuando tengamos metodos abstractos
    abstract saludar(): void; //el comportamiento se lo define las clases hijas (obligatorios)
}

class TestHija extends Prueba{

    saludar(): void {
        //definimos el comportamiento
        console.log("Saludo desde la clase TestHija");
        
    }
}


class TestHijo extends Prueba{

    saludar(): void {
        //definimos el comportamiento
        console.log("Saludo desde la clase TestHijo con diferente comportamiento :)");
        
    }
}

//let objeto2 = new Prueba()