import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Intro from "./components/section/Intro";
import Home from "./pages/Home";
import Navbar from "./components/layout/Navbar";
import DeerCursor from "./components/cursor/Cursor";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/intro" element={<Intro />} />

        <Route
          path="/*"
          element={
            <>
            <DeerCursor />
              <Navbar />
              <div className="pt-18">
                <Home />
              </div>
            </>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}
