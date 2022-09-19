import { useState } from "react"


export const AddCategory = ( {setCategories} ) =>{

    //Debemos manejar el estado de lo que va escribiendo
    const [inputValue, setInputValue] = useState('One Punch');

    const onInputChange = ( {target}) =>{
        //console.log(event.target.value);
        setInputValue(target.value);
    }

    const onSubmit = ( event ) =>{
        event.preventDefault();
        console.log(inputValue)
        //
        setCategories( categories => [inputValue, ...categories]);
    }

    return (
        <form onSubmit={ (event) => onSubmit(event)}>
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={ onInputChange}
            />

        </form>
    )
}