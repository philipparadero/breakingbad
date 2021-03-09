import React from 'react'
import QuotesCard from '../components/QuotesCard'
import './Quotes.css'

const Quotes = () => {

    return (
        <div className="quotes-section">
            <div className='quotes-container'>
                <QuotesCard />
                <QuotesCard />
                <QuotesCard />
                <QuotesCard />
                <QuotesCard />
                <QuotesCard />
                <QuotesCard />
                <QuotesCard />
                <QuotesCard />
            </div>
        </div>
    )
}

export default Quotes
