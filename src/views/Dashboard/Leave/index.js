import React from "react";
import { Button, Flex, Grid } from "@chakra-ui/react";
import { billingData } from "variables/general";
import BillingInformation from "./components/BillingInformation";
import LeaveTable from "./components/LeaveTable";
import CreateLeave from "./components/CreateLeave";

function Billing() {
  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }} gap={6}>
      {" "}
      <CreateLeave />
      <LeaveTable />
      <BillingInformation title={"Leave Requests"} data={billingData} />
    </Flex>
  );
}

export default Billing;
