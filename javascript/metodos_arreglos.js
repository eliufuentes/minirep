let personas = [
    { nombre: 'Isaac', edad: 16 },
    { nombre: 'Cristian', edad: 18 },
    { nombre: 'Edgar', edad: 15 },
    { nombre: 'Juan', edad: 30 },
    { nombre: 'Maria', edad: 25 },
    { nombre: 'Pedro', edad: 35 }
];
//METODOS ARREGLOS
//map() => Se utiliza para recorrer un arreglo
personas.map(persona => {
    //devolver solo las personas que sean mayor edad
    if(persona.edad >= 18){
        console.log(persona.nombre);
    }
})

//devolver un nuevo arreglo con las personas mayores de edad
//filter() => filtra y devuelve un nuevo arreglo en base a una condicion
let mayores_edad = personas.filter(persona => persona.edad >= 18)
console.log(mayores_edad);

//find() => Retorna el primer elemento que cumpla la condicion
personas.find(persona => persona.edad >= 18);

//Agregando elementos al final de arreglo
personas.push({nombre: 'Mateo', edad: 19})

//Agregando elemento al principio del arreglo
personas.unshift({nombre: 'Marcela', edad: 21})

//Eliminar el ultimo elemento del arreglo
personas.pop()

//Eliminar el primer elemento
personas.shift()
console.log(personas);

