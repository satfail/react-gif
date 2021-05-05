import React, {useState} from 'react'
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';


export const GifExpertApp = () => {
    // const categorias = ['One Punch', 'Samurai X', 'Dragon Ball'];

    const [categorias, setCategorias] = useState(['One Punch']);

    // const handleAdd = () =>{
    //     setCategorias([ ...categorias, 'Nueva Categoria']);
    // }
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategorias = {setCategorias}></AddCategory>
            <hr />
            {/* <button onClick ={handleAdd}>Agregar</button> */}
            <ol>
                {
                    categorias.map(categoria => (
                        <GifGrid 
                        key = {categoria}
                        categoriaProp = {categoria} />
                    ))
                }
            </ol>
        </>
    )
}
