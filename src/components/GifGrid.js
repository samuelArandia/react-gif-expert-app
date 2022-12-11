import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs(category);

    return (
        <>
        <h1 className='title animate__animated animate__fadeIn'>{ category }</h1>
            { loading && <p title animate__animated animate__flash>loading</p> }

            <div className='card-grid'>
                {
                    images.map( img => (
                        < 
                        GifGridItem 
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>

    )
}