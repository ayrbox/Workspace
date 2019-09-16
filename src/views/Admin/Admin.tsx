import React, { FC, useContext } from 'react';
import { style } from 'typestyle';

import { RouteComponentProps } from 'react-router';
import UserContext from '../../UserContext';
import Calendar from '../../components/Calendar';
import CalendarHeader from '../../components/CalendarHeader';
import CalendarRow from '../../components/CalendarRow';
import { SAMPLE_STAFF } from '../../constants';

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
      <div className="container">
        <Calendar month={8} year={2019}>
          <CalendarHeader />
          <tbody>
            {SAMPLE_STAFF.map(({ code, name }) => (
              <CalendarRow
                key={code}
                staffCode={code}
                employeeName={name}
                merge={false}
              />
            ))}
          </tbody>
        </Calendar>
      </div>
    </div>
  );
};

export default AdminView;
