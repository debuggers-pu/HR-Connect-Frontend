import React, { useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Select,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useDateTime from "hooks/useDateTime";
import { api } from "configs";

export default function CreateLeave({ setLoading, loading }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    const res = await api.post("/hrConnect/api/leave/create-leave", data, true);
    if (res.status == "success") {
      toast.success("Succesfully requested for Leave");
      setLoading(false);
      reset();
    } else {
      toast.error("Leave Request Failed");
      setLoading(false);
    }
    setLoading(false);
  };
  const { presentDate } = useDateTime();
  const [startDate, setStartDate] = useState();

  return (
    <>
      <Flex align="center" sx={{ marginTop: "24px" }}>
        <Button
          ref={btnRef}
          size="md"
          colorScheme="orange"
          onClick={onOpen}
          borderRadius={"md"}
        >
          Create a Leave
        </Button>
      </Flex>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="sm"
      >
        <DrawerOverlay />
        <form onSubmit={handleSubmit(onSubmit)}>
          <DrawerContent>
            <DrawerCloseButton /> <DrawerHeader>Request For Leave</DrawerHeader>
            <DrawerBody>
              <FormControl isInvalid={errors.name}>
                {" "}
                <FormLabel htmlFor="employeeName">First name</FormLabel>{" "}
                <Input
                  id="employeeName"
                  placeholder="employeeName"
                  {...register("employeeName", {
                    required: "This is required",
                    minLength: {
                      value: 4,
                      message: "Minimum length should be 4",
                    },
                  })}
                />{" "}
                <FormErrorMessage>
                  {errors.employeeName && errors.employeeName.message}
                </FormErrorMessage>
                <FormLabel mt={4} htmlFor="name">
                  Leave Type
                </FormLabel>{" "}
                <Select
                  placeholder="Select option"
                  {...register("leaveType", {
                    required: "This is required",
                  })}
                >
                  <option value="sick">Sick</option>
                  <option value="casual">Casual</option>
                  <option value="maternity">Maternity</option>
                  <option value="annual">Annual</option>
                </Select>
                <FormErrorMessage>
                  {errors.reason && errors.reason.message}
                </FormErrorMessage>
                <FormLabel mt={4} htmlFor="startDate">
                  Start Date
                </FormLabel>{" "}
                <Input
                  size="md"
                  type="date"
                  min={presentDate || ""}
                  {...register("startDate", {
                    required: "This is required",
                  })}
                  onChange={(e) => setStartDate(e.target.value)}
                />{" "}
                <FormErrorMessage>
                  {errors.startDate && errors.startDate.message}
                </FormErrorMessage>
                <FormLabel mt={4} htmlFor="startDate">
                  End Date
                </FormLabel>{" "}
                <Input
                  size="md"
                  type="date"
                  min={startDate || ""}
                  {...register("endDate", {
                    required: "This is required",
                  })}
                />
                <FormErrorMessage>
                  {errors.endDate && errors.endDate.message}
                </FormErrorMessage>
                <FormLabel mt={4} htmlFor="reason">
                  Reason For Leave
                </FormLabel>{" "}
                <Input
                  id="reason"
                  placeholder="reason for leave"
                  size="lg"
                  {...register("reason", {
                    required: "This is required",
                    minLength: {
                      value: 4,
                      message: "Minimum length should be 4",
                    },
                  })}
                />{" "}
              </FormControl>
            </DrawerBody>
            <DrawerFooter>
              <Button
                variant="outline"
                mt={4}
                mr={4}
                onClick={() => onClose}
                _hover={{ border: "1px solid orange" }}
                _active={{ bg: "orange.500", color: "white" }}
              >
                Cancel
              </Button>
              {loading ? (
                <Button
                  mt={4}
                  isLoading
                  loadingText="Loading"
                  colorScheme="orange"
                  spinnerPlacement="start"
                >
                  Submit
                </Button>
              ) : (
                <Button
                  mt={4}
                  colorScheme="orange"
                  _active={{
                    border: "1px solid black ",
                    bg: "white",
                    color: "orange.400",
                  }}
                  isLoading={isSubmitting}
                  type="submit"
                >
                  Submit
                </Button>
              )}
            </DrawerFooter>{" "}
          </DrawerContent>{" "}
        </form>
      </Drawer>
    </>
  );
}
