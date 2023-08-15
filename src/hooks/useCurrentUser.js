import { useHistory } from "react-router-dom/";

const { api } = require("configs");
const { useState, useEffect } = require("react");

const useCurrentUser = () => {
  let history = useHistory();
  const [user, setUser] = useState({});

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      const res = await api.get("/hrConnect/api/user/get-user-by-id", true);
      if (res) {
        setIsAuthenticated(true);
        setUser(res?.user);
      }
    };
    fetchUser();
    setLoading(false);
  }, []);

  const userLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    history.push("/auth/signin");
  };

  return {
    user,
    isAuthenticated,
    loading,
    userLogout,
  };
};

export default useCurrentUser;
