import "../styles/Banner.css";

function Banner({ pcImg, mobileImg, h1Title, pExplanation1, pExplanation2 }) {
  return (
    <div className="bannerAll">
      <img src={pcImg} alt="" className="bannerBg-pc" />
      <img src={mobileImg} alt="" className="bannerBg-mobile" />
      <div className="banner-texts">
        <h1 className="bannerTitle">
          {h1Title}
        </h1>
        <p className="bannerExplanation">
          {pExplanation1}
          <br />
          {pExplanation2}
        </p>
      </div>
    </div>
  );
}

export default Banner;
