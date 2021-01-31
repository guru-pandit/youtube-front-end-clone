import Buttons from "@components/Buttons/Buttons";
import Logo from "@components/Logo/Logo";
import SearchBox from "@components/SearchBox/SearchBox";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <SearchBox />
      <Buttons />
    </div>
  );
};

export default Header;
