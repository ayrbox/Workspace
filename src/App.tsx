import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { User } from 'firebase';

import { auth } from './repository';
import Schedule from './views/Schedule';
import Login from './views/Login';
import Admin from './views/Admin';
import UserContext from './UserContext';

const handleLogin = async (email: string, password: string): Promise<void> => {
  await auth().signInWithEmailAndPassword(email, password);
};

const handleLogout = async (): Promise<void> => {
  await auth().signOut();
};

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<User | null | undefined>();

  auth().onAuthStateChanged(user => {
    setCurrentUser(user);
  });

  return (
    <UserContext.Provider
      value={{
        login: handleLogin,
        logout: handleLogout,
        user: currentUser,
      }}>
      <Router>
        <>
          <Route exact path="/login" component={Login} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/" component={Schedule} />
        </>
      </Router>
    </UserContext.Provider>
  );
};

export default App;
