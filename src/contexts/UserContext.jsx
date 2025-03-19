import { createContext, useState } from 'react';

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  const isUserLoggedIn = user?.id ? true : false;

  const logOut = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider
      value={{ user: user, setUser, isUserLoggedIn, logOut }}
    >
      {children}
    </UserContext.Provider>
  );
}
