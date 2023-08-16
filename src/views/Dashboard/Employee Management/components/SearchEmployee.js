import React, { useEffect } from "react";
import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const SearchEmployee = ({ search, setSearch, setAllUsers }) => {
  return (
    <Box mb={6}>
      <Text fontSize="3xl">Let's Search </Text>
      <InputGroup size="lg" w={2 / 3}>
        <Input
          pr="4.5rem"
          type="text"
          placeholder="Search Employee Name"
          value={search || ""}
          onChange={(e) => setSearch(e.target.value)}
          rounded={"md"}
        />
        <InputRightElement width="4.5rem">
          <SearchIcon />
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};

export default SearchEmployee;
