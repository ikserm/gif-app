export const getGifs = async( category ) => {
        
    const url = `https://api.giphy.com/v1/gifs/search?api_key=oz5Se2S5QWHw4Divk3M21mIpw7N1ibUZ&limit=10&q=${ encodeURI(category) }`
    const resp = await fetch( url );
    const {data} = await resp.json();

    const gifs = data.map( img => {
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return (gifs);
  

}
