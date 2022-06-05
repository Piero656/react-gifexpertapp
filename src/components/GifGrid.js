import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';



export const GifGrid = ({ category }) => {

    // const [count, setCount] = useState(0);
    // const [images, setImages] = useState([]);


    const {data:images, loading} = useFetchGifs(category);

    // console.log(state);


    // useEffect(() => {
    //     getGifs( category )
    //         .then( setImages );
    // }, [ category ]);
 

    // getGifs();

    return (

        <>
            <h3>{category}</h3>

            {
                loading && <p>Loading...</p>
            }

            <div className='class-grid'>


                {
                    images.map((img) => {
                        return (
                            <GifGridItem
                                key={img.id}
                                {...img}
                            />
                        )
                    })

                }


         
            </div>
        </>
    )
}
