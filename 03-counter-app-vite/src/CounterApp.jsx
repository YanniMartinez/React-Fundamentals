import PropTypes from 'prop-types';

/**La opción más eficiente es llamar una función de flecha, debido a
 * su agilidad y eficiencia, además no modifica el this, si esta función
 * no ocupa nunca el valor de "Value", valor que recibe del padre,
 * se recomienda declararla fuera del escope del CounterApp
 */
const handleAdd = ( event) => {
  console.log(event);
}

export const CounterApp = ( { value } ) => {


  // function hanbleAdd(event, newValue){ 
  //   // console.log(event);
  //   console.log(newValue);
  // }


  return (
    <>
      <h1>CounterApp</h1>
      <h2>{ value }</h2>

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

