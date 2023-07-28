// Chakra imports
import {
  Button,
  Flex,
  Grid,
  GridItem,
  Input,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const ProfileInformation = ({
  user,
  description,
  name,
  mobile,
  email,
  location,
}) => {
  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Card p="16px" my={{ sm: "24px", xl: "0px" }}>
      <CardHeader p="12px 5px" mb="12px">
        <Text fontSize="lg" color={textColor} fontWeight="bold">
          Profile Information
        </Text>
      </CardHeader>
      <CardBody px="5px">
        {/* <Flex direction="column">
          <Text fontSize="md" color="gray.500" fontWeight="400" mb="30px">
            {description}
          </Text>
          <Flex align="center" mb="18px">
            <Text fontSize="md" color={textColor} fontWeight="bold" me="10px">
              Full Name: 
            </Text>
            <Text fontSize="md" color="gray.500" fontWeight="400">
              {name}
            </Text>
          </Flex> 
          <Flex align="center" mb="18px">
            <Text fontSize="md" color={textColor} fontWeight="bold" me="10px">
              Position 
            </Text>
            <Text fontSize="md" color="gray.500" fontWeight="400">
              {user.userType}
            </Text>
          </Flex>
          <Flex align="center" mb="18px">
            <Text fontSize="md" color={textColor} fontWeight="bold" me="10px">
              Mobile: 
            </Text>
            <Text fontSize="md" color="gray.500" fontWeight="400">
              {mobile}
            </Text>
          </Flex>
          <Flex align="center" mb="18px">
            <Text fontSize="md" color={textColor} fontWeight="bold" me="10px">
              Email: 
            </Text>
            <Text fontSize="md" color="gray.500" fontWeight="400">
              {email}
            </Text>
          </Flex>
          <Flex align="center" mb="18px">
            <Text fontSize="md" color={textColor} fontWeight="bold" me="10px">
              Location: 
            </Text>
            <Text fontSize="md" color="gray.500" fontWeight="400">
              {location}
            </Text>
          </Flex>
          <Flex align="center" mb="18px">
            <Text fontSize="md" color={textColor} fontWeight="bold" me="10px">
              Social Media: 
            </Text>
            <Flex>
              <Link
                href="#"
                color="#F29727"
                fontSize="lg"
                me="10px"
                _hover={{ color: "#F29727" }}
              >
                <Icon as={FaFacebook} />
              </Link>
              <Link
                href="#"
                color="#F29727"
                fontSize="lg"
                me="10px"
                _hover={{ color: "#F29727" }}
              >
                <Icon as={FaInstagram} />
              </Link>
              <Link
                href="#"
                color="#F29727"
                fontSize="lg"
                me="10px"
                _hover={{ color: "#F29727" }}
              >
                <Icon as={FaTwitter} />
              </Link>
            </Flex>
          </Flex>
        </Flex> */}
        <Grid w="100%" templateColumns="repeat(2,1fr)" gap={4}>
          <GridItem>
            <Text p="4px 6px" fontSize="sm" color="gray.600">
              User Name
            </Text>
            <Input placeholder="User@Name" value={user?.username} />
          </GridItem>
          <GridItem>
            <Text p="4px 6px" fontSize="sm" color="gray.600">
              Full Name
            </Text>
            <Input placeholder="Full Name" value={name} />
          </GridItem>
          <GridItem>
            <Text p="4px 6px" fontSize="sm" color="gray.600">
              email
            </Text>
            <Input placeholder="Email" value={email} disabled />
          </GridItem>
          <GridItem>
            <Text p="4px 6px" fontSize="sm" color="gray.600">
              Designation
            </Text>
            <Input placeholder="Full Name" value={user.userType} />
          </GridItem>
          <GridItem>
            <Text p="4px 6px" fontSize="sm" color="gray.600">
              Designation
            </Text>
            <Input placeholder="Full Name" value={user.userType} />
          </GridItem>
          <GridItem>
            <Text p="4px 6px" fontSize="sm" color="gray.600">
              Joined At
            </Text>
            <Input placeholder="Full Name" value={Date(user.createdAt)} />
          </GridItem>
          <GridItem>
            <Text p="4px 6px" fontSize="sm" color="gray.600">
              Address
            </Text>
            <Input placeholder="Full Name" value={Date(user.createdAt)} />
          </GridItem>
          <GridItem>
            <Text p="4px 6px" fontSize="sm" color="gray.600">
              Emergency Contact
            </Text>
            <Input placeholder="Full Name" value={Date(user.createdAt)} />
          </GridItem>
          <GridItem gap={4}>
            <Button
              bg="#1C1850"
              _hover={{ bg: "#1C1850" }}
              color={"white"}
              _active={{
                bg: "orange",
                transform: "scale(0.98)",
              }}
              mx={4}
            >
              Reset
            </Button>
            <Button colorScheme="orange">Save Changes</Button>
          </GridItem>
          {/* <Col className="mt-2" sm="12">
            {isSubmitted ? (
              <Button className="me-1" color="primary">
                Saving...
                <Spinner size="sm" />
              </Button>
            ) : (
              <Button className="me-1" color="primary">
                Save changes
              </Button>
            )}

            <Button color="secondary" outline>
              Discard
            </Button>
          </Col> */}
        </Grid>
      </CardBody>
    </Card>
  );
};

export default ProfileInformation;
