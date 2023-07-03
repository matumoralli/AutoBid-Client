import React, { useState } from "react";
// Update the count down every 1 second
export default function CountDownTimer({ endDate }) {
  const countDownDate = new Date(endDate).getTime();
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [finish, setFinish] = useState(0);

  setInterval(function () {
    const today = new Date().getTime();
    const distance = countDownDate - today;
    setFinish(distance);

    // Time calculations for days, hours, minutes and seconds
    setTime((prev) => ({
      ...prev,
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    }));

    setTime((prev) => ({
      ...prev,
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    }));

    setTime((prev) => ({
      ...prev,
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    }));

    setTime((prev) => ({
      ...prev,
      seconds: Math.floor((distance % (1000 * 60)) / 1000),
    }));
  }, 1000);

  // If the count down is finished, write some text
  if (finish < 0) {
    clearInterval();
    return <p className="text-gray-400">SUBASTA TERMINADA</p>;
  }

  if (time.days > 0) {
    return <p className="text-white">{time.days} days</p>;
  }

  return (
    <p className="text-white">
      {time.hours}:{time.minutes}:{time.seconds}
    </p>
  );
}
