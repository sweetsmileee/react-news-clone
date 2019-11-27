import React from 'react';
import Burger from './components/img/burger.png'
import Search from './img/search.png'
import NavBar from './components/NavBar'
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar burger={Burger} search={Search}/>
          {/* <ul>
              {navOptions.map(item, i){
                return <a href="" ><li className=item.name>{item.name}</li></a>
              }*/}
  
      <div className="banner">
      <div className="carouselStory">
            <div>
              with background image
              <div className="story">
                <h2>Title</h2>
                <p>story preview</p>
              </div>
            </div>
        </div>
      </div>
      <div className="stories">
          Cards of various sizes
        </div>
    </div>
  );
}

export default App;
      


          
       
