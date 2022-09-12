//Creando código HTML más XML
import React from 'react' //Importación de react
import ReactDOM from 'react-dom/client' //Herramienta para renderizar
import { FirstApp } from './FirstApp';
import { HelloWorldApp} from './HelloWorldApp'; 
import './styles.css'; //Importando los estilos globales

//Forma de realizar el Renderizando de la pagina
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* Comentario: 
        Mandando a llamar el nombre de nuestra function */}
        {/* <HelloWorldApp />  */}
        <FirstApp />
    </React.StrictMode>
);