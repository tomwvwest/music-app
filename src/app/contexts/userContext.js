"use client";

import { createContext, useContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    user_id: 1,
    username: "tomwest",
    image_url: "https://upload.wikimedia.org/wikipedia/en/4/46/Waluigi.png",
    library: [],
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
