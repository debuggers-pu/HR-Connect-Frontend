// Chakra imports
import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import Authors from "./components/Authors";
import Projects from "./components/Projects";
import { tablesTableData, dashboardTableData } from "variables/general";
import BuiltByDevelopers from "../Dashboard/components/BuiltByDevelopers";
import peopleImage from "assets/img/people-image.png";

function Tables() {
  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }} gap={6}>
      <BuiltByDevelopers
        title={"Have You Forgotten To Clock In ?"}
        name={"It's Time To Clock In"}
        description={
          "Please Click on Clock In Button Below to clock in for today :D "
        }
        image={
          <Image
            src={peopleImage}
            alt="People Image"
            minWidth={{ md: "300px", lg: "auto" }}
          />
        }
      />
      <Authors
        title={"Attendence Table"}
        captions={["Employee", "Designation", "Status", "Employed", ""]}
        data={tablesTableData}
      />
      {/* <Projects
        title={"Projects Table"}
        captions={["Companies", "Budget", "Status", "Completion", ""]}
        data={dashboardTableData}
      /> */}
    </Flex>
  );
}

export default Tables;
