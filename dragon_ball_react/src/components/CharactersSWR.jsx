import axios from 'axios'
import React from 'react'
import useSWR from 'swr'
import styles from '../styles/Characters.module.css'
import { FaHeart } from "react-icons/fa";

//rescatar la informacion de la api por medio de fetch o axios
const fetcher = async (url) => {
    return await axios.get(url).then((response) => response.data).catch((error) => {
        throw new Error(`Error al cargar los datos de la api`)
    })
}

export default function CharactersSWR({favorite, setFavorite}) {
    /**
     * data = representa la informacion que se ha capturado
     * error = representa los errores si no hay informacion
     * isLoading = representa la carga de datos
     */
    const { data, error, isLoading } = useSWR('https://dragonball-api.com/api/characters', fetcher)

    //mostrando la informacion de los personajes
    console.log(data);

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
    
    //validando la carga de datos y el manejo de errores
    if(isLoading) return <div>Cargando datos...</div>

    if(error) return <div>{error.message}</div>

    return (
        <div className={styles.container}>
            <h2>Personajes</h2>
            <div className={styles.container_card}>
                {/** iterar los personajes */}
                {
                    data && data.items.map((character) => {
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
