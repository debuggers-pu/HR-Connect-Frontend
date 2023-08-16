import React from "react";
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

const EmployeeTable = ({ usersList }) => {
  const textColor = useColorModeValue("gray.700", "white");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { dateFormat } = useDateTime();

  const viewLeaveHandler = async (id) => {
    // if (leaveId) {
    //   setLoading(true);
    //   const res = await api.get(
    //     `/hrConnect/api/user/get-user-by-id/${leaveId}`,
    //     true
    //   );
    //   if (res.leave) {
    //     setData(res.leave);
    //   }
    //   setLoading(false);
    // }
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
            ? usersList.map((user) => {
                return (
                  <Tbody>
                    <Tr>
                      <Td>{user?.fullName}</Td>
                      <Td>{user?.username}</Td>
                      <Td>{user?.email}</Td>
                      <Td>{user?.userType}</Td>
                      <Td>{dateFormat(user?.createdAt)}</Td>
                      <Td>
                        <Menu>
                          <MenuButton
                            px={2}
                            py={1}
                            transition="all 0.2s"
                            borderRadius="md"
                            _hover={{ bg: "gray.400" }}
                            _expanded={{ bg: "orange.300" }}
                            _focus={{ boxShadow: "outline" }}
                          >
                            <HamburgerIcon />
                          </MenuButton>
                          <MenuList>
                            <MenuItem
                              onClick={() => {
                                onOpen();
                                //   setLeaveId(leaves?._id);
                                viewLeaveHandler(user?._id);
                              }}
                            >
                              <ViewIcon mr={4} />
                              View
                            </MenuItem>
                            <MenuItem>
                              <EditIcon mr={4} /> Edit
                            </MenuItem>
                            <MenuItem
                            // onClick={() =>
                            //   deleteLeaveHandler(leaves?._id, leaves?.status)
                            // }
                            >
                              {" "}
                              <DeleteIcon mr={4} /> Delete
                            </MenuItem>
                          </MenuList>
                        </Menu>
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
        data={usersList}
      />
    </>
  );
};

export default EmployeeTable;
