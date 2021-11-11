import { useState, useEffect } from "react";
import "./Timer.css";
const Timer = ({ pomodoro, shortBreak, longBreak }) => {
  const [initialMinute, setInitialMinute] = useState(10);
  const [initialSecond, setInitialSecond] = useState(0);
  const [min, setMin] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSecond);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) setSeconds(seconds - 1);
      if (seconds === 0) {
        if (min === 0) {
          clearInterval(myInterval);
        } else {
          setMin(min - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <div className="timeContainer">

        {min === 0 && seconds === 0 ? null : (
          <h1 className="time">
            {" "}
            {min}:{seconds < 10 ? `0${seconds}` : seconds}
          </h1>
        )}
      </div>
    
  );
};

export default Timer;
