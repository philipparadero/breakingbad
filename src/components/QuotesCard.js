import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './QuoteCard.css'
const QuotesCard = () => {

    const [quote, setQuote] = useState([]);

    const style = {
        animation: `fadeIn ${Math.floor(Math.random() * 11)}s ease-out`,
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            const getQuote = async () => {
                const data = await axios.get(`https://breakingbadapi.com/api/quote/random`);
                setQuote(data.data[0])
            }
            getQuote();
          }, 1000);
        return () => clearTimeout(timer);
    }, [])

    return (
        <div className='quote-card' style={style}>
            <div className="quote-card-holder">
                <h3 className="quote">
                    {`"${quote.quote}"`}
                </h3>
                <p className="quote-author">
                    {`-${quote.author}`}
                </p>
            </div>
        </div>
    )
}

export default QuotesCard
