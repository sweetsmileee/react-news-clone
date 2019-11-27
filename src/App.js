import React from 'react';
import Burger from './img/burger.png'
import Carousel from './component/Carousel'
import Sidebar from './component/Sidebar'
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navBar">
        
        
        <div className="burgerMenu">
          <img src={Burger} />
            {/* <ul>
              {navOptions.map(item, i){
                return <a href="" ><li className=item.name>{item.name}</li></a>
              }*/}
          </div>

          
        <input type="text" placeholder="Search"></input>
        <img src="magnifyingGlass" />

      </nav>
      <div className="banner">
        <Carousel />
      </div>
      <div className="stories">
          Cards of various sizes
        </div>
    </div>
  );
}

export default App;
