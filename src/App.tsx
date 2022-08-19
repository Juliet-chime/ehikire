import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./assest/font/font.css";
// import { FaBars } from "react-icons/fa";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/home/Home";
import { BodyWrapper } from "./style";
import { useAppContext } from "./context";

function App() {
  const { setActive, screenSize, setScreenSize } = useAppContext();
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActive(false);
    } else {
      setActive(true);
    }
  }, [screenSize]);

  return (
    <div className="App">
      <NavBar />
      <BodyWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BodyWrapper>

      {/* <p style={{ zIndex: "-1" }}>
        hell Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
        commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        s sagittis magna. Sed consequat, leo eget
      </p> */}

      <Footer />
    </div>
  );
}

export default App;
