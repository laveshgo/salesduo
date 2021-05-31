import React from "react";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard";
import Discover from "./Discover";
import Users from "./Users";
import Documents from "./Documents";
import Pages from "./Pages";
import Applications from "./Applications";
import Supportcenter from "./SupportCenter";
import Inbox from "./Inbox";
import FileManager from "./FileManager";
import DataList from "./DataList";
import Settings from "./Settings";
import LogOut from "./LogOut";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/salesduo" exact component={Dashboard} />
          <Route path="/discover" exact component={Discover} />
          <Route path="/users" exact component={Users} />
          <Route path="/documents" exact component={Documents} />
          <Route path="/applications" exact component={Applications} />
          <Route path="/pages" exact component={Pages} />

          <Route path="/supportcenter" exact component={Supportcenter} />
          <Route path="/inbox" exact component={Inbox} />
          <Route path="/filemanager" exact component={FileManager} />
          <Route path="/datalist" exact component={DataList} />

          <Route path="/settings" exact component={Settings} />
          <Route path="/logout" exact component={LogOut} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
