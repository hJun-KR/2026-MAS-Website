import { useNavigate } from "react-router-dom";
import "../styles/OurPrize.css";
import OurPrizeMars from "../components/OurPrizeMars";

function OurPrize() {
  const navigate = useNavigate();
  const nextButtonIMG = "/ourprize_nextButton.svg";
  const everyPictureIMG = "/ourprize_picture.svg";

  return (
    <section id="ourPrize">
      <OurPrizeMars />
      <div className="ourPrize-texts">
        <h1 className="our">OUR</h1>
        <h1 className="prize">PRIZE</h1>
        <p className="ourPrize-explanation">
          <span id="full-ex">
            우리는 매년 새로운 기록을 경신하며 <br />
            학교를 대표하는 전공 동아리로 거듭나고 있습니다.
          </span>
          <span id="short-ex">
            MAS의 주요 성과를
            <br />
            기록하는 공간입니다.
          </span>
        </p>
      </div>

      <button
        className="morePrize"
        onClick={() => {
          navigate("/prize");
        }}
      >
        <span id="biggest">
          더 많은 수상내역 보기
          <img src={nextButtonIMG} alt="" className="nextButton" />
        </span>
        <span id="shortest">
          수상내역 보기
          <img src="/arrow_right.svg" className="nextButton" />
        </span>
      </button>

      <div className="ourpPicture">
        <img src={everyPictureIMG} alt="" id="biggerPic" />
        <img src="/ourprize_picture_short.svg" alt="" id="smallerPic" />
      </div>
    </section>
  );
}

export default OurPrize;
