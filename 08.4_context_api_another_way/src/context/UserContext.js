import { createContext, useContext } from 'react';

export const UserContext = createContext({
  user: '',
  setUser: () => {},
});

export const UserContextProvider = UserContext.Provider;

export default function useUser() {
  return useContext(UserContext);
}
