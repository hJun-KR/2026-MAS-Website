import "../styles/OurPrizeMars.css";

function OurPrizeMars() {
  const titan = (titanNum) => (
    <img
      src="/miniTitan.svg"
      alt="Titan"
      className={`titan titan${titanNum}`}
    />
  );

  return (
    <div className="planet_wrapper">
      <img src="/ourprize_planet.svg" alt="Mars" className="mars" />
      <div className="planet_center1">
        {/* {titan(1)} */}
        {/* {titan(2)} */}
      </div>
      {/* <div className="planet_center2">{titan(3)}</div> */}
    </div>
  );
}

export default OurPrizeMars;
