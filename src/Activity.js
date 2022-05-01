import React from "react"
import data from "./data.json"

export default function Activity(props) {

    // need conditional rendering from daily, weekly, monthly, that can plug into the object notation

    

    const activityGrid = data.map((activity) => {
        
        let daily = activity.timeframes.daily 

        return (
            <div className="grid-item">
                <div className={activity.title}>
                    <img src={activity.image} alt=""/>
                </div>
                <div className="card">
                    <div className="activity">
                        <p>{activity.title}</p>
                        <img src="./images/icon-ellipsis.svg" alt="" />
                    </div>
                    <div className="time">
                        <h1 id="activity-time">{daily.current} hrs</h1>
                        <p className="previous" id="activity-previous">Yesterday - <span>{activity.timeframes.daily.previous} </span>hrs</p>
                    </div>
                </div>
            </div>
        )    

    })

    return (
        <>
            {activityGrid}
        </>
    )
}
