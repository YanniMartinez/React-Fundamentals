import PropTypes from 'prop-types';

export const CounterApp = ( { value } ) => {
  return (
    <>
      <h1>CounterApp</h1>
      <h2>{ value }</h2>

      <button onClick={ function(){ console.log('+1') } }>
        +1
      </button>
    </>
  )
}

CounterApp.propTypes={
    value: PropTypes.number.isRequired,
}

