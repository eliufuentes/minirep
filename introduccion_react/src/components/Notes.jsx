import React from 'react'
import styles from '../styles/Note.module.css'

export default function Notes({titleprops, description, idNote, deleteNote}) {

    return (
        <div className='card-note'>
            <button className={styles.btn} onClick={() => deleteNote(idNote)}>X</button>
            <h2 className='title-note'>{titleprops}</h2>
            <p>{description}</p>
            {/* <p>Escribe una descripcion...</p> */}
        </div>
    )
}

