import Wheel from "./components/Wheel";
import Quote1 from "./components/Quote1";
import GridImages from "./components/GridImages";
import styles from "./App.module.css";
import { useState } from "react";
import InfoContext from "./store/info-context";

function App() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  return (
    <InfoContext.Provider
      value={{ title, setTitle, text, setText, image, setImage }}
    >
      <div className={styles.app}>
        <Wheel />
        <Quote1 />
        <GridImages />
      </div>
    </InfoContext.Provider>
  );
}

export default App;
