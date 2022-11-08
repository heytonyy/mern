import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const NewAuthorForm = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const [errors, setErrors] = useState([]);
    // const [refresh, setRefresh] = useState(false)

    const { author_id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${author_id}`)
            .then(res => {
                setFirstName(res.data.firstName)
                setLastName(res.data.lastName)
            })
            .catch(err => console.log(err))
    }, [])
    // }, [refresh])

    const formHandler = (e) => {
        e.preventDefault()
        let body = {
            firstName: firstName,
            lastName: lastName
        }
        axios.put(`http://localhost:8000/api/authors/update/${author_id}`, body)
            .then(res => {
                console.log(res.data)
                setFirstName('')
                setLastName('')
                navigate('/')
            })
            .catch(err => {
                console.log(err)
                const errorResponse = err.response.data.error.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
                // setRefresh(!refresh)
            })
    }

    return (
        <>
            <Link to={'/'} className='ml-20 btn btn-primary'>Home</Link>
            <div className="card w-400">
                <form onSubmit={formHandler}>
                    {
                        errors.map((err, i) => <p key={i} className='text-danger'>{err}</p>)
                    }
                    <div className="form-group">
                        <label htmlFor="firstName">First Name:</label>
                        <input type="text" onChange={(e) => setFirstName(e.target.value)} className="form-control" value={firstName} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name:</label>
                        <input type="text" onChange={(e) => setLastName(e.target.value)} className="form-control" value={lastName} />
                    </div>
                    <input className='btn btn-primary' type="submit" value="Edit" />
                </form>
            </div>
        </>
    )
}

export default NewAuthorForm