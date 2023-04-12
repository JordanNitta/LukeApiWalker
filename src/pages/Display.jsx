import React, { useState, useEffect } from 'react'
import axios from "axios"
import People from '../components/People'
import Planets from '../components/Planets'
import { useParams } from 'react-router-dom'
const Display = () => {
    const { id, search } = useParams()
    const [data, setData] = useState([])
    
    // const starWarsApi = () => {
    //     axios.get(`https://swapi.dev/api/${search}/${id}`)
    //         .then(response => {
    //             console.log(response)
    //             setData(response.data)
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    // }

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${search}/${id}`)
        .then(response => {
            console.log(response.data)
            setData(response.data)
        })
        .catch(err => {
            console.log(err)
            
        })
    }, [search, id]);


    return (
        <div>

            {
                search === "people" ?
                <People data={data} /> :
                <Planets data={data} />
            }

        </div>
    )
}

export default Display
