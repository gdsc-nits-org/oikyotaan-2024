import { Routes, Route } from "react-router-dom";
import { Home, Error, Artist, Events } from "./Pages";
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
      </Routes>
      <Footer />
    </>
  );
};

export default App;
