import React, {useState} from 'react'
import PropTypes  from 'prop-types'

export const AddCategory = ({setCategorias}) => {
    const [inputValue, setIpuntValue] = useState('');
   
    const handleInputChange = (e) =>{
        setIpuntValue( e.target.value );
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(inputValue.trim().length > 2){
            
            //No tengo acceso a las categorias solo al set, necesito un callback
            setCategorias(categoria => [inputValue, ...categoria ]);
            setIpuntValue('');
        }
    }

    return (
        <>
        <form onSubmit={handleSubmit}>

           <input
            type ="text"
            value={inputValue}
            onChange= { handleInputChange}
           />

        </form>
        </>
    )
}


AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired
}