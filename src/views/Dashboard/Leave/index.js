import React, { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";
import BillingInformation from "./components/BillingInformation";
import LeaveTable from "./components/LeaveTable";
import CreateLeave from "./components/CreateLeave";
import useCurrentUser from "hooks/useCurrentUser";
import { api } from "configs";

function Billing() {
  const { user } = useCurrentUser();
  const [leaveList, setLeaveList] = useState([]);
  const [leaveByUser, setLeaveByUser] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getLeaveList = async () => {
      const data = await api.get("/hrConnect/api/leave/get-all-leaves", true);
      setLeaveList(data?.leaves || "");
      setLoading(false);
    };
    getLeaveList();
    setLoading(false);
  }, [loading]);

  useEffect(() => {
    setLoading(true);
    const getUserLeaveList = async () => {
      const res = await api.get(
        "/hrConnect/api/leave/get-leaves-by-user",
        true
      );
      setLeaveByUser(res.leaves);
      setLoading(false);
    };
    getUserLeaveList();
    setLoading(false);
  }, [loading]);

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
        <BillingInformation title={"Leave Requests"} leaveList={leaveList} />
      ) : (
        ""
      )}
    </Flex>
  );
}

export default Billing;
