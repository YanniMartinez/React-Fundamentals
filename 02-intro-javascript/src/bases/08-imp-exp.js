//En la importación no se acostumbra poner la extensión
// import { heroes } from './data/heroes';
// import { heroes } from './data/heroes';
// import heroes, { owners } from '../data/heroes';
import heroes from '../data/heroes';

// console.log( owners );



/** Uso del método .find()
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find
 * El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.
 * El find recibe un callback
 * 
 * @return los datos del heroe que concuerdan con el === es decir es igual. El === retorna un bool
 */
export const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id );

// console.log( getHeroeById(2) );

// find? sólo recive el primer elemento, filter lo que hace es obtener todos los elementos que concuerdan con la busqueda
export const getHeroesByOwner = ( owner ) => heroes.filter( (heroe) => heroe.owner === owner );

// console.log( getHeroesByOwner('Marvel') );