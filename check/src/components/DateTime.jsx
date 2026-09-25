import { useEffect, useState } from "react";

const formatDateTime = (date) => {
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const time = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  return `${weekdays[date.getDay()]} ${time} , ${months[date.getMonth()]} ${date.getDate()}`;
};

const DateTime = () => {
  const [dateTime, setDateTime] = useState(() => formatDateTime(new Date()));

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(formatDateTime(new Date()));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div>{dateTime}</div>;
};

export default DateTime;
