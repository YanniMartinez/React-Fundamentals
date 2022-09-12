// Funciones en JS

//Funciones ANONIMAS debido a que no tiene un nombre y se guarda en una const
const saludar = function( nombre ) {
     return `Hola, ${ nombre }`;
}

//Función de Flecha
const saludar2 = ( nombre ) => {
    return `Hola, ${ nombre }`;
}

//Si sólo se tiene 1 return entonces podemos simplificarla así:
const saludar3 = ( nombre ) => `Hola, ${ nombre }`;

//Otra función pero sin recibir un parametro
const saludar4 = () => `Hola Mundo`;

// console.log( saludar('Goku') )

console.log( saludar2('Vegeta') );
console.log( saludar3('Goku') );
console.log( saludar4() );

/*Los parentesis significan que retornamos un objeto literal sin especificar el return
los parentesis sólo se usan con objetos, para nativos no es necesario*/
const getUser = () => ({
        uid: 'ABC123',
        username: 'El_bot1502'
});


const user = getUser();
console.log(user);

/** Tarea
 * 1. Trasformar a una función de flecha
 * 2. Retornar un objeto implicito
 * 3. Pruebas
 * 
 * Esqueleto:
 * 

function getUsuarioActivo(nombre){
    return{
        uid: 'ABC567',
        username: nombre
    }
}

 * 
 *  Solución: */ 
const getUsuarioActivo = ( nombre ) =>({
    uid: 'ABC567',
    username: nombre
})

const usuarioActivo = getUsuarioActivo('Fernando');
console.log( usuarioActivo );