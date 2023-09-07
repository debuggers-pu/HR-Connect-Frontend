// Chakra imports
import {
  Avatar,
  Box,
  Button,
  Flex,
  Spacer,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import avatar2 from "assets/img/avatars/avatar2.png";
import avatar3 from "assets/img/avatars/avatar3.png";
import avatar4 from "assets/img/avatars/avatar4.png";
import avatar5 from "assets/img/avatars/avatar5.png";
import avatar6 from "assets/img/avatars/avatar6.png";
// Custom components
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import useDateTime from "hooks/useDateTime";
import useUserLeave from "hooks/useUserLeave";
import React from "react";

const Conversations = ({ title }) => {
  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");
  const { approvedLeave } = useUserLeave();
  const { dateFormat } = useDateTime();

  return (
    <Card p="16px">
      <CardHeader p="12px 5px" mb="12px">
        <Box
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Text fontSize="lg" color={textColor} fontWeight="bold">
            Users on leave
          </Text>

          <Text fontSize="lg" color={textColor} fontWeight="bold">
            Reasons info
          </Text>
        </Box>
      </CardHeader>
      <CardBody px="5px">
        <Flex direction="column" w="100%">
          {approvedLeave.length
            ? approvedLeave?.map((user, id) => (
                <Flex
                  justifyContent="space-between"
                  mb="21px"
                  key={`user${id}`}
                >
                  <Flex align="center">
                    <Avatar
                      src={`avatar${id}`}
                      w="50px"
                      h="50px"
                      borderRadius="15px"
                      me="10px"
                    />
                    <Flex direction="column">
                      <Text fontSize="md" color={textColor} fontWeight="bold">
                        {user?.employeeName}
                      </Text>
                      <Text fontSize="md" fontWeight="600" color="#F29727">
                        {user?.leaveType}
                      </Text>
                    </Flex>
                  </Flex>
                  <Flex
                    p="0px"
                    bg="transparent"
                    direction="column"
                    variant="no-hover"
                  >
                    <Text fontSize="sm" fontWeight="500" alignSelf="center">
                      {user?.reason}
                    </Text>{" "}
                    <Text fontSize="sm" fontWeight="500" alignSelf="center">
                      {dateFormat(user?.startDate)}
                    </Text>
                  </Flex>
                </Flex>
              ))
            : "NO USERS ARE ON LEAVE"}
        </Flex>
      </CardBody>
    </Card>
  );
};

export default Conversations;
