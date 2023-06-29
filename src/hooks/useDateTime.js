import React from "react";

const useDateTime = () => {
  const currentDate = new Date();
  const formattedDate = `${currentDate.getFullYear()}-${currentDate.getMonth()}-${currentDate.getDay()}`;
  const presentDate = ` ${formattedDate}`;

  const dayOfWeek = currentDate.toLocaleString("en-US", { weekday: "long" });

  const hours = currentDate.getHours();
  const amOrPm = hours >= 12 ? "PM" : "AM";
  const twelveHourFormat = hours % 12 || 12;
  const time = ` ${twelveHourFormat}:${currentDate.getMinutes()}`;

  return { presentDate, time, amOrPm, dayOfWeek };
};

export default useDateTime;
