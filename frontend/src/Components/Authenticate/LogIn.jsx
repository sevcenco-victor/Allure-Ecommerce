import React, { useState } from 'react';
import Button from '../UI/Button';
import { useNavigate } from 'react-router-dom';

const LogIn = ({ formSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    formSubmit({ email, password });
  };
  return (
    <div className="authenticate-wrapper">
      <h2>Log In</h2>
      <div className="form-wrapper">
        <h3>Log In To Your Account</h3>
        <form
          onSubmit={(e) => handleFormSubmit(e)}
          className="authenticate-form"
        >
          <input
            type="email"
            placeholder="Email"
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
