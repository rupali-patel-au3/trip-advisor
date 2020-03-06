import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/homepage/homepage.component";

import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";
import HolidayPackages from "./pages/HolidayPackages/holidayPackages";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/connect with us/" component={SignInAndSignUpPage} />
          <Route exact path="/holidaypackages/" component={HolidayPackages} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
