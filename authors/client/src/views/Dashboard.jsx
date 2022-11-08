import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
    const [allAuthors, setAllAuthors] = useState(null)
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/')
            .then(res => setAllAuthors(res.data))
            .catch(err => console.log(err))
    }, [refresh])

    const deleteAuthor = (author_id) => {
        axios.delete(`http://localhost:8000/api/authors/delete/${author_id}`)
            .then( res => setRefresh(!refresh))
            .catch(err => console.log(err))
    }

    return (
        <>
            <Link to={'/new'} className='ml-20 btn btn-primary'>Add Author</Link>
            <h4 className='ml-20'>We have quotes by:</h4>
            <table className="table w-500">
                <thead>
                    <tr>
                        <th className='text-center'>Author</th>
                        <th className='text-center'>Actions available</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (allAuthors) ?
                            allAuthors.map((p, i) => {
                                const { firstName, lastName, _id: id } = p
                                return (
                                    <tr key={i}>
                                        <td className='text-center'>{firstName} {lastName}</td>
                                        <td className='text-center'>
                                            <Link to={`/edit/${id}`} className='btn btn-primary'>EDIT</Link>
                                            <button onClick={(e) => deleteAuthor(id)} className='btn btn-danger'>DELETE</button>
                                        </td>
                                    </tr>
                                )
                            }) :
                            <tr>
                                <td>Loading...</td>
                            </tr>
                    }
                </tbody>
            </table>
        </>
    )
}

export default Dashboard