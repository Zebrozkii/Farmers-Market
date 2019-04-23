import React from "react";
import Schedule from './Schedule'

const marketSchedule = [
  {
    day: "Sunday",
    location: "Lents International",
    hours: "9:00am - 2:00pm",
    booth: "4A"
  },
  {
    day: "Monday",
    location: "Pioneer Courthouse Square",
    hours: "10:00am - 2:00pm",
    booth: "7C"
  },
  {
    day: "Tuesday",
    location: "Hillsboro",
    hours: "5:00pm - 8:30pm",
    booth: "1F"
  },
  {
    day: "Wednesday",
    location: "Shemanski Park",
    hours: "10:00am - 2:00pm",
    booth: "3E"
  },
  {
    day: "Thursday",
    location: "Northwest Portland",
    hours: "2:00pm - 6:00pm",
    booth: "6D"
  },
  {
    day: "Saturday",
    location: "Beaverton",
    hours: "10:00am - 1:30pm",
    booth: "9G"
  }
];

function ScheduleList() {
  return (
    <div>
      <style jsx>{`
      .header {
        color: white;
        text-align: center;
        font-size: 40px;
        text-shadow: 1px 1px black;
        text-decoration: underline;
      }
      `}</style>
      <div>
      <h1 className="header">Schedule</h1>
        {marketSchedule.map((day, index) =>
          <Schedule day={day.day}
          location={day.location}
          hours={day.hours}
          booth={day.booth}
          key={index}/>
        )}
      </div>
    </div>
  );
}

export default ScheduleList;
