import { api } from "configs";
import { useEffect, useState } from "react";
import useDateTime from "./useDateTime";

const useUserHook = () => {
  const [totalUsers, setTotalUser] = useState();
  const [loading, setLoading] = useState(false);
  const [clockedInUsers, setClockedInUsers] = useState([]);
  const [clockedOutUser, setClockedOutUsers] = useState([]);
  const { presentDate, currentDateTime } = useDateTime();

  useEffect(() => {
    const getTotalUser = async () => {
      setLoading(true);
      const res = await api.get("/hrConnect/api/user/get-all-users", true);

      if (res.status != "failure") {
        setTotalUser(res?.users);
      }
    };
    getTotalUser();
    setLoading(false);
  }, [loading]);

  useEffect(() => {
    const getAllClockedInUser = async () => {
      try {
        const res = await api.get(
          `/hrConnect/api/attendance/getAllAttendanceByDate/${presentDate}`,
          true
        );

        if (res) {
          setClockedInUsers(res.clockedInUsers);
          setClockedOutUsers(res.clockedOutUsers);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getAllClockedInUser();
  }, [presentDate]);

  return {
    totalUsers,
    clockedInUsers,
    clockedOutUser,
  };
};

export default useUserHook;
