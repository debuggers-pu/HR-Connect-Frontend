import React, { useEffect, useState } from "react";
import { Button, Flex, Grid } from "@chakra-ui/react";
import { billingData } from "variables/general";
import BillingInformation from "./components/BillingInformation";
import LeaveTable from "./components/LeaveTable";
import CreateLeave from "./components/CreateLeave";
import useCurrentUser from "hooks/useCurrentUser";
import { api } from "configs";

function Billing() {
  const { user } = useCurrentUser();
  const [leaveList, setLeaveList] = useState([]);
  const [leaveByUser, setLeaveByUser] = useState([]);

  useEffect(() => {
    const getLeaveList = async () => {
      const data = await api.get("/hrConnect/api/leave/get-all-leaves", true);
      setLeaveList(data?.leaves || "");
    };
    getLeaveList();
  }, []);
  useEffect(() => {
    const getUserLeaveList = async () => {
      const res = await api.get("/hrConnect/api/leave/get-leave-by-user", true);
      setLeaveByUser(res);
    };
    getUserLeaveList();
  }, []);

  console.log(leaveByUser);

  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }} gap={6}>
      {" "}
      <CreateLeave />
      <LeaveTable leaveList={leaveList} />
      {user.userType == "admin" ? (
        <BillingInformation title={"Leave Requests"} leaveList={leaveList} />
      ) : (
        ""
      )}
    </Flex>
  );
}

export default Billing;
