import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Hero from "../pages//Hero";
import CoreValues from "./CoreValues";
import OurPrize from "./OurPrize";
import MainMembers from "./MainMembers";
import MainProjects from "./MainProjects";
import QnA from "./QnA";
import Footer from "../components/Footer";

function Main() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <Header />
      <Hero />
      <CoreValues />
      <OurPrize />/
      <MainMembers />
      <MainProjects />
      <QnA />
      <Footer />
    </>
  );
}

export default Main;
