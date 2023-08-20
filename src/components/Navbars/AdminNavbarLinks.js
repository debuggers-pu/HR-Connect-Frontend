import React from "react";
// Chakra Icons
import { BellIcon } from "@chakra-ui/icons";
import { MdWbSunny } from "react-icons/md";
import { BsFillCloudMoonFill } from "react-icons/bs";
import { HiOutlineLogout } from "react-icons/hi";
import PropTypes from "prop-types";
// Chakra Imports
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import avatar1 from "assets/img/avatars/avatar1.png";
import avatar2 from "assets/img/avatars/avatar2.png";
import avatar3 from "assets/img/avatars/avatar3.png";
// Custom Icons
import { SettingsIcon } from "components/Icons/Icons";
// Custom Components
import { ItemContent } from "components/Menu/ItemContent";
import SidebarResponsive from "components/Sidebar/SidebarResponsive";
import routes from "routes.js";
import useCurrentUser from "hooks/useCurrentUser";

export default function HeaderLinks(props) {
  const { variant, children, fixed, secondary, onOpen, ...rest } = props;
  const { colorMode, toggleColorMode } = useColorMode();

  // Chakra Color Mode
  let mainText = useColorModeValue("gray.700", "gray.200");
  let navbarIcon = useColorModeValue("gray.500", "gray.200");

  if (secondary) {
    navbarIcon = "white";
    mainText = "white";
  }
  const settingsRef = React.useRef();
  const { userLogout, LeaveNotifications } = useCurrentUser();
  return (
    <Flex
      pe={{ sm: "0px", md: "16px" }}
      w={{ sm: "100%", md: "auto" }}
      alignItems="center"
      flexDirection="row"
    >
      <Menu>
        <MenuButton>
          <BellIcon color={navbarIcon} w="18px" h="18px" />
        </MenuButton>
        <MenuList p="16px 8px">
          <Flex flexDirection="column">
            {LeaveNotifications.length
              ? LeaveNotifications.map((notification, id) => {
                  return (
                    <MenuItem borderRadius="8px" mb="10px">
                      <ItemContent
                        time="13 minutes ago"
                        info={notification?.message}
                        boldInfo={notification?.title}
                        aName="Alicia"
                        aSrc={avatar1}
                      />
                    </MenuItem>
                  );
                })
              : "NO Notification"}
          </Flex>
        </MenuList>
      </Menu>
      <Button onClick={toggleColorMode} mx={4}>
        {colorMode === "light" ? <BsFillCloudMoonFill /> : <MdWbSunny />}
        {colorMode === "light" ? " Dark" : " Light"}
      </Button>
      <SidebarResponsive
        logoText={props.logoText}
        secondary={props.secondary}
        routes={routes}
        // logo={logo}
        {...rest}
      />
      {/* <SettingsIcon
        cursor="pointer"
        ms={{ base: "16px", xl: "0px" }}
        me="16px"
        ref={settingsRef}
        onClick={props.onOpen}
        color={navbarIcon}
        w="18px"
        h="18px"
      /> */}

      <Menu>
        <MenuButton
          px={2}
          py={1}
          transition="all 0.2s"
          borderRadius="md"
          _expanded={{ bg: "orange.500" }}
        >
          <SettingsIcon cursor="pointer" color={navbarIcon} w="18px" h="18px" />
        </MenuButton>
        <MenuList>
          <Flex flexDirection="column">
            <MenuItem borderRadius="8px" mb="10px">
              <NavLink to="/admin/profile">
                <SettingsIcon
                  ms={{ base: "16px", xl: "0px" }}
                  me="16px"
                  // color={"orange"}
                />{" "}
                Profile Settings
              </NavLink>
            </MenuItem>

            <MenuItem borderRadius="8px" mb="10px" onClick={() => userLogout()}>
              <HiOutlineLogout
                ms={{ base: "16px", xl: "0px" }}
                me="16px"
                color={"orange"}
              />
              <Text ml={6}>Logout</Text>
            </MenuItem>
          </Flex>
        </MenuList>
      </Menu>
    </Flex>
  );
}

HeaderLinks.propTypes = {
  variant: PropTypes.string,
  fixed: PropTypes.bool,
  secondary: PropTypes.bool,
  onOpen: PropTypes.func,
};
