import { useState } from "react";
import TimeZoneCard from "./TimeZone/components/Card/TimeZoneCard"
import { TimeZoneSearch } from "./TimeZone/components/Search/TimeZoneSearch";

export const TimeZonesApp = () => {

  const [timeZones, setTimeZones] = useState(["America/Argentina/Salta", "Africa/Cairo"])

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
      <header className="">
        <h1>Wellcome to TimeZone UI</h1>
      </header>
      <TimeZoneSearch onSelect={handleAddTZ} />
      <section className="grid-card-timezone">
        {timeZones.map(timeZone => (
          <TimeZoneCard key={timeZone} timeZone={timeZone} onClose={handleRemoveTZ} />
        ))}
      </section>
      <footer>
        <p>Power by @kenriortega</p>
      </footer>
    </>
  );
}

