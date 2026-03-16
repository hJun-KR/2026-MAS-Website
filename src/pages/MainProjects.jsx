import Slider from '../components/Slider';
import '../styles/MainProjects.css';
import { Link } from "react-router-dom";
import projectsList from '../../data/projectsList';

const half = Math.ceil(projectsList.length / 2);
const slideProjectsUp = projectsList.slice(0, half);
const slideProjectsDown = projectsList.slice(half);

function MainProjects() {
  return (
    <div id='projects'>
      <div className='projects-intro'>
        <div>
          <h1>PROJECTS</h1>
          <p>서로의 능력을 모아 함께 완성한 <br />
            MAS의 프로젝트들을 만나보세요</p>
        </div>

        <Link to="/projects" className='projects-btn'>자세히 보기 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
        <path d="M1 8H17M17 8L9.8 1M17 8L9.8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg></Link>

        {/* 모바일 전용 버튼 */}
        <div className='projects-btn-M'>
          <Link to="/projects">더보기
          <svg xmlns="http://www.w3.org/2000/svg" width="8" height="16" viewBox="0 0 8 16" fill="none">
          <path d="M0.749999 14.75L6.08061 8.53095C6.4658 8.08156 6.4658 7.41844 6.08061 6.96905L0.749999 0.750001" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          </svg></Link>
        </div>

      </div>
      <div className='sliders'>
        <Slider slideList={slideProjectsUp} direction="reverse" name='projects-slideUp'/>
        <Slider slideList={slideProjectsDown} direction="normal" name='projects-slideDown'/>

        {/* 모바일 슬라이드 */}
        <Slider slideList={projectsList} direction="reverse" name='projects-mobile'/>
      </div>
    </div>  
  );
}


export default MainProjects;