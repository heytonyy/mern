import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

const ViewProduct = () => {
    const [product, setProduct] = useState(null)

    const { product_id } = useParams()

    useEffect( () => {
        axios.get(`http://localhost:8000/api/products/${product_id}`)
            .then(res => {
                console.log(res.data)
                setProduct(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className='card mx-auto w-500 mt-20'>
            {
                product ? 
                    <>
                        <h3>{product.title}</h3>
                        <h5> <span className='text-decoration-underline'>Price</span>: ${product.price}</h5>
                        <h5> <span className='text-decoration-underline'>Description</span>: {product.description}</h5>
                    </>
                 : <h1>Loading...</h1>
            }
            <Link to='/' className='btn btn-primary ml-auto'>Go Back</Link>
        </div>
    )
}

export default ViewProduct