import Wheel from "./components/Wheel";
import Background from "./components/Background";
import Quote1 from "./components/Quote1";
import GridImages from "./components/GridImages.tsx";
import Video from "./components/Video.tsx";
import MapView from "./components/MapView.tsx";
import Footer from "./components/Footer";
import styles from "./App.module.scss";
import { useRef } from "react";
import "./fonts/kathy-regular-webfont.woff2";
import InfoContextProvider from "./store/info-context.tsx";

function App() {
  const resultRef = useRef(null);

  return (
    <InfoContextProvider>
      <div className={styles.app}>
        <Background />
        <Wheel resultRef={resultRef} />
        <Quote1 ref={resultRef} />
        <GridImages />
        <Video />
        <MapView />
        <Footer />
      </div>
    </InfoContextProvider>
  );
}

export default App;
