import Wheel from "./components/Wheel.tsx";
import Quote from "./components/Quote.jsx";
import GridImages from "./components/GridImages.tsx";
import Video from "./components/Video.tsx";
import MapView from "./components/MapView.tsx";
import Footer from "./components/Footer";
import styles from "./App.module.scss";
import InfoContextProvider from "./store/info-context.tsx";
import { useRef } from "react";

function App() {
  const resultRef = useRef<HTMLDivElement | null>(null);

  const scrollHandler = () => {
    resultRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <InfoContextProvider>
      <div className={`${styles.background} ${styles.app}`}>
        <Wheel onScroll={scrollHandler} />
        <Quote ref={resultRef} />
        <GridImages />
        <Video />
        <MapView />
        <Footer />
      </div>
    </InfoContextProvider>
  );
}

export default App;

// "build": "tsc && vite build",
