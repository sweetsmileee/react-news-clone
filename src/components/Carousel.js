import React, { useState } from 'react'
import Left from '../img/leftArrow.png'
import Right from '../img/rightArrow.png'
import Bullet from '../img/bullettrain.jpeg'
import Fuji from '../img/mtfiji.jpeg'
import NightTime from '../img/nightime.jpeg'


export default function Carousel(props) {
    const [cards, setCards] = useState(
        [
            {
                name: "card1",
                img: Bullet,
                title: "Japan's Shinkansen bullet train",
                info: "Early on October 1, 1964, a sleek blue and white train slid effortlessly across the urban sprawl of Tokyo, its elevated",
                link: "http://www.bbc.co.uk"

            }, 
            {
                name: "card2",
                img: Fuji,
                title: `Mt. Fiji, Telmo's Next Goal`,
                info: "Telmo is embarking on the journey of a lifetime...",
                link: "https://telmosampaio.com/"
            },
            {
                name: "card3",
                img: NightTime,
                title: "Japan's Nightlife",
                info: "Customer: 'Bring me the wine list and don't get all Saki...'",
                link: "http://www.bbc.co.uk"
            }
        ]
    )

    const prepL = (array) =>{
        return new Promise((resolve)=>{
            setCards(
                array
            )
            resolve("done")
        })
    }
    
    const moveLeft = async() => {
        let newArray = [...cards];
        let moved = newArray.splice(newArray.length-1,1)
        newArray.unshift(moved[0])  
        await prepL(newArray);
    }

    const prepR = (array) =>{
        return new Promise((resolve)=>{
            setCards(
                array
            )
            resolve("done")
        })
    }
    
    const moveRight = async() => {
        let newArray = [...cards];
        let moved = newArray.splice(0,1)
        newArray.push(moved[0])  
        await prepR(newArray);
    }
        
        return (
            <div className="carouselStory">

                {cards.map((item, i)=> {
                    return (
                        <div className={"containerCard carousel" + (i+1)}>
                            <img className="image"src={item.img}/>
                            <div className="wrapperText">
                                <h2 className="h2class">{item.title}</h2>
                                <p className="pclass">{item.info}</p>
                                <a href={item.link} className="mybtn">Read More</a>
                            </div>
                        </div>)}
                    )
                }

                <div className="arrow left"><a onClick={moveLeft}><img src={Left}/></a></div>
                <div className="arrow right"><a onClick={moveRight}><img src={Right}/></a></div>
            </div>
        )
}

