import React from 'react'
import CardHolder from '../components/CardHolder'

const Home = () => {
    return (
        <div>
            <CardHolder category='breakingBad' limit={4}/>
            <CardHolder category='betterCallSaul' limit={4}/>
        </div>
    )
}

export default Home
