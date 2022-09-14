import PropTypes from 'prop-types';

export const CounterApp = ( { value } ) => {


  function hanbleAdd(event){ 
    console.log(event)
  }

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{ value }</h2>

      {/* Los argumentos pasan por defecto al handleAdd con propiedades
      de los eventos */}
      <button onClick={  handleAdd()}>
        +1
      </button>
    </>
  )
}

CounterApp.propTypes={
    value: PropTypes.number.isRequired,
}

