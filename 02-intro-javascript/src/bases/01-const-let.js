
// Variables y Constantes

const nombre = 'Yann';
const apellido = 'Martinez';

let valorDado = 5;
valorDado = 4;

console.log( nombre, apellido, valorDado )

// var No se debe de usar...
// El uso de LET es sobre algun SCOPE
if ( true ) {
    const nombre = 'Peter';
    console.log(nombre)
}

console.log( valorDado );