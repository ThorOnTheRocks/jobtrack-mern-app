import { useState } from 'react';
import { useAppContext } from '../context/appContext';
import { FaAlignLeft, FaUserCircle, FaCaretDown, FaHome } from 'react-icons/fa';
import Wrapper from '../assets/wrappers/Navbar';
import Logo from './Logo';

const Navbar = () => {
  const { user, toggleSidebar, toggleDropdown, showDropdown, logoutUser } = useAppContext();
  return (
    <Wrapper>
      <div className='nav-center'>
        <button type='button' className='toggle-btn' onClick={toggleSidebar}>
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className='logo-text'>Dashboard</h3>
        </div>
        <div className='btn-container'>
          <button type='button' className='btn' onClick={toggleDropdown}>
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>
          <div className={showDropdown ? 'dropdown show-dropdown' : 'dropdown'}>
            <button type='button' className='dropdown-btn' onClick={logoutUser}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
