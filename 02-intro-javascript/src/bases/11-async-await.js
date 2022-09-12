// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagenPromesa().then( console.log );

/** Alternativa usando Async
 * El uso de Asyn crea una promesa
 * El Await siempre va de la mano del Async.
 * El Await nos ayuda a atrabajar con el codigo como si fuera sincrono
 */
const getImagen = async() => {

    try {

        const apiKey = 's0oBd15WQC9I0E5Nq03ZmgyR3a5WEDis';
        //Cuando estamos dentro de una función ASYNC lo que hace es:
        //Espera a que esta promesa termine y continua con la siguiente línea de código
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        //Espera la respuesta
        const { data } = await resp.json(); 

        //Extrayendo información de la URL y pintando la img en el HTML
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append( img );

    } catch (error) {
        // manejo del error
        console.error(error)
    }
    
    
    
}

 getImagen();