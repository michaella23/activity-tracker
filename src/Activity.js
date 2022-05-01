import React from "react"

export default function Activity(props) {

    // need conditional rendering from daily, weekly, monthly, that can plug into the object notation
    const activityGrid = props.timeSpent.map((activity) => {


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
                        <h1 id="activity-time">{activity.timeframe.current} hrs</h1>
                        <p className="previous"><span id="activity-previous">Previous - </span><span>{activity.timeframe.previous} hrs</span></p>
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
