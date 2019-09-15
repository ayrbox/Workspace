import React, { useContext, useState, FormEvent, FC } from 'react';
import { style } from 'typestyle';

import UserContext from '../../UserContext';
import { RouteComponentProps } from 'react-router';

type LoginProps = RouteComponentProps;

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

const Login: FC<LoginProps> = ({ history }: LoginProps) => {
  const { user, login } = useContext(UserContext);

  // Redirect to admin if user is already loggedn in.
  if (user) {
    history.push('/admin');
  }

  const [userCredential, setUserCredential] = useState({
    email: 'admin@workspace.com',
    password: 'password',
  });

  const handleLogin = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const { email, password } = userCredential;

    try {
      await login(email, password);
      history.push('/admin');
    } catch (err) {
      console.error('Error Login', err);
    }
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
        <label htmlFor="inputEmail" className="sr-only">
          Email
        </label>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={userCredential.email}
          onChange={handleChange}
          className="form-control"
        />
        <label htmlFor="inputPassword" className="sr-only">
          Password
        </label>
        <input
          type="password"
          name="password"
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
