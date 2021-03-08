import React, { useEffect, useState } from 'react'
import CardHolder from '../components/CardHolder'
import './Characters.css'

const Characters = () => {
    const [newLimit, setLimit] = useState(8)

    const onBtnClick = () => {
        setLimit(newLimit => newLimit + 8);
    }

    console.log(newLimit)
    
    return (
        <div className='characters-section'>
            <CardHolder category='breakingBad' limit={newLimit}/>
            <button onClick={onBtnClick} className='see-more-btn'>See More</button>
        </div>
    )
}

export default Characters
