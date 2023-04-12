import React from 'react'

const Planets = ( {data} ) => {
    return (
        <div className='planet-display'>
            <h1>{data.name}</h1>
            <h1>Climate: {data.climate}</h1>
            <h1>Terrain: {data.terrain}</h1>
            <h1>Surface Water: {data.surface_water}</h1>
            <h1>Population: {data.population}</h1>
        </div>
    )
}

export default Planets
