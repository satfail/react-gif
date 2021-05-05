    export const getGifs = async(categoriaProp) =>{
        
        const url =`https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoriaProp)}&limit=10&api_key=4AV7lOy246Dpo0V2uDzCY7A22oLIDEIh`;
        const resp = await fetch(url);
        const {data} = await resp.json();
        const gifs = data.map ( img => {
            return{
                id: img.id,
                title: img.title,
                url : img.images?.downsized_medium.url
            }
        })
        return gifs;

    }