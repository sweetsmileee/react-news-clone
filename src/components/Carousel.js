import React, { Component } from 'react'
import Left from '../img/leftArrow.png'
import Right from '../img/rightArrow.png'



export default class Carousel extends Component {
    state = {
        featuredCards: this.props.featured("featured"),
    }


    prepL = (array) =>{
        return new Promise((resolve)=>{
        this.setState({
            featuredCards: array
        })
            resolve("done")
        })
    }
    
    moveLeft = async() => {
        let newArray = [...this.state.featuredCards];
        let moved = newArray.splice(newArray.length-1,1)
        newArray.unshift(moved[0])  
        await this.prepL(newArray);
    }

    prepR = (array) =>{
        return new Promise((resolve)=>{
            this.setState({
                featuredCards: array
            })
            resolve("done")
        })
    }
    
    moveRight = async() => {
        let newArray = [...this.state.featuredCards];
        let moved = newArray.splice(0,1)
        newArray.push(moved[0])  
        await this.prepR(newArray);
    }



    render() {
        
        return (
            <div className="carouselStory">

                {this.state.featuredCards.map((item, i)=> {
                    return (
                        <div className={"containerCard carousel" + (i+1)}>
                            <img className="image"src={item.img}/>
                            <div className="wrapperText">
                                <h2 className="h2class">{item.title}</h2>
                                <p className="pclass">{item.info}</p>
                                <a href={item.link} target="_blank" className="mybtn">Read More</a>
                            </div>
                        </div>)}
                    )
                }

                <div className="arrow left"><a onClick={this.moveLeft}><img src={Left}/></a></div>
                <div className="arrow right"><a onClick={this.moveRight}><img src={Right}/></a></div>
            </div>
        )
}
}

