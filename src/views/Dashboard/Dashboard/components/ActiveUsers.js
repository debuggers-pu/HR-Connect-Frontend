// Chakra imports
import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import React from "react";

const ActiveUsers = ({ title, percentage, chart }) => {
  const iconBoxInside = useColorModeValue("white", "white");
  const textColor = useColorModeValue("gray.700", "white");
  return (
    <Card p="16px">
      <Text fontSize="lg" color={textColor} fontWeight="bold" mb="6px">
        {title}
      </Text>
      <CardBody>
        <Flex direction="column" w="100%">
          {chart}
          <Flex direction="column" mt="24px" mb="36px" alignSelf="flex-start">
            {/* <Text fontSize="md" fontWeight="medium" color="gray.400">
              <Text
                as="span"
                color={percentage > 0 ? "green.400" : "red.400"}
                fontWeight="bold"
              >
                {percentage > 0 ? `+${percentage}%` : `-${percentage}%`}
              </Text>{" "}
              than last week
            </Text> */}

            <Text fontSize="xs" color={textColor} fontWeight="normal" mb="6px">
              Please Hover Over The Chart To See The Actual Number Of Statistics
            </Text>
          </Flex>
          {/* <SimpleGrid gap={{ sm: "12px" }} columns={4}>
            <ChartStatistics
              title={"Users"}
              amount={"32,984"}
              percentage={20}
              icon={<WalletIcon h={"15px"} w={"15px"} color={iconBoxInside} />}
            />
            <ChartStatistics
              title={"Clicks"}
              amount={"2.42m"}
              percentage={80}
              icon={<RocketIcon h={"15px"} w={"15px"} color={iconBoxInside} />}
            />
            <ChartStatistics
              title={"Sales"}
              amount={"2,400$"}
              percentage={30}
              icon={<CartIcon h={"15px"} w={"15px"} color={iconBoxInside} />}
            />
            <ChartStatistics
              title={"Items"}
              amount={"320"}
              percentage={40}
              icon={<StatsIcon h={"15px"} w={"15px"} color={iconBoxInside} />}
            />
          </SimpleGrid> */}
        </Flex>
      </CardBody>
    </Card>
  );
};

export default ActiveUsers;
