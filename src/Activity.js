import React from "react"

export default function Activity(props) {

    // need conditional rendering from daily, weekly, monthly, that can plug into the object notation
    const activityGrid = props.timeSpent.map(({title, image, timeframe}) => {

        return (
            <div className="grid-item">
                <div className={title}>
                    <img src={image} alt="activity icon"/>
                </div>
                <div className="card">
                    <div className="activity">
                        <p>{title}</p>
                        <img src="./images/icon-ellipsis.svg" alt="ellipsis" />
                    </div>
                    <div className="time">
                        <h1 id="activity-time">{timeframe.current} hrs</h1>
                        <p className="previous"><span id="activity-previous">previous - </span><span>{timeframe.previous} hrs</span></p>
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
