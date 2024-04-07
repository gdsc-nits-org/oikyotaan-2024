// import { Routes, Route } from "react-router-dom";

// import { Home, Error, Artist, Gallery, Team, Events } from "./Pages";

// import { Navbar, Footer } from "./Components";
// // import { Events } from "./Pages/Events";

// const App = () => {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/events" element={<Events />} />
//         <Route path="/artist" element={<Artist />} />
//         <Route path="*" element={<Error />} />
//         <Route path="/gallery" element={<Gallery />} />
//         <Route path="/team" element={<Team />} />
//       </Routes>
//       <Footer />
//     </>
//   );
// };

// export default App;

import { Routes, Route } from "react-router-dom";
import { useState, lazy, Suspense } from "react";
import { Navbar, Footer } from "./Components";
import style from "./App.module.scss";

import { Error, Home, Gallery, Events, Artist } from "./Pages";

const TeamPage = lazy(() => import("./Pages/Team/Team"));

const App = () => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Navbar />
      {loading && (
        <div className={style.LoaderClass}>
          <div className={style.LoaderCircle}>
            <img
              alt="LoaderText"
              src="https://res.cloudinary.com/dl0knguhb/image/upload/v1712476934/Logo_jwqath.webp"
              className={style.LoaderText}
            />
            <img
              alt="Loading"
              src="https://res.cloudinary.com/dl0knguhb/image/upload/v1712476453/rotatingchakrii_ymiwxa.gif"
              className={style.LoaderImg}
            />
          </div>
        </div>
      )}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home setLoading={setLoading} />} />
          <Route path="/gallery" element={<Gallery setLoading={setLoading} />} />
          <Route path="/events" element={<Events setLoading={setLoading} />} />
          <Route path="/artist" element={<Artist setLoading={setLoading} />} />
          <Route path="/team" element={<TeamPage setLoading={setLoading} />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
};

export default App;
