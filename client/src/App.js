import { Route, Routes } from "react-router-dom";
import { routes } from "./config";

import "./styles/styles.css";
import { NavBar } from "./components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div>
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
