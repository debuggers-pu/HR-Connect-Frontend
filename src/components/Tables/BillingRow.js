import React from "react";
import {
  Box,
  Button,
  Flex,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaCheck, FaTrashAlt } from "react-icons/fa";

import useDateTime from "hooks/useDateTime";

function BillingRow({ leaves }) {
  const { dateFormat } = useDateTime();
  const bgColor = useColorModeValue("#F8F9FA", "gray.800");
  const nameColor = useColorModeValue("gray.500", "white");

  return (
    <Box p="14px" bg={bgColor} my="16px" borderRadius="12px">
      <Flex justify="space-between" w="100%">
        <Flex direction="column" maxWidth="70%">
          <Text color={nameColor} fontSize="md" fontWeight="bold" mb="10px">
            Employee Name: {leaves.employeeName}
          </Text>
          <Text color="gray.400" fontSize="sm" fontWeight="semibold">
            Leave Type:{" "}
            <Text as="span" color="gray.500">
              {leaves.leaveType}
            </Text>
          </Text>
          <Text color="gray.400" fontSize="sm" fontWeight="semibold">
            Leave Date :{" "}
            <Text as="span" color="gray.500">
              From{" "}
              <span style={{ textDecoration: "italic" }}>
                {dateFormat(leaves?.endDate)}
              </span>{" "}
              to <span>{dateFormat(leaves?.endDate)}</span>{" "}
            </Text>
          </Text>
          <Text color="gray.400" fontSize="sm" fontWeight="semibold">
            Reason:{" "}
            <Text as="span" color="gray.500">
              {leaves.reason}
            </Text>
          </Text>
        </Flex>
        <Flex
          direction={{ sm: "column", md: "row" }}
          align="flex-start"
          p={{ md: "24px" }}
        >
          <Button
            p="0px"
            bg="transparent"
            mb={{ sm: "10px", md: "0px" }}
            me={{ md: "12px" }}
          >
            <Flex color="red.500" cursor="pointer" align="center" p="12px">
              <Icon as={FaTrashAlt} me="4px" />
              <Text fontSize="sm" fontWeight="semibold">
                REJECT
              </Text>
            </Flex>
          </Button>
          <Button p="0px" bg="transparent">
            <Flex color={"green.500"} cursor="pointer" align="center" p="12px">
              <Icon as={FaCheck} me="4px" />
              <Text fontSize="sm" fontWeight="semibold">
                APPROVE
              </Text>
            </Flex>
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}

export default BillingRow;
