/** TEMPLATE STRINGS */
const nombre   = 'Yann';
const apellido = 'Martínez';


// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${ nombre } ${ apellido }`;

console.log( nombreCompleto );


function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

//Dentro del Backtick podemos llamar también funciones
console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );