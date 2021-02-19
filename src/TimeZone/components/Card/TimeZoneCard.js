import React, { useEffect, useState } from 'react'
import api from '../../service/api'
import calendar from '../../img/calendar.svg'
import close from '../../img/close.svg'
import time from '../../img/time.svg'
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
            {status === "pending" && <small className="alert-pending">Loading...</small>}
            {status === "rejected" && <small className="alert-failed">Something failed :(</small>}
            {status === "resolved" && data &&
                <div className="card tz">
                    <div className="card-header">
                        <img src={calendar} />
                        <p>{timeZone} </p>

                        <img onClick={() => onClose(timeZone)} src={close} />
                    </div>
                    <div className="card-body">

                        <h1>{data.week_number}w/{data.day_of_year}d</h1>

                        <p>IP: {data.client_ip}</p>
                    </div>
                    <div className="card-footer">
                        <img src={time} />
                        <p>{data.datetime.split('.')[0]}</p>
                    </div>
                </div>
            }
        </>
    )
}

export default TimeZoneCard
