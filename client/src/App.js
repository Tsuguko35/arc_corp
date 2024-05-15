import { Route, Routes } from "react-router-dom";
import { routes } from "./config";

import "./styles/styles.css";

function App() {
  return (
    <div>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.component} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
