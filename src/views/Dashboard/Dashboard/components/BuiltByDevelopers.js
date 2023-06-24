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

const BuiltByDevelopers = ({ title, name, description, image }) => {
  const textColor = useColorModeValue("gray.700", "white");

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
              {/* <Spacer /> */}
              <Flex align="center" fullWidth sx={{ marginTop: "24px" }}>
                <Button
                  colorScheme="teal"
                  size="lg"
                  leftIcon={<BiDoorOpen size={30} />}
                  onClick={onOpen}
                >
                  Clock In
                </Button>
                {/* <Button
                p="0px"
                variant="no-hover"
                bg="transparent"
                my={{ sm: "1.5rem", lg: "0px" }}
              >
                <Text
                  fontSize="sm"
                  color={textColor}
                  fontWeight="bold"
                  cursor="pointer"
                  transition="all .5s ease"
                  my={{ sm: "1.5rem", lg: "0px" }}
                  _hover={{ me: "4px" }}
                >
                  Read more
                </Text>
                <Icon
                  as={BsArrowRight}
                  w="20px"
                  h="20px"
                  fontSize="2xl"
                  transition="all .5s ease"
                  mx=".3rem"
                  cursor="pointer"
                  pt="4px"
                  _hover={{ transform: "translateX(20%)" }}
                />
              </Button> */}
              </Flex>
            </Flex>
            <Spacer />
            <Flex
              // bg="teal.300"
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
