import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem';

export default function GifGrid({category}) {

    const { data, loading} = useFetchGifs(category);

    return (
        <>
        <h3 className="animate__animated animate__fadeInDown">{category}</h3> <hr/>
            { loading && <p className='animate__animated animate__flash'>Cargando...</p>}

        {<div className="card-grid">

            { 
            data.map( (img) => 
                <GifGridItem 
                key={img.id}
                {...img }
                />
            ) 
          }
        </div> }
        </>
    )
}
