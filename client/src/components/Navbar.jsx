import { FaAlignLeft } from 'react-icons/fa';
import Wrapper from '../assets/wrappers/Navbar';
import { useDashboardContext } from '../pages/DashboardLayout';
import Logo from './logo';
import LogoutContainer from './LogoutContainer';
import ThemeToggle from './ThemeToggle';
const Navbar = () => {
  const { toggleSidebar } = useDashboardContext();
  return (
    <Wrapper>
      <div className='nav-center'>
        <button type='button' className='toggle-btn' onClick={toggleSidebar}>
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h4 className='logo-text'>dashboard</h4>
        </div>
        <div className='btn-container'>
          <ThemeToggle />
        </div>
        <div className='btn-container'>
          <LogoutContainer />
        </div>
      </div>
    </Wrapper>
  );
};
export default Navbar;
