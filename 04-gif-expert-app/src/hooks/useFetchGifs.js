//Primer Custom Hook
/**
 * Un Hook no es más que una función que regresa algo
 * Los customHooks pueden tener estados independientes
 */

import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {


    const [images, setImages] = useState([]);
    //Podemos declarar un estado para manejar el loading
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);

        //Cambiamos el estado
        setIsLoading(false);
    }

    //Uso del Hook useEffect: Es un Hook de React que permite lanzar efectos secundarios
    //Un efecto secundario es algo que queremos que se ejecute despues de que suceda algo
    //Aquí le indicaremos que cargue el HTTP unicamente cuando se cargue por primera vez
    useEffect(() => {
        //Opción 1 para mandar a llamar las imagenes
        //getGifs(category)
        //  .then( newImages => setImages(newImages));

        getImages();

    }, []);


    getGifs(category);


    return {
        images: images, //Se puede simplificar unicamente con images
        isLoading: isLoading
    }
}
