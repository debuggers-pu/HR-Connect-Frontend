import { formatDate } from "@fullcalendar/core";
import moment from "moment";
import React from "react";

const useDateTime = () => {
  const currentDate = new Date();
  const currentDateTime = moment(currentDate).format(
    "YYYY-MM-DDTHH:mm:ss.SSS[Z]"
  );
  const formattedDate = `${currentDate.getFullYear()}-${
    (currentDate.getMonth() + 1).toString().padStart(2, "0") // Adding 1 to month to get correct month value
  }-${currentDate.getDate().toString().padStart(2, "0")}`; // Using getDate() for the day

  const presentDate = ` ${formattedDate}`;

  const dayOfWeek = currentDate.toLocaleString("en-US", { weekday: "long" });

  const hours = currentDate.getHours();
  const amOrPm = hours >= 12 ? "PM" : "AM";
  const twelveHourFormat = hours % 12 || 12;
  const time = ` ${twelveHourFormat}:${currentDate.getMinutes()}`;

  const dateFormat = (data) => {
    return formatDate(data, {
      month: "long",
      year: "numeric",
      day: "numeric",
    });
  };

  return { presentDate, currentDateTime, time, amOrPm, dayOfWeek, dateFormat };
};

export default useDateTime;
