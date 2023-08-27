import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  Divider,
  Select,
  Box,
  Grid,
  Text,
  Input,
} from "@chakra-ui/react";
import useDateTime from "hooks/useDateTime";

const EventCreateModal = ({
  addEvent,
  setAddEvent,
  isOpen,
  onClose,
  onEventAdd,
}) => {
  const OverlayTwo = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      backdropInvert="80%"
      backdropBlur="2px"
    />
  );

  const { presentDate, time, amOrPm } = useDateTime();

  const onSaveHandler = () => {
    const newEvent = {
      title: addEvent.desc,
      type: addEvent.eventType,
      start: addEvent.dateTime,
      allDay: true, // You can customize this based on your requirement
    };

    // Call the onEventAdd function with the newEvent data
    onEventAdd(newEvent);
    onClose();
  };
  const eventTypeHandler = (e) => {
    const newValue = e.target?.value || "";
    setAddEvent((prev) => ({
      ...prev,
      eventType: newValue,
    }));
  };
  const eventDescHandler = (e) => {
    const newValue = e.target?.value || "";
    setAddEvent((prev) => ({
      ...prev,
      desc: newValue,
    }));
  };
  const eventDateHandler = (e) => {
    const newValue = e.target?.value || "";
    setAddEvent((prev) => ({
      ...prev,
      dateTime: newValue,
    }));
  };

  return (
    <>
      {/* <Button >Open Modal</Button> */}

      <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
        <OverlayTwo />
        <ModalContent>
          <ModalHeader>Add Event</ModalHeader>
          <Divider />
          <ModalBody>
            <Grid templateColumns="repeat(1, 1fr)" gap={6}>
              <Box>
                <Text as="b">Date and Time</Text>
                <Input
                  size="md"
                  type="datetime-local"
                  onChange={(e) => eventDateHandler(e)}
                />
              </Box>

              <Box>
                <Text as="b">Event Type</Text>
                <Select
                  placeholder="Select option"
                  value={addEvent.eventType || ""}
                  onChange={(e) => eventTypeHandler(e)}
                >
                  <option value="Everyone">Everyone</option>
                  <option value="User">User</option>
                  <option value="Admin">Admin</option>
                </Select>
              </Box>
              <Box>
                <Text as="b">Event Description</Text>
                <Input
                  placeholder="Tell me more about the events"
                  size="md"
                  onChange={(e) => eventDescHandler(e)}
                />
              </Box>
            </Grid>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue" onClick={onSaveHandler}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EventCreateModal;
