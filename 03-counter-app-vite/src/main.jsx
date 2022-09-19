//Creando código HTML más XML
import React from 'react' //Importación de react
import ReactDOM from 'react-dom/client' //Herramienta para renderizar
import { CounterApp } from './CounterApp';
import { FirstApp } from './FirstApp';
//import { HelloWorldApp} from './HelloWorldApp'; 
import './styles.css'; //Importando los estilos globales

//Forma de realizar el Renderizando de la pagina
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* Comentario: 
        Mandando a llamar el nombre de nuestra function */}
        {/* <HelloWorldApp />  */}
        {/* Cuando mandamos a llamar al componente se le pasan las props: */}
        {/* <FirstApp title="Hola, Soy Goku" subTitle={123}/> */}
        <CounterApp value={2}/>
    </React.StrictMode>
);