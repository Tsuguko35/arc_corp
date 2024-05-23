import { Route, Routes } from "react-router-dom";
import { routes } from "./config";

import "./styles/styles.css";
import { NavBar } from "./components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useEffect } from "react";

function App() {
  // Animations
  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = window.innerHeight * 0.65;
      const features = document.querySelectorAll(".feature");
      const features2 = document.querySelectorAll(".feature2");
      const features3 = document.querySelectorAll(".feature3");
      const features4 = document.querySelectorAll(".feature4");

      features.forEach((feature) => {
        const featureBounding = feature.getBoundingClientRect();

        if (featureBounding.top <= triggerPoint) {
          feature.classList.add("start-fade-bottom");
        }
      });
      features2.forEach((feature) => {
        const featureBounding = feature.getBoundingClientRect();

        if (featureBounding.top <= triggerPoint) {
          feature.classList.add("start-fade-top");
        }
      });
      features3.forEach((feature) => {
        const featureBounding = feature.getBoundingClientRect();

        if (featureBounding.top <= triggerPoint) {
          feature.classList.add("start-fade-left");
        }
      });
      features4.forEach((feature) => {
        const featureBounding = feature.getBoundingClientRect();

        if (featureBounding.top <= triggerPoint) {
          feature.classList.add("start-fade-right");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [pathname]);
  return (
    <div data-scroll-container>
      {/* <LoadingBar color="#F4CE14" progress={progress} height={5} /> */}
      {/* Navigation Bar */}
      <NavBar />

      {/* Pages */}
      <div className="pages">
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.component}
            />
          ))}
        </Routes>
      </div>
    </div>
  );
}

export default App;
