import React, { FC, useContext } from 'react';

import UserContext from '../../UserContext';
import { RouteComponentProps } from 'react-router';

type AdminViewProps = RouteComponentProps;

const AdminView: FC<AdminViewProps> = ({ history }: AdminViewProps) => {
  const { user, logout } = useContext(UserContext);

  if (!user) {
    history.push('/login');
    return null;
  }

  return (
    <div>
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
