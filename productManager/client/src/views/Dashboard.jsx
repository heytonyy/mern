import React from 'react'
import ListAllProducts from '../components/ListAllProducts'
import ProductForm from '../components/ProductForm'

const Dashboard = () => {

  return (
    <>
      <ProductForm />
      <hr className='mt-20 mb-20'/>
      <ListAllProducts />
    </>
  )
}

export default Dashboard