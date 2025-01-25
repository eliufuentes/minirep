import React from 'react'
import Notes from './Notes'

export default function ListNotes({listNotes, updateListNotes}) {

    const deleteNote = (id) => {
        console.log(id);
        
        //code..
        //filtrado de notas en base al id seleccionado
        updateListNotes(listNotes.filter((note) => note.id !== id))
    }

    return (
        <div>
            {
                //operador ternario sisecumple ? siNoseCumple
                listNotes.length > 0 ?
                    //iterando el arreglo de las notas
                    /** pasando la informacion de cada nota a otro componente */
                    listNotes.map((note) => {
                        return (
                            <Notes key={note.id} titleprops={note.title} description={note.description} idNote={note.id} deleteNote={deleteNote}/>
                        )
                    })
                : <div>No hay notas en este momento..</div>
            }
        </div>
    )
}
