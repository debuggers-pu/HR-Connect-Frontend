// Chakra imports
import { Flex, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import AttendenceTable from "./components/AttendenceTable";

import AttendenceComponent from "../Dashboard/components/AttendenceComponent";
import peopleImage from "assets/img/people-image.png";

function Tables() {
  const [loading, setLoading] = useState(false);
  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }} gap={6}>
      <AttendenceComponent
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
        loading={loading}
        setLoading={setLoading}
      />
      <AttendenceTable
        title={"Attendence Table"}
        captions={[
          "Employee",
          "Location",
          "Designation",
          "Status",
          "Clocked At",
        ]}
        loading={loading}
        setLoading={setLoading}
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
