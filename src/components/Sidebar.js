import React from 'react'
import {slide as Menu} from 'react-burger-menu';
// need to import the css file here 


export default props => {
    return(
        <Menu>
            <a className="menu-item" href="/">
                Home
            </a>
            <a className="menu-item" href="/news">
                News        
            </a>
            <a className="menu-item" href="/sports">
                Sports
            </a>
            <a className="menu-item" href="/weather">
                Weather
            </a>
            <a className="menu-item" href="/entertainment">
                Entertainment
            </a>
            <a className="menu-item" href="/business">
                Business
            </a>
            <a className="menu-item" href="/science">
                Science
            </a>
            <a className="menu-item" href="/health">
                Health
                </a>
            <a className="menu-item" href="/technology">
                Technology
                </a>
        </Menu>
    )
}
