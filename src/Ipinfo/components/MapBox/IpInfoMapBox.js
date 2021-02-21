import React, { useEffect, useState } from 'react'
import api from '../../service/api'
const IpInfoMapBox = ({ location }) => {
    const [data, setData] = useState(null)
    const [status, setStatus] = useState("pending") // resolved(ok)|rejected(BAD)|pending(default)

    useEffect(() => {
        if (location) {

            api.fetchByIP(location)
                .then(setData)
                .then(() => setStatus("resolved"))
                .catch(() => setStatus("rejected"))
        }

    }, [location])
    return (
        <div>
            {/* TODO: validated others status for the app */}
            <h1>Aqui va un mapa para esta location : {location}</h1>
            {status === "resolved" && data &&
                <div>
                    {/* TODO: show the map mobile and web views */}
                    <div>{data.geo.latitude}</div>
                    <div>{data.geo.longitude}</div>
                </div>
            }
        </div>
    )
}

export default IpInfoMapBox
