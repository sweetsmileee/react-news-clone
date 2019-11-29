import React from 'react'
import breakfast from '../img/breakfast.jpeg'

export default function Health(props) {
    return (
        <div className="containerHealth">
            <div className="textHealth">
                <h2 className="healthH2">{props.title}</h2>
                <p className="healthP">{props.content}</p>
            </div>
            <div className="wrapperHealth">
                <img className="healthImage" src={props.healthimage}/>
            </div>
        </div>
    )
}
