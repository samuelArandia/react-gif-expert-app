
// GifExperApp 

import { useState } from "react";

const GifExpertApp = () => {
    // const categories = ['Naruto', 'One piece', 'Dragon Ball'];

    const [categories, setCategoies] = useState(['Naruto', 'One piece', 'Dragon Ball'])

    const handleAdd = () => {

        // setCategoies([ 'Deadpool',...categories,]);
        
        setCategoies(cats => [...cats, 'Deadpool']);
    }

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />

            <button onClick={handleAdd}>Agregar</button>

            <ol>
                {
                    categories.map(category => {
                        return <li key={category}>{category}</li>
                    })
                }
            </ol>
        </>
    )
}

export default GifExpertApp;