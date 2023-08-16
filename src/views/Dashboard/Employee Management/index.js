import React, { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";
import NotAuthorized from "components/NotAuthorized";
import useCurrentUser from "hooks/useCurrentUser";
import EmployeeTable from "./components/EmployeeTable";
import SearchEmployee from "./components/SearchEmployee";
import { api } from "configs";

const EmployeeManagement = () => {
  const { user } = useCurrentUser();
  const [allUsers, setAllUsers] = useState();
  const [search, setSearch] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getAllUsers = async () => {
      setLoading(true);
      try {
        const res = await api.get("/hrConnect/api/user/get-all-users", true);

        if (res?.users?.length > 0) {
          let filteredData = res.users;

          if (search?.length > 2) {
            filteredData = res?.users?.filter((data) =>
              data?.fullName?.includes(search)
            );
          }

          setAllUsers(filteredData);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    getAllUsers();
  }, [search]);

  console.log(allUsers);

  if (user?.userType !== "admin") {
    return <NotAuthorized />;
  }
  return (
    <Flex flexDirection="column" pt={{ base: "120px", md: "75px" }}>
      <SearchEmployee
        search={search}
        setSearch={setSearch}
        setAllUsers={setAllUsers}
      />
      <EmployeeTable usersList={allUsers} />
    </Flex>
  );
};

export default EmployeeManagement;
