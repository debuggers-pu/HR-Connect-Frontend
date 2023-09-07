import React from "react";
// Chakra imports
import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import BillingRow from "components/Tables/BillingRow";

const BillingInformation = ({ title, leaveList, setLoading }) => {
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Card my={{ lg: "24px" }} me={{ lg: "24px" }}>
      <Flex direction="column">
        <CardHeader py="12px">
          <Text color={"orange.500"} fontSize="lg" fontWeight="bold">
            {title}
          </Text>
        </CardHeader>
        <CardBody>
          <Flex direction="column" w="100%">
            {leaveList?.map((leaves) => {
              return <BillingRow leaves={leaves} setLoading={setLoading} />;
            })}
          </Flex>
        </CardBody>
      </Flex>
    </Card>
  );
};

export default BillingInformation;
