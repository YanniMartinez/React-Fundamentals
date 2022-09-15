//import {Fragment} from 'react'
/**
 * Si no utilizamos la siguiente biblioteca : import {Fragment} from 'react'  entonces el código
 * se veria de la siguiente manera, generando un <div></div> de más
 * sumando procesamiento
 * 
    <div>
        <h1>Yanni Martinez</h1>
        <p>Soy un subtitulo</p>
    </div>
 * 
 * Sí usamos el fragmento entonces no debemos utilizarlo
 * 
 */
// export const FirstApp = () => {
//   return (
//     <Fragment>
//         <h1>Yanni Martinez</h1>
//         <p>Soy un subtitulo</p>
//     </Fragment>
//   )
// }

//Equivalente de fragmentos: Siempre debemos regresar almenos 1 nodo padre
//Podemos mostrar expresiones validas de JS pero no objetos
/**
 * Si no estamos modificando el valor y además no tiene relación con un hoock
 * entonces podemos ponerlo fuera del functional component, sin embargo, no se pon
 * en el scope global, significa que está dentro del componente encapsulado. 
 * REACT no re-renderizar elementos fuera de los functional components, ahorra recursos
 */
// const newMessage = {
//     message: 'Hola Mundo',
//     title: 'Yanni'
// };
// const newArray = [1,2,3,4,5,6,7,8,9];

/* const getResult = (a,b) =>{
    return a+b;
} */

//Importando las propTypes
import PropTypes from 'prop-types';


//Normalmente se desescturcturan los datos, como acontinuación:
export const FirstApp = ( {title, subTitle, name} ) => {

    return (
      <>
          {/* El data-testid sirve como un atributo para obtener valores */}
          <div data-testid="test-title">{ title }</div >
          <p>{ subTitle}</p>
          <p>{ name }</p>
      </>
    )
}


/**
 * Utilizando y definiendo las propTypes (Definimos un objeto)
 */
FirstApp.propTypes = {
    /* Le inficamos que el titulo debe ser string y adem´sa requerido */
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
}


/**
 * Definiendo los default props
 */
FirstApp.defaultProps = {
    title: 'No hay titulo',
    subTitle: 'No hay Subtitulo',
    name: 'Yanni'
}

/*
export const FirstApp = ( props ) => {

    console.log(props);

    return (
      <>
          <h1>{ props.title }</h1>
          <p>Soy un subtitulo</p>
      </>
    )
}
 */