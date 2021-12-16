import Header from "./components/Header/Header";
import styles from "./App.module.css";
import { useEffect, useState } from "react";
import { getParcels } from "./API/API";
import Table from "./components/Table/Table";

function App() {
  const [parcels, setParcels] = useState([]);

  useEffect(() => {
      getParcels().then((data) => {
        setParcels(data);
      });}, []);

  return (
    <div className={styles.container}>
      <Header/>
        <Table parcels={parcels} />
    </div>
  );
}

export default App;
