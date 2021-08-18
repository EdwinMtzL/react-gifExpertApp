import React, {useState} from 'react';
import { AddCategory } from './components/addCategory';
import GifGrid from './components/GifGrid';



export const  GifExpertApp = ()=>{

    //const categories = ['Bleach', 'Deamon Slayer', 'Naruto'];
    const [categories, setCategories] = useState(['Umaru Chan']);

    // const handleAdd = ()=>{
    //     // Solucion 1
    //     //setCategories([...categories, 'HunterXhunter']);
    //     // Solucion 2 
    //     setCategories ( cats => [...cats, 'Papus']);
    // }

    return (
    <>
      <h2>Los mejores Gif de OpenTec :)</h2>

        <AddCategory setCategories={ setCategories }/>

      <hr />


      <ol>
          { categories.map( category => 
                <GifGrid 
                    category = {category} 
                    key={category}
                /> 
            ) 
          }
      </ol>
    </>
    )
  
  }
  