// import React, {useState,useEffect} from 'react'
import { GifGridItem } from './GifGridItem';
import { useFetchGif } from './hooks/useFetchGifs';


export const GifGrid = ({categoriaProp}) => {


    
    const {data,loading} = useFetchGif(categoriaProp);
    console.log(data,loading);
    return (
        <>
        <h3 className="animate__animated animate__fadeIn">{categoriaProp}</h3>
        {/* If sin else */}
        {loading &&  <p className="animate__animated animate__flash">Cargando...</p>}
        <div className="card-grid">
            {
                data.map( img => (
                    <GifGridItem 
                        key = {img.id}
                        { ... img} 
                    />
                ))
            }  
        </div>
        </>
    )
}
