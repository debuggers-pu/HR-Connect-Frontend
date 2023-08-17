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
              <FormLabel htmlFor="fullName">Full Name</FormLabel>{" "}
              <Text>{data?.employeeName}</Text>
              <FormLabel mt={4} htmlFor="userType">
                User Type
              </FormLabel>{" "}
              <Text>{data?.leaveType}</Text>
              <FormLabel mt={4} htmlFor="username"></FormLabel>{" "}
              <Text>{dateFormat(data?.startDate)}</Text>
              <Text> {dateFormat(data?.endDate)}</Text>
              <FormLabel mt={4} htmlFor="email">
                Email
              </FormLabel>{" "}
              <Text>{data?.reason}</Text>
              <FormLabel mt={4} htmlFor="">
                Status
              </FormLabel>{" "}
              <FormLabel mt={4} htmlFor="">
                Created at
                <Text>{dateFormat(data?.createdAt)}</Text>
              </FormLabel>{" "}
              <FormLabel mt={4} htmlFor="joinDate">
                Joined At
              </FormLabel>{" "}
            </DrawerBody>
          </DrawerContent>{" "}
        </Drawer>
      </>
    </>
  );
};

export default ViewEmployeeDetail;
