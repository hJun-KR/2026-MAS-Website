import Header from "../components/Header";
import Footer from "../components/Footer.jsx";
import prizeList from "../../data/prizeList.js";
import PrizePictureElement from "../components/PrizePictureElement";
import Banner from "../components/Banner.jsx";
import "../styles/Prize.css";
import { useState, useEffect } from "react";

function Prize() {
  const [gen, setGen] = useState(2026);
  const filteredPrizes = prizeList.filter((p) => p.year === gen);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <>
      <Header />
        <div className="prize">
          <Banner
            pcImg="/prizeBanner.svg"
            mobileImg="/prize_bg.svg"
            h1Title="PRIZES"
            pExplanation1="끊임 없는 노력과 성장으로"
            pExplanation2="인정받은 MAS의 성과입니다."
          />

          <div className="Year">
            {[2024, 2025, 2026].map((item) => (
              <button
                key={item}
                className={`Year_yearBtn ${gen === item ? "selected" : "notSelect"}`}
                onClick={() => setGen(item)}>{item}</button>
            ))}
          </div>

          <div className="prize_grid">
            {filteredPrizes.map((p, index) => (
              <PrizePictureElement
                key={index}
                PictureElement={p.image}
                explanationElement={p.explanation}
              />
            ))}
          </div>
        </div>
      <Footer />
    </>
  );
}

export default Prize;
