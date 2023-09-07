import React, { useEffect, useState } from "react";
import {
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import TablesTableRow from "components/Tables/TablesTableRow";
import { api } from "configs";
import useDateTime from "hooks/useDateTime";
import useUserHook from "hooks/useUserHook";

const Authors = ({ title, captions }) => {
  const textColor = useColorModeValue("gray.700", "white");
  const { clockedInUsers, clockedOutUser } = useUserHook();
  return (
    <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
      <CardHeader p="6px 0px 22px 0px">
        <Text fontSize="xl" color={textColor} fontWeight="bold">
          {title}
        </Text>
      </CardHeader>
      <CardBody>
        <Table variant="simple" color={textColor}>
          <Thead>
            <Tr my=".8rem" pl="0px" color="gray.400">
              {captions.map((caption, idx) => {
                return (
                  <Th color="gray.400" key={idx} ps={idx === 0 ? "0px" : null}>
                    {caption}
                  </Th>
                );
              })}
            </Tr>
          </Thead>
          <Tbody>
            {clockedInUsers?.map((row) => {
              return (
                <TablesTableRow
                  key={row._id}
                  name={row?.employeeName}
                  location={row.location}
                  startTime={row.startTime}
                  status={true}
                  date={row.date}
                />
              );
            })}{" "}
            {clockedOutUser?.map((row) => {
              return (
                <TablesTableRow
                  key={row._id}
                  name={row?.employeeName}
                  location={row.location}
                  startTime={row.startTime}
                  status={false}
                  date={row.date}
                />
              );
            })}
          </Tbody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default Authors;
