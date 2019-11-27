import React from 'react'
import 'Nav.css' from './Nav.css'

export default function NavBar(props) {
    return (
    
        <nav className="navBar">
            <div className="burgerMenu">
            <img src={props.burger} />
                </div>
                <input type="text" placeholder="Search the code nation DIRT"></input>
                <div className="searchIcon">
            <img className="searchImg" src={props.search} />
            </div>
        </nav> 
    );
}
