import { useEffect } from "react";
import { useState } from "react";
import { getGifs } from "../helpers/getGifs";

//rafc
export const GifGrid = ( {category }) => {
  
  const [counter, setcounter] = useState(10);

  //Uso del Hook useEffect: Es un Hook de React que permite lanzar efectos secundarios
  //Un efecto secundario es algo que queremos que se ejecute despues de que suceda algo
  //Aquí le indicaremos que cargue el HTTP unicamente cuando se cargue por primera vez
  useEffect( () => {
    getGifs(category);
    
  }, []);


  getGifs(category);

  return(
    <>
        <h3>{ category }</h3>
        <h5>Hola mundo</h5>
        <button onClick={ () => setCounter(counter+1)}>+1</button>
    </>
  )
}
