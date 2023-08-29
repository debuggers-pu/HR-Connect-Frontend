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

const Authors = ({ title, captions }) => {
  const textColor = useColorModeValue("gray.700", "white");
  const [clockedInUsers, setClockedInUsers] = useState([]);

  useEffect(() => {
    const getAllClockedInUser = async () => {
      try {
        const res = await api.get(
          "/hrConnect/api/attendance/getAllAttendanceByDate/2023-08-28T22:45:12.969Z",
          true
        );
        if (res) {
          setClockedInUsers(res);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getAllClockedInUser();
  }, []);

  console.log(clockedInUsers);

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
                  subdomain={row.subdomain}
                  domain={row.domain}
                  status={row.status}
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
