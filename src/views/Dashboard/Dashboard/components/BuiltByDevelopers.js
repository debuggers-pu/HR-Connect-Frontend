// Chakra imports
import {
  Button,
  Flex,
  Icon,
  Spacer,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import React, { Fragment, useState } from "react";
// react icons
// import { BsArrowRight } from "react-icons/bs";
import { BiDoorOpen } from "react-icons/bi";
import ClockInModal from "./ClockInModal";
import useDateTime from "hooks/useDateTime";
import { api } from "configs";
import { toast } from "react-hot-toast";
import { set } from "react-hook-form";

const BuiltByDevelopers = ({ title, name, description, image }) => {
  const textColor = useColorModeValue("gray.700", "white");

  const [clockOutDateTime, setClockOutDateTime] = useState();
  const [clockInLocation, setClockInLocation] = useState();
  const [clockedInStatus, setClockedInStatus] = useState(false);

  const { currentDateTime, presentDate, dayOfWeek } = useDateTime();
  // Clock In Modal
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleClockIn = async () => {
    try {
      if (currentDateTime.length < 0) {
        toast.error("No Date Time");
        return;
      }

      const res = await api.post(
        "/hrConnect/api/attendance/clockIn",
        {
          date: presentDate,
          location: clockInLocation,
        },
        true
      );

      if (res?.status == "success") {
        toast.success("Clocked In Successfully");
        setClockedInStatus(true);
        onClose();
      } else {
        toast.error("Couldn't Clocked In");
        onClose();
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleClockOut = async () => {
    try {
      if (currentDateTime.length < 0) {
        toast.error("No Date Time");
        return;
      }

      const res = await api.post(
        "/hrConnect/api/attendance/clockOut",
        {},
        true
      );

      if (res?.status == "success") {
        toast.success("Clocked Out Successfully");
        setClockedInStatus(false);
        onClose();
      } else {
        toast.error("Couldn't Clocked Out");
        onClose();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <Card minHeight="290.5px" p="1.2rem">
        <CardBody w="100%">
          <Flex flexDirection={{ sm: "column", lg: "row" }} w="100%">
            <Flex
              flexDirection="column"
              h="100%"
              lineHeight="1.6"
              width={{ lg: "45%" }}
            >
              <Text fontSize="sm" color="gray.400" fontWeight="bold">
                {title}
              </Text>
              <Text
                fontSize="lg"
                color={textColor}
                fontWeight="bold"
                pb=".5rem"
              >
                {name}
              </Text>
              <Text fontSize="sm" color="gray.400" fontWeight="normal">
                {description}
              </Text>
              <Spacer />

              <Text as="b" fontSize="lg" ml={2}>
                Today is {dayOfWeek},{presentDate}
              </Text>

              <Flex align="center" sx={{ marginTop: "24px" }}>
                {clockedInStatus ? (
                  <Button
                    colorScheme="red"
                    size="lg"
                    leftIcon={<BiDoorOpen size={30} />}
                    onClick={handleClockOut}
                  >
                    Clock Out
                  </Button>
                ) : (
                  <Button
                    colorScheme="orange"
                    size="lg"
                    leftIcon={<BiDoorOpen size={30} />}
                    onClick={onOpen}
                  >
                    Clock In
                  </Button>
                )}
              </Flex>
            </Flex>

            <Flex
              // bg="orange.300"
              align="center"
              justify="center"
              // borderRadius='15px'
              width={{ lg: "60%" }}
              minHeight={{ sm: "250px" }}
            >
              {image}
            </Flex>
          </Flex>
        </CardBody>
      </Card>

      <ClockInModal
        handleClockIn={handleClockIn}
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        setClockInLocation={setClockInLocation}
      />
    </React.Fragment>
  );
};

export default BuiltByDevelopers;
