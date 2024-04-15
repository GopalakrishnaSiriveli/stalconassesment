// src/App.js

import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"; // Change the alias to BrowserRouter
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Dashboard from "./components/Dashboard/Dashboard";
import CreateEditPost from "./components/Post/CreateEditPost";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/create-post" component={CreateEditPost} />
            <Redirect from="/" to="/dashboard" />
          </Switch>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
