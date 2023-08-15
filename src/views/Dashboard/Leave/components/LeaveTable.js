import React, { useState } from "react";
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  Badge,
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import useDateTime from "hooks/useDateTime";
import {
  DeleteIcon,
  EditIcon,
  HamburgerIcon,
  ViewIcon,
} from "@chakra-ui/icons";
import { toast } from "react-hot-toast";
import ViewLeaveDetail from "./ViewLeaveDetail";
import { api } from "configs";

const LeaveTable = ({ leaveByUser, setLoading, loading }) => {
  const { dateFormat } = useDateTime();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [leaveId, setLeaveId] = useState();
  const [data, setData] = useState();

  const viewLeaveHandler = async () => {
    if (leaveId) {
      setLoading(true);
      const res = await api.get(
        `/hrConnect/api/leave/get-leave-by-id/${leaveId}`,
        true
      );
      if (res.leave) {
        setData(res.leave);
      }
      setLoading(false);
    }
  };

  const deleteLeaveHandler = async (id, status) => {
    setLoading(true);
    if (id && status == "pending") {
      setLoading(true);
      const res = await api.delete(
        `/hrConnect/api/leave/delete-leave/${id}`,
        true
      );
      if (res.status == "success") {
        toast.success(
          `${res?.leave?.employeeName} having ${res?.leave?.leaveType} from ${res?.leave?.startDate} to ${res?.leave?.endDate} has been deleted succefully `
        );
        setLoading(false);
      } else {
        toast.error("Failed to delete leave");
        setLoading(false);
      }
      setLoading(false);
    }
  };

  return (
    <>
      <TableContainer bg={"white"}>
        <Table size="md" variant="simple">
          <Thead>
            <Tr>
              <Th>Employee</Th>
              <Th>Leave Date</Th>
              <Th>Leave Status</Th>
              <Th>Leave Type</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {leaveByUser?.map((leaves) => {
              return (
                <Tr>
                  <Td>
                    <p>{leaves?.employeeName}</p>
                  </Td>
                  <Td>
                    {dateFormat(leaves?.startDate)} to{" "}
                    {dateFormat(leaves?.endDate)}
                  </Td>
                  {leaves?.status == "pending" ? (
                    <Td>
                      {" "}
                      <Badge
                        variant="subtle"
                        colorScheme="yellow"
                        px={2}
                        py={1}
                        borderRadius={8}
                      >
                        {leaves?.status}
                      </Badge>
                    </Td>
                  ) : leaves?.status == "approved" ? (
                    <Td>
                      {" "}
                      <Badge
                        variant="subtle"
                        colorScheme="green"
                        px={2}
                        py={1}
                        borderRadius={8}
                      >
                        {leaves?.status}
                      </Badge>
                    </Td>
                  ) : (
                    <Td>
                      {" "}
                      <Badge
                        variant="subtle"
                        colorScheme="red"
                        px={2}
                        py={1}
                        borderRadius={8}
                      >
                        {leaves?.status}
                      </Badge>
                    </Td>
                  )}
                  <Td>{leaves?.leaveType}</Td>
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
                            setLeaveId(leaves?._id);
                            viewLeaveHandler();
                          }}
                        >
                          <ViewIcon mr={4} />
                          View
                        </MenuItem>
                        <MenuItem>
                          <EditIcon mr={4} /> Edit
                        </MenuItem>
                        <MenuItem
                          onClick={() =>
                            deleteLeaveHandler(leaves?._id, leaves?.status)
                          }
                        >
                          {" "}
                          <DeleteIcon mr={4} /> Delete
                        </MenuItem>
                      </MenuList>
                    </Menu>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th isNumeric>Pagination to be added</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>

      <ViewLeaveDetail
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        data={data}
      />
    </>
  );
};

export default LeaveTable;
