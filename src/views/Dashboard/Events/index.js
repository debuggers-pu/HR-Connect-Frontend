import React, { useEffect, useRef, useState } from "react";
import { Button, Flex, useDisclosure } from "@chakra-ui/react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import EventCreateModal from "./EventCreateModal";
import { api } from "configs";

const Events = () => {
  const calendarRef = useRef(null);
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState([]);

  const [addEvent, setAddEvent] = useState({
    dateTime: "",
    eventType: "",
    desc: "",
  });

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const getAllEvents = async () => {
      const userId = localStorage.getItem("userId");
      const res = await api.get(
        `/hrConnect/api/event/getAllEvents/${userId}`,
        true
      );
      console.log(res?.privateEvents);
      setNewEvent(res.privateEvents);
    };
    getAllEvents();
  }, []);

  const handleDateClick = (arg) => {
    onOpen();
    setAddEvent({
      start: "",
      eventType: "",
      desc: "",
    });
  };

  const handleEventAdd = (newEvent) => {
    // make useffect here to fetch the data
    setEvents((prevEvents) => [...prevEvents, newEvent]);
  };

  return (
    <>
      {" "}
      <Flex flexDirection="column" pt={{ base: "120px", md: "75px" }}>
        <Flex justifyContent={"center"} mb={8}>
          <Button
            mx={4}
            p={4}
            colorScheme="orange"
            width={1 / 3}
            _active={{
              border: "1px solid black ",
              bg: "white",
              color: "orange.400",
            }}
            onClick={handleDateClick}
          >
            Add Event
          </Button>
        </Flex>{" "}
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="timeGridWeek"
          headerToolbar={{
            start: "today prev,next",
            center: "title",
            end: "timeGridDay,timeGridWeek,dayGridMonth",
          }}
          selectable={true}
          // dateClick={handleDateClick}
          ref={calendarRef}
          events={events}
        />
        <EventCreateModal
          addEvent={addEvent}
          setAddEvent={setAddEvent}
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          onEventAdd={handleEventAdd}
        />
      </Flex>
    </>
  );
};

export default Events;
