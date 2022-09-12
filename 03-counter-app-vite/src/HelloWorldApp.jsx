/**Declaración del functional component
 * Se les conoce así porque están basados en funciones
 * Las clases ya no son compatibles en REACT.
 * Siempre se tiene un componente
 * 
 * Si queremos exportar y que lo usen otros elementos debemos exportar primero
*/
// export function App(){
//     //document.createElement...
//     return (<h1>Hola Mundo</h1>);
// }


/**
 * Podria exportarse también de la siguiente manera:
 * function App(){
    return (<h1>Hola Mundo</h1>);
 }

    export default 
 * 
 */

//Functional component
export const HelloWorldApp = () =>{
    return(
        <h1>Hello World App</h1>
    );
}

//export const HelloWorldApp = () => <h1>Arrow Function</h1>