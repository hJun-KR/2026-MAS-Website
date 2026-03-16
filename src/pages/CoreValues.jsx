import "../styles/CoreValues.css";
import CoreValueCard from "../components/CoreValueCard";
import coreValuesList from "../../data/coreValuesList";
import Wave from "../components/Wave.jsx";

function CoreValues() {
  return (
    <section id="vision">
      <div className="core-header">
        <h1 className="title">CORE VALUES</h1>
        <p className="orange">MAS가 추구하는 핵심 가치</p>
      </div>
      <div className="corevalues_items">
        {coreValuesList.map((item) => (
          <CoreValueCard
            key={item.title}
            image={item.image}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
      <div className="wave-wrapper">
        <svg width="0" height="0">
          <defs>
            <linearGradient id="waveGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(0,0,0,0.35)" />
              <stop offset="100%" stopColor="rgba(255,110,0,0.35)" />
            </linearGradient>
          </defs>
        </svg>
        <div className="wave-track">
          <Wave />
          <Wave />
        </div>
      </div>
    </section>
  );
}

export default CoreValues;
