import React, { useContext, useState, FormEvent, FC } from 'react';
import UserContext from '../../UserContext';
import { RouteComponentProps } from 'react-router';

type LoginProps = RouteComponentProps;

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
    <div>
      <h1>Login Component</h1>
      <form onSubmit={handleLogin}>
        <input type="text" name="email" placeholder="Email" value={userCredential.email} onChange={handleChange} />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={userCredential.password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
