import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () =>{

    //Espacio en memoria para visualizar estados, en este caso le mandamos un arreglo de categorias
    const [categories, setcategories] = useState(['Dragon Ball','Smash bros']);

    /**
     * Agregar un nuevo elemento al estado de categorias
     */
    const onAddCategory = () =>{
        //categories.push('Zelda');
        // setcategories( [...categories,'Zelda']);  //Forma 1 de hacerlo
        setcategories( ['Zelda',...categories]);  //Forma 1 de hacerlo
        // setcategories( cat => [...cat, 'Valorant']); //Forma 2 de hacerlo
    }

    return(
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>


            {/* Input */}
            {/* Le mandamos la referencia de las categorias */}
            <AddCategory setCategories={setcategories}/>


            {/* Listado de Gifs */}
            <ol>
                {/* Es forzoso mandar una llave */}
                { categories.map( category =>{
                    return <li key={category}>{category}</li>
                }) }

            </ol>
                {/* Gif Item */}
        </>
    );
}