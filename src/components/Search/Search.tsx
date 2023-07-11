import { useRef } from "react";
import { ArrowRightIcon } from "../icons/ArrowRightIcon";
import "./Search.css";

export const Search = ({ title = "" }) => {
  const valueRef = useRef("");

  const handleClick = () => {
    valueRef.current.value = "";
  };

  return (
    <div className="search">
      <input ref={valueRef} type="text" placeholder={title} />
      <div className="search-icon" onClick={handleClick}>
        <ArrowRightIcon />
      </div>
    </div>
  );
};
