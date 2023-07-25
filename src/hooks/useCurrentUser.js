const { api } = require("configs");
const { useState, useEffect } = require("react");

const useCurrentUser = () => {
  const [user, setUser] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      const res = await api.get("/hrConnect/api/user/get-user-by-id", true);
      console.log(res);
      if (res) {
        setIsAuthenticated(true);
        setUser(res?.user);
        setLoading(false);
      }
    };
    fetchUser();
    setLoading(false);
  }, []);

  return { user, isAuthenticated, loading };
};

export default useCurrentUser;
