import React from "react" 

export default function Person(props) {
  
  const buttonRef = React.useRef(null)
  React.useEffect(() => buttonRef.current.click(), [])

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
            <button id="daily" ref={buttonRef} onClick={props.renderDaily}>Daily</button> 
            <button id="weekly" onClick={props.renderWeekly}>Weekly</button>
            <button id="monthly" onClick={props.renderMonthly}>Monthly</button>
          </div>
      </div>
    )
}
