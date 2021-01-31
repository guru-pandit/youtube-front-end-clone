import { Mic, Search } from "@material-ui/icons/";
import "./SearchBox.css";

const SearchBox = () => {
  return (
    <div className="searchbox">
      <form className="searchbox__form">
        <input className="searchbox__input" type="text" placeholder="Search" />
        <button className="searchbox__button" type="submit">
          <Search />
        </button>
      </form>

      <div className="searchbox__mic">
        <Mic />
      </div>
    </div>
  );
};

export default SearchBox;
