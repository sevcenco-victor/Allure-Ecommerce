import { useState } from 'react';
import Slider from 'rc-slider';
import './PriceSlider.css';
const Range = Slider.Range;

const PriceSlider = ({ min, max, onPriceChange }) => {
  const [priceRange, setPriceRange] = useState([min, max]);

  const handleChange = (value) => {
    setPriceRange(value);
    onPriceChange(value);
  };
  return (
    <div style={{ width: '300px', margin: '0 auto' }}>
      <Range
        min={min}
        max={max}
        defaultValue={[min, max]}
        value={priceRange}
        onChange={handleChange}
        // handleRender={(node, handleProps) => (
        //   <div className="tooltip-wrapper">
        //     {node}
        //     <div className="tooltip">${handleProps.value}</div>
        //   </div>
        // )}
      />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span>${priceRange[0]}</span>
        <span>${priceRange[1]}</span>
      </div>
    </div>
  );
};

export default PriceSlider;
