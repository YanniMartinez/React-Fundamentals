# Aspectos importantes de REACT

Para conocer más a detalle de como crear nuestra aplicación refiera [a este enlace](https://create-react-app.dev/) para conocer los detalles oficiales.

## Crear una app

Es tan sencillo como ejecutar el siguiente comando en nuestro CMD:

`npx create-react-app my-app`

Para correr react sólo hay que ejecutar:
`npm start`


## JS

* Funciones de flecha:
    ```
    const saludar = function( nombre ) {
     return `Hola, ${ nombre }`;
    }
    ```

* Promesas: Por defecto son funciones asincronas [Consulte detalles aquí](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise). 
    Las promesas se crean con un argumento que es un callback

* Fetch: Para tener todo el detalle de como utilizarlo lea la documentación [Oficial](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)

## Componente
Es una pequeña piea de código encapsulada reutilizable que puede tener un estado o no

* TwiterApp
    - Menu
        - MenuItem

Forma en la que podrías renderizar nuestra app:

`TwiterApp > Router > Screen/Página > Menu > MenuItem`

Es un pedazo de código que realiza una tarea en específico.

## Estado
Es como se encuentra la información de ese componente, la primera vez o eventualmente conforme el usuario interactue. El estado es la manera en la que se encuentra el componente en un punto determinado.

## Creación de app usando VITE

[Documentación oficial](https://vitejs.dev/)
Para crear una app con Vite podemos usar `yarn create vite`.
**NOTA:** Si no se tiene Yarn puede instalarlo usando el siguiente comando `npm install -g yarn`

Cuando termine de crearse el proyecto ejecutamos `yarn` ó `yarn install` para traer todas las dependencias.

## Creación de app usando Create-react-app

Para ello es tan sencillo como ejecutar: `npx create-react-app counter-app`

## Levantar proyecto YARN
Podemos ejecutar el comando `yarn dev`
podemos usar el atajo `imr + tab` para realizar importaciones de manera sencilla.

## Componentes de nuestro REACT

* Importaciones/Exportaciones
    ```
    import React from 'react' //Importación de react
    import ReactDOM from 'react-dom/client' //Herramienta para renderizar

    ```
* Functional components
    ```
    function App(){
    //document.createElement...
    return (<h1>Hola Mundo</h1>);
    }
    
    ```
* Forma de renderizar elementos
    ```
    ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* Comentario: 
        Mandando a llamar el nombre de nuestra function */}
        <App /> 
        </React.StrictMode>
    );
    ```

## Shortcut para crear componente
`rafc + tab` --> Creara el componente

## Declaración de functional component
```
export const HelloWorldApp = () =>{
    return(
        <h1>Hello World App</h1>
    );
}

```

## Properties o PROPS
Son las propiedades que se le mandan a las funciones, normalmente son desestructuradas. Estas son un objeto y contienen información dependiendo del contexto.
Las properties son propiedades que fluyen del componente padre al componente hijo.
Para ver estos valores podemos ir al inspector de nuestro Chrome y ver la opción de "Components" ahí veremos las properties.

Los props son valores que le manda el elemento padre al elemento hijo, una manera de enviarlo desde el padre es el siguiente:
`<FirstApp title="Hola, soy Goku!" subTitle={123}/>`

Una manera de entenderlo como el hijo es la siguiente empleando la desestructuración:

```
export const FirstApp = ( {title, subTitle} ) => {

    console.log( title );

    return (
      <>
          <h1>{ title }</h1>
          <p>{ subTitle + 1}</p>
      </>
    )
}
```

## PropTypes
Tipos de las properties. Por defecto en VITE no vienen las proptypes, para agregarlas debemos ejecutar el siguiente comando: `yarn add prop-types`.
Permiten definirle el tipo a las properties.
La manera de definirlas puede ser de la siguiente manera, donde indicamos el nombre, el tipo de dato y si son obligatorias o no:
```
FirstApp.PropTypes = {
    /* Le inficamos que el titulo debe ser string y ademas requerido */
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number.isRequired,
}
```

## DefaultProps
Como su nombre son las propiedades por defecto que se le asignan, un ejemplo de ello pueden ser lo siguiente:

```
FirstApp.defaultProps = {
    title: 'No hay titulo',
    subTitle: 'No hay Subtitulo',
    name: 'Yanni'
}
```
Normalmente estos proptypes se definen al final de las definiciones.

## Documentación de eventos en REACT
[Documentación oficial](https://es.reactjs.org/docs/events.html)

## Cambios en estado
Cuando hacemos un cambio, debemos avisarle a REACT para que se redibuje en nuestro componente.

## HOOKS
Los hooks no son más que funciones, para conocer los detalles oficiales podemos consultar la [Documentación oficial](https://es.reactjs.org/docs/hooks-intro.html)

Normalmente siempre se importa primero los hooks:


`import { useState } from 'react'`

En este caso **useState**, normalmente los hooks inician con **use** para que identifiquemos cuando se trata de un Hook. Cuando empleamos por primera vez un **useState** debemos indicarle el valor del estado, en este caso al iniciar siempre será **0**.

```

/* Desestructuramos counter el cual hace referencia al valor del estado */
  const [ counter ] = useState( 0 ) /* Debemos especificar el valor inicial */


```

Forma de cambiar el valor del estado de nuestro Hook:
```
  /**
   * 
   * @param {*} event 
   * Cuando mandamos a llamar el setCounter, lo que le indicamos a REACT
   * es que el estado cambió y por consecuencia debe volver a ejecutar la renderización
   * del componente para que se vea reflejado en nuestro HTML.
   */
  const handleAdd = ( event) => {
    setCounter( counter + 1 );
  }

```

Otra manera de hacerlo es mediante una función de flecha:
```
  const handleAdd = ( event) => {
    //setCounter( counter + 1 ); Primera opción
    //Segunda opción para modificar el estado:
    setCounter( (c) => c+1 );
  }

  (c) hace referencia al Counter
```

* **NOTA:**Cuando cambia el estado, el componente se vuelve a ejecutar!


## Pruebas Unitarias y de Integracion
* Unitarias: Son enfocadas en pequeñas funcionalidades. (Una llanta como componente aislado)
* Integración: Son enfocadas en cómo reaccionan varias piezas o funcionalidades en conjunto. (Tomar las llantas, montar carrocería y ver si trabajan como nosotros esperamos).

Caracteristicas de las pruebas:

1. Fáciles de escribir
2. Fáciles de leer
3. Confiables
4. Rápidas
5. Principalmente Unitarias

Estos pasos son conocidos como **AAA** donde las siglas corresponden a:
* Arrange (Arreglar): Es donde preparamos el paso inicial, usualmente se le conoce como identificar al sujeto, dentro de esta fase identificamos:
    * Inicializar variables
    * Importaciones necesarias

* Act     (Actuar): Es donde aplicaremos funciones o estimulos al sujeto con acciones como: 
    * Llamar métodos
    * Simular clicks

* Assert  (Afirmar): Es observar el resultado, es decir:
    * Verificar que son los resultados esperados


## Pruebas unitarias
Para ello podemos usar **JEST**, una de las herramientas más conocidas para pruebas unitarias [Consulte la documentación unitaria](https://jestjs.io/)
Y para incluir la biblioteca es tan sencilla como ejecutar el siguiente comando:

`yarn add --dev jest`

Tras instalar la dependencia, lo que debemos hacer es incluir el siguiente fragmento de código en el .JSON:

```
{
  "scripts": {
    "test": "jest"
  }
}
```

Tras esto podemos crear nuestros archivos con pruebas. Finalmente para correrlas sólo hay que ejecutar el comando `yarn test`

Para incluir un Test más automatico podemos agregar la siguiente configuración dentro del script definido al inicio de la sección.
`"test": "jest --watchAll"`

En JEST para indicar si un elemento es identico al otro se usar algo como lo siguiente:

```
test('Esta prueba no debe de fallar', () => {
    //1. Inicialización
    const message1 = 'Hola Mundo';

    //2. Estimulo
    const message2= message1.trim();

    //3. Observar el comportamiento ... esperado?
    expect( message1 ).toBe( message2 );

})
```

Ahora bien, para tener una recomendación sobre los métodos de JEST lo que podemos hacer es instalar la siguiente dependencia: `yarn add -D @types/jest`

Ahora bien, si quisieramos ser más elegantes y queremos agrupar pruebas podemos ponerlos dentro de un Describe como el siguiente ejemplo:


```
/**
 * * Para realizar alguna agrupación podemos poner la siguiente sintaxis:
 * * describe('Nombre del grupo', () => { Contenido }
 */
describe('Pruebas en <DemoComponent/>', () => {

    //**************  AQUI DENTRO TODAS LAS PRUEBAS DEL GRUPO ****************** */

    /** La sintaxis es la siguiente:
     * * test('Titulo de nuestra prueba', callBack() )
    */
    test('Esta prueba no debe de fallar', () => {
        //1. Inicialización
        const message1 = 'Hola Mundo';

        //2. Estimulo
        const message2= message1.trim();

        //3. Observar el comportamiento ... esperado?
        expect( message1 ).toBe( message2 );

    })
})

```

### Pruebas sobre archivos
Algo importante a identificar es que no podemos hacer prueba de algo que no está siendo exportado

Posiblemente debamos configurar babel y para ello primero debemos instalar nuestra dependencia de desarrollo con el siguiente comando: `yarn add --dev babel-jest @babel/core @babel/preset-env` y además crear un archivo de nombre `babel.config.js` en la ruta de nuestro proyecto, además de incluir el siguiente valor dentro del archivo:
```
module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};
```

