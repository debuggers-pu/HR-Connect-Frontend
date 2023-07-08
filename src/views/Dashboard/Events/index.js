import React, { useRef, useState } from "react";
import { Flex } from "@chakra-ui/react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const Events = () => {
  const calendarRef = useRef(null);
  const [events, setEvents] = useState([]);

  //   const handleEventAdd = ({ event }) => {

  //     setEvents((prevEvents) => [...prevEvents, event]);
  //   };

  console.log(events);
  const handleDateClick = (arg) => {
    const title = prompt("Event Title:");
    if (title) {
      const newEvent = { title, start: arg.date, allDay: arg.allDay };
      setEvents((prevEvents) => [...prevEvents, newEvent]);
    }
  };

  return (
    <Flex flexDirection="column" pt={{ base: "120px", md: "75px" }}>
      <button
        onClick={() =>
          handleEventAdd({ event: { title: "New Event", start: "2023-07-07" } })
        }
      >
        Add Event
      </button>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          start: "today prev,next",
          center: "title",
          end: "timeGridDay,timeGridWeek,dayGridMonth",
        }}
        editable={true}
        selectable={true}
        dateClick={handleDateClick}
        ref={calendarRef}
        // select={handleEventAdd}
        events={events}
      />
    </Flex>
  );
};

export default Events;
