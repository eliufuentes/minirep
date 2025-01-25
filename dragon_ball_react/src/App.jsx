import { useEffect, useState } from 'react'
import './App.css'
import Characters from './components/Characters'
import Favorites from './components/Favorites'
import CharactersSWR from './components/CharactersSWR';

function App() {
  /**
   * utilizando el localstorage
   */
  const favoriteStorage = localStorage.getItem('DragonBall') ? JSON.parse(localStorage.getItem('DragonBall')) : [];
  console.log(favoriteStorage);
  
  //estado para los favoritos
  const [favorite, setFavorite] = useState(favoriteStorage)


  //useEffect => montar el almacenimiento de los favoritos en el localstorage
  useEffect(() => {
    //indicar cuando haya un cambio en el almacenamiento del localstorage
    localStorage.setItem('DragonBall', JSON.stringify(favorite))
  }, [favorite])

  return (
    <>
      <h1>API DRAGON BALL</h1>
      <section>
        <div>
          <h3>Personajes...</h3>
          {/* <Characters favorite={favorite} setFavorite={setFavorite}/> */}
          <CharactersSWR favorite={favorite} setFavorite={setFavorite}/>
        </div>
        <div>
          <h3>Favoritos.</h3>
          <Favorites fav={favorite}/>
        </div>
      </section>
    </>
  )
}

export default App
