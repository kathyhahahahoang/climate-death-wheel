import Wheel from "./components/Wheel";
import Quote1 from "./components/Quote1";
import GridImages from "./components/GridImages";
import Video from "./components/Video";
import MapView from "./components/MapView";
import styles from "./App.module.css";

import "./fonts/kathyhandwriting-regular-webfont.woff2";

import { useState } from "react";
import InfoContext from "./store/info-context";

function App() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const [icon, setIcon] = useState("");

  return (
    <InfoContext.Provider
      value={{ title, setTitle, text, setText, image, setImage, icon, setIcon }}
    >
      <div className={styles.app}>
        <Wheel />
        <Quote1 id="quote" />
        <GridImages />
        {/* <Video /> */}
        <MapView />
      </div>
    </InfoContext.Provider>
  );
}

export default App;
