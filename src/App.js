import React from 'react'
import Person from "./Person"
import Activity from "./Activity"
import data from "./data.json"

function App() {

const [timeFrame, setTimeFrame] = React.useState([]) 

let activitiesArray = []

function setDaily() {
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

// rendering Daily view on load
React.useEffect(() => setDaily, [])


// this function allows display of dynamic values based on the event target button value
function setValues(event) {
  data.forEach(({title, image, timeframes}) => { // destructured 'activity' object
    // since it's destructured, I don't have the repetition of activity.title, activity.image, etc. in the code below
    let activityObj = {
      title: title,
      // here I use the event target (I gave each of the buttons a value) to conditionally render the data
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



/* 

function setDaily() {
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
}


function setValues(event) {
  data.forEach(({title, image, timeframes}) => { // destructured 'activity' object
    // since it's destructured, I don't have the repetition of activity.title, activity.image, etc. in the code below
    let activityObj = {
      title: title,
      // here I use the event target (I gave each of the buttons a value) to conditionally render the data
      timeframe: event.target.value === "daily" ? timeframes.daily :
                 event.target.value === "weekly" ? timeframes.weekly :
                                                  timeframes.monthly,                   

      image: image
    }
    activitiesArray.push(activityObj)
  })
  setTimeFrame(activitiesArray)
}

 */

/*
            renderDaily={setDaily}
            renderWeekly={setWeekly}
            renderMonthly={setMonthly}
*/



// timeframes an object with 3 other objects
// this returns daily, weekly, monthly for first object 'Work'// need to loop over data, conditionally render daily, weekly, or monthly with button click
// properties... maybe something will be equal to timeFrame, which will be toggled
// need to return current and previous  and use a conditional for daily, weekly, monthly
