import React, { useState } from "react";

import {
  Flex,
  Button,
  FormLabel,
  Heading,
  Input,
  Text,
  useColorModeValue,
  Grid,
} from "@chakra-ui/react";

import toast from "react-hot-toast";
import { api } from "configs";
import useCurrentUser from "hooks/useCurrentUser";
import NotAuthorized from "components/NotAuthorized";

function SignUp() {
  const { user } = useCurrentUser();
  // Chakra color mode
  const titleColor = useColorModeValue("#F29727", "#F29727");
  const textColor = useColorModeValue("gray.400", "white");

  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState("");

  const handleSignUP = async () => {
    setLoading(true);
    const res = await api.post("/hrConnect/api/user/register", {
      fullName,
      userName,
      phoneNumber,
      location,
      email,
      password,
    });

    if (res.status === "success") {
      toast.success("Successfully Signed Up!");
      setLoading(false);
      setFullName("");
      setUserName("");
      setphoneNumber("");
      setLocation("");
      setEmail("");
      setPassword("");
    } else {
      toast.error(res.error);
      setLoading(false);
    }
    setLoading(false);
  };

  if (user?.userType !== "admin") {
    return <NotAuthorized />;
  }
  return (
    <>
      <Flex
        alignItems="center"
        justifyContent="center"
        style={{ userSelect: "none" }}
      >
        <Flex
          direction="column"
          w="100%"
          justifyContent="center"
          background="white"
          p="48px"
          mt={{ md: "150px", lg: "80px" }}
          borderRadius={"10px"}
        >
          {" "}
          <Heading color={titleColor} fontSize="46px" mb="10px">
            Enroll New Employee
          </Heading>
          <Text
            mb="36px"
            ms="8px"
            color={textColor}
            fontWeight="bold"
            fontSize="16px"
          >
            Fill the form below
          </Text>
          <Grid templateColumns="repeat(2, 1fr)" gap={4}>
            <div>
              <FormLabel ms="4px" fontSize="md" fontWeight="normal">
                Full Name
              </FormLabel>
              <Input
                borderRadius="15px"
                mb="20px"
                fontSize="sm"
                type="text"
                placeholder="Your Full Name"
                size="md"
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
              />{" "}
            </div>{" "}
            <div>
              <FormLabel ms="4px" fontSize="md" fontWeight="normal">
                User Name
              </FormLabel>
              <Input
                borderRadius="15px"
                mb="20px"
                fontSize="sm"
                type="text"
                placeholder="Your User Name"
                size="md"
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />{" "}
            </div>
            <div>
              <FormLabel ms="4px" fontSize="md" fontWeight="normal">
                Phone Number
              </FormLabel>
              <Input
                borderRadius="15px"
                mb="20px"
                fontSize="sm"
                type="text"
                placeholder="Your Phone Number"
                size="md"
                value={phoneNumber}
                onChange={(e) => {
                  setphoneNumber(e.target.value);
                }}
              />{" "}
            </div>{" "}
            <div>
              <FormLabel ms="4px" fontSize="md" fontWeight="normal">
                Location
              </FormLabel>
              <Input
                borderRadius="15px"
                mb="20px"
                fontSize="sm"
                type="text"
                placeholder="Your Location "
                size="md"
                value={location}
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
              />{" "}
            </div>
            <div>
              {" "}
              <FormLabel ms="4px" fontSize="md" fontWeight="normal">
                Email
              </FormLabel>
              <Input
                borderRadius="15px"
                mb="20px"
                fontSize="sm"
                type="text"
                placeholder="Your email adress"
                size="md"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div>
              <FormLabel ms="4px" fontSize="md" fontWeight="normal">
                Password
              </FormLabel>
              <Input
                borderRadius="15px"
                mb="36px"
                fontSize="sm"
                type="password"
                placeholder="Your password"
                size="md"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
          </Grid>
          {loading ? (
            <Button
              bg="#F29727"
              w="100%"
              h="45"
              mb="20px"
              color="white"
              mt="20px"
              fontSize="16px"
              isLoading
              loadingText="Loading"
              colorScheme="teal"
              variant="outline"
              spinnerPlacement="start"
            >
              Submit
            </Button>
          ) : (
            <Button
              fontSize="16px"
              type="submit"
              bg="#F29727"
              w={1 / 3}
              h="45"
              mb="20px"
              color="white"
              mt="20px"
              _hover={{
                bg: "orange.400",
              }}
              _active={{
                bg: "orange.500",
              }}
              onClick={handleSignUP}
            >
              SIGN UP
            </Button>
          )}
        </Flex>
      </Flex>
    </>
  );
}

export default SignUp;
