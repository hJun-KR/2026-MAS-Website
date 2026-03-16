import { useState } from "react";
import { useEffect } from "react";
import Header from "../components/Header.jsx";
import membersList from "../../data/membersList.js";
import MemberPictureElement from "../components/MembersPictureElement";
import Banner from "../components/Banner";
import Members_feature from "../components/Members_feature.jsx";
import "../styles/Members.css";
import WeAreMAS from "./WeAreMAS.jsx";
import Footer from "../components/Footer.jsx";

function Members() {
  const [gen, setGen] = useState(5);
  const filteredMembers = membersList.filter((m) => m.generation === gen);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <div className="members">
        <div>
          <Banner
            pcImg="/membersBanner.svg"
            mobileImg="/members_bg.svg"
            h1Title="MEMBERS"
            pExplanation1="MAS를 빛내고 지금까지"
            pExplanation2="이끌어 온 부원들 입니다."
          />
        </div>

        <div className="generation_buttons">
          {[4, 5, 6].map((g) => (
            <button
              key={g}
              className={`yearBtn ${gen === g ? "selected" : "notSelect"}`}
              onClick={() => setGen(g)}
            >
              {g}기
            </button>
          ))}
        </div>

        {gen === 6 ? (
          <div className="member_sixYear">
            <div className="member_bg"></div>
            <div className="member_content">
              <div className="member_sixYear_title">
                <h1 className="member_title">My Ability Share</h1>
                <p className="member_explanation">
                  당신의 능력이 빛나는 곳, MAS 6기 부원을 찾습니다.
                </p>
              </div>
              <div className="member_button">
                <Members_feature
                  feaNum="01"
                  feaTitle="Achievement"
                  feaExplanation="다양한 공모전과 대회에서 좋은 결과를 가져옵니다."
                />
                <Members_feature
                  feaNum="02"
                  feaTitle="Collaboration"
                  feaExplanation="SW와 Design의 협업으로 프로젝트를 완성해 나갑니다."
                />
                <Members_feature
                  feaNum="03"
                  feaTitle="Growth"
                  feaExplanation="각자의 능력을 나누며 어제보다 더 성장합니다."
                />
              </div>
              <div className="member_joinButton">
                <button className="member_join">지원하기</button>
              </div>
            </div>
          </div>
        ) : (
          <div className="members_grid">
            {filteredMembers.map((m) => (
              <MemberPictureElement
                key={m.name}
                memberPicture={m.image}
                memberClass={
                  m.major === 1 ? "뉴미디어소프트웨어과" : "뉴미디어디자인과"
                }
                memberName={m.name}
                memberYear={`${m.generation}기  ${m.role}`}
                memberFea1={m.tag1}
                memberFea2={m.tag2}
              />
            ))}
          </div>
        )}
        <WeAreMAS />
      </div>
      <Footer />
    </>
  );
}

export default Members;
