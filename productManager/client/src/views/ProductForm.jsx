import React, { useState } from 'react'
import axios from 'axios'
import ListAllProducts from '../components/ListAllProducts'

const ProductForm = () => {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState(0)
  const [description, setDescription] = useState('')


  const formHandler = e => {
    e.preventDefault();
    let body = {
      'title': title,
      'price': price,
      'description': description
    }
    axios.post('http://localhost:8000/api/products/new', body)
      .then(res => {
        console.log(res.data)
        setTitle('')
        setPrice(0)
        setDescription('')
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      <h3 className='text-center'>Product Manager</h3>
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
        <input className="btn btn-primary" type="submit" value="Submit"></input>
      </form>
      <hr className='mt-20 mb-20'/>
      <ListAllProducts />
    </>
  )
}

export default ProductForm