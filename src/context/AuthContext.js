import React, { createContext, useReducer, useContext } from "react";

const userObj = {
  name: "Jeeshan",
  username: "Jeeshan",
  password: "jeeshan123",
  id: 0,
};

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  user: null,
};

const authReducer = (state, action) => {
  switch (action.type) {
    default:
    case "USER_VALID":
      return { ...state, user: action.payload, isAuthenticated: true };
      return state;
  }
};

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const { isAuthenticated, isLoading, user } = state;

  function validateUser(username, password) {
    console.log(userObj);
    if (username === userObj.name && password === userObj.password) {
      console.log("ok");
      dispatch({ type: "USER_VALID", payload: userObj });
      return userObj;
    }
    return null;
  }

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        isAuthenticated,
        user,
        validateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
