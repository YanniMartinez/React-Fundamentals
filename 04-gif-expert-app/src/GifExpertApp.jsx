import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () =>{

    //Espacio en memoria para visualizar estados, en este caso le mandamos un arreglo de categorias
    const [categories, setcategories] = useState(['Dragon Ball','Smash bros']);

    /**
     * Agregar un nuevo elemento al estado de categorias
     */
    const onAddCategory = ( newCategory) =>{
        //categories.push('Zelda');
        if( categories.includes(newCategory) ) return;
        // setcategories( [...categories,'Zelda']);  //Forma 1 de hacerlo
        setcategories( [newCategory,...categories]);  //Forma 1 de hacerlo
        // setcategories( cat => [...cat, 'Valorant']); //Forma 2 de hacerlo
    }

    return(
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>


            {/* Input */}
            {/* Le mandamos la referencia de las categorias */}
            <AddCategory 
                //setCategories={setcategories}
                onNewCategory={ value => onAddCategory(value) }
            />


            
            {/* Es forzoso mandar una llave */}
            { 
                categories.map( category =>
                (
                    <GifGrid key={category} 
                    category={category}/>
                )) 
            }

                {/* Gif Item */}
        </>
    );
}