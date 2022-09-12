//Importamos el método de getHeroeById
import { getHeroeById } from './bases/08-imp-exp'

/**
 * Resolve sirve como callback que se ejecuratá si la respuesta fue exitosa
 * Reject sirve cuando la respuesta fue erronea
 */
const promesa = new Promise( (resolve, reject) => {

    setTimeout( () =>  {
        // Tarea
        // importen el getHeroeById del archivo 08
        const p1 = getHeroeById(2);

        resolve( p1 ); //Detona el .then para que imprima lo que dijimos en la linea 21
        //Sirve  para manejar el error
        reject( 'No se pudo encontrar el héroe' );
    }, 2000 ) //2000 equivale a 2 segundos despues

});

//.then cuando la promesa se hizo correctamente
promesa.then( (heroe) => {
    console.log('heroe', heroe)
}) //.catch es cuando ocurre una excepción. Finally se ejecuta siempre
.catch( err => console.warn( err ) );



/**
 * Creando nueva función asyncrona, en una función flecha que tenga
 * el id para buscarlo dentro del cuerpo de la lógica
 * Por defecto la función regresa void, por ello se pone return
 * ent la línea 40
 * 
 */

const getHeroeByIdAsync = ( id ) => {

    return new Promise( (resolve, reject) => {

        setTimeout( () =>  {
            // Tarea
            // importen el 
            const p1 = getHeroeById( id );
            if ( p1 ) {
                resolve( p1 );
            } else {
                reject( 'No se pudo encontrar el héroe' );
            }
        }, 2000 )
    
    });


}

getHeroeByIdAsync(10)
    .then( heroe => console.log('Heroe', heroe))
    .catch( err => console.warn(err));

//Equivalente recibiendo lo que se tiene de los ifs
getHeroeByIdAsync(1)
    .then( console.log )
    .catch( console.warn );