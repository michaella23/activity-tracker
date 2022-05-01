import React from 'react'
import Person from "./Person"
import Activity from "./Activity"
import data from "./data.json"

function App() {

const [timeFrame, setTimeFrame] = React.useState(data) // timeframes an object with 3 other objects
// this returns daily, weekly, monthly for first object 'Work'
// need to loop over data, conditionally render daily, weekly, or monthly with button click

function timeView() {
  //let activityTime = document.getElementById("activity-time")
  //let activityPrevious = document.getElementById("activity-previous")
  setTimeFrame(timeFrame.map((prevTimeFrame) => {
    return prevTimeFrame.current // need to return current and previous  and use a conditional for daily, weekly, monthly
  }))

}

  return (
      <main className='grid'>
        <Person
          handleClick={timeView}
        />
        <Activity />
      </main>
  );
}

export default App;

// need to give person the appropriate properties and pass down as props to components
// properties... maybe something will be equal to timeFrame, which will be toggled
