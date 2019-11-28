import React from 'react';

function MainPage() {
  return (
    <div className="container">
        <h2 className="headingLayout"> Top News </h2>
        <hr/>
      <div className="pattern1">
       <img src="https://i.udemycdn.com/user/200_H/12514260_337b.jpg" alt="telmo-image"></img>
        <div className="images">
        </div>
      </div>
        <h2 className="headingLayout"> Science </h2>
        <hr/>
      <div className="pattern2">
        <p> Insert images here </p>
      </div>
        <h2 className="headingLayout"> Technology</h2>
        <hr/>
      <div className="pattern3">
        <p> Insert images here </p>
      </div>
        <h2 className="headingLayout"> Entertainment </h2>
        <hr/>
      <div className="pattern4">
        <p> Insert images here </p>
      </div>
        <h2 className="headingLayout"> Health</h2>
        <hr/>
        <div className="pattern5">
        <p> Insert images here </p>
      </div>
    </div>
  );
}

export default MainPage;
