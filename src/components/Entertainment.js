import React from 'react'

export default function Entertainment(props) {
    return (
        <div className="containerEntertainment">
            <div className="textEntertainment">
                <h2 className="EntertainmentH2">{props.title}</h2>
                <p className="EntertainmentP">{props.content}</p>
            </div>
            <div className="wrapperEntertainment">
                <img className="EntertainmentImage" src={props.entertainmentimage}/>
            </div>
        </div>
    )
}
