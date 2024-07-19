import { useState } from 'react';
import './Authenticate.css';
import LogIn from '../Components/Authenticate/LogIn';
import CreateAccount from '../Components/Authenticate/CreateAccount';
import { useNavigate } from 'react-router-dom';
import useData from 'rsuite/esm/InputPicker/hooks/useData';

const Authenticate = ({ isLogin }) => {
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();

  const handleFormSubmit = (formData) => {
    setUserData(formData);
    console.log('Recieved Data', formData);
  };
  return (
    <div className="authenticate-container">
      <div className="authenticate-page">
        <div className="container">
          {isLogin ? (
            <LogIn formSubmit={handleFormSubmit} />
          ) : (
            <CreateAccount formSubmit={handleFormSubmit} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Authenticate;
