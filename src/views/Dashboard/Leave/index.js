import React, { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";
import BillingInformation from "./components/BillingInformation";
import LeaveTable from "./components/LeaveTable";
import CreateLeave from "./components/CreateLeave";
import useCurrentUser from "hooks/useCurrentUser";
import { api } from "configs";
import useUserLeave from "hooks/useUserLeave";

function Billing() {
  const { user } = useCurrentUser();
  const { loading, setLoading, leaveByUser, leaveList } = useUserLeave();

  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }} gap={6}>
      {" "}
      <CreateLeave setLoading={setLoading} loading={loading} />
      <LeaveTable
        leaveByUser={leaveByUser}
        setLoading={setLoading}
        loading={loading}
      />
      {user.userType == "admin" ? (
        <BillingInformation
          title={"Leave Requests"}
          leaveList={leaveList}
          setLoading={setLoading}
        />
      ) : (
        ""
      )}
    </Flex>
  );
}

export default Billing;
