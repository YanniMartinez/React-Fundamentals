import PropTypes from 'prop-types';

export const CounterApp = ( { value } ) => {


  function hanbleAdd(event, newValue){ 
    // console.log(event);
    console.log(newValue);
  }

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{ value }</h2>

      {/* Los argumentos pasan por defecto al handleAdd con propiedades
      de los eventos */}
      <button onClick={ (event) => handleAdd( event, 'Hola' )}>
        +1
      </button>
    </>
  )
}

CounterApp.propTypes={
    value: PropTypes.number.isRequired,
}

