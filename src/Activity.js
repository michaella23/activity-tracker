import React from "react"
import data from "./data.json"

export default function Activity() {

    const activityGrid = data.map((activity) => {

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
                        <h1 id="work-time">{activity.timeframes.daily.current}</h1>
                        <p className="previous" id="work-previous">Yesterday - <span>{activity.timeframes.daily.previous}</span>hrs</p>
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
