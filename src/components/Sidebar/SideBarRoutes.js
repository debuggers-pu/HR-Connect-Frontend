// import
import Dashboard from "views/Dashboard/Dashboard";
import Attendence from "views/Dashboard/Attendence";
import Leave from "views/Dashboard/Leave";
import Profile from "views/Dashboard/Profile";
import SignUp from "views/Dashboard/SignUP/index";

import { HomeIcon, StatsIcon, CreditIcon } from "components/Icons/Icons";
import Events from "views/Dashboard/Events";

import { FaCalendarCheck, FaCog, FaUser } from "react-icons/fa";
import EmployeeManagement from "views/Dashboard/Employee Management";
import { RocketIcon } from "components/Icons/Icons";

var SideBarRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <HomeIcon color="inherit" />,
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/Attendence",
    name: "Attendence",
    icon: <StatsIcon color="inherit" />,
    component: Attendence,
    layout: "/admin",
  },
  {
    path: "/leave",
    name: "Leave",

    icon: <CreditIcon color="inherit" />,
    component: Leave,
    layout: "/admin",
  },
  {
    path: "/events",
    name: "Events",

    icon: <FaCalendarCheck color="inherit" />,
    component: Events,
    layout: "/admin",
  },
  {
    path: "/employeeManagement",
    name: "Employee Management",
    icon: <FaUser color="inherit" />,
    component: EmployeeManagement,
    layout: "/admin",
  },
  {
    path: "/signup",
    name: "Sign Up",
    rtlName: "لوحة القيادة",
    icon: <RocketIcon color="inherit" />,
    secondaryNavbar: true,
    component: SignUp,
    layout: "/admin",
  },
  {
    path: "/profile",
    name: "Profile Settings",
    icon: <FaCog color="inherit" />,
    secondaryNavbar: true,
    component: Profile,
    layout: "/admin",
  },
];
export default SideBarRoutes;
