import { useState } from "react"


export const AddCategory = ( {setCategories} ) =>{

    //Debemos manejar el estado de lo que va escribiendo
    const [inputValue, setInputValue] = useState('');

    const onInputChange = ( {target}) =>{
        //console.log(event.target.value);
        setInputValue(target.value);
    }

    const onSubmit = ( event ) =>{
        event.preventDefault();
        console.log(inputValue)

        //Si es 1 o 0 no agrega nada
        if( inputValue.trim().length<= 1 ) return;
        //
        setCategories( categories => [inputValue, ...categories]);

        //Limpiando valor
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit}>
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={ onInputChange}
            />

        </form>
    )
}