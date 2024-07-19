import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Components/Footer';
import NavBar from '../Components/NavBar';

const MainLayout = () => {
  const location = useLocation();

  const isContentUnderNavBar =
    location.pathname !== '/' &&
    location.pathname !== '/login' &&
    location.pathname !== '/signup' &&
    location.pathname !== '/cart/confirmation';

  return (
    <>
      <NavBar />
      <div className={`${isContentUnderNavBar ? 'navTopMargin' : ''}`}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
