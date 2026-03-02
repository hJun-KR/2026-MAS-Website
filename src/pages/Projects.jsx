import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from '../components/Banner.jsx';
import ProjectsBox from '../components/ProjectsBox';
import '../styles/Projects.css'
import projectsList from "../../data/projectsList";
import { useState, useEffect } from 'react';

function Projects() {
  const [selectedType, setSelectedType] = useState("ALL");
  const filteredProjects = selectedType === "ALL" ? projectsList : projectsList.filter(project => project.type === selectedType);

  useEffect(() => {
    window.scrollTo(0, 0);
  })

  return (
    <>
      <Header/>
      <div className="project">
        <Banner
          pcImg="/projectsBanner.svg"
          mobileImg="/projects_bg.svg"
          h1Title="PROJECTS"
          pExplanation1="서로의 능력을 모아 함께 완성한"
          pExplanation2="MAS의 프로젝트들을 만나보세요."
        />

        <div className='list'>
          {
            ["ALL", "WEB", "APP"].map(item => (
              <button key={item} className={`${selectedType === item ? "selected" : "notSelect"}`} onClick={() => setSelectedType(item)}>{item}</button>
            ))
          }
        </div>

        <div className='allProjects'>
          {
            filteredProjects.map(item => (
              <ProjectsBox 
              key={item.title}
              image={item.image}
              type={item.type}
              year={item.year}
              title={item.title}
              subTitle={item.subTitle}
              />
            ))
          }
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Projects;