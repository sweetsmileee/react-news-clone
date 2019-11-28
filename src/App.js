import React from 'react';
import Carousel from './components/Carousel';
import Sidebar from './components/Sidebar';
import SearchIcon from './img/search.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navBar">
        <Sidebar /> 
        <input type="text" placeholder="Search"></input>
        <img className="searchIcon" src={SearchIcon} />
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
