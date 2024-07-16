const ColorRadio = ({ color, isChecked = true, onChange }) => {
  const customStyle = {
    appearance: 'none',
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    cursor: 'pointer',
    backgroundColor: color,
    border: isChecked
      ? `2px double ${
          color.toLowerCase() == 'black' || color === '#000000'
            ? 'var(--gray)'
            : 'black'
        }`
      : `2px solid var(--light-gray)`,
  };
  return (
    <input
      type="radio"
      name="color"
      style={customStyle}
      checked={isChecked}
      onChange={onChange}
    />
  );
};

export default ColorRadio;
