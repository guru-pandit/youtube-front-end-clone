import { useContext } from "react";
import Navlink from "@components/Navlink/Navlink";
import {
  Home,
  Subscriptions,
  Whatshot,
  VideoLibrary,
  History,
  Slideshow,
  WatchLater,
  PlaylistPlay,
  ExpandMore,
} from "@material-ui/icons";
import "./Sidebar.css";

import { SidebarStateContext } from "@hooks/SidebarState/SidebarState";

const Sidebar = () => {
  const [isSidebarClose] = useContext(SidebarStateContext);

  return (
    <div className={`sidebar ${isSidebarClose ? "sidebar--close" : null}`}>
      <Navlink label="Home" path="/" Icon={Home} />
      <Navlink label="Trending" path="/trending" Icon={Whatshot} />
      <Navlink
        label="Subscriptions"
        path="/subscriptions"
        Icon={Subscriptions}
      />
      {!isSidebarClose && <hr className="sidebar__divider" />}
      <Navlink label="Library" path="/videolibrary" Icon={VideoLibrary} />
      {!isSidebarClose && (
        <Navlink label="History" path="/history" Icon={History} />
      )}
      {!isSidebarClose && (
        <Navlink label="Your Videos" path="/yourvideos" Icon={Slideshow} />
      )}
      {!isSidebarClose && (
        <Navlink label="Watch Later" path="/watchlater" Icon={WatchLater} />
      )}
      {!isSidebarClose && (
        <Navlink label="VUE JS 3 Videos" path="/playlist" Icon={PlaylistPlay} />
      )}
      {!isSidebarClose && (
        <Navlink label="Show More" path="/showmore" Icon={ExpandMore} />
      )}
      {!isSidebarClose && <hr className="sidebar__divider" />}
    </div>
  );
};

export default Sidebar;
