import Wheel from "./components/Wheel";
import GridImages from "./components/GridImages";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Wheel />
      {/* <GridImages /> */}
    </div>
  );
}

export default App;
