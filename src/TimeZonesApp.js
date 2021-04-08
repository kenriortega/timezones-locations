import { useState } from "react";
import SchemeColorSwitcher from "./components/SchemeSwitcherColor";
import TimeZoneCard from "./TimeZone/components/Card/TimeZoneCard"
import { TimeZoneSearch } from "./TimeZone/components/Search/TimeZoneSearch";
import IpInfoMapBox from "./Ipinfo/components/MapBox/IpInfoMapBox";

export const TimeZonesApp = () => {

  const currentTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
  const [timeZones, setTimeZones] = useState([currentTimeZone])
  const [location, setLocation] = useState(null)

  const handleAddTZ = (timeZone = "") => {
    setTimeZones(timeZones => timeZones.concat(timeZone))
  }
  const handleRemoveTZ = (timeZone = "") => {
    setTimeZones(
      timeZones => timeZones
        .filter(_timeZone => _timeZone !== timeZone)
    )
  }
  const handleFindIPInfo = (_location) => {
    setLocation(_location.split("/")[1])
  }



  return (
    <>
      <header className="header-timezone">
        <h1 className="title">TimeZone Dashboard</h1>
        <h3 className="text">Total TimeZones #{timeZones.length}</h3>
        <TimeZoneSearch onSelect={handleAddTZ} />
      </header>


      <main className="main-timezone">
        <div className="main-title">
          <SchemeColorSwitcher />
        </div>
        <section className="card-section">
          {timeZones.map(timeZone => (
            <TimeZoneCard
              key={timeZone}
              timeZone={timeZone}
              onClose={handleRemoveTZ}
              onSelectLocation={handleFindIPInfo} />
          ))}
        </section>

        {timeZones.length !== 0 &&
          <section>
            {location !== null && <IpInfoMapBox location={location} />}
          </section>
        }

      </main>

      <footer className="footer">
        <div>Power by <a>@kenriortega</a></div>
      </footer>
    </>
  );
}

