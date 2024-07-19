import { PiCreditCard } from 'react-icons/pi';
import { PiPaypalLogoLight } from 'react-icons/pi';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Payment.css';

const Payment = () => {
  const [isCardPaymentMethod, setIsCardPaymentMethod] = useState();

  return (
    <div>
      <h2 className="cart-page-title">Payment Process</h2>
      <div className="payment-wrapper d-flex-col gap-b">
        <div className="select-payment">
          <h5>Select paymnet method:</h5>
          <div className="payment-types">
            <label>
              <input
                type="radio"
                name="payment-method"
                value={isCardPaymentMethod}
                onChange={() => setIsCardPaymentMethod(!isCardPaymentMethod)}
              />
              <PiCreditCard
                className={`payment-icon ${
                  isCardPaymentMethod ? 'selected' : ''
                }`}
              />
            </label>
            <label>
              <input
                type="radio"
                name="payment-method"
                value={isCardPaymentMethod}
                onChange={() => setIsCardPaymentMethod(!isCardPaymentMethod)}
              />
              <PiPaypalLogoLight
                className={`payment-icon ${
                  isCardPaymentMethod ? '' : 'selected'
                }`}
              />
            </label>
          </div>
        </div>

        {isCardPaymentMethod ? (
          <div className="credi-card-payment d-flex-col gap-m">
            <p className="d-flex-row gap-8px">
              <PiCreditCard /> Pay with Credit or Debit Card
            </p>
            <form className="credit-card-form">
              <input
                type="text"
                name="crdNum"
                id="cardNum"
                placeholder="Card Number"
              />
              <input
                type="text"
                name="crdHolder"
                placeholder="Cardholder Name"
              />
              <div className="d-flex-row" style={{ gap: '10px' }}>
                <input
                  type="date"
                  name="crdExp"
                  placeholder="Expiration Date"
                />
                <input type="text" name="crdCVC" placeholder="CVC" />
              </div>
              <input type="text" name="userEmail" placeholder="Email" />
            </form>
            <div className="payment-terms d-flex-col gap-s">
              <label className="d-flex-row gap-s">
                <input type="checkbox" />
                <p>Save as my preferred Credit Card</p>
              </label>
              <label className="d-flex-row gap-s">
                <input type="checkbox" />
                <p>
                  I have read and accept the{' '}
                  <Link to="/purchase-conditions">Purchase Conditions</Link> and
                  the basic information about the{' '}
                  <Link to="/privacy-policy">Privacy Policy</Link> .
                </p>
              </label>
            </div>
          </div>
        ) : (
          <h3>Not Available Yet</h3>
        )}
        <div className="payment-terms"></div>
      </div>
    </div>
  );
};

export default Payment;
