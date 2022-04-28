import React from "react" 

export default function Person() {
    return (
        <div className="grid-item person">
          <div className="jeremy">
            <img className="headshot" src='./images/image-jeremy.png' alt="Jeremy headshot" />
            <div>
              <p>Report for</p>
              <h1>Jeremy <span className="last">Robson</span></h1>
            </div>
          </div>
          <div className="bottom">  
            <button id="daily">Daily</button> 
            <button id="weekly">Weekly</button>
            <button id="monthly">Monthly</button>
          </div>
      </div>
    )
}

// going to need to use state for the buttons...