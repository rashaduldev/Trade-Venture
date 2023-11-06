import styles from "./Section.module.css";
const SectionTitle = ({ title }) => {
  return (
    <div className={styles.heading}>
      <h2>{title}</h2>
    </div>
  );
};

export default SectionTitle;
