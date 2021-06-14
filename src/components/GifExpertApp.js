import React, { useState } from 'react'
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';

const GifExpertApp = ({defaultCategories = []}) => {

    const [categories, setCategories] = useState(defaultCategories);

    return (
        <>
            <h2>GifExpertAPP</h2>

            <AddCategory setCategories = {setCategories}/>

            <hr/>            

            <ol>
                {
                    categories.map( catecory => (
                        <GifGrid key={catecory} category={catecory} />
                    ))
                }
            </ol>
        </>
    )
}

export default GifExpertApp
