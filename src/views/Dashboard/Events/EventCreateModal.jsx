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

import { api } from "configs";
import { toast } from "react-hot-toast";

const EventCreateModal = ({
  addEvent,
  setAddEvent,
  isOpen,
  onClose,
  onEventAdd,
  loading,
  setLoading,
}) => {
  const OverlayTwo = () => (
    <ModalOverlay bg="none" backdropFilter="auto" backdropBlur="1px" />
  );

  const onSaveHandler = async () => {
    const newEvent = {
      description: addEvent.desc,
      eventType: addEvent.eventType,
      datetime: addEvent.dateTime,
      allDay: true,
    };

    onEventAdd(newEvent);
    setLoading(true);
    const res = await api.post(
      "/hrConnect/api/event/createEvent",
      newEvent,
      true
    );
    if (res?.status == "success") {
      toast.success(`Event added for ${newEvent.datetime}`);
    }
    setLoading(false);
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
    e.stopPropagation();
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
                  <option value="private">Private</option>
                  <option value="public">Public</option>
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
            {loading ? (
              <Button colorScheme="blue" disabled>
                Save
              </Button>
            ) : (
              <Button colorScheme="blue" onClick={onSaveHandler}>
                Save
              </Button>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EventCreateModal;
