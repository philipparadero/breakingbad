import React from 'react'
import './Card.css'

const Card = ({name, img, nickname, bday, portrayed, occupation}) => {
    return (
        <div className='flip-card'>
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img className='flip-card-img'src={img} alt={name} />
                    <h3 className='flip-card-name'>{name}</h3>
                </div>
                <div className="flip-card-back">
                    <div className="info-container">
                        <p className="flip-card-outer-name">Name: {name}</p>
                        <p className="flip-card-outer-nickname">Nickname: {nickname}</p>
                        <p className="flip-card-outer-bday">Birthday: {bday}</p>
                        <p className="flip-card-outer-portrated">Portrayed by: {portrayed}</p>
                        <p className="flip-card-outer-occupation">Occupation: {occupation}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
