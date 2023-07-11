import "./Btn.css";

interface Props {
  title: string;
  className?: string;
  onClick: () => void;
}

export const Btn = ({ title = "", className = "", onClick }: Props) => {
  return (
    <button className={`btn ${className}`} onClick={onClick}>
      {title}
    </button>
  );
};
