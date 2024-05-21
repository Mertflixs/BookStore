import { useCallback, useEffect, useState, createContext } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  console.log("User Context");
  return (
    <UserContext.Provider 
		value={{ user, }}
	>
		{children}
	</UserContext.Provider>
  );
};
