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
  errorMessage: "",
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "CREATE_USER":
      return { ...state, isLoading: true };
    case "CREATE_USER_DONE":
      return { ...state, isLoading: false };
    case "CHECK_USER":
      return { ...state, isLoading: true };

    case "USER_VALID":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        errorMessage: "",
        isLoading: false,
      };
    case "USER_NOT_FOUND":
      return {
        ...state,
        errorMessage: "Email or Password Incorrect",
        isLoading: false,
      };
    case "USER_LOGOUT":
      return { ...state, user: null, isAuthenticated: false, errorMessage: "" };
    default:
      return state;
  }
};

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const { isAuthenticated, isLoading, user, errorMessage } = state;

  async function validateUser(user) {
    try {
      dispatch({ type: "CHECK_USER" });
      const userCredentials = { email: user.username, password: user.password };

      const response = await fetch(
        "https://sportsplus-server.vercel.app/api/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userCredentials),
        }
      );
      // const data = await response.json();
      // console.log(data);

      if (response.ok) {
        const result = await response.json();
        dispatch({ type: "USER_VALID", payload: result.data.user });
        return result;
      } else {
        console.error("User not Found:", response.statusText);
      }
    } catch (error) {
      console.error("Error occurred:", error);
    } finally {
      dispatch({ type: "USER_NOT_FOUND" });
    }

    // console.log(userObj);
    // if (username === userObj.name && password === userObj.password) {
    //   console.log("ok");
    //   dispatch({ type: "USER_VALID", payload: userObj });
    //   return userObj;
    // }
    // dispatch({ type: "USER_NOT_FOUND" });
  }

  async function createUser(formData) {
    try {
      dispatch({ type: "CREATE_USER" });
      const response = await fetch(
        "https://sportsplus-server.vercel.app/api/users/signUp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      // const data = await response.json();
      // console.log(data);

      if (response.ok) {
        const result = await response.json();
        return result;
      } else {
        console.error("Failed to create user:", response.statusText);
      }
    } catch (error) {
      console.error("Error occurred:", error);
    } finally {
      dispatch({ type: "CREATE_USER_DONE" });
    }
  }

  function logoutUser() {
    dispatch({ type: "USER_LOGOUT" });
  }

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        isAuthenticated,
        user,
        errorMessage,
        validateUser,
        createUser,
        logoutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
