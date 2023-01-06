import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./i18n";
import Loading from "./components/ui/loading";

// @tsignore
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* 
      Using Suspense to let the component wait until the i18n translation executed
      =============================================================================
    */}
    <Suspense
      fallback={
        <section className="h-screen w-screen flex items-center justify-center">
          <Loading />
        </section>
      }>
      <App />
    </Suspense>
  </React.StrictMode>
);
