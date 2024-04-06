import { Routes, Route } from "react-router-dom";

import { Home, Error, Artist, Gallery } from "./Pages";

import { Navbar, Footer } from "./Components";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artist" element={<Artist />} />
        <Route path="*" element={<Error />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
