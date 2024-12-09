import React, { useContext, useState, createContext } from "react";

export const Appcontext = createContext();
export const Appprovider = (props) => {
  const [islogin, setIsLogin] = useState(false);
  const [user, setUser] = useState("");
  const [fromcard, setfromcard] = useState(false);
  return (
    <Appcontext.Provider
      value={{
        islogin,
        setIsLogin,
        user,
        setUser,
        fromcard,
        setfromcard,
      }}
    >
      {props.children}
    </Appcontext.Provider>
  );
};
