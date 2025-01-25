import FigurasGeomtericas from "./figuras";

export class Triangulo extends FigurasGeomtericas{
    base:number;
    altura:number;

    constructor(base:number, altura:number){
        super(); //constructor padre vacio
        this.base = base;
        this.altura = altura;
    }

    //Polimorfismo
    calcularArea(): void {
        //base * altura / 2
        let result = (this.base * this.altura) / 2;
        console.log(`El area del triangulo es ${result}`);
    }
}