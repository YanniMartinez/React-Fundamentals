import { useState } from 'react'
import PropTypes from 'prop-types';

/**La opción más eficiente es llamar una función de flecha, debido a
 * su agilidad y eficiencia, además no modifica el this, si esta función
 * no ocupa nunca el valor de "Value", valor que recibe del padre,
 * se recomienda declararla fuera del escope del CounterApp
 */
// const handleAdd = ( event) => {
//   console.log(event);
// }

export const CounterApp = ( { value } ) => {

  /* Desestructuramos counter el cual hace referencia al valor del estado, para 
  poder modificarlo más adelante, tambiénd desestructuraremos la función setCounter
  Recordemos que Counter es debido al mismo nombre que nuestro functional Component*/
  const [ counter, setCounter ] = useState( value ) /* Debemos especificar el valor inicial */

  /**
   * 
   * @param {*} event 
   * Cuando mandamos a llamar el setCounter, lo que le indicamos a REACT
   * es que el estado cambió y por consecuencia debe volver a ejecutar la renderización
   * del componente para que se vea reflejado en nuestro HTML.
   */
  const handleAdd = ( event) => {
    //setCounter( counter + 1 ); Primera opción
    //Segunda opción para modificar el estado:
    setCounter( (c) => c+1 );
  }

  const handleSubstraction = ( event) => {
    setCounter( counter - 1 );
  }

  const handleReset = ( event) => {
    setCounter( value );
  }


  return (
    <>
      <h1>CounterApp</h1>
      <h2>{ counter }</h2>

      {/* Los argumentos pasan por defecto al handleAdd con propiedades
      de los eventos */}
      <button onClick={ handleAdd }> +1 </button>
      <button onClick={ handleSubstraction }> -1 </button>
      <button aria-label="btn-reset" onClick={ handleReset }> Reset </button>
    </>
  )
}

CounterApp.propTypes={
    value: PropTypes.number.isRequired,
}

