import { Routes, Route } from "react-router-dom";

import { Home, Error, Artist, Gallery, Team } from "./Pages";


import { Navbar, Footer } from "./Components";

const App = () => {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artist" element={<Artist />} />
        <Route path="*" element={<Error />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/team" element={<Team />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
