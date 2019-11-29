import React, {useState} from 'react'
import Title from './title'

export default function Nav(props) {
    
    const [result, setResult] = useState(
        "Search"
    )
    const [input, setInput] = useState(
        ""
    )
    
    const logInput = (event) => {
        
        setInput (
            event.target.value
        )

    }

    const search = () => {
        setInput (
            ""
        )

        setResult(
            `0 of 0 results for ${input}`
        )
    }

    
    

    return (
        <nav className="navBar">
        
        <props.burger /> 
        <input type="text" placeholder={result} onChange={logInput} value={input}></input>
        <a onClick={(e)=>{search(e)}}><div className="searchIcon"><img src={props.SearchIcon} /></div></a>
        <Title/>
    </nav>
       
    )
}
