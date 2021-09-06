import { createContext, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = (props) => {
  const [state, setState] = useState("hello from state");

  return (
    <AuthContext.Provider value={{ state, setState }}>
      {props.children}
    </AuthContext.Provider>
  );
};
