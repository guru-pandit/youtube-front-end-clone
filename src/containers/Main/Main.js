import { useContext } from "react";
import FilterLink from "@components/FilterLink/FilterLink";
import VideoCard from "@components/VideoCard/VideoCard";
import "./Main.css";

import { SidebarStateContext } from "@hooks/SidebarState/SidebarState";

const Main = () => {
  const [isSidebarClose] = useContext(SidebarStateContext);

  return (
    <div className={`main ${isSidebarClose ? "main--full" : null}`}>
      <div className="main__filter">
        <div className="main__filterlinks">
          <FilterLink label="All" />
          <FilterLink label="JavaScript" />
          <FilterLink label="Tamasha" />
          <FilterLink label="Comedy" />
          <FilterLink label="Bhajan Music" />
          <FilterLink label="Indian Music" />
          <FilterLink label="Cooking Shows" />
          <FilterLink label="Machine Learning" />
          <FilterLink label="Cakes" />
          <FilterLink label="Laravel" />
          <FilterLink label="HTML" />
          <FilterLink label="Painting" />
        </div>
      </div>

      <div className="main__content">
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
    </div>
  );
};

export default Main;
