//Clase Base
export default abstract class FigurasGeomtericas{
    // numero1:number;
    // numero2:number;
    constructor() {}

    // calcularArea(){
    //     console.log("Calculando el area de las figuras geometricas");
    // }
    dibujar(){
        //logica
        console.log(`proceso para dibujar la figura`);
    }

    //declaramos el metodo
    abstract calcularArea() : void; //obligatorios
}

// let figura = new FigurasGeomtericas();
// figura.calcularArea(); //Calculando el area de las figuras geometricas