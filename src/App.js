import Wheel from "./components/Wheel";
import Quote1 from "./components/Quote1";
import GridImages from "./components/GridImages";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      {/* <Wheel /> */}
      <Quote1 />
      <GridImages />
    </div>
  );
}

export default App;
