import "../styles/Members_feature.css";

function Members_feature({ feaNum, feaTitle, feaExplanation }) {
  return (
    <div>
      <button className="member_feaButton">
        <p className="Member_feaNum">{feaNum}</p> <br />
        <p className="Member_feaTitle">{feaTitle}</p> <br />
        <p className="Member_feaExplanation">{feaExplanation}</p>
      </button>
    </div>
  );
}

export default Members_feature;
