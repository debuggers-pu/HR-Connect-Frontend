import React from "react";
import ReactDOM from "react-dom";
import { Redirect, BrowserRouter, Route, Switch } from "react-router-dom";
import AuthLayout from "layouts/Auth.js";
import AdminLayout from "layouts/Admin.js";
import PageNotFound from "views/404/PageNotFound";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path={`/auth`} component={AuthLayout} />
      <Route path={`/admin`} component={AdminLayout} />

      <Redirect from="/" to="/auth/signin" />
      <Route path="*" element={<PageNotFound />} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
