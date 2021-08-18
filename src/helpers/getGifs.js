    //mandar a llamar la petición
    export const getGifs = async( category )=>{
        const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI (category)}&limit=10&api_key=vuayfTVRZG7C6vo6gtgMkKazTewF3oCr`;
        const respuesta = await fetch(url);
        // si la respuesta se correctamente
        const {data} = await respuesta.json();
        const gifs = data.map( img =>{
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            }
        })
        return gifs;
    }