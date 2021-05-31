import React from "react";
import SettingsIcon from "@material-ui/icons/Settings";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SearchIcon from "@material-ui/icons/Search";
import pic from "../images/me.png";

function Documents() {
  return (
    <div className="Menubar">
      <div className="searchBar">
        <SearchIcon />
        <input type="text" placeholder="Type to search..." />
      </div>

      <SettingsIcon className="Icon" />
      <ChatBubbleOutlineIcon className="Icon" />
      <NotificationsIcon className="Icon" />

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
