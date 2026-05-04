import { useEffect } from "react";
import "./App.scss";
import DefaultLayout from "./layouts/defaultLayout/DefaultLayout";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  useEffect(() => {
    if (window.location.hash === "#bottom") {
      setTimeout(() => {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth",
        });
      }, 1000);
    }
  }, []);

  return (
    <>
      <DefaultLayout />
      <SpeedInsights />
    </>
  );
}

export default App;
