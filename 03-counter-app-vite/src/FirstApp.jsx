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

const getResult = (a,b) =>{
    return a+b;
}

export const FirstApp = () => {

    return (
      <>
          {/* Como alternativa podemos usar un Stringify */}
          {/* <code> { JSON.stringify(newMessage) } </code>
          <p>{ newArray }</p> */} {/* Notaremos que cada elemento está separado */}
          <h1>{ getResult( 1,2 )}</h1>
          <p>Soy un subtitulo</p>
      </>
    )
  }