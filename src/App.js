import React from 'react';
import Carousel from './components/Carousel';
import Sidebar from './components/Sidebar';
import SearchIcon from './img/search.png';
import MainPage from './components/MainPage'
import Nav from "./components/Nav";
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav SearchIcon={SearchIcon} burger={Sidebar}/>
      
      <div className="banner">
        <Carousel />
      </div>
      <div className="stories">
          <MainPage />
        </div>
    </div>
  );
}

export default App;
