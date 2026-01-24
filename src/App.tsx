import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Intro from "./components/section/Intro";
import Home from "./pages/Home";
import Navbar from "./components/layout/Navbar";
import DeerCursor from "./components/cursor/Cursor";

function AnimatedRoutes() {
  const location = useLocation();

  // Show navbar only if NOT on intro
  const showNavbar = location.pathname !== "/intro";

  return (
    <>
      {/* Cursor always active */}
      <DeerCursor />

      {/* Navbar conditionally */}
      {showNavbar && <Navbar />}

      {/* Animate ONLY page content */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/intro" element={<Intro />} />

          <Route
            path="/*"
            element={
              <motion.div
                key={location.pathname}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="pt-18"
              >
                <Home />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}
