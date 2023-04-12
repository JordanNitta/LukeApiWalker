import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import '../assets/style.css'
import axios from 'axios'
const Home = () => {

    const [search, setSearch] = useState("people")
    const [id, setId] = useState()
    const navigate = useNavigate()

    // const handlePeople = (e) => {
    //     setPeople(e.target.value)
    // } 


    const handleId = (e) => {
        setId(e.target.value)
    }

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    // const handleFormSubmit = (e) => {
    //     e.preventDefault()
    //     if(search === "people") {
    //         navigate("/people/:id")
    //     } else if (search === "planet") {
    //         navigate("/planets/:id")
    //     }
    // }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        if(search === "people") {
            navigate(`/${search}/${id}`)
        } else if (search === "planets") {
            navigate(`/${search}/${id}`)
        }
    }

    
    return (
        <div className='form-display'>
            <form onSubmit={handleFormSubmit}>
                <label>Search For: </label>
                <select onChange={handleSearch}>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                </select>
                <label>Id: </label>
                <input type="number" value={id} onChange={handleId}/>
                <button type='submit'>Add</button>
            </form>
        </div>
    )
}

export default Home
