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

  /* Desestructuramos counter el cual hace referencia al valor del estado */
  const [ counter ] = useState( 0 ) /* Debemos especificar el valor inicial */

  const handleAdd = ( event) => {
    console.log(event);
  }


  return (
    <>
      <h1>CounterApp</h1>
      <h2>{ counter }</h2>

      {/* Los argumentos pasan por defecto al handleAdd con propiedades
      de los eventos */}
      <button onClick={ handleAdd }>
        +1
      </button>
    </>
  )
}

CounterApp.propTypes={
    value: PropTypes.number.isRequired,
}

