import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import './signup.css'

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data)
      }
    }
    return setErrors(['Confirm Password field must be the same as the Password field'])
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='sign-up-large-container'>
      <div className='big-text'>
        <h1>SIGN UP</h1>
        <h2>and show off your brilliance</h2>
      </div>
      <div className='sign-up-form-container'>
        <form onSubmit={onSignUp}>
          <div>
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>

          <label>Username</label>
          <div>
            <input
              type='text'
              name='username'
              onChange={updateUsername}
              value={username}
            ></input>
          </div>
          <div>
            <label>Email</label>
            <div>
              <input
                type='text'
                name='email'
                onChange={updateEmail}
                value={email}
              ></input>
            </div>
          </div>
          <div>
            <label>Password</label>
            <div>
              <input
                type='password'
                name='password'
                onChange={updatePassword}
                value={password}
              ></input>
            </div>
          </div>
          <div>
            <label>Repeat Password</label>
            <div>
              <input
                type='password'
                name='repeat_password'
                onChange={updateRepeatPassword}
                value={repeatPassword}
                required={true}
              ></input>
            </div>
          </div>
          <button type='submit'>Create Account</button>

        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
