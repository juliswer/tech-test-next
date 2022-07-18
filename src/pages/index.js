// ? Import React
import React from "react";

// ? Import Loading Components and the App Layout
import Loading from "../components/Loading";
import App from "../layout/App";

// * Index Page
function Home() {
  // * Render Index Page
  return (
    <>
      <React.Suspense fallback={<Loading />}>
        <App />
      </React.Suspense>
    </>
  );
}

export default Home;
