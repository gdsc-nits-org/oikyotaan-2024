import { Routes, Route } from "react-router-dom";

import { Home, Error } from "./Pages";

import { Navbar, Footer } from "./Components";
import Events from "./Pages/Events/Events";

const App = () => {
  return (
    <>
      <Navbar />
      <Events />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="./Events" element={<Events />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
