const api_key='s0oBd15WQC9I0E5Nq03ZmgyR3a5WEDis';

//El Fetch devuelve una promesa:
const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

//Promesas en cadena
peticion
    .then( resp => resp.json() ) //Return implicito de la problema resp.json()
    .then( ({ data }) => { //Desestructurando la información
        const { url } = data.images.original; //Destructurando la url del atributo.url

        //Creando elemento en el HTML
        const img = document.createElement('img'); //Creando tag img
        img.src = url; //Estableciendo el valor de la url en la imagen

        document.body.append( img ); //Agregandola al DOM


    })
    .catch( console.warn );