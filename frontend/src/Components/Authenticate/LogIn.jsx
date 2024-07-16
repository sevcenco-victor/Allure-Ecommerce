import React from 'react';
import Button from '../UI/Button';
import { useNavigate } from 'react-router-dom';

const LogIn = ({ formSubmit }) => {
  const navigate = useNavigate();
  return (
    <div className="authenticate-wrapper">
      <h2>Log In</h2>
      <div className="form-wrapper">
        <h3>Log In To Your Account</h3>
        <form onSubmit={(e) => formSubmit(e)} className="authenticate-form">
          <input type="email" placeholder="Email" className="form-input" />
          <input
            type="password"
            placeholder="Password"
            className="form-input"
          />
          <Button text="Log In" category="primary" type="submit" />
        </form>
        <button className="btn-link">
          <p>Forgot Password?</p>
          <hr />
        </button>
      </div>
      <div className="authenticate-switch">
        <p>Don’t have an account yet?</p>
        <button className="btn-link" onClick={() => navigate('/signup')}>
          <p>Create Account</p>
          <hr />
        </button>
      </div>
    </div>
  );
};

export default LogIn;
