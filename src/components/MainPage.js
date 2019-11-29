import React from 'react';
import Block from './Block'
import Article from './Article'

function MainPage() {
  return (
    <div className="container">

      <h2 className="headingLayout"> Top News </h2>
        <div className="pattern1">
          <div className="imagetelmo">
            <div className="telmoinfo">
              <img className="telmoimage" src="https://i.udemycdn.com/user/200_H/12514260_337b.jpg" alt="telmo-image"></img>
              <p>I am a self taught Web Developer, and I managed to get hired as a Web Developer in Manchester UK, without any college or university degree. My goal with my website and YouTube channel, is to teach people how to code and build websites, and ultimately help them get their first job, without any previous experience. In my website you can find many premium courses, that will give you all the knowledge you need to apply for your first to be job. I have also tons of blog posts and YouTube videos full of tips and useful information.</p>
            </div>
          </div>
        </div>
      <h2 className="headingLayout"> Science </h2>
        <div className="pattern2">
          <Article 

          />
        </div>
      <h2 className="headingLayout"> Technology</h2>
        <div className="pattern3">
          <Block 
            // gridimage1 = {}
          />
          <Block 
            // gridimage1 = {}
          />
        </div>
      <h2 className="headingLayout"> Entertainment </h2>
        <div className="pattern4">
        </div>
      <h2 className="headingLayout"> Health</h2>
        <div className="pattern5">

      </div>
    </div>
  );
}

export default MainPage;
