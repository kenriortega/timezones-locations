import React, { useEffect, useState } from 'react'
import api from '../../service/api'
const TimeZoneCard = ({ timeZone, onClose }) => {
    const [data, setData] = useState(null)
    const [status, setStatus] = useState("pending") // resolved(ok)|rejected(BAD)|pending(default)

    useEffect(() => {
        api.fetchByZone(timeZone)
            .then(setData)
            .then(() => setStatus("resolved"))
            .catch(() => setStatus("rejected"))
    }, [timeZone])
    return (
        <>
            {status === "pending" && <small>Loading...</small>}
            {status === "rejected" && <small className="status-rejected">Something failed</small>}
            {status === "resolved" && data && <div className="card-timezone">
                <div className="card-timezone-header">
                    <h4>{timeZone}</h4>
                    {onClose && <button className="button-on-close" onClick={() => onClose(timeZone)}>X</button>}
                </div>
                <div className="card-timezone-area-numbers">
                    <div className="item-card-timezone">week: {data.week_number}</div>
                    <div className="item-card-timezone">day of year: {data.day_of_year}</div>
                </div>
                <div className="item-card-timezone">ip: <code>{data.client_ip}</code></div>
                <small className="item-card-timezone">{data.datetime.split('.')[0]}</small>
            </div>}
        </>
    )
}

export default TimeZoneCard
