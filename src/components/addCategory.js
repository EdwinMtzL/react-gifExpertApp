import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const  AddCategory = ({setCategories} ) => {

const [inputValue, setInputValue] = useState('');

const handleInputChange = ( e ) => {
    setInputValue(e.target.value)
}

const handleSubmit = (e)=>{
    e.preventDefault();

    if( inputValue.trim().length > 2 ){
        console.log( inputValue.trim());
        setCategories ( cats => [inputValue, ...cats]);
        setInputValue('');
    }else{
        console.log( inputValue.trim());
        alert('Debes agregar una palabra');
    }
}
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder = 'Buscar los mejores gif'
                value= {inputValue}
                onChange = {handleInputChange}
            />
        </form>
    )
}

AddCategory.prototype={
    value : PropTypes.func.isRequired
}