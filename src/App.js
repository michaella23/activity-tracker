import React from 'react'
import Person from "./Person"
import Activity from "./Activity"
import data from "./data.json"

function App() {

const [timeFrame, setTimeFrame] = React.useState([]) 


let array = []

function setDaily() {
  //document.getElementById("activity-previous").textContent = "Yesterday - "
  data.forEach((activity) => {
    let activityObj = {
      title: activity.title,
      timeframe: activity.timeframes.daily,
      image: activity.image
    }
    array.push(activityObj)
  })
  setTimeFrame(array)
}

function setWeekly() {
  //document.getElementById("activity-previous").textContent += "Last week - "
  data.forEach((activity) => {
    let activityObj = {
      title: activity.title,
      timeframe: activity.timeframes.weekly,
      image: activity.image
    }
    array.push(activityObj)
  })
  setTimeFrame(array)
}

function setMonthly() {
  //document.getElementById("activity-previous").textContent = "Last month - "
  data.forEach((activity) => {
    let activityObj = {
      title: activity.title,
      timeframe: activity.timeframes.monthly,
      image: activity.image
    }
    array.push(activityObj)
  })
  setTimeFrame(array)
}

  return (
      <main className='grid'>
        <Person
          renderDaily={setDaily}
          renderWeekly={setWeekly}
          renderMonthly={setMonthly}
        />
        <Activity 
          timeSpent={timeFrame}
        />
      </main>
  );
}

export default App;






// timeframes an object with 3 other objects
// this returns daily, weekly, monthly for first object 'Work'
// need to loop over data, conditionally render daily, weekly, or monthly with button click
// need to give person the appropriate properties and pass down as props to components
// properties... maybe something will be equal to timeFrame, which will be toggled
/*function timeView() {
  //let activityTime = document.getElementById("activity-time")
  //let activityPrevious = document.getElementById("activity-previous")
  setTimeFrame(timeFrame.map((prevTimeFrame) => {
    return prevTimeFrame.timesframes.weekly.current
    
      //.current,
      //prevTimeFrame.timesframes.weekly.previous
     // need to return current and previous  and use a conditional for daily, weekly, monthly
  }))
}*/