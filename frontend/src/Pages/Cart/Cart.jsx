import { useState } from 'react';
import Breadcrumbs from '../../Components/UI/Breadcrumbs';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../../Components/UI/Button';
import Overview from './Overview';
import ShippingDetails from './ShippingDetails';
import Payment from './Payment';
import cartItems from '../../data/cartItems';
import './Cart.css';

const Cart = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentStep, setCurrentStep] = useState('overview');
  const steps = ['overview', 'shipping', 'payment', 'confirmation'];
  const getCurrentStepIndex = () => steps.indexOf(currentStep);

  const nextStep = () => {
    const currentIndex = getCurrentStepIndex();
    if (currentIndex < steps.length - 1) {
      if (steps[currentIndex + 1] === 'confirmation') {
        navigate('confirmation');
      }
      setCurrentStep(steps[currentIndex + 1]);
    }
  };
  const GetCurrentCartStepPage = () => {
    switch (currentStep) {
      case 'overview':
        return <Overview />;
      case 'shipping':
        return <ShippingDetails />;
      case 'payment':
        return <Payment />;
      default:
        return null;
    }
  };

  return (
    <div className="cart-page">
      <div className="container">
        <Breadcrumbs />
        <div className="progress-bar"></div>
        <div className="cart-content">
          <div className="cart-steps">{GetCurrentCartStepPage()}</div>
          <div className="cart-summary">
            <div className="cart-discount">
              <h2>Do You Have a Discount Code?</h2>
              <form onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Enter the dicount code here" />
                <Button
                  text="Apply Your Coupon"
                  category="primary"
                  type="submit"
                />
              </form>
            </div>
            <div className="cart-total">
              <div className="total-heading">
                <h2>Total Cart</h2>
                <p>[ {cartItems.length} ITEMS ]</p>
              </div>
              <div className="total-details">
                <div className="detail-item">
                  <p>Subtotal</p>
                  <h5>$345</h5>
                </div>
                <div className="detail-item">
                  <p>Subtotal</p>
                  <h5>$345</h5>
                </div>
                <div className="detail-item">
                  <p>Subtotal</p>
                  <h5>$345</h5>
                </div>
              </div>
              <div className="total-actions">
                <Button
                  text={`Continue to ${steps[getCurrentStepIndex() + 1]}`}
                  category="primary"
                  onClick={nextStep}
                />
                <Button
                  text="Back to Store"
                  onClick={() => navigate('/shop')}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
