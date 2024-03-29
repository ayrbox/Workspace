import React, { useContext, useState, FormEvent, FC } from 'react';
import { style } from 'typestyle';

import UserContext from '../../UserContext';
import { Redirect } from 'react-router';

const formSignin = style({
  width: '100%',
  maxWidth: '330px',
  padding: '15px',
  margin: 'auto',
});

const formContainer = style({
  border: '1px solid red',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  textAlign: 'center',
});

const Login: FC = () => {
  const { user, login } = useContext(UserContext);

  const [userCredential, setUserCredential] = useState({
    email: '',
    password: '',
  });

  // Redirect to admin if user is already loggedn in.
  if (user) {
    return <Redirect to="/admin" />;
  }

  const handleLogin = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const { email, password } = userCredential;
    await login(email, password);
  };

  const handleChange = (e: FormEvent<HTMLInputElement>): void => {
    e.preventDefault();
    const { name, value } = e.currentTarget;
    setUserCredential({
      ...userCredential,
      [name]: value,
    });
  };

  return (
    <div className={formContainer}>
      <form className={formSignin} onSubmit={handleLogin}>
        <h1 className="h3 mb-3 font-weight-normal">Login</h1>
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={userCredential.email}
          onChange={handleChange}
          className="form-control"
          id="email"
          />
        <label htmlFor="password" className="sr-only">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={userCredential.password}
          onChange={handleChange}
          className="form-control"
          />
        <button type="submit" className="btn btn-outline-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
