import React from "react" 

export default function Person(props) {


function handleClick() {
  props.setTimeFrame()
}


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
            <button id="daily" onclick={() => props.timeView()}>Daily</button> 
            <button id="weekly" onclick={handleClick}>Weekly</button>
            <button id="monthly" onclick={handleClick}>Monthly</button>
          </div>
      </div>
    )
}

// going to need to use state for the buttons...