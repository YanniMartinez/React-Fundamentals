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