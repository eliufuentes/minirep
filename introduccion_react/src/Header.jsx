import React from 'react'

// export default function Header(props) {
//     return (
//         <header className='header'>
//             <h1>Bienvenido a React! {props.fullname}</h1>
//             <p>{props.saludo}</p>
//         </header>
//     )
// }

export default function Header({fullname, saludo}) {
    return (
        <header className='header'>
            <h1>Bienvenido a React! {fullname}</h1>
            <p>{saludo}</p>
        </header>
    )
}


