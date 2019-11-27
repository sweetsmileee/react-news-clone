import React from 'react'

export default function Grid(props) {
    return (
        <div className="containerGrid">
                <img className="telmocss" src={props.gridimage1}/>
            <div className="wrapperGrid">
                <h2 className="textclass">Front End Interview</h2>
                <p className="textclass">Want to boost your chance at landing a job easier? Follow these steps and you will increase your chances by 100%</p>
                <a className="mybtn">Read More</a>
            </div>
        </div>
    )
}
