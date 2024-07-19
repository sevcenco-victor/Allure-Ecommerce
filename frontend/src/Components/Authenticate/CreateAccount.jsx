import { Link, Navigate, useNavigate } from 'react-router-dom';
import Button from '../UI/Button';
import { useState } from 'react';

const CreateAccount = ({ formSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [acceptsTerms, setAcceptsTerms] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    //should be more detailed
    const acceptCondition = acceptsTerms && name != '' && password != '';
    if (acceptCondition) {
      formSubmit({ name, email, password });
    } else {
      console.log('Please accept terms');
    }
  };
  const navigate = useNavigate();
  return (
    <div className="authenticate-wrapper">
      <h2>Create Account</h2>
      <div className="form-wrapper">
        <h3>Create Your Account</h3>
        <form
          onSubmit={(e) => handleFormSubmit(e)}
          className="authenticate-form"
        >
          <input
            type="text"
            placeholder="Name"
            className="form-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
          <label className="form-trusts">
            <input
              type="checkbox"
              value={acceptsTerms}
              onChange={() => setAcceptsTerms(!acceptsTerms)}
            />
            <p>
              I agree to all Term, and
              <Link to="../privacy-policy"> Privacy Policy </Link>and Fees.
            </p>
          </label>
          <Button text="Sign Up" category="primary" type="submit" />
        </form>
      </div>
      <div className="authenticate-switch">
        <p>Already have an account?</p>
        <button className="btn-link" onClick={() => navigate('/login')}>
          <p>Log In</p>
          <hr />
        </button>
      </div>
    </div>
  );
};

export default CreateAccount;
