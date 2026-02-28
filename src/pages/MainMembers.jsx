import Slider from '../components/Slider';
import '../styles/MainMembers.css';
import { Link } from "react-router-dom";
import membersList from "../../data/membersList.js";

function MainMembers() {
  return (
    <div id="members">
      <div className='mainMembers'>
          <div className='members-intro'>
            <div>
              <h1>MEMBERS</h1>
              <p>MAS를 빛내고 지금까지 <br />
                이끌어 온 부원들입니다</p>
            </div>

          <Link to="/members" className='members-btn'>더 보기 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
          <path d="M1 8H17M17 8L9.8 1M17 8L9.8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg></Link>

          {/* 모바일 전용 더 보기 */}
          <div className='members-btn-M'>
            <Link to="/members">더보기
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="16" viewBox="0 0 8 16" fill="none">
            <path d="M0.749999 14.75L6.08061 8.53095C6.4658 8.08156 6.4658 7.41844 6.08061 6.96905L0.749999 0.750001" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg></Link>
          </div>

        </div>
        {/* direction 슬라이드 방향
        normal: 오른쪽 -> 왼쪽   reverse: 왼쪽 -> 오른쪽 */}
        <Slider slideList={membersList} direction="normal" name='members-slide'/> 
      </div>
    </div>
  );
}


export default MainMembers;