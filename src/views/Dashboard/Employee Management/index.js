import React, { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";
import NotAuthorized from "components/NotAuthorized";
import useCurrentUser from "hooks/useCurrentUser";
import EmployeeTable from "./components/EmployeeTable";
import SearchEmployee from "./components/SearchEmployee";
import { api } from "configs";

const EmployeeManagement = () => {
  const { user } = useCurrentUser();
  const [allUsers, setAllUsers] = useState([]);
  const [searchedUser, setSearchedUser] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const getAllUsers = async () => {
      try {
        const res = await api.get("/hrConnect/api/user/get-all-users", true);

        if (res?.users?.length > 0) {
          setAllUsers(res?.users);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getAllUsers();
  }, [search]);

  useEffect(() => {
    const searchUser = () => {
      if (search?.length > 2) {
        const filteredData = allUsers?.filter((data) =>
          data?.fullName?.includes(search)
        );
        setSearchedUser(filteredData);
      } else {
        setSearchedUser(null);
      }
    };
    searchUser();
  }, [search, allUsers]);

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
      <EmployeeTable
        usersList={searchedUser?.length > 0 ? searchedUser : allUsers}
        loading={loading}
        setLoading={setLoading}
      />
    </Flex>
  );
};

export default EmployeeManagement;
