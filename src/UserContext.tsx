import { createContext } from 'react';
import { User } from 'firebase';

interface UserContextProps {
  user?: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
}

export default createContext<UserContextProps>({
  login: () => undefined,
  logout: () => undefined,
});
