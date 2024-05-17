import { Route, Routes } from "react-router-dom";
import { routes } from "./config";

import "./styles/styles.css";
import { NavBar } from "./components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/* Import locomotive-scroll */
import LocomotiveScroll from "locomotive-scroll";

import "locomotive-scroll/dist/locomotive-scroll.css";
import { useEffect } from "react";

/* Locomotive scroll instance */
const locomotiveScroll = new LocomotiveScroll();

function App() {
  // useEffect(() => {
  //   const scroll = new LocomotiveScroll({
  //     el: document.querySelector("[data-scroll-container]"),
  //     smooth: true,
  //     smoothMobile: true,
  //     inertia: 0.75, // Adjust inertia for a smoother scroll
  //     multiplier: 2,
  //   });

  //   return () => {
  //     if (scroll) scroll.destroy();
  //   };
  // }, []);
  return (
    <div data-scroll-container>
      {/* Navigation Bar */}
      <NavBar />

      {/* Pages */}
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.component} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
