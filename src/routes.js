// import
import Dashboard from "views/Dashboard/Dashboard";
import Attendence from "views/Dashboard/Attendence";
import Leave from "views/Dashboard/Leave";

import Profile from "views/Dashboard/Profile";
import SignIn from "views/Auth/SignIn.js";
import SignUp from "views/Dashboard/SignUP/index";
import Events from "views/Dashboard/Events";

import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  DocumentIcon,
  RocketIcon,
} from "components/Icons/Icons";
import { FaCalendarCheck, FaCog, FaUser } from "react-icons/fa";
import EmployeeManagement from "views/Dashboard/Employee Management";

var dashRoutes = [
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
    name: "SETTINGS PAGES",
    category: "account",
    rtlName: "صفحات",
    state: "pageCollapse",
    views: [
      {
        path: "/profile",
        name: "Profile Settings",

        icon: <FaCog color="inherit" />,
        secondaryNavbar: true,
        component: Profile,
        layout: "/admin",
      },
      {
        path: "/signin",
        name: "Sign In",

        icon: <DocumentIcon color="inherit" />,
        component: SignIn,
        layout: "/auth",
      },
      {
        path: "/signup",
        name: "Sign Up",
        icon: <RocketIcon color="inherit" />,
        secondaryNavbar: true,
        component: SignUp,
        layout: "/admin",
      },
    ],
  },
];
export default dashRoutes;
