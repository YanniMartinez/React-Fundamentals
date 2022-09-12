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
