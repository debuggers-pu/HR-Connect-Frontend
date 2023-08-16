import React from "react";
import { Grid, Text } from "@chakra-ui/react";
import shocked from "assets/img/shocked.jpeg";

const NotAuthorized = () => {
  return (
    <Grid templateColumns={"1fr 1fr"} gap={6} mt={10}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={shocked} alt="shockedjpg" />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text fontSize="4xl">Oppsss 🫢 !!! </Text>
        <Text fontSize="xl">
          You Are Not Authorized To Access This Section{" "}
        </Text>
        <Text fontSize="xl">Please Contact Admin For To Access </Text>
      </div>
    </Grid>
  );
};

export default NotAuthorized;
