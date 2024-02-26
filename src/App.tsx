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
  // const ref = useRef<HTMLDivElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollHandler = () => {
    scrollRef.current!.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <InfoContextProvider>
      <div className={`${styles.background} ${styles.app}`}>
        <Wheel ref={scrollRef} onScroll={scrollHandler} />
        <Quote ref={scrollRef} />
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
