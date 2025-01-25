import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styles from '../styles/Characters.module.css'
import { FaHeart } from "react-icons/fa";
import Favorites from './Favorites';

export default function Characters({favorite, setFavorite}) {
    //[]
    //un estado para guardar a los personajes de dragon ball
    const [characters, setCharacters] = useState([])
    //estado para la carga de datos
    const [loading, setLoading] = useState(true)
    //estado para el manejo de errores
    const [error, setError] = useState(null)

    //metodo para agregar y eliminar de favoritos
    const toogleFavorite = (character) => {
        // console.log("Hola");
        //console.log(character);
        //comparamos los personajes
        //find => devuelve el elemento encontrado
        //some => devuelve true si se encuentre y false si no lo encuentra
        //validando si el personaje existe o no en los favoritos
        if(favorite.some((element) => element.id == character.id)){
            //eliminamos el personaje de los favoritos
            setFavorite(favorite.filter((element) => element.id !== character.id))
        }else{
            //actualizamos el estado de los favoritos
            setFavorite([...favorite, character])
        }
    }
    //imprimiendo el estado de los favoritos
    console.log(favorite);
    

    /**
     * el efecto que se va hacer (funcion)
     * arreglo de dependencia
     * [] => que solamente se va renderizar una vez
     */
    useEffect(() => {
        //metodo para obtener la informacion de la api
        const getCharacters = async () => {
            try{
                //haciendo una promesa para testear la carga de datos
                //la promesa se retrase 2 segundos
                await new Promise((resolve) => setTimeout(resolve, 2000))

                //obtenemos la informacion de los personajes
                const response = await axios.get('https://dragonball-api.com/api/characters')
                //de la data que manda axios solicitamos el arreglo de los personajes (items)
                //console.log(response.data.items);
                //actualizando el estado de los personajes
                setCharacters(response.data.items)
                //desestructurar la data
                //const { items } = response.data
                
            }catch(error){
                setError(error.message);
                console.log(error.message);
            }finally{
                setLoading(false)
            } 
        }

        //llamando a la funcion para que haga efecto
        getCharacters();
    }, []) //arreglo de dependencias
    //console.log(characters);

    //validando la carga de datos y el manejo de errores
    if(loading) return <div>Cargando datos...</div>

    if(error) return <div>Error: No se pudo cargar los personajes</div>

    return (
        <div className={styles.container}>
            <h2>Personajes</h2>
            <div className={styles.container_card}>
                {/** iterar los personajes */}
                {
                    characters.map((character) => {
                        const isFavorite = favorite.some((element) => element.id == character.id);
                        return (
                            <div key={character.id} className={styles.card}>
                                <img src={character.image} alt={character.name} />
                                <h3>{character.name}</h3>
                                <p>{character.ki <=0 ? 'este guerrero no tiene ki' : character.ki }</p>
                                <p><strong>Raza:</strong> {character.race}</p>
                                <button onClick={() => toogleFavorite(character)}><FaHeart className={isFavorite ? styles.active : styles.inactive}/></button>
                            </div>
                        )
                    })
                }

                
            </div>
        </div>
    )
}
