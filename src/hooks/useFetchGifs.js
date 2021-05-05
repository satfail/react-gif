import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGif = (categoriaProp) => {
    const [state, setState] = useState({
        data:[],
        loading:true,
    });

    //2º Argumento arreglo de dependencias, si va vacío solo dispara 1 vez
    
    useEffect( () => {
        getGifs(categoriaProp)
        .then(imgs =>{

            setTimeout(() => {
                setState({
                    data:imgs,
                    loading:false
                })
            }, 1500);

        });
    }, [categoriaProp]) //Si cambia la categoria se ejecuta el useEffect
    
    return state; //{data :[], loading:True}
}