import { useEffect } from "react";
import { useState } from "react";
import { getGifs } from "../helpers/getGifs";

//rafc
export const GifGrid = ( {category }) => {
  
  const [images, setImages] = useState([])

  const getImages = async() =>{
    const newImages = await getGifs( category );
    setImages(newImages);
  }

  //Uso del Hook useEffect: Es un Hook de React que permite lanzar efectos secundarios
  //Un efecto secundario es algo que queremos que se ejecute despues de que suceda algo
  //Aquí le indicaremos que cargue el HTTP unicamente cuando se cargue por primera vez
  useEffect( () => {
    //Opción 1 para mandar a llamar las imagenes
    //getGifs(category)
    //  .then( newImages => setImages(newImages));

    getImages();
    
  }, []);


  getGifs(category);

  return(
    <>
        <h3>{ category }</h3>
        <ol>
          {/* images.map */}
          { 
            images.map( ({id, title}) =>
            (
              <li key={id}>{title}</li>
            )) 
          }

        </ol>
    </>
  )
}
