import { Routes, Route } from "react-router-dom";

import { Home, Error, Artist, Team } from "./Pages";

import { Navbar, Footer } from "./Components";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artist" element={<Artist />} />
        <Route path="*" element={<Error />} />
        <Route path="/team" element={<Team />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
