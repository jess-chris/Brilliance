import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import './login.css'

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const demoLogin = async (e) => {
    e.preventDefault();
    const email = 'demo@aa.io'
    const password = 'password'
    await dispatch(login(email, password))
  }

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='large-container'>
      <div className='sign-in'>
        <h1> Sign In </h1>
      </div>
      <div className='input-container'>
        <form onSubmit={onLogin}>
          <div>
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
          <div>
            <label htmlFor='email'>Email </label>
            <div>
              <input
                name='email'
                type='text'
                value={email}
                onChange={updateEmail}
              />
            </div>

          </div>
          <div>
            <label htmlFor='password'>Password </label>
            <div>
              <input
                name='password'
                type='password'
                value={password}
                onChange={updatePassword}
              />
            </div>
          </div>
          <button type='submit'>Login</button>
          <button onClick={demoLogin}>Demo</button>

        </form>
      </div>
      <div className='sign-up-redirect'>
        <p>Don't have an account?
          <a href='/sign-up'> Sign up here.</a>
        </p>
      </div>


    </div>
  );
};

export default LoginForm;
