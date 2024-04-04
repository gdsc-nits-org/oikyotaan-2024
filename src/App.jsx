import { Routes, Route } from "react-router-dom";

import { Home, Error } from "./Pages";

import { Navbar, Footer } from "./Components";
import Events from "./Pages/Events/Events";
import InitialLoadingForHome from "./Components/Loader/InitialLoading";
const App = () => {
  return (
    <>
      <InitialLoadingForHome />
      <Navbar />
      <Events />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/events" element={<Events />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
