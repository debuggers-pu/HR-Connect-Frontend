import React, { useEffect, useState } from "react";
import { api } from "configs";

const useUserLeave = () => {
  const [leaveList, setLeaveList] = useState([]);
  const [leaveByUser, setLeaveByUser] = useState([]);
  const [approvedLeave, setApprovedLeave] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getLeaveList = async () => {
      const res = await api.get("/hrConnect/api/leave/get-all-leaves", true);
      if (res) {
        const result = res?.leaves.filter((data) => data.status == "pending");
        const result2 = res?.leaves.filter((data) => data.status == "approved");
        setLeaveList(result || "");

        setApprovedLeave(result2 || "");
        setLoading(false);
      }
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
      if (res) {
        setLeaveByUser(res.leaves || "");
        setLoading(false);
      }
    };
    getUserLeaveList();
    setLoading(false);
  }, [loading]);

  return {
    leaveList,
    setLeaveList,
    approvedLeave,
    setApprovedLeave,
    leaveByUser,
    setLeaveByUser,
    loading,
    setLoading,
  };
};

export default useUserLeave;
