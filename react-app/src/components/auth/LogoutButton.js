import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';

const buttonStyle = {
  backgroundColor: '#262626',
  color: '#ccc',
  border: '1px solid #444',
  display: 'inline-block',
  fontFamily: 'Kanit, sans-serif',
  position: 'relative',
  borderRadius: '2px',
  padding: '5px 9px',
  margin: '3px 4px 5px 0',
}
const LogoutButton = () => {
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await dispatch(logout());
  };

  return <button style={buttonStyle} onClick={onLogout}> <i className="fa-solid fa-arrow-right-from-bracket"></i> Log Out </button>;
};

export default LogoutButton;
