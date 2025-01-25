import React from 'react'
import { useForm } from 'react-hook-form'
import styles from "../styles/Form.module.css"
import { v4 as uuidv4 } from 'uuid'

export default function FormHook({listNotes, setListNotes}) {
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();

    /**
     * register = guarda la data (la entrada de cada input)
     * handleSubmit = accion de lo que vamos hacer con la data
     * watch = testeamos lo que se va guardando en cada input (consola)
     * formState: { errors } = manejo de errores
     */

    //funcion para guardar los datos de la nota
    const registerNote = (data) =>{
        console.log(data);
        setListNotes([...listNotes, {
            id: uuidv4(),
            title: data.title,
            description: data.description
        }])

        //resetee la entrada de datos
        reset()
    }

    console.log("Testeando el titulo: ", watch("title"));
    /**
     * register guarda un objeto en base a los input de entrada
     * {
     *      title: 
     *      description: 
     * }
     */

    return (
        <div>
            <form action="" onSubmit={handleSubmit(registerNote)} className='form_data'>
                <div>
                    <input type="text" placeholder='ingresa un titulo'
                className={styles.input} {...register("title", {required: true})}/>
                </div>
                {/** validamos y personalizamos los errores */}
                {errors.title && <span className={styles.error}>Este campo es requerido</span>}
                <div>
                    <textarea placeholder='descripcion...' {...register("description", {required: true})}></textarea>
                </div>
                {/** validamos y personalizamos los errores */}
                {errors.description && <span className={styles.error}>Este campo es requerido</span>}
                <input type="submit" value="Guardar Nota" className={styles.btn}/>
                {/* <Button>Guardar Nota</Button> */}
            </form>
        </div>
    )
}
