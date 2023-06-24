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

const ClockInModal = ({ isOpen, onClose }) => {
  const OverlayTwo = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      backdropInvert="80%"
      backdropBlur="2px"
    />
  );

  const { presentDate, time, amOrPm } = useDateTime();
  console.log(presentDate);

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

            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
              <Box>
                <Text as="b">Location</Text>
                <Select placeholder="Select option">
                  <option value="Nepal">Nepal</option>
                </Select>
              </Box>{" "}
              <Box>
                <Text as="b">Working From</Text>
                <Input placeholder="Office,Home,Site" size="md" />
              </Box>
            </Grid>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Clock In</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ClockInModal;
