import { useEffect } from "react";
import { useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

//rafc
export const GifGrid = ( {category }) => {
  
  const { images, isLoading} = useFetchGifs(category);
  
  return(
    <>
        <h3>{ category }</h3>
        <div className="card-grid">
          {/* images.map */}
          { 
            images.map( (image) =>
            (
              <GifItem 
                key={image.id}
                { ...image } /* Podemos propagar todas las propiedades
                con el operador spread */
              />
            )) 
          }

        </div>
    </>
  )
}
