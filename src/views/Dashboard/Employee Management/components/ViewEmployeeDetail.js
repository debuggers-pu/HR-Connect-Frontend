import {
  Badge,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  FormLabel,
  Text,
} from "@chakra-ui/react";
import useDateTime from "hooks/useDateTime";
import React from "react";

const ViewEmployeeDetail = ({ isOpen, onOpen, onClose, data }) => {
  const btnRef = React.useRef();
  const { dateFormat } = useDateTime();
  console.log("daddattaaaa", data);
  return (
    <>
      <>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
          size="sm"
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton /> <DrawerHeader> Leave Detail</DrawerHeader>
            <DrawerBody>
              <FormLabel htmlFor="employeeName">Employee Name</FormLabel>{" "}
              <Text>{data?.employeeName}</Text>
              <FormLabel mt={4} htmlFor="name">
                Leave Type
              </FormLabel>{" "}
              <Text>{data?.leaveType}</Text>
              <FormLabel mt={4} htmlFor="startDate">
                Start Date
              </FormLabel>{" "}
              <Text>{dateFormat(data?.startDate)}</Text>
              <FormLabel mt={4} htmlFor="startDate">
                End Date
              </FormLabel>{" "}
              <Text> {dateFormat(data?.endDate)}</Text>
              <FormLabel mt={4} htmlFor="reason">
                Reason For Leave
              </FormLabel>{" "}
              <Text>{data?.reason}</Text>
              <FormLabel mt={4} htmlFor="">
                Status
              </FormLabel>{" "}
              {data?.status == "pending" ? (
                <Badge
                  variant="subtle"
                  colorScheme="yellow"
                  px={2}
                  py={1}
                  borderRadius={8}
                >
                  {data?.status}
                </Badge>
              ) : data?.status == "approved" ? (
                <Badge
                  variant="subtle"
                  colorScheme="green"
                  px={2}
                  py={1}
                  borderRadius={8}
                >
                  {data?.status}
                </Badge>
              ) : (
                <Badge
                  variant="subtle"
                  colorScheme="yellow"
                  px={2}
                  py={1}
                  borderRadius={8}
                >
                  {data?.status}
                </Badge>
              )}
              <FormLabel mt={4} htmlFor="">
                Created at
              </FormLabel>{" "}
              <Text>{dateFormat(data?.createdAt)}</Text>
              <FormLabel mt={4} htmlFor="">
                Approve or Rejected at
              </FormLabel>{" "}
              <Text>{dateFormat(data?.updatedAt)}</Text>
            </DrawerBody>
          </DrawerContent>{" "}
        </Drawer>
      </>
    </>
  );
};

export default ViewEmployeeDetail;
