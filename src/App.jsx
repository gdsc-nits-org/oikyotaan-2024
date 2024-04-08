import { Routes, Route } from "react-router-dom";
import { useState, lazy, Suspense } from "react";
import { Navbar, Footer, Loading } from "./Components";

const Gallery = lazy(() =>
  import("./Pages/index").then((module) => ({ default: module.Gallery }))
);
const Home = lazy(() =>
  import("./Pages/index").then((module) => ({ default: module.Home }))
);
const Team = lazy(() =>
  import("./Pages/index").then((module) => ({ default: module.Team }))
);

const Artist = lazy(() =>
  import("./Pages/index").then((module) => ({ default: module.Artist }))
);
const Events = lazy(() =>
  import("./Pages/index").then((module) => ({ default: module.Events }))
);
const Error = lazy(() =>
  import("./Pages/index").then((module) => ({ default: module.Error }))
);

const App = () => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      {
        loading &&
        <Loading />
      }
      <Suspense fallback={<Loading />}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home setLoading={setLoading} />} />
          <Route path="/artist" element={<Artist setLoading={setLoading} />} />
          <Route path="/events" element={<Events setLoading={setLoading} />} />
          <Route path="/gallery" element={<Gallery setLoading={setLoading} />} />
          <Route path="/team" element={<Team setLoading={setLoading} />} />
          <Route path="*" element={<Error setLoading={setLoading} />} />
        </Routes>
        <Footer />
      </Suspense>
    </>
  );
};

export default App;
