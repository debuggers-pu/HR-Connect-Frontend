import { useHistory } from "react-router-dom/";

const { api } = require("configs");
const { useState, useEffect } = require("react");

const useCurrentUser = () => {
  let history = useHistory();
  const [user, setUser] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [LeaveNotifications, setLeaveNotifications] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      const res = await api.get("/hrConnect/api/user/get-user-by-id", true);

      if (res.status != "failure") {
        setIsAuthenticated(true);
        setUser(res?.user);
      }
    };
    fetchUser();
    setLoading(false);
  }, [loading]);

  useEffect(() => {
    const fetchNotification = async () => {
      setLoading(true);
      const res = await api.get(
        "/hrConnect/api/leave/get-leave-notifications",
        true
      );

      if (res?.notifications?.length) {
        setLeaveNotifications(res?.notifications);
      }
    };
    fetchNotification();

    setLoading(false);
  }, [loading]);

  const userLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    setIsAuthenticated(false);
    history.push("/auth/signin");
  };

  return {
    user,
    isAuthenticated,
    loading,
    setLoading,
    userLogout,
    LeaveNotifications,
  };
};

export default useCurrentUser;
