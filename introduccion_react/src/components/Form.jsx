import React, { useState } from 'react'
import ListNotes from './ListNotes'
import { v4 as uuidv4 } from 'uuid'
import styles from "../styles/Form.module.css"


export default function Form({listNotes, setListNotes}) {
    //declarando un estado
    /**
     * [0] => se guarda como se inicializa el estado
     * [1] => se encarga de actualizar el estado
     */
    const [titleNote, setTitleNote] = useState("")
    const [descriptionNote, setDescriptionNote] = useState("")

    

    //funcion para capturar el titulo de la nota
    const handleTitle = (e) =>{
        //cuando encontres la etiqueta captura su valor
        //console.log(e.target.value);
        //actualizamos el estado
        setTitleNote(e.target.value)
    }

    const handleDescription = (e) =>{
        //cuando encontres la etiqueta captura su valor
        //console.log(e.target.value);
        //actualizamos el estado
        setDescriptionNote(e.target.value)
    }

    //metodo para guardar la nota
    const handleSubmit = (e) => {
        e.preventDefault()
        //guardar la nota

        //spread operator (...) hacemos una copia del arreglo y guardamos la nueva nota
        setListNotes([...listNotes, {
            id: uuidv4(),
            title: titleNote,
            description: descriptionNote
        }])
    }

    console.log(listNotes);
    
    /**
     * let titulo = document.querySelect().value
     */
    return (
        <div>
            <form action="" onSubmit={handleSubmit} className='form_data'>
                <div>
                    <input type="text" placeholder='ingresa un titulo'
                className={styles.input} onChange={(e) => handleTitle(e)}/>
                </div>

                <div>
                    <textarea placeholder='descripcion...' onChange={(e) => handleDescription(e)}></textarea>
                </div>

                <input type="submit" value="Guardar Nota" className={styles.btn}/>
                {/* <Button>Guardar Nota</Button> */}
            </form>
        </div>
    )
}

//creando estilos para el Form
// const Button=`
//     color: white;
//     background-color: blue;
// `