/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Main.css";
import Banner from "./Banner/Banner";
import CustomizationSection from "./CustomizationSection/CustomizationSection";
import News from "./News/News";

const Main = () => {
  return (
    <main className="page-main">
      <h1 className="visually-hidden">Infinizai</h1>

      <Banner />
      <CustomizationSection />
      <News />
    </main>
  );
};

export default Main;
