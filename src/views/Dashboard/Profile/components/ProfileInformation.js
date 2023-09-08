import { React, useState } from "react";
import {
  Button,
  Grid,
  GridItem,
  Input,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import toast, { Toaster } from "react-hot-toast";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import useCurrentUser from "hooks/useCurrentUser";
import { api } from "configs";

const ProfileInformation = () => {
  const { user, isAuthenticated, userLogout } = useCurrentUser();
  const [fullName, setFullName] = useState();
  const [username, setUsername] = useState();
  const [currentPass, setCurrentPass] = useState();
  const [newPass, setNewPass] = useState();
  const [loading, setLoading] = useState();

  const handleUpdate = async () => {
    try {
      let res;
      setLoading(true);
      if (fullName || username) {
        const formData = new FormData();
        if (fullName && !username) {
          formData.append("fullName", fullName);
          res = await api.patch(
            "/hrConnect/api/user/update-user",
            formData,
            true
          );
        }
        if (!fullName && username) {
          formData.append("username", username);
          res = await api.patch(
            "/hrConnect/api/user/update-user",
            formData,
            true
          );
        }
        if (fullName && username) {
          formData.append("fullName", fullName);
          formData.append("username", username);
          res = await api.patch(
            "/hrConnect/api/user/update-user",
            formData,
            true
          );
        }

        if (res.status == "success") {
          toast.success("Successfully Updated!");
          setLoading(false);
        } else {
          toast.error("Unable to Update the Profile");
          setLoading(false);
        }
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const passwordChangeHandler = async () => {
    try {
      if (currentPass && newPass) {
        const formData = new FormData();
        formData.append("oldPassword", currentPass);
        formData.append("newPassword", newPass);
        const res = await api.patch(
          `hrConnect/api/user/change-password/${user?._id}`,
          formData,
          true
        );

        if (res.status === "success") {
          toast.success("Successfully Updated Password");
          setCurrentPass();
          setNewPass();
          toast.success("Logging out");
          setTimeout(() => {
            userLogout();
          }, 3000);
        } else {
          setCurrentPass();
          setNewPass();
          toast.error("Unable to Change Password");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const textColor = useColorModeValue("gray.700", "white");
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} duration="3000" />
      <Card p="16px" my={{ sm: "24px", xl: "0px" }}>
        <CardHeader p="12px 5px" mb="12px">
          <Text fontSize="lg" color={textColor} fontWeight="bold">
            Profile Information
          </Text>
        </CardHeader>
        <CardBody px="5px">
          <Grid w="100%" templateColumns="repeat(2,1fr)" gap={4}>
            <GridItem>
              <Text p="4px 6px" fontSize="sm" color="gray.600">
                User Name
              </Text>
              <Input
                placeholder="User@Name"
                defaultValue={user.username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </GridItem>
            <GridItem>
              <Text p="4px 6px" fontSize="sm" color="gray.600">
                Full Name
              </Text>
              <Input
                placeholder="Full Name"
                defaultValue={user.fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </GridItem>
            <GridItem>
              <Text p="4px 6px" fontSize="sm" color="gray.600">
                email
              </Text>
              <Input placeholder="Email" defaultValue={user.email} disabled />
            </GridItem>
            <GridItem>
              <Text p="4px 6px" fontSize="sm" color="gray.600">
                Designation
              </Text>
              <Input
                placeholder="User type"
                defaultValue={user.userType}
                disabled
              />
            </GridItem>

            <GridItem>
              <Text p="4px 6px" fontSize="sm" color="gray.600">
                Joined At
              </Text>
              <Input
                placeholder="Full Name"
                value={Date(user.createdAt)}
                disabled
              />
            </GridItem>
            <GridItem>
              <Text p="4px 6px" fontSize="sm" color="gray.600">
                Address
              </Text>
              <Input placeholder="Full Name" defaultValue={user.address} />
            </GridItem>
            <GridItem>
              <Text p="4px 6px" fontSize="sm" color="gray.600">
                Emergency Contact
              </Text>
              <Input placeholder="Full Name" value="98765465377" />
            </GridItem>
          </Grid>
        </CardBody>
        <CardBody>
          <Grid mt={6}>
            <GridItem gap={4}>
              {loading ? (
                <Button disabled mx={4}>
                  Reset
                </Button>
              ) : (
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
              )}

              {loading ? (
                <Button
                  isLoading
                  loadingText="Loading"
                  colorScheme="orange"
                  spinnerPlacement="start"
                >
                  Submit
                </Button>
              ) : (
                <Button colorScheme="orange" onClick={handleUpdate}>
                  Save Changes
                </Button>
              )}
            </GridItem>
          </Grid>
        </CardBody>
      </Card>

      <Card mt={6}>
        {" "}
        <CardHeader p="12px 5px" mb="12px">
          <Text fontSize="lg" color={textColor} fontWeight="bold">
            Change Password
          </Text>
        </CardHeader>
        <CardBody px="5px">
          <Grid w="100%" templateColumns="repeat(2,1fr)" gap={4}>
            <GridItem>
              <Text p="4px 6px" fontSize="sm" color="gray.600">
                Old Password
              </Text>
              <Input
                placeholder="Current Password"
                type="password"
                onChange={(e) => setCurrentPass(e.target.value)}
              />
            </GridItem>{" "}
            <GridItem>
              <Text p="4px 6px" fontSize="sm" color="gray.600">
                New Password
              </Text>
              <Input
                placeholder="New Password"
                type="password"
                disabled={currentPass ? false : true}
                onChange={(e) => setNewPass(e.target.value)}
              />
            </GridItem>
          </Grid>
        </CardBody>
        <CardBody mt={6}>
          {loading ? (
            <Button
              isLoading
              loadingText="Loading"
              colorScheme="orange"
              spinnerPlacement="start"
            >
              Submit
            </Button>
          ) : (
            <Button colorScheme="orange" onClick={passwordChangeHandler}>
              Save Changes
            </Button>
          )}
        </CardBody>
      </Card>
    </>
  );
};

export default ProfileInformation;
