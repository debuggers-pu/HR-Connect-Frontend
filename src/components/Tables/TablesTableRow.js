import {
  Avatar,
  Badge,
  Button,
  Flex,
  Td,
  Text,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

function TablesTableRow(props) {
  const { name, location, startTime, status, date } = props;

  const textColor = useColorModeValue("gray.700", "white");
  const colorStatus = useColorModeValue("white", "gray.400");

  return (
    <Tr>
      <Td minWidth={{ sm: "250px" }} pl="0px">
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          {/* <Avatar src={logo} w="50px" borderRadius="12px" me="18px" /> */}
          <Flex direction="column">
            <Text
              fontSize="md"
              color={textColor}
              fontWeight="bold"
              minWidth="100%"
            >
              {name}
            </Text>
            <Text fontSize="sm" color="gray.400" fontWeight="normal">
              sandesh@herodai.com
            </Text>
          </Flex>
        </Flex>
      </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold">
          {location}
        </Text>
      </Td>

      <Td>
        <Flex direction="column">
          <Text fontSize="md" color={textColor} fontWeight="bold">
            User
          </Text>
          <Text fontSize="sm" color="gray.400" fontWeight="normal">
            Teacher
          </Text>
        </Flex>
      </Td>
      <Td>
        <Badge
          bg={status ? "green.400" : "red.400"}
          fontSize="16px"
          p="3px 10px"
          borderRadius="8px"
          color={colorStatus}
        >
          {status ? "Clocked In" : "Clocked Out"}
        </Badge>
      </Td>
      {/* <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {status ? "Clocked In" : "Clocked Out"}
        </Text>
      </Td> */}
      <Td>
        <Flex direction="column">
          <Text fontSize="md" color={textColor} fontWeight="bold">
            {startTime}
          </Text>
          <Text fontSize="sm" color="gray.400" fontWeight="normal">
            {date}
          </Text>
        </Flex>
      </Td>
    </Tr>
  );
}

export default TablesTableRow;
