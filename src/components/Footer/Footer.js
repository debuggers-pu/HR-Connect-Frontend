/*eslint-disable*/
import React from "react";
import { Flex, Text } from "@chakra-ui/react";

export default function Footer(props) {
  // const linkorange = useColorModeValue("orange.400", "red.200");=
  return (
    <Flex
      flexDirection={{
        base: "column",
        xl: "row",
      }}
      alignItems={{
        base: "center",
        xl: "start",
      }}
      justifyContent="space-between"
      px="30px"
      pb="20px"
    >
      <Text
        color="gray.400"
        textAlign={{
          base: "center",
          xl: "start",
        }}
        mb={{ base: "20px", xl: "0px" }}
      >
        &copy; {1900 + new Date().getYear()},{" "}
        <Text as="span">
          {document.documentElement.dir === "rtl"
            ? " مصنوع من ❤️ بواسطة"
            : "Made with ❤️ by Sandesh Thapa ,Sandesh Poudel, Saurabh Bhujel, Sirish Burlakoti and Sushil Bastola "}
        </Text>
      </Text>
    </Flex>
  );
}
