import React from 'react'

const GifGridItem = ( {id, title, url} ) => {
    return (
        <div className="animate__animated animate__fadeIn">
            <img className="card" src={url} alt={ title } />
            <p className="animate__animated animate__bounce"> {title} </p>
        </div>
    )
}

export default GifGridItem
