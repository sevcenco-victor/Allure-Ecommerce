const ColorRadio = ({ color, isChecked, onChange, defaultChecked = false }) => {
  const customStyle = {
    appearance: 'none',
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    cursor: 'pointer',
    backgroundColor: color,
    border: isChecked
      ? `1.8px double ${
          color.toLowerCase() == 'black' || color === '#000000'
            ? 'var(--gray)'
            : 'black'
        }`
      : `1.8px solid var(--light-gray)`,
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
