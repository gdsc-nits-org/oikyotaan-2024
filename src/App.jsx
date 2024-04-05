import { Routes, Route } from "react-router-dom";

import { Home, Error, Artist, Event } from "./Pages";

import { Navbar, Footer } from "./Components";
import InitialLoadingForHome from "./Components/Loader/InitialLoading";
const App = () => {
  return (
    <>
      <InitialLoadingForHome />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artist" element={<Artist />} />
        <Route path="*" element={<Error />} />
        <Route path="/events" element={<Event />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
