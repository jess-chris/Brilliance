import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector} from 'react-redux';
import LogoutButton from './auth/LogoutButton';

import './NavBar.css'



const NavBar = () => {

  const sessionUser = useSelector(state => state.session.user)

  return (
    <div className='navContainer'>
      <div className='navLinks'>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
          <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
          <NavLink to='/' className='navBarTitle'>
            BRILLIANCE
          </NavLink>
          <NavLink to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink>
          <NavLink to='/tracks' exact={true} activeClassName='active'>
            Tracks
          </NavLink>
          <NavLink to='/tracks/new' exact={true} activeClassName='active'>
            Upload Track
          </NavLink> 
          <LogoutButton />
          </div>
          <div className='footer'>
          </div>
      </div>
      
  );
}

export default NavBar;
