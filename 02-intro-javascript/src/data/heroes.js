//Para usarlo en otro lado debemos exportarlo
export const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];

export const owners = ['DC','Marvel'];

//Exportando por defecto:
export default heroes;

/**
 * NOTA:
 * 
 * Si usamos una exportación por defecto y otra como el arreglo owners
 * entonces hay que realizar una desestructuración como la siguiente:
 * 
 * import heroes, { owners } from '../data/heroes';
 * 
 */



/**
 * Otra manera de realizar la exportación es de la siguiente manera
 * 
 * export{
    heroes,
    owners
   }
 * 
 * Y se debería Importar de la siguiente manera:
 * import { heroes, owners } from '../data/heroes';
 */