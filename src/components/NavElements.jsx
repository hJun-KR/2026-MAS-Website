import { useNavigate } from "react-router-dom";
import "../styles/NavElements.css";

function NavElements({ text, path, external }) {
  const navigate = useNavigate();
  const handleClick = (e) => {
    if (external) return;
    e.preventDefault();
    if (path.startsWith("#")) {
      navigate("/" + path);
    } else {
      navigate(path);
    }
  };
  return (
    <li>
      <a
        href={path}
        className="navElements"
        onClick={handleClick}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {text}
      </a>
    </li>
  );
}

export default NavElements;
