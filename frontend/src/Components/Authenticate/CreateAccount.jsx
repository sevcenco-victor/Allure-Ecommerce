import { Link, Navigate, useNavigate } from 'react-router-dom';
import Button from '../UI/Button';

const CreateAccount = ({ formSubmit }) => {
  const navigate = useNavigate();
  return (
    <div className="authenticate-wrapper">
      <h2>Create Account</h2>
      <div className="form-wrapper">
        <h3>Create Your Account</h3>
        <form onSubmit={(e) => formSubmit(e)} className="authenticate-form">
          <input type="text" placeholder="Name" className="form-input" />
          <input type="email" placeholder="Email" className="form-input" />
          <input
            type="password"
            placeholder="Password"
            className="form-input"
          />
          <label className="form-trusts">
            <input type="checkbox" />
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
