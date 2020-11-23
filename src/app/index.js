import React from "react";
import { StartPage } from "./components/StartPage";
import { EditUser } from "./components/EditUser";
import { HashRouter, Route } from "react-router-dom";
import { LayoutWrapper } from "./components/LayoutWrapper";
import { ProcessList } from "./components/ProcessList";

export function App() {
  return (
    <HashRouter>
      <Route exact path="/" component={StartPage} />
      <Route exact path="/edituser" component={LayoutWrapper(EditUser)} />
      <Route exact path="/processlist" component={LayoutWrapper(ProcessList)} />
    </HashRouter>
  );
}
