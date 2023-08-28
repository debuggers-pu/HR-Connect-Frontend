import React, { useState } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import useDateTime from "hooks/useDateTime";
import {
  DeleteIcon,
  EditIcon,
  HamburgerIcon,
  ViewIcon,
} from "@chakra-ui/icons";
import ViewEmployeeDetail from "./ViewEmployeeDetail";
import { api } from "configs";

const EmployeeTable = ({ usersList, loading, setLoading }) => {
  const textColor = useColorModeValue("gray.700", "white");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { dateFormat } = useDateTime();
  const [userData, setUserData] = useState();

  const viewEmployeeHandler = async (id) => {
    try {
      if (id) {
        const res = await api.get(
          `/hrConnect/api/user/getUserById/${id}`,
          true
        );
        if (res.message == "User found") {
          setUserData(res.user);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <TableContainer variant="simple" color={textColor}>
        <Table size="md" variant="simple">
          <Thead>
            <Tr>
              <Th>Full Name</Th>
              <Th>User Name</Th>
              <Th>Email</Th>
              <Th>User Type</Th>
              <Th>Created At</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          {usersList?.length > 0
            ? usersList.map((user, index) => {
                return (
                  <Tbody>
                    <Tr key={index}>
                      <Td>{user?.fullName}</Td>
                      <Td>{user?.username}</Td>
                      <Td>{user?.email}</Td>
                      <Td>{user?.userType}</Td>
                      <Td>{dateFormat(user?.createdAt)}</Td>
                      <Td>
                        <ViewIcon
                          mr={4}
                          onClick={() => {
                            onOpen();
                            viewEmployeeHandler(user?._id);
                          }}
                        />
                      </Td>
                    </Tr>
                  </Tbody>
                );
              })
            : ""}

          <Tfoot>
            <Tr>
              <Th>Pagination to be added</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
      <ViewEmployeeDetail
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        user={userData}
        loading={loading}
        setLoading={setLoading}
      />
    </>
  );
};

export default EmployeeTable;
