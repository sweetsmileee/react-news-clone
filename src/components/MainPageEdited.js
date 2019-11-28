import React from 'react';
import Block from './Block'

function MainPage() {
  return (
    <div className="container">
        <h2 className="headingLayout"> Top News </h2>
      <div className="pattern1">
        <img src="https://i.udemycdn.com/user/200_H/12514260_337b.jpg" alt="telmo-image"></img>
        <div className="images">
        </div>
      </div>
        <h2 className="headingLayout"> Science </h2>
      <div className="pattern2">
        <Block 
          // gridimage1 = {}
        />
      </div>
        <h2 className="headingLayout"> Technology</h2>
      <div className="pattern3">
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
