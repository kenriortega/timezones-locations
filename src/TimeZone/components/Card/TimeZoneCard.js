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
            {status === "resolved" && data && <div className="item-card-timezone">
                <h3>{timeZone}</h3>
                {onClose && <button onClick={() => onClose(timeZone)}>X</button>}
                <small>ip: {data.client_ip}</small>
                <small>time: {data.datetime}</small>
                <small>week: {data.week_number}</small>
                <small>day of year: {data.day_of_year}</small>
            </div>}
        </>
    )
}

export default TimeZoneCard
