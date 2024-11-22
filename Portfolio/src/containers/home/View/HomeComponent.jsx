import React from "react";
import Main from "../Main";
import Header from "../Header";
import Footer from "../Footer";

const HomeComponent = () => {
  return (
    <div className="min-h-screen bg-[var(--Bg)]">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default HomeComponent;
