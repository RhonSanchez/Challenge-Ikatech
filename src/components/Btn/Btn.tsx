import "./Btn.css";

export const Btn = ({ title = "", className = "", onClick }) => {
  return (
    <button className={`btn ${className}`} onClick={onClick}>
      {title}
    </button>
  );
};
