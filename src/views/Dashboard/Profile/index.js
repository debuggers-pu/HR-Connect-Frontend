// Chakra imports
import React from "react";
import { Flex, Grid, Spinner, useColorModeValue } from "@chakra-ui/react";
import avatar4 from "assets/img/avatars/avatar4.png";
import ProfileBgImage from "assets/img/ProfileBackground.png";

import ProfileInformation from "./components/ProfileInformation";
import useCurrentUser from "hooks/useCurrentUser";
import Header from "./components/Header";

function Profile() {
  // Chakra color mode
  const bgProfile = useColorModeValue(
    "hsla(0,0%,100%,.8)",
    "linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)"
  );
  const { user, isAuthenticated, loading } = useCurrentUser();

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </div>
    );
  }

  // if (!isAuthenticated) {
  //   return <Redirect to="/auth/signin" />;
  // }
  return (
    <Flex direction="column">
      <Header
        backgroundHeader={ProfileBgImage}
        backgroundProfile={bgProfile}
        avatarImage={avatar4}
        name={user?.fullName ? user.fullName : "USER"}
        email={user?.email ? user.email : "USER EMAIl"}
      />

      <ProfileInformation
        description={
          "Hi, I’m Esthera Jackson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality)."
        }
        name={user.fullName}
        mobile={"(44) 123 1234 123"}
        email={user.email}
        location={"United States"}
        user={user}
      />
    </Flex>
  );
}

export default Profile;
