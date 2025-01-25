//SINTAXIS FOR: contador, limitante, incremento / decremento
let valor = 100;
for(let i = 0; i <= valor; i++){
    console.log(i);
}

let cadena = "Estamos en las estructuras de control";
for(let i = 0; i < cadena.length; i++){
    console.log(cadena[i]);
}

let arreglo = [1,2,3,4,5];
let fibonacci = [0,1]
/**
 * 0,1,1,2,3
 * 
 * arreglo[0] = 1
 * arreglo[1] = 2
 * arreglo[2] = 3
 * arreglo[3] = 4
 * arreglo[4] = 5
 */
//FIBONACCI
for(let i = 0; i < arreglo.length; i++){
    console.log(arreglo[i]);
}

//ALGORITMO DE SORTING / BUSQUEDA

let k = 1;
while(k <= 50){
    console.log(k);
    k++;
}

// let dato = true;
// while(dato){

// }

let l = 10;
do{
    //proceso
    //console.log(l); //imprimio 10
    l++
}while(l > 20)

//for of: recorremos un arreglo y devolvemos su valor
//for in:
//sacamos el valor de cada elemento
arreglo_lenguajes = ["PHP","JAVASCRIPT","JAVA","PYTHON","GO"];
for(const lenguaje of arreglo_lenguajes){
    console.log(lenguaje);
}
//lo utilizamos para sacar el indice de cada elemento del arreglo
for(const indice in arreglo_lenguajes){
    console.log(indice + ':' + arreglo_lenguajes[indice]);
}

/**En base al siguiente arreglo de notas [7,8,6.5,5,4,9,8.2]
- Obtener cuantos alumnos aprobaron (para aprobar la nota debe ser mayor o igual a 7)
- Obtener cuantos alumnos estan en recuperacion (deben tener una nota entre 5 y 6.9)
 - Obtener cuantos alumnos reprobaron */

 //readline


