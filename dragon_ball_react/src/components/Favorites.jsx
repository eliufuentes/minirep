import React from 'react'

export default function Favorites({fav}) {
    return (
        <div>
            {
                fav.map((character) => {
                    return (
                        <div key={character.id}>
                            <h3>{character.name}</h3>
                            <img src={character.image} alt="" />
                        </div>
                    )
                })
            }
        </div>
    )
}
