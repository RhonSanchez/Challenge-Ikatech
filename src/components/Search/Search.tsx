import { ArrowRightIcon } from "../icons/ArrowRightIcon";
import "./Search.css";

export const Search = ({ title = "" }) => {
  return (
    <div className="search">
      <input type="text" placeholder={title} />
      <div className="search-icon">
        <ArrowRightIcon />
      </div>
    </div>
  );
};
