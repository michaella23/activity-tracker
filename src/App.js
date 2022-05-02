import React from 'react'
import Person from "./Person"
import Activity from "./Activity"
import data from "./data.json"

function App() {

const [timeFrame, setTimeFrame] = React.useState([]) 

let activitiesArray = []

function setValues(event) {
  data.forEach(({title, image, timeframes}) => {
    let activityObj = {
      title: title,
      timeframe: event.target.value === "daily" ? timeframes.daily :
                 event.target.value === "weekly" ? timeframes.weekly :
                                                  timeframes.monthly,                   

      image: image
    }
    activitiesArray.push(activityObj)
  })
  setTimeFrame(activitiesArray)
}

  return (
      <main className='grid'>
        <Person
          renderValues={setValues}
        />
        <Activity 
          timeSpent={timeFrame} /* current state */
        />
      </main>
  );
}

export default App;



/* function setDaily() {
  data.forEach(({title, image, timeframes}) => {
    let activityObj = {
      title: title,
      timeframe: timeframes.daily,
      image: image
    }
    activitiesArray.push(activityObj)
  })
  setTimeFrame(activitiesArray)
}

function setWeekly() {
  data.forEach(({title, image, timeframes}) => {
    let activityObj = {
      title: title,
      timeframe: timeframes.weekly,
      image: image
    }
    activitiesArray.push(activityObj)
  })
  setTimeFrame(activitiesArray)
}

function setMonthly() {
  data.forEach(({title, image, timeframes}) => {
    let activityObj = {
      title: title,
      timeframe: timeframes.monthly,
      image: image
    }
    activitiesArray.push(activityObj)
  })
  setTimeFrame(activitiesArray)
} */

/*
          renderDaily={setDaily}
          renderWeekly={setWeekly}
          renderMonthly={setMonthly}
*/



// timeframes an object with 3 other objects
// this returns daily, weekly, monthly for first object 'Work'// need to loop over data, conditionally render daily, weekly, or monthly with button click
// properties... maybe something will be equal to timeFrame, which will be toggled
// need to return current and previous  and use a conditional for daily, weekly, monthly
