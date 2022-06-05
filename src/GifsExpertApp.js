import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifsExpertApp = () => {

    // const categorias = ['One punch', 'Samurai X', 'Dragon Ball'];

    let [categories, setCategories] = useState(['One punch']);

    // const handleAdd = () => {

    //     setCategories(['Hunter X Hunter', ...categories]);

    // }



    return (
        <>

            <h2>GifsExpertApp</h2>
            <hr />

            {/* <button onClick={handleAdd}>Agregar</button> */}

            <AddCategory setCategories = {setCategories}/>

            <ol>
                {
                    categories.map( (cat) => {
                        return <GifGrid key={cat} category = {cat} />
                    })
                }
            </ol>
        </>
    );
}

export default GifsExpertApp;