import { useState } from "react";

export const GifExpertApp = () =>{

    //Espacio en memoria para visualizar estados, en este caso le mandamos un arreglo de categorias
    const [categories, setcategories] = useState(['Dragon Ball','Smash bros']);

    return(
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>


            {/* Input */}


            {/* Listado de Gifs */}
            <ol>
                {/* Es forzoso mandar una llave */}
                { categories.map( map =>{
                    return <li key={category}>{category}</li>
                }) }
                <li></li>
            </ol>
                {/* Gif Item */}
        </>
    );
}