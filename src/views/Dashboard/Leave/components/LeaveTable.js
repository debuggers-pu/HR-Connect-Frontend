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
} from "@chakra-ui/react";
import useDateTime from "hooks/useDateTime";
import { ViewIcon } from "@chakra-ui/icons";
import ViewLeaveDetail from "./ViewLeaveDetail";
import { api } from "configs";

const LeaveTable = ({ leaveList }) => {
  const { dateFormat } = useDateTime();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [leaveId, setLeaveId] = useState();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
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
            {leaveList?.map((leaves) => {
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
                        colorScheme="yellow"
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
                    {loading ? (
                      <ViewIcon _disabled={true} />
                    ) : (
                      <ViewIcon
                        onClick={() => {
                          onOpen();
                          setLeaveId(leaves?._id);
                          viewLeaveHandler();
                        }}
                      />
                    )}
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
