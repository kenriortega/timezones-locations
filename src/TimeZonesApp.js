import { useState } from "react";
import TimeZoneCard from "./TimeZone/components/Card/TimeZoneCard"
import { TimeZoneSearch } from "./TimeZone/components/Search/TimeZoneSearch";

export const TimeZonesApp = () => {

  const currentTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
  const [timeZones, setTimeZones] = useState([currentTimeZone])

  const handleAddTZ = (timeZone = "") => {
    setTimeZones(timeZones => timeZones.concat(timeZone))
  }
  const handleRemoveTZ = (timeZone = "") => {
    setTimeZones(
      timeZones => timeZones
        .filter(_timeZone => _timeZone !== timeZone)
    )
  }
  return (
    <>
      <header className="header-timezone">
        <h1>TimeZone Finder</h1>
        <TimeZoneSearch onSelect={handleAddTZ} />
      </header>

      <main className="main-timezone">
        <section className="grid-card-timezone">
          {timeZones.map(timeZone => (
            <TimeZoneCard key={timeZone} timeZone={timeZone} onClose={handleRemoveTZ} />
          ))}
        </section>
      </main>

      <footer>
        <p>Power by @kenriortega</p>
      </footer>
    </>
  );
}

