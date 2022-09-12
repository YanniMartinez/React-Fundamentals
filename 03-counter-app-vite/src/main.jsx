//Creando código HTML más XML
import React from 'react' //Importación de react
import ReactDOM from 'react-dom/client' //Herramienta para renderizar

/**Declaración del functional component
 * Se les conoce así porque están basados en funciones
 * Las clases ya no son compatibles en REACT.
 * Siempre se tiene un componente
*/
function App(){
    //document.createElement...
    return (<h1>Hola Mundo</h1>);
}

//Forma de realizar el Renderizando de la pagina
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* Comentario: 
        Mandando a llamar el nombre de nuestra function */}
        <App /> 
    </React.StrictMode>
);