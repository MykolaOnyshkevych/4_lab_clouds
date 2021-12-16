import styles from "./TableItem.module.css";

const TableItem = ({
  deviceId,
  territory,
  traectory,
  details,
  stringdate
}) => {
  return (
    <div className={styles.container}>
      <h4>{deviceId}</h4>
      <h4>{territory}</h4>
      <h4>{traectory}</h4>
      <h4>{details}</h4>
      <h4>{stringdate}</h4>
    </div>
  );
};

export default TableItem;
