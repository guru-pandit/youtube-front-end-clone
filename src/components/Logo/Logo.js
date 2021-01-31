import { useContext } from "react";
import LogoImage from "@assets/images/logo.png";
import IconButton from "@material-ui/core/IconButton";
import { Menu } from "@material-ui/icons";
import "./Logo.css";

import { SidebarStateContext } from "@hooks/SidebarState/SidebarState";

const Logo = () => {
  const [isSidebarClose, setIsSidebarClose] = useContext(SidebarStateContext);

  return (
    <div className="logo">
      <div className="logo__hamburger">
        <IconButton onClick={() => setIsSidebarClose(!isSidebarClose)}>
          <Menu />
        </IconButton>
      </div>
      <div className="logo__image">
        <img src={LogoImage} alt="Logo" />
      </div>
    </div>
  );
};

export default Logo;
