// import React from "react";
// import ReactDOM from "react-dom";

// import { BrowserRouter, Route, Switch } from "react-router-dom";

// import AuthLayout from "layouts/Auth.js";
// import AdminLayout from "layouts/Admin.js";
// import useCurrentUser from "hooks/useCurrentUser";

// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById("root")
// );

// const DashbordRoutes = () => {
//   <Switch>
//     <Route path={`/admin`} component={AdminLayout} />
//   </Switch>
// };

// const AuthRoutes = () => {
//   return (
//     <Switch>
//       <Route path="/auth" component={AuthLayout} />
//     </Switch>
//   );
// };

// const App = () => {
//   const { isAuthenticated, user } = useCurrentUser();

//   if (isAuthenticated) {
//     return <DashbordRoutes />;
//   } else {
//     return <AuthRoutes />;
//   }
// };

import React from "react";
import ReactDOM from "react-dom";

import { Redirect, BrowserRouter, Route, Switch } from "react-router-dom";

import AuthLayout from "layouts/Auth.js";
import AdminLayout from "layouts/Admin.js";
import RTLLayout from "layouts/RTL.js";
import PageNotFound from "views/404/PageNotFound";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path={`/auth`} component={AuthLayout} />
      <Route path={`/admin`} component={AdminLayout} />
      <Route path={`/rtl`} component={RTLLayout} />
      <Redirect from="/" to="/admin/dashboard" />
      <Route path="*" element={<PageNotFound />} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
