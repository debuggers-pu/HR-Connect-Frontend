import React, { useState } from "react";
// Chakra imports
import {
  Box,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Switch,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import signInImage from "assets/img/signInImage.jpeg";
import { api } from "configs";
import useCurrentUser from "hooks/useCurrentUser";
import { Redirect, useHistory } from "react-router-dom";

function SignIn() {
  // Chakra color mode
  const titleColor = useColorModeValue("#F29727", "#F29727");
  const textColor = useColorModeValue("gray.400", "white");
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isAuthenticated, loading } = useCurrentUser();

  const handleSignIn = async () => {
    const res = await api.post("/hrConnect/api/user/login", {
      email,
      password,
    });
    localStorage.setItem("token", res?.data?.token);
    localStorage.setItem("userId", res?.data?.user._id);
    history.push("/admin/dashboard");
  };
  if (loading) {
    return <h1>LadoING,,,,.,.as,dsd,sa</h1>;
  }
  console.log(loading);
  if (isAuthenticated) {
    return <Redirect to="/admin/dashboard" />;
  }

  return (
    <Flex position="relative" mb="40px">
      <Flex
        h={{ sm: "initial", md: "75vh", lg: "85vh" }}
        w="100%"
        maxW="1044px"
        mx="auto"
        justifyContent="space-between"
        mb="30px"
        pt={{ sm: "100px", md: "0px" }}
      >
        <Flex
          alignItems="center"
          justifyContent="start"
          style={{ userSelect: "none" }}
          w={{ base: "100%", md: "50%", lg: "42%" }}
        >
          <Flex
            direction="column"
            w="100%"
            background="transparent"
            p="48px"
            mt={{ md: "150px", lg: "80px" }}
          >
            <Heading color={titleColor} fontSize="46px" mb="10px">
              Welcome Back
            </Heading>
            <Text
              mb="36px"
              ms="8px"
              color={textColor}
              fontWeight="bold"
              fontSize="16px"
            >
              Enter your email and password to sign in
            </Text>
            <FormControl>
              <FormLabel ms="4px" fontSize="md" fontWeight="normal">
                Email
              </FormLabel>
              <Input
                borderRadius="15px"
                mb="24px"
                fontSize="sm"
                type="text"
                placeholder="Your email adress"
                size="lg"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />

              <FormLabel ms="4px" fontSize="md" fontWeight="normal">
                Password
              </FormLabel>
              <Input
                borderRadius="15px"
                mb="36px"
                fontSize="sm"
                type="password"
                placeholder="Your password"
                size="lg"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <FormControl display="flex" alignItems="center">
                <Switch id="remember-login" colorScheme="orange" me="10px" />
                <FormLabel
                  htmlFor="remember-login"
                  mb="0"
                  ms="1"
                  fontWeight="normal"
                >
                  Remember me
                </FormLabel>
              </FormControl>
              <Button
                fontSize="16px"
                type="submit"
                bg="#F29727"
                w="100%"
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
                onClick={handleSignIn}
              >
                SIGN IN
              </Button>
            </FormControl>
            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              maxW="100%"
              mt="0px"
            >
              <Text color={textColor} fontWeight="medium">
                Don't have an account?
                <Link color={titleColor} as="span" ms="5px" fontWeight="bold">
                  Sign Up
                </Link>
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Box
          display={{ base: "none", md: "block" }}
          overflowX="hidden"
          h="100%"
          w="40vw"
          position="absolute"
          right="0px"
        >
          <Box
            bgImage={signInImage}
            w="100%"
            h="100%"
            bgSize="cover"
            bgPosition="50%"
            position="absolute"
            borderBottomLeftRadius="20px"
          ></Box>
        </Box>
      </Flex>
    </Flex>
  );
}

export default SignIn;
