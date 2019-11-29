import React from 'react'

export default function Grid(props) {
    
    return (
        <div className={props.cards.classN}>
                <img className="telmocss" src={props.cards.img}/>
            <div className="wrapperGrid">
                <h2 className="textclass">{props.cards.title}</h2>
                <p className="textclass">{props.cards.info}</p>
                <a className="mybtn">Read More</a>
            </div>
        </div>
    )
}
