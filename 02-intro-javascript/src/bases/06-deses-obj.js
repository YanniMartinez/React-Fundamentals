/**
 * * Desestructuración 
 * */ 


// Asignación Desestructurante
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

/** Desestructurando los valores en 3 variables diferentes */
const { edad, clave, nombre, } = persona;
console.log( nombre );
console.log( edad );
console.log( clave );
//Obteniendo el valor del nombre pero renombrando variable
const { nombre:nombre2} = persona;
console.log ( nombre2 );


/** Creando una función */
const retornaPersona = (usuario) =>{
    const { edad, clave, nombre, } = usuario;
    console.log(edad,clave,nombre);
}
retornaPersona(persona);

/** También podemos hacer la desestructuración en el mismo argumento: */
const retornaPersona2 = ( {nombre, edad}) =>{
    console.log(nombre, edad);
}
retornaPersona2(persona);

/**
 * También permite poder atributos por defecto si no viene en el objeto, por ejemplo:
 * si existe la propiedad en el objeto la usa, en caso contrario usa la que 
 * nosotros le definimos en la declaración
 */
 const retornaPersona3 = ( {nombre, edad, rango='Capitan'}) =>{
    console.log(nombre, edad, rango);
}
retornaPersona3(persona);



const useContext = ({ clave, nombre, edad, rango = 'Capitán' }) => {


    // console.log( nombre, edad, rango );
    
    return {
        nombreClave: clave,
        anios: edad,
        //Objeto incrustado
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }

}

//Desestructura los valores, además trae los valores de un objeto vinculado
const { nombreClave, anios, latlng: { lat, lng } } = useContext( persona );
//Lo más comun es hacer lo siguiente:
//const { lat, lng } = latlng;

console.log(nombreClave, anios);
console.log( lat, lng );
