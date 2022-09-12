const personajes = ['Goku','Vegeta','Trunks'];
//Desestructuración sólo de la posición 3
const [ , , p3 ] = personajes;
console.log( p3 );


const retornaArreglo = () =>{
    return ['ABC', 123];
}

const [ letras, numeros ] = retornaArreglo(); 
console.log(letras, numeros);


// Tarea
// 1. el primer valor del arr se llamará nombre
// 2. se llamará setNombre
const useState = ( valor ) => {
    return [ valor, ()=>{ console.log('Hola Mundo') } ];
}

//En nombre almacena el valor del nombre y en setNombre almacena la funcion de flecha
const [ nombre, setNombre ] = useState( 'Goku' );

console.log( nombre );
setNombre();