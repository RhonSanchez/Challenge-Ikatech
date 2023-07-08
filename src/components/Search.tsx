import { ArrowRightIcon } from "./icons/ArrowRightIcon";

export const Search = ({ title = "" }) => {
  return (
    <div className="search">
      <input type="text" placeholder={title} />
      <div className="search-icon" onClick={() => console.log("searching")}>
        <ArrowRightIcon />
      </div>
    </div>
  );
};
