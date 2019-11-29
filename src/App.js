import React, {useState} from 'react';
import Carousel from './components/Carousel';
import Sidebar from './components/Sidebar';
import SearchIcon from './img/search.png';
import MainPage from './components/MainPage';
import Nav from "./components/Nav";
import Bullet from './img/bullettrain.jpeg';
import Fuji from './img/mtfiji.jpeg';
import NightTime from './img/nightime.jpeg';
import Code from './img/code.jpeg';
import Emails from './img/emails.jpg';
import './App.css';
import Popup from './components/Popup.js';

function App() {

  const [cards, setCards] = useState(
    [
        {
            classN: "containerCard",
            subClass: "featured",
            img: Bullet,
            title: "Japan's Shinkansen bullet train",
            info: "Early on October 1, 1964, a sleek blue and white train slid effortlessly across the urban sprawl of Tokyo, its elevated",
            link: "http://www.bbc.co.uk"

        }, 
        {
            classN: "containerCard",
            subClass: "featured",
            img: Fuji,
            title: `Mt. Fiji, Telmo's Next Goal`,
            info: "Telmo is embarking on the journey of a lifetime...",
            link: "https://telmosampaio.com/"
        },
        {
            classN: "containerCard",
            subClass: "featured",
            img: NightTime,
            title: "Japan's Nightlife",
            info: "Customer: 'Bring me the wine list and don't get all Saki...'",
            link: "http://www.bbc.co.uk"
        },
        {
            classN: "containerGrid",
            subClass: "technology",
            img: Code,
            title: "Front End Interview",
            info: "Want to boost your chance at landing a job easier? Follow these steps and you will increase your chances by 100%",
            link: "#"
        },
        {
            classN: "containerGrid",
            subClass: "technology",
            img: Emails,
            title: "How to use psychology to get people to answer your emails",
            info: "To whom it may concern: writing emails is painful. It’s bad enough finding the time to write them, but once you’ve done it, checked it and removed...",
            link: "#"
      }
    ]
)

const findArticles = (subclass) => {
  let newArray = [];
  cards.map((item)=> {
      if (item.subClass == subclass) {
          newArray.push(item)
      }
  })
  return newArray
  
}

  return (
    <div className="App">
      <Nav SearchIcon={SearchIcon} burger={Sidebar}/>
      
      <div className="banner">
        <Carousel cards={findArticles} cardArray = {cards}/>
      </div>
      <div className="stories">
          <MainPage cards={findArticles} />
        </div>
        <div className="subscribetext">
        <Popup />
        </div>
    </div>
  );
}

export default App;
