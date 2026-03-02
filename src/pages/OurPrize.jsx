import { useNavigate } from "react-router-dom";
import "../styles/OurPrize.css";

function OurPrize() {
  const navigate = useNavigate();
  const nextButtonIMG = "/ourprize_nextButton.svg";
  const everyPictureIMG = "/ourprize_picture.svg";
  const planetIMG = "/ourprize_planet.svg";
  const miniTitanIMG = "/miniTitan.svg";

  return (
    <section id="ourPrize">
      <div className="planet_wrapper">
        <img src={planetIMG} alt="" className="ourprize_background" />
        <div className="planet_center1">
          <img src={miniTitanIMG} alt="" className="miniTitan1" />
          <img src={miniTitanIMG} alt="" className="miniTitan2" />
        </div>
        <div className="planet_center2">
          <img src={miniTitanIMG} alt="" className="miniTitan3" />
        </div>
      </div>

      <div className="ourPrize-left">
        <h1 className="our">OUR</h1>
        <h1 className="prize">PRIZE</h1>
        <p className="explanation">
          <span className="full">
            우리는 매년 새로운 기록을 경신하며 <br />
            학교를 대표하는 전공 동아리로 거듭나고 있습니다.
          </span>
          <span className="short">
            MAS의 주요 성과들을
            <br />
            기록하는 공간입니다.
          </span>
        </p>
        <button
          className="morePrize"
          onClick={() => {
            navigate("/prize");
          }}
        >
          <span className="full">
            더 많은 수상내역 보기
            <img src={nextButtonIMG} alt="" className="nextButton" />
          </span>
          <span className="short">
            수상내역 보기
            <img src="/arrow_right.svg" />
          </span>
        </button>
      </div>

      <div className="ourpPicture">
        <img src={everyPictureIMG} alt="" className="ourprizePicture" />
      </div>
    </section>
  );
}

export default OurPrize;
