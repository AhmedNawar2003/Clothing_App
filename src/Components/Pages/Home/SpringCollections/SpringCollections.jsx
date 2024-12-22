import { Link } from "react-router-dom";
import "./SpringCollections.css";
import { useEffect, useState } from "react";

export default function SpringCollections({
  initialDays,
  initialHours,
  initialMinutes,
  initialSeconds,
}) {
  const [time, setTime] = useState({
    day: initialDays,
    hours: initialHours,
    minutes: initialMinutes,
    seconds: initialSeconds,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        let { day, hours, minutes, seconds } = prevTime;
        seconds--;

        if (seconds < 0) {
          seconds = 59;
          minutes--;
          if (minutes < 0) {
            minutes = 59;
            hours--;
            if (hours < 0) {
              hours = 23;
              day--;
              if (day < 0) {
                clearInterval(timer);
                day = 0;
                hours = 0;
                minutes = 0;
                seconds = 0;
              }
            }
          }
        }

        return { day, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="SpringCollections">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card mb-5">
              <h6>
                <span className="red-line"></span>Deal of the week
              </h6>
              <h2>Spring Collection</h2>
              <Link className="link" to="">
                shop now
              </Link>
            </div>
            <div className="col">
              <div className="card">
                <ul className="timer">
                  <li>
                    <span className="time" id="day">
                      {time.day}
                    </span>
                    <span className="text">Day</span>
                  </li>
                  <li>
                    <span className="time" id="hour">
                      {time.hours}
                    </span>
                    <span className="text">HRS</span>
                  </li>
                  <li>
                    <span className="time" id="minute">
                      {time.minutes}
                    </span>
                    <span className="text">MIN</span>
                  </li>
                  <li>
                    <span className="time" id="second">
                      {time.seconds}
                    </span>
                    <span className="text">SEC</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
