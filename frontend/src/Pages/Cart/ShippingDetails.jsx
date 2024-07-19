import { useState } from 'react';
import { GoHome } from 'react-icons/go';
import { MdOutlineStorefront } from 'react-icons/md';
import { Link } from 'react-router-dom';
import './ShippingDetails.css';
import Dropdown from '../../Components/UI/Dropdown';
import storeAddresses from '../../data/storeAddresses';

const ShippingDetails = () => {
  const [isDeliveryHome, setIsDeliveryHome] = useState(false);
  const [isTemporaryAddress, setIsTemporaryAddress] = useState(false);

  const [storeAddress, setStoreAddress] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [address, setAddress] = useState();
  const [phoneNumber, setPhoneNumber] = useState();

  const homeDelivPrice = 8;

  const handleShippingTypeChange = () => {
    setIsDeliveryHome(!isDeliveryHome);
  };
  const handleAddressChange = () => {
    setIsTemporaryAddress(!isTemporaryAddress);
  };

  const renderHomeDelivDetails = () => {
    return (
      <>
        <div className="shipping-wrapper">
          <h4>Shipping Address</h4>
          <div className="address">
            <label>
              <input
                type="radio"
                name="tmpAddress"
                checked={!isTemporaryAddress}
                onChange={handleAddressChange}
              />
              <p>Use current: </p>
            </label>
            <label>
              <input
                type="radio"
                name="tmpAddress"
                checked={isTemporaryAddress}
                onChange={handleAddressChange}
              />
              <p>Use new temporary address</p>
            </label>
          </div>
          {isTemporaryAddress && (
            <div className="temp-address">
              <h4>Fill in the Information to Deliver Your Order</h4>
              <form className="temp-address-form">
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </form>
            </div>
          )}
        </div>
      </>
    );
  };
  const renderPickUpStoreDelivDetails = () => {
    return (
      <div className="shipping-wrapper">
        <h4>Select the Store:</h4>
        <div className="store-address-dropdown">
          <Dropdown
            options={storeAddresses.map(
              (address) =>
                `${address.city} ${address.street} ${address.postalCode}`
            )}
            optionNames="storeAddresses"
            defaultText="Select Store Address"
            onChange={(index) => {
              setStoreAddress(index);
            }}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="shipping-page">
      <div className="shipping-types">
        <label className={`${!isDeliveryHome ? 'selectedType' : ''}`}>
          <input
            type="radio"
            name="shippingType"
            checked={!isDeliveryHome}
            onChange={handleShippingTypeChange}
          />
          <div className="shipping-card">
            <MdOutlineStorefront className="shipping-card-icon" />
            <div className="shipping-card-content">
              <h5>Picked Up at the Store</h5>
              <p>1-2 Days greener, faster and easier</p>
              <small>
                <b>Free</b>
              </small>
            </div>
          </div>
        </label>
        <label className={`${isDeliveryHome ? 'selectedType' : ''}`}>
          <input
            type="radio"
            name="shippingType"
            checked={isDeliveryHome}
            onChange={handleShippingTypeChange}
          />
          <div className="shipping-card">
            <GoHome className="shipping-card-icon" />
            <div className="shipping-card-content">
              <h5>Home Delivery</h5>
              <p>Delivery in 3-5 business days</p>
              <small>
                <b>${homeDelivPrice}</b>
              </small>
            </div>
          </div>
        </label>
      </div>
      <div className="shipping-data">
        {isDeliveryHome
          ? renderHomeDelivDetails()
          : renderPickUpStoreDelivDetails()}
      </div>
      <div className="shipping-wrapper">
        <h5>
          We’ll contact you via your phone number for any delivery issues.
        </h5>
        <div className="shipping-terms">
          <label>
            <input type="checkbox" />
            <p>
              I accept the{' '}
              <Link to="/term-and-conditions">terms and conditions</Link> and
              agree to the <Link to="/privacy-policy"> privacy policy</Link>.
            </p>
          </label>
          {isTemporaryAddress && (
            <label>
              <input type="checkbox" />
              <p>Save this address for future purchases.</p>
            </label>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShippingDetails;
