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
import React, { Fragment } from "react";
// react icons
// import { BsArrowRight } from "react-icons/bs";
import { BiDoorOpen } from "react-icons/bi";
import ClockInModal from "./ClockInModal";
import useDateTime from "hooks/useDateTime";

const BuiltByDevelopers = ({ title, name, description, image }) => {
  const textColor = useColorModeValue("gray.700", "white");

  const { presentDate, dayOfWeek } = useDateTime();

  // Clock In Modal
  const { isOpen, onOpen, onClose } = useDisclosure();

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
                <Button
                  colorScheme="orange"
                  size="lg"
                  leftIcon={<BiDoorOpen size={30} />}
                  onClick={onOpen}
                >
                  Clock In
                </Button>
              </Flex>
            </Flex>
            <Spacer />
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

      <ClockInModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </React.Fragment>
  );
};

export default BuiltByDevelopers;
