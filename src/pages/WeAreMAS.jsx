import dailyLifeList from "../../data/dailyLifeList";
import "../styles/WeAreMAS.css";

function WeAreMAS() {
  const images = [...dailyLifeList, ...dailyLifeList];

  return (
    <div className="weAreMAS">
      <div className="weAreMAS-texts">
        <h1>We Are MAS !!</h1>
        <p>MAS의 모든 순간을 기록하는 공간입니다.</p>
      </div>

      <div className="slider">
        <div className="curve-mask top" />
        <div className="slider-track">
          {images.map((d, index) => (
            <div className="slide-item" key={index}>
              <img src={d.image} alt="MAS daily" />
            </div>
          ))}
        </div>
        <div className="curve-mask bottom" />
      </div>
    </div>
  );
}

export default WeAreMAS;
