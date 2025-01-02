import React from "react";
import "./home.css";

import Header from "../header/header";
import Gallery from "../gallery/gallery";
import Footer from "../footer/footer"

function HomePage() {
  return (
    <div id="app">
      <Header />
      <Gallery />
      <Footer />
    </div>
  );
}

export default HomePage;