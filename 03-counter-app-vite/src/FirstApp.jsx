import {Fragment} from 'react'
/**
 * Si no utilizamos la siguiente biblioteca entonces el código
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
export const FirstApp = () => {
  return (
    <Fragment>
        <h1>Yanni Martinez</h1>
        <p>Soy un subtitulo</p>
    </Fragment>
  )
}

