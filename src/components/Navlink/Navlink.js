import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Navlink.css";

import { SidebarStateContext } from "@hooks/SidebarState/SidebarState";

const Navlink = ({ path, label, Icon }) => {
  const [isSidebarClose] = useContext(SidebarStateContext);

  return (
    <div className={`navlink ${isSidebarClose ? "navlink--close" : null}`}>
      <NavLink exact activeClassName="active" to={path}>
        <div className="navlink__icon">
          <Icon />
        </div>
        <div className="navlink__label">{label}</div>
      </NavLink>
    </div>
  );
};

export default Navlink;
