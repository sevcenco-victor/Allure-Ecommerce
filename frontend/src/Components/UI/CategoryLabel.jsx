import styles from './CategoryLabel.module.css';

const CategoryLabel = ({ id, isChecked, onChange, text }) => {
  return (
    <label className={`${styles.label} ${isChecked ? styles.selected : ''}`}>
      <input
        type="radio"
        name="category"
        id={id}
        checked={isChecked}
        onChange={onChange}
      />
      {text}
    </label>
  );
};

export default CategoryLabel;
