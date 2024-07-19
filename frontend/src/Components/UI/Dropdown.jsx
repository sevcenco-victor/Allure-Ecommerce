import { useState } from 'react';
import styles from './Dropdown.module.css';
import { IoIosArrowDown } from 'react-icons/io';

const Dropdown = ({ options, optionNames, defaultText, isCTA, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultText);

  const handleOptionChange = (index) => {
    setSelectedOption(options[index]);
    onChange(index);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdownContainer}>
      <div className={styles.dropdownButton} onClick={() => setIsOpen(!isOpen)}>
        <p style={{ color: 'var(--black)', fontSize: isCTA && '20px' }}>
          {selectedOption}
        </p>
        <IoIosArrowDown
          className={`${styles.dropdownIcon} ${isOpen ? styles.openIcon : ''}`}
        />
      </div>
      <div className={`${styles.dropdownList} ${isOpen ? styles.show : ''}`}>
        {options.map((el, index) => (
          <label
            key={index}
            className={styles.dropdownItem}
            onClick={() => handleOptionChange(index)}
          >
            <input
              type="radio"
              name={optionNames}
              value={index}
              checked={selectedOption === el}
              onChange={() => handleOptionChange(index)}
            />
            <p style={isCTA && { fontSize: '20px' }}>{el}</p>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
