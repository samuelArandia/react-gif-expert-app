
// GifExperApp 

import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {

    const [categories, setCategoies] = useState(['Naruto'])

    return (
        <>
            <h2 className='title animate__animated animate__animate__fadeInDown'> Gif Expert App </h2>
            <h3 className='title'>Encuentra los mejores gif para compartir con tus amigos</h3>
            <AddCategory setCategoies={ setCategoies }/> 
            <hr />

            <ol>
                {
                categories.map(category => 
                    <GifGrid 
                        key={category}
                        category={category} 
                    />)
                }
            </ol>
        </>
    )
}

export default GifExpertApp;