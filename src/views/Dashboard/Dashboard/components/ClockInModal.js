import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Divider,
  Select,
  Box,
  Flex,
  Grid,
  Text,
  Input,
} from "@chakra-ui/react";
import useDateTime from "hooks/useDateTime";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { BiSolidTimeFive } from "react-icons/bi";
import "./styles.scss";

const ClockInModal = ({
  isOpen,
  onOpen,
  onClose,
  handleClockIn,
  setClockInLocation,
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

  return (
    <>
      {/* <Button >Open Modal</Button> */}

      <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
        <OverlayTwo />
        <ModalContent>
          <ModalHeader>Clock In</ModalHeader>
          <Divider />
          <ModalBody>
            <div className="flexes">
              <Box className="flexes">
                <BsFillCalendarDateFill size={25} />
                <Text as="b" fontSize="lg" ml={2}>
                  Date :{presentDate}
                </Text>
              </Box>

              <Box className="flexes">
                {" "}
                <BiSolidTimeFive size={25} />
                <Text fontSize="lg" as="b" ml={2}>
                  Time :{time} {amOrPm}
                </Text>
              </Box>
            </div>

            <Grid templateColumns="repeat(1, 1fr)" gap={6}>
              <Box>
                <Text as="b">Working From</Text>
                <Select
                  placeholder="Select option"
                  onChange={(e) => setClockInLocation(e.target.value || "")}
                >
                  <option value={"office"}>Office</option>
                  <option value={"home"}>Home</option>
                  <option value={"other"}>Other</option>
                </Select>
              </Box>
            </Grid>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue" onClick={handleClockIn}>
              Clock In
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ClockInModal;
