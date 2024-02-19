import Wheel from "./components/Wheel";
import Background from "./components/Background";
import Quote1 from "./components/Quote1";
import Grid from "./components/Grid";
import GridImages from "./components/GridImages";
import Video from "./components/Video";
import MapView from "./components/MapView";
import Footer from "./components/Footer";
import styles from "./App.module.scss";
import { useRef, useState } from "react";
import "./fonts/kathy-regular-webfont.woff2";
import InfoContext from "./store/info-context";

function App() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [longText, setLongText] = useState("");
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
        longText,
        setLongText,
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
        <Background />
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
