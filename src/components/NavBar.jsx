import React from "react";
import logo from "../images/logo.png";
import { Link, withRouter } from "react-router-dom";
import DashboardIcon from "@material-ui/icons/Dashboard";
import LanguageIcon from "@material-ui/icons/Language";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import AppsIcon from "@material-ui/icons/Apps";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import InboxIcon from "@material-ui/icons/Inbox";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import ListIcon from "@material-ui/icons/List";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

function NavBar(props) {
  return (
    <div className="NavBar">
      <div className="logoSection">
        <img className="Logo" src={logo} alt="" />
        <p>Artemis</p>
      </div>

      <hr />

      <div className="mainNav">
        <h1>MAIN</h1>
        <ul>
          <li id={props.location.pathname === "/salesduo" ? "active" : ""}>
            <DashboardIcon />
            <Link className="liText" to="/salesduo">
              Dashboard{" "}
            </Link>
          </li>{" "}
          <li id={props.location.pathname === "/discover" ? "active" : ""}>
            <LanguageIcon />
            <Link className="liText" to="/discover">
              Discover{" "}
            </Link>
          </li>{" "}
          <li id={props.location.pathname === "/users" ? "active" : ""}>
            <AccountBoxIcon />
            <Link className="liText" to="/users">
              Users{" "}
            </Link>
          </li>{" "}
          <li id={props.location.pathname === "/documents" ? "active" : ""}>
            <ImportContactsIcon />
            <Link className="liText" to="/documents">
              Documents{" "}
            </Link>
          </li>{" "}
          <li id={props.location.pathname === "/applications" ? "active" : ""}>
            <AppsIcon />
            <Link className="liText" to="/applications">
              Applications{" "}
            </Link>
          </li>{" "}
          <li id={props.location.pathname === "/pages" ? "active" : ""}>
            <FileCopyIcon />
            <Link className="liText" to="/pages">
              Pages{" "}
            </Link>
          </li>
        </ul>
      </div>

      <div className="SecondNav">
        <h1>SECONDARY</h1>
        <ul>
          <li id={props.location.pathname === "/supportcenter" ? "active" : ""}>
            <HelpOutlineIcon />
            <Link className="liText" to="/supportcenter">
              Support Center{" "}
            </Link>
          </li>{" "}
          <li id={props.location.pathname === "/inbox" ? "active" : ""}>
            <InboxIcon />
            <Link className="liText" to="/inbox">
              Inbox{" "}
            </Link>
          </li>{" "}
          <li id={props.location.pathname === "/filemanager" ? "active" : ""}>
            <FolderOpenIcon />
            <Link className="liText" to="/filemanager">
              File Manager{" "}
            </Link>
          </li>{" "}
          <li id={props.location.pathname === "/datalist" ? "active" : ""}>
            <ListIcon />
            <Link className="liText" to="/datalist">
              Data List{" "}
            </Link>
          </li>
        </ul>
      </div>

      <div className="LastNav">
        <ul>
          <li id={props.location.pathname === "/settings" ? "active" : ""}>
            <SettingsIcon />
            <Link className="liText" to="/settings">
              Settings{" "}
            </Link>
          </li>{" "}
          <li id={props.location.pathname === "/logout" ? "active" : ""}>
            <ExitToAppIcon />
            <Link className="liText" to="/logout">
              Log Out{" "}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default withRouter(NavBar);
