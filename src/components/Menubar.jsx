import React from "react";
import SettingsIcon from "@material-ui/icons/Settings";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SearchIcon from "@material-ui/icons/Search";
import pic from "../images/me.png";
import { Link } from "react-router-dom";

function Documents() {
  return (
    <div className="Menubar">
      <div className="searchBar">
        <SearchIcon />
        <input type="text" placeholder="Type to search..." />
      </div>

      <Link to="/settings">
        <SettingsIcon className="Icon" />
      </Link>
      <Link to="/inbox">
        <ChatBubbleOutlineIcon className="Icon" />
      </Link>
      <Link to="/applications">
        <NotificationsIcon className="Icon" />
      </Link>
      <table>
        <tbody>
          <tr className="TR">
            <td className="name">Lavesh Goyal</td>
            <th rowSpan="2">
              <img src={pic} alt="my-pic" className="profilePic" />
            </th>
          </tr>
          <tr>
            <td>Developer</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Documents;
