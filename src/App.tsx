import { useEffect } from "react";
import "./App.scss";
import DefaultLayout from "./layouts/defaultLayout/DefaultLayout";

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
    </>
  );
}

export default App;
