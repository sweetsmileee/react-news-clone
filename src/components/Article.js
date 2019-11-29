import React from 'react'
import blackhole from '../img/blackhole.jpg'

export default function Article(props) {
    return (
        <div className="containerArticle">
            <div className="textArticle">
                <h2 className="articleH2">A newfound black hole</h2>
                <p className="articleP">The black hole is locked in orbit with a young blue star dubbed LB-1, which sits about 13,800 light-years away in the constellation Gemini, researchers found.</p>
                <a className="mybtnArticle">Read More</a>
            </div>
            <div className="wrapperArticle">
                <img className="blackholeImage" src={blackhole} />
            </div>
        </div>
    )
}
