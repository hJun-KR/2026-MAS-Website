import SocialLinks from "./SocialLinks";
import "../styles/Footer.css";
import NavElements from "./NavElements";

const navItems = [
  { text: "VISION", path: "#vision" },
  { text: "PRIZE", path: "#prize" },
  { text: "MEMBERS", path: "#members" },
  { text: "PROJECTS", path: "#projects" },
  { text: "Q&A", path: "#qna" },
  {
    text: "JOIN THE CREW",
    path: "https://forms.gle/CzsdLkFV5vc36nGN6",
    external: true,
  },
];

function Footer() {
  return (
    <div className="footer">
      <div className="left">
        <div className="footer_logo">
          <p>MAS</p>
          <p className="orange">.</p>
        </div>
        <div className="info">
          <p>MAS - Official Club Website</p>
          <p>Mirim Meister High School - Major Club</p>
          <p>"Show your potential."</p>
        </div>
        <SocialLinks />
      </div>

      <div className="right">
        <p className="title">NAVIGATION</p>
        <ul className="nav_list">
          {navItems.map((item) => (
            <NavElements
              key={item.text}
              text={item.text}
              path={item.path}
              external={item.external}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Footer;
