import TableItem from "../TableItem/TableItem";
import styles from "./Table.module.css";

const Table = ({parcels} ) => {

  return (
    <div className={styles.container}>
      <div className={styles.headersContainer}>
        <h3>Device id</h3>
        <h3>Territory</h3>
        <h3>Traectory</h3>
        <h3>Details</h3>
        <h3>Date time</h3>
      </div>
      <div className={styles.itemContainer}>
        {
        parcels.map((x) => (
          <TableItem {...x} />
        ))}
      </div>
    </div>
  );
};

export default Table;
