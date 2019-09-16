import React, { FC, useContext } from 'react';
import { style } from 'typestyle';

import UserContext from '../../UserContext';
import { RouteComponentProps } from 'react-router';

type AdminViewProps = RouteComponentProps;

const masthead = style({
  background: '#000',
  color: '#fff',
  padding: '32px',
});

const mastheadInner = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignContent: 'center',
  background: '#000',
  color: '#fff',
  padding: '32px',
  margin: 'auto',
});

const AdminView: FC<AdminViewProps> = ({ history }: AdminViewProps) => {
  const { user, logout } = useContext(UserContext);

  if (!user) {
    history.push('/login');
    return null;
  }

  return (

    <div>
      <header className={`${masthead} mb-auto`}>
        <div className={mastheadInner}>
          <h3 className="masthead-brand">Workspace</h3>
          <nav className="nav nav-masthead justify-content-center">
            <div className="nav-link">{user.email}</div>
            <a className="nav-link" onClick={logout}>Logout</a>
          </nav>
        </div>
      </header>
      <h1>Admin View: {user.email}</h1>
      <pre>
        {JSON.stringify(user, null, 2)}
        {JSON.stringify(history, null, 2)}
      </pre>
      <button type="button" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default AdminView;
