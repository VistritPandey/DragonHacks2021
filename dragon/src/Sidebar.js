import { Avatar, Button } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";
import { auth } from "./Firebase";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import logo from "./Logo.jpg";

function Sidebar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">--</span>
      <a href="https://github.com/VistritPandey/DragonHacks2021">{topic}</a>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src={logo} alt="" />
        <Avatar className="sidebar__avatar" src={user.photoUrl} />
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Following</p>
          <p className="sidebar__statNumber">0</p>
        </div>
        <div className="sidebar__stat">
          <p>Followers</p>
          <p className="sidebar__statNumber">0</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Repo Link</p>
        {recentItem("Github Repo")}
      </div>
      <div className="sidebar__logout">
        <Button
          onClick={() => {
            auth.signOut();
          }}
        >
          {" "}
          Logout{" "}
        </Button>
      </div>
    </div>
  );
}

export default Sidebar;
