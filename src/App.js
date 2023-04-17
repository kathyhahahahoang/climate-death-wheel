import Wheel from "./components/Wheel";
import Quote1 from "./components/Quote1";
import GridImages from "./components/GridImages";
import Video from "./components/Video";
import MapView from "./components/MapView";
import Footer from "./components/Footer";
import styles from "./App.module.css";
import { useRef } from "react";

import "./fonts/kathy-regular-webfont.woff2";

import { useState } from "react";
import InfoContext from "./store/info-context";

function App() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const [icon, setIcon] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [showTiles, setShowTiles] = useState(true);
  const [showLarge, setShowLarge] = useState(false);
  const [submitForm, setSubmitForm] = useState(false);

  const resultRef = useRef(null);

  return (
    <InfoContext.Provider
      value={{
        title,
        setTitle,
        text,
        setText,
        image,
        setImage,
        icon,
        setIcon,
        openModal,
        setOpenModal,
        showTiles,
        setShowTiles,
        showLarge,
        setShowLarge,
        submitForm,
        setSubmitForm,
      }}
    >
      <div className={styles.app}>
        <Wheel resultRef={resultRef} />
        <Quote1 ref={resultRef} />
        <GridImages />
        <Video />
        <MapView />
        <Footer />
      </div>
    </InfoContext.Provider>
  );
}

export default App;
