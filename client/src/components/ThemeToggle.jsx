import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import Wrapper from '../assets/wrappers/ThemeToggle';
import { useDashboardContext } from '../pages/DashboardLayout';

const ThemeToggle = () => {
  const { isDarktheme, toggleDarkTheme } = useDashboardContext();

  return <Wrapper onClick={toggleDarkTheme}>{isDarktheme ? <BsFillSunFill className='toggle-icon' /> : <BsFillMoonFill className='toggle-icon' />}</Wrapper>;
};
export default ThemeToggle;
