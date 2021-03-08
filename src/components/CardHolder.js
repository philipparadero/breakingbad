import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Card'
import './CardHolder.css';
// #093009
// #0D3e10
// #369457

const CardHolder = ({category, limit}) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const apiUrl = category ==='betterCallSaul' ? `https://www.breakingbadapi.com/api/characters?category=Better+Call+Saul&limit=${limit}&offset=0` : `https://www.breakingbadapi.com/api/characters?limit=${limit}&offset=0`;
        const searchForCharacters = async () => {
            const data = await axios.get(apiUrl);
            setData(data.data);
        }
        searchForCharacters();
    },[limit])


    console.log(data)
    return (
        <div className='card-holder-section'>
            <h1 className='card-holder-title'>{category ==='betterCallSaul' ? 'Better Call Saul' : 'Breaking Bad'} Characters</h1>
            <div className='card-holder'>
            { data.map((item, index)=>{
                return (
                    <Card 
                        key={index}
                        name={item.name}
                        img={item.img}
                        nickname={item.nickname}
                        bday={item.birthday}
                        portrayed={item.portrayed}
                        occupation={item.occupation[0]}
                    />
                )
            })}
            </div>
        </div>
    )
}

export default CardHolder
