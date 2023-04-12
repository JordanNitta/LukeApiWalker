import React from 'react'

const People = ( {data} ) => {
    return (
        <div className='people-display'>
            <h1> {data.name}</h1>
            <h1>Height: {data.height}</h1>
            <h1>Mass: {data.mass}</h1>
            <h1>Hair Color: {data.hair_color}</h1>
            <h1>Skin Color: {data.skin_color}</h1>
        </div>
    )
}

export default People
