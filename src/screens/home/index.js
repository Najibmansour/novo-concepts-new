import React from "react";
import Header from "../../components/Header";
import "./index.css";
import Banner from "../../components/Banner";
import Company from "../../components/Company";
import BigSpacerWithBgandText from "../../components/BigSpacerWithBgandText";
import Values from "../../components/Values";
import Team from "../../components/Team";
import WorkPlan from "../../components/WorkPlan";
import Timeline from "../../components/Timeline";
import Because from "../../components/Because";
import BecauseImgGrid from "../../components/BecauseImgGrid";
import Priority from "../../components/Priority";
import Footer from "../../components/Footer";
const Home = () => {
  return (
    <div>
      <div className="banner">
        <Header />
        <Banner
          img={"https://i.imgur.com/rfN31GV.pngz"}
          leftText="The world will be"
          rightText="Looking at you
"
        />
      </div>
      <Company />
      <BigSpacerWithBgandText />
      <Values />
      <Team />
      <WorkPlan />
      <Timeline />

      <div className="bg">
        <span className="bigSpacer__text bigSpacer__text2">
          Conquer the marketplace with innovation and lasting connections
        </span>
      </div>

      <Because />
      <BecauseImgGrid />
      <Priority />
      <Footer />
    </div>
  );
};

export default Home;
