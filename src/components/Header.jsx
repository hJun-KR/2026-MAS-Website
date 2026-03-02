import { useNavigate } from "react-router-dom";
import "../styles/Header.css";
import NavElements from "./NavElements";
import SocialLinks from "./SocialLinks";
import Apply from "./Apply";
import { useState } from "react";

const navItems = [
  { text: "VISION", path: "#vision" },
  { text: "PRIZE", path: "#ourPrize" },
  { text: "MEMBERS", path: "#members" },
  { text: "PROJECTS", path: "#projects" },
  { text: "Q&A", path: "#qna" },
];

function Header() {
  const logo = "/logo.svg";
  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div className="header">
        <div className="header_logo" onClick={handleLogoClick}>
          <img src={logo} alt="로고" />
          <div className="logoText">
            <p className="logo">MAS</p>
            <p className="logoMeaning">My Ability Share</p>
          </div>
        </div>

        {/* 데스크탑 */}
        <ul className="nav_list">
          {navItems.map((item) => (
            <NavElements key={item.text} text={item.text} path={item.path} />
          ))}
        </ul>
        <div className="header_socialLinks">
          <SocialLinks />
        </div>
        <Apply />

        {/* 모바일 */}
        <button className="hambuger" onClick={() => setMenuOpen(!menuOpen)}>
          <img src={menuOpen ? "/close.svg" : "/hambuger.svg"} alt="menu" />
        </button>
      </div>
      <div className={`menu ${menuOpen ? "open" : ""}`}>
        <p className="menu-title">MENU</p>
        <ul className="nav_list">
          {navItems.map((item) => (
            <NavElements
              key={item.text}
              text={item.text}
              path={item.path}
              onClick={handleNavClick}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default Header;
