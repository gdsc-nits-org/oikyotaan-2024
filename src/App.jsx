import { Routes, Route } from "react-router-dom";

import { Home, Error, Artist, Gallery, Team, Events } from "./Pages";

import { Navbar, Footer } from "./Components";
// import { Events } from "./Pages/Events";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
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
