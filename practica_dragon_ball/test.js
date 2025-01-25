/** async - await (promesas) (funciones asincronica) */

//declarando una funcion asincronica para los datos de los personajes
export async function getAllCharacters() {
    try{
        const response = await fetch("https://dragonball-api.com/api/characters");
        const data = await response.json();
        console.log(data);

        //data.items
        //accedemos a la propidad items (donde se encuentran los personajes)
        const { items } = data;

        //LLAMANDO AL CONTENEDOR PARA LA LISTA DE PERSONAJES
        const dragonBallContainer = document.getElementById('list-dragon-ball');

        //return items;
        //for of => iterar elementos de arreglos y objetos
        for(const character of items){
            //accdemos al id y nombre de cada personaje
            const { id, name } = character
            //console.log(`Personaje: ${name}, ID: ${id}`);
            
            //https://dragonball-api.com/api/characters/1
            const response_character = await fetch(`https://dragonball-api.com/api/characters/${id}`);

            const data_character = await response_character.json()
            //console.log(data_character);
            //desestructurando el objeto de cada personaje
            const { name: nameCharacter, race, image, originPlanet, transformations } = data_character

            //desestructurando el objeto del planeta
            const { name: planet } = originPlanet 

            const itemTransformation = transformations.map(({ name }) => name)
            //console.log("Transformaciones: ", itemTransformation); //[]
            
            //creando un nuevo elemento html (article)
            const article = document.createElement('article');
            //operador ternario ? proceso : otra cosa
            article.innerHTML = `
                <h4>${nameCharacter}</h4>
                <img src=${image} >
                <p>Raza: ${race}</p>
                <p>Planeta: ${planet}</p>
                <p>Tranformaciones: ${itemTransformation.length > 0 ? itemTransformation.join(', ') : 'No hay transformaciones'}</p>
            `;
            //agregar un hijo al contenedor de la lista de personajes
            dragonBallContainer.appendChild(article)
        }
    }catch(error){
        console.log('Error al obtener la data de dragon ball', error);
    }
}

//Metodo para el consumo de planetas
export async function getPlanets() {
    try{
        const response = await fetch("https://dragonball-api.com/api/planets?limit=20")
        const data = await response.json();
        console.log(data);

        //desestructurando el objeto "data"
        const { items } = data;

        const containerPlanet = document.querySelector('#planet');
        //creando un select (etiqueta)
        const select = document.createElement('select');

        for(const planet_data of items){
            //console.log(planet_data);

            //desestructurar la info del planeta
            const { name } = planet_data;
            console.log(name);
            select.innerHTML += `
                <option value="${name}">${name}</option>
            `;
            //appendChild
            containerPlanet.appendChild(select);
        }
    }catch(error){
        console.log("Error al obtener los planetas", error);
    }
}
