// import
import Dashboard from "views/Dashboard/Dashboard";
import Attendence from "views/Dashboard/Attendence";
import Leave from "views/Dashboard/Leave";
import RTLPage from "views/Dashboard/RTL";
import Profile from "views/Dashboard/Profile";
import SignIn from "views/Auth/SignIn.js";
import SignUp from "views/Auth/SignUp.js";
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
    // rtlName: "لوحة القيادة",
    icon: <HomeIcon color="inherit" />,
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/Attendence",
    name: "Attendence",
    // rtlName: "لوحة القيادة",
    icon: <StatsIcon color="inherit" />,
    component: Attendence,
    layout: "/admin",
  },
  {
    path: "/leave",
    name: "Leave",
    rtlName: "لوحة القيادة",
    icon: <CreditIcon color="inherit" />,
    component: Leave,
    layout: "/admin",
  },
  {
    path: "/events",
    name: "Events",
    rtlName: "لوحة القيادة",
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

  // {
  //   path: "/rtl-support-page",
  //   name: "Events",
  //   rtlName: "آرتيإل",
  //   icon: <SupportIcon color="inherit" />,
  //   component: RTLPage,
  //   layout: "/rtl",
  // },
  {
    name: "SETTINGS PAGES",
    category: "account",
    rtlName: "صفحات",
    state: "pageCollapse",
    views: [
      {
        path: "/profile",
        name: "Profile Settings",
        rtlName: "لوحة القيادة",
        icon: <FaCog color="inherit" />,
        secondaryNavbar: true,
        component: Profile,
        layout: "/admin",
      },
      {
        path: "/signin",
        name: "Sign In",
        rtlName: "لوحة القيادة",
        icon: <DocumentIcon color="inherit" />,
        component: SignIn,
        layout: "/auth",
      },
      {
        path: "/signup",
        name: "Sign Up",
        rtlName: "لوحة القيادة",
        icon: <RocketIcon color="inherit" />,
        secondaryNavbar: true,
        component: SignUp,
        layout: "/auth",
      },
    ],
  },
];
export default dashRoutes;
