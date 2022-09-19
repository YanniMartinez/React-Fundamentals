import { useState } from "react"

export const AddCategory = () =>{

    //Debemos manejar el estado de lo que va escribiendo
    const [inputValue, setInputValue] = useState('One Punch')

    const onInputChange = (event) =>{
        //console.log(event.target.value);
        setInputValue(event.target.value);
    }

    const onSubmit = () =>{
        event.preventDefault();
        console.log(inputValue)
    }

    return (
        <form onSubmit={onSubmit}>
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={ onInputChange}
            />

        </form>
    )
}