import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ListAllProducts = () => {
    const [allProducts, setAllProducts] = useState([])

    useEffect( () => {
        axios.get('http://localhost:8000/api/products/')
            .then(res => {
                console.log(res.data)
                setAllProducts(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <h3 className='text-center'>All Products:</h3>
            {
                allProducts.map( (p) => {
                    const {_id, title} = p
                    return(
                        <h5 key={_id} className='text-center text-decoration-underline'>
                            <Link to={`/${_id}`}>{title}</Link>
                        </h5>
                    )
                })
            }
        </>
    )
}

export default ListAllProducts