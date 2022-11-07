import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ListAllProducts = () => {
    const [allProducts, setAllProducts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/')
            .then(res => {
                setAllProducts(res.data)
            })
            .catch(err => console.log(err))
    }, [allProducts])

    const deleteItem = (product_id) => {
        axios.delete(`http://localhost:8000/api/products/delete/${product_id}`)
            .then(res => {
                setAllProducts(allProducts.filter(p => p._id !== product_id))
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <h3 className='text-center'>All Products:</h3>
            <table className="table w-500 mx-auto">
                <thead>
                    <tr>
                        <th className="text-center">ID</th>
                        <th className="text-center">Product</th>
                        <th className="text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allProducts.map((p, idx) => {
                            const {_id: product_id} = p
                            return (
                                <tr key={product_id}>
                                    <td className='text-center'>{idx + 1}</td>
                                    <td className='text-center'>{p.title}</td>
                                    <td className='d-flex justify-content-around'>
                                        <Link to={`/${product_id}`} className="btn btn-sm btn-primary">VIEW</Link>
                                        <Link to={`/edit/${product_id}`} className="btn btn-sm btn-secondary">EDIT</Link>
                                        <button onClick={(e)=>deleteItem(product_id)} className='btn btn-sm btn-danger'>DELETE</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default ListAllProducts