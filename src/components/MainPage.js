import React from 'react';
import Block from './Block'
import Article from './Article'
import Health from './Health'

function MainPage() {
  return (
    <div className="container">

      <h2 className="headingLayout"> Top News </h2>
        <div className="pattern1 pattern">
          <div className="imagetelmo">
            <div className="telmoinfo">
              <img className="telmoimage" src="https://i.udemycdn.com/user/200_H/12514260_337b.jpg" alt="telmo-image"></img>
              <h2 className="telmoH2">Telmo Sampaio</h2>
              <p>I am a self taught Web Developer and I managed to get hired as a Web Developer in Manchester UK, without any college or university degree. My goal with my website and YouTube channel, is to teach people how to code and build websites and ultimately help them get their first job. My website has many premium courses, that will give you all the knowledge you need to apply for your first to be job.</p>
            </div>
          </div>
        </div>
      <h2 className="headingLayout"> Science </h2>
        <div className="pattern2 pattern">
          <Article 


        </div>
      <h2 className="headingLayout"> Technology</h2>
        <div className="pattern3 pattern">
          <Block 
            // gridimage1 = {}
          />
          <Block 
            // gridimage1 = {}
          />
        </div>
      <h2 className="headingLayout"> Entertainment </h2>
        <div className="pattern4 pattern">
        </div>
      <h2 className="headingLayout"> Health</h2>
        <div className="pattern5 pattern">

          <Health />
          <Health />
          <Health />
        </div>
    </div>
  );
}

export default MainPage;
