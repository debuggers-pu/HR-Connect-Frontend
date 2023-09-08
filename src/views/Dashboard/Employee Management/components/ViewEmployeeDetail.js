import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import {
  Badge,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  FormErrorMessage,
  FormLabel,
  Select,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { api } from "configs";
import useDateTime from "hooks/useDateTime";
import useUserLeave from "hooks/useUserLeave";
import WorkLoadCart from "components/Charts/WorkLoadChart";

const ViewEmployeeDetail = ({
  isOpen,

  onClose,
  user,
  workHour,

  setLoading,
}) => {
  const btnRef = React.useRef();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const { dateFormat } = useDateTime();
  const { leaveByUser } = useUserLeave();
  const [editToggler, setEditToggler] = useState(false);

  const editTogglerHandler = () => {
    setEditToggler(!editToggler);
  };

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const res = await api.patch(
        `/hrConnect/api/admin/update-user-type/${user?._id}`,
        data,
        true
      );

      if (res) {
        toast.success("User Type Updated Successfully");
      } else {
        toast.error("Unable to Update User Type");
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="lg"
      >
        <DrawerOverlay />
        <DrawerContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <DrawerCloseButton /> <DrawerHeader> User's Detail</DrawerHeader>
            <DrawerBody>
              <Flex>
                <FormLabel htmlFor="fullName">Full Name:</FormLabel>{" "}
                <Text>{user?.fullName}</Text>
              </Flex>
              <Flex mt={4}>
                <FormLabel htmlFor="userType">User Name</FormLabel>{" "}
                <Text>{user?.username}</Text>
              </Flex>
              <Flex mt={4}>
                {" "}
                <FormLabel htmlFor="userType">User Type</FormLabel>{" "}
                {editToggler ? (
                  <>
                    <Select
                      defaultValue={user?.userType}
                      {...register("userType", {
                        required: "This is required",
                      })}
                    >
                      <option value="admin">Admin</option>
                      <option value="user">User</option>
                    </Select>
                    <FormErrorMessage>
                      {errors.username && errors.username.message}
                    </FormErrorMessage>
                  </>
                ) : (
                  <Text>{user?.userType}</Text>
                )}
              </Flex>
              <Flex mt={4}>
                {" "}
                <FormLabel htmlFor="email">Email</FormLabel>{" "}
                <Text>{user?.email}</Text>
              </Flex>
              <Flex mt={4}>
                {" "}
                <FormLabel htmlFor="">Created at</FormLabel>{" "}
                <Text>{dateFormat(user?.createdAt)}</Text>
              </Flex>
            </DrawerBody>
            <DrawerFooter gap={6}>
              {editToggler ? (
                <Button
                  onClick={() => {
                    editTogglerHandler();
                    onClose();
                  }}
                >
                  Cancel
                </Button>
              ) : (
                <Button onClick={editTogglerHandler}>Edit</Button>
              )}

              {editToggler ? (
                <Button colorScheme="orange" type="submit">
                  Save
                </Button>
              ) : (
                <Button colorScheme="orange" disabled>
                  Save
                </Button>
              )}
            </DrawerFooter>
          </form>
          <DrawerBody>
            <Box mt={8}>
              <DrawerHeader> Today's Working Hour</DrawerHeader>
              <WorkLoadCart workHour={workHour} />{" "}
            </Box>
            <DrawerHeader> User Leave List</DrawerHeader>
            <Table size="md" variant="simple">
              <Thead>
                <Tr>
                  <Th>Employee</Th>
                  <Th>Leave Date</Th>
                  <Th>Leave Status</Th>
                  <Th>Leave Type</Th>
                </Tr>
              </Thead>
              <Tbody>
                {leaveByUser.length
                  ? leaveByUser?.map((leaves) => {
                      return (
                        <Tr>
                          <Td>
                            <p>{leaves?.employeeName}</p>
                          </Td>
                          <Td>
                            {dateFormat(leaves?.startDate)} to
                            {" " + dateFormat(leaves?.endDate)}
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
                        </Tr>
                      );
                    })
                  : "NO Leave Data Acquired"}
              </Tbody>
            </Table>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ViewEmployeeDetail;
