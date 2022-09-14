
export const getImagen = async() => {

    try {

        const apiKey = 's0oBd15WQC9I0E5Nq03ZmgyR3a5WEDis';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;
        return url;

    } catch (error) {
        // manejo del error
        console.error(error)
        return 'No se encontró la imagen';
    }
    
    
    
}
