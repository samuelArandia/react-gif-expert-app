import React, { useState } from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ({ setCategoies }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault(setCategoies);
        
        if (inputValue.trim().length > 2) {
            setCategoies(cats => [inputValue,...cats ]);
            setInputValue('');
        }
    }

    return (
        <>
            <form onSubmit={ handleSubmit } >
                <input 
                    type="text"
                    value={inputValue}
                    onChange={ handleInputChange }
                />
            </form>
        </>
    )
}

AddCategory.propTypes = {
    setCategoies: PropTypes.func.isRequired,
}