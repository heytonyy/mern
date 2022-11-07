import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const EditProduct = () => {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState('')

    const { product_id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${product_id}`)
            .then(res => {
                console.log(res.data)
                setTitle(res.data.title)
                setPrice(res.data.price)
                setDescription(res.data.description)
            })
            .catch(err => console.log(err))
    }, [])

    const formHandler = e => {
        e.preventDefault();
        let updatedBody = {
            'title': title,
            'price': price,
            'description': description
        }
        axios.put(`http://localhost:8000/api/products/update/${product_id}`, updatedBody)
            .then(res => {
                navigate(`/${product_id}`)
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <h3 className='text-center'>Edit Product:</h3>
            <form onSubmit={formHandler} className='w-400 mt-20 mx-auto'>
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" className="form-control" id="title" />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price:</label>
                    <input onChange={(e) => setPrice(e.target.value)} value={price} type="number" className="form-control" id="price" />
                </div>
                <div className="form-group">
                    <label htmlFor="Description">Description:</label>
                    <input onChange={(e) => setDescription(e.target.value)} value={description} type="text" className="form-control" id="Description" />
                </div>
                <input className="btn btn-primary" type="submit" value="Edit"></input>
            </form>
        </>
    )
}

export default EditProduct