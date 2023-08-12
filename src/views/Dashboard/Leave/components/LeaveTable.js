import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";

const LeaveTable = () => {
  return (
    <>
      <TableContainer>
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
            <Tr>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td>25.4</Td>
              <Td>25.4</Td>
              <Td>25.4</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default LeaveTable;
