import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import "./App.css";
import MainSection from "./MainSection/MainSection";

function App() {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <Footer />
    </div>
  );
}

export default App;
