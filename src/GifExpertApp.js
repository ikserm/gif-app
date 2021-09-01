import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import GifGrid from './components/GifGrid';

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['One Punch']);

    const handleAdd = () => {
        setCategories([...categories,'Nueva categoria']);
    }

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />

            <button onClick={handleAdd}>Add</button>

            <ol>
                {
                categories.map( (category) => (
                        <GifGrid 
                            category={category}
                            key={category}
                        />
                    ))
                }
            </ol>
 
        </div>
    )
}

export default GifExpertApp
