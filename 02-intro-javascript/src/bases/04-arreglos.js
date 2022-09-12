// Arreglos en JS
// const arreglo = new Array( 100 );
const arreglo = [1,2,3,4];
// arreglo.push(1)
// arreglo.push(2)
// arreglo.push(3)
// arreglo.push(4)

let arreglo2 = [ ...arreglo, 5 ];

/** EL método .map espera una función, para más detalles consulte la doc
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 * Cada que creamos un arreglo tenemos en el prototype el .map
 * Crea un nuevo arreglo para romper la referencia que existe con los objetos
 * 
 * Si quisieramos multiplicarlos valores por 2 podemos retornar con el return *2
 * 
 * Notese que el function(numero) {
});
 * Se le conoce como un callback es decir una función que se ejecuta dentro de un método,
se ejecutará por cada elemento que reciba.
 * Cada función que no tiene un return explicito retornará un undefined
 */
const arreglo3 = arreglo2.map( function(numero) {
    return numero * 2;
});


console.log( arreglo );
console.log( arreglo2 );
console.log( arreglo3 );