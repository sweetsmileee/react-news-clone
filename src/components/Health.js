import React from 'react'
import breakfast from '../img/breakfast.jpeg'

export default function Health(props) {
    return (
        <div className="containerHealth">
            <div className="textHealth">
                <h2 className="healthH2">Burn more fat!</h2>
                <p className="healthP">Those who exercised before breakfast burned twice the fat!</p>
            </div>
            <div className="wrapperHealth">
                <img className="healthImage" src={breakfast}/>
            </div>
        </div>
    )
}
