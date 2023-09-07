// Chakra imports
import {
  Flex,
  Grid,
  Image,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
// assets
import peopleImage from "assets/img/people-image.png";

import LineChart from "components/Charts/LineChart";
// Custom icons
import {
  CartIcon,
  DocumentIcon,
  GlobeIcon,
  WalletIcon,
} from "components/Icons/Icons.js";
import React from "react";

import ActiveUsers from "./components/ActiveUsers";
import BuiltByDevelopers from "./components/BuiltByDevelopers";
import MiniStatistics from "./components/MiniStatistics";

import SalesOverview from "./components/SalesOverview";

import useCurrentUser from "hooks/useCurrentUser";

import Conversations from "../Profile/components/Conversations";
import PieChart from "components/Charts/PieChart";
import useUserLeave from "hooks/useUserLeave";
import useUserHook from "hooks/useUserHook";

export default function Dashboard() {
  const iconBoxInside = useColorModeValue("white", "white");
  const { isAuthenticated, loading } = useCurrentUser();
  const { leaveList } = useUserLeave();
  const { totalUsers } = useUserHook();
  const { clockedInUsers, clockedOutUser } = useUserHook();

  return (
    <Flex flexDirection="column" pt={{ base: "120px", md: "75px" }}>
      <SimpleGrid columns={{ sm: 1, xl: 3 }} spacing="24px">
        <MiniStatistics
          title={"Total Employees"}
          amount={totalUsers?.length || 0}
          // percentage={-14}
          icon={<DocumentIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <MiniStatistics
          title={"Today's Attendence"}
          amount={clockedInUsers?.length || 0}
          // percentage={55}
          icon={<WalletIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <MiniStatistics
          title={"Today's Leave"}
          amount={leaveList?.length}
          // percentage={5}
          icon={<GlobeIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />

        {/* <MiniStatistics
          title={"Total Sales"}
          amount={"$173,000"}
          percentage={8}
          icon={<CartIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        /> */}
      </SimpleGrid>
      <Grid
        templateColumns={{ md: "1fr", lg: "1.8fr" }}
        templateRows={{ md: "1fr auto", lg: "1fr" }}
        my="26px"
        gap="24px"
      >
        <BuiltByDevelopers
          title={"Have You Forgotten To Clock In ?"}
          name={"It's Time To Clock In"}
          description={"Clock in will record your attendence for today"}
          image={
            <Image
              src={peopleImage}
              alt="People Image"
              minWidth={{ md: "300px", lg: "auto" }}
            />
          }
        />
        {/* <WorkWithTheRockets
          backgroundImage={peopleImage}
          title={"Work with the rockets"}
          description={
            "Wealth creation is a revolutionary recent positive-sum game. It is all about who takes the opportunity first."
          }
        /> */}
      </Grid>
      <Grid
        templateColumns={{ sm: "1fr", lg: "1.3fr 1.7fr" }}
        templateRows={{ sm: "repeat(1, 1fr)", lg: "1fr" }}
        gap="24px"
        mb={{ lg: "26px" }}
      >
        <ActiveUsers
          title={"USERS DATA TODAY"}
          percentage={23}
          chart={
            <PieChart
              leaveCount={leaveList.length}
              clockedInLength={clockedInUsers?.length}
              clockedOutLength={clockedOutUser?.length}
            />
          }
        />
        <Conversations title={"Conversations"} />
      </Grid>
      <Grid
        templateColumns={{ sm: "1fr" }}
        templateRows={{ sm: "1fr auto", md: "1fr", lg: "1fr" }}
        gap="24px"
      >
        <SalesOverview
          title={"Sales Overview"}
          percentage={5}
          chart={<LineChart />}
        />

        {/* <Projects
          title={"Projects"}
          amount={30}
          captions={["Companies", "Members", "Budget", "Completion"]}
          data={dashboardTableData}
        />
        <OrdersOverview
          title={"Orders Overview"}
          amount={30}
          data={timelineData}
        /> */}
      </Grid>
    </Flex>
  );
}
