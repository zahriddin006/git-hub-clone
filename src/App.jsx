import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Saidbar from "./components/Saidbar/Saidbar";
import Overview from "./components/Overview/Overview";
import Packages from "./components/Packages/Packages";
import Projects from "./components/Projects/Projects";
import Repository from "./components/Repository/Repository";
import Stars from "./components/Stars/Stars";
import Following from "./components/Following/Following";
import Footer from "./components/Footer/Footer"
import Error from "./components/Error/error";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
      <Main/>
      <div className="d-flex container">
        <Saidbar/>
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/repo" element={<Repository />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/stars" element={<Stars />} />
            <Route path="/followers" element={<Following />} />
            <Route path="/*" element={<Error />} />
          </Routes>
      </div>
      </BrowserRouter>
      <Footer/>
    </>
  );
};

export default App;
