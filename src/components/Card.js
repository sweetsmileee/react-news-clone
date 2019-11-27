import React from 'react'

export default function Card(props) {
    return (
        <div className="containerCard">
            <img className="image"src={props.contentimage}/>
            <div className="wrapperText">
                <h2 className="h2class">Japan's Shinkansen bullet train</h2>
                <p className="pclass">Early on October 1, 1964, a sleek blue and white train slid effortlessly across the urban sprawl of Tokyo, its elevated</p>
                <a className="mybtn">Read More</a>
            </div>
        </div>
    )
}
