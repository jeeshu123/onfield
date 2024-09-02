import React, { createContext, useReducer, useContext, useEffect } from "react";

const sportData = [
  { name: "Super Lig", id: 203 },
  { name: "Premier League", id: 39 },
  // { name: "", id: 0 },
];

const initialState = {
  data: [],
  userFavourite: sportData,
  selectedData: {},
  sportCategory: "",
};

const sportsReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_DATA":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

const SportsContext = createContext();

export const SportsProvider = ({ children }) => {
  const [{ data, userFavourite }, dispatch] = useReducer(
    sportsReducer,
    initialState
  );

  async function fetchScores(id, season) {
    try {
      const res = await fetch(
        `https://sportsplus-server.vercel.app/api/football/fixtures?season=2024&league=${id}`
      );
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();
      dispatch({ type: "LOAD_DATA", payload: data });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchScores(userFavourite.at(0).id);
  }, []);

  function getData(id) {
    fetchScores(id);
  }

  return (
    <SportsContext.Provider value={{ data, userFavourite, getData, dispatch }}>
      {children}
    </SportsContext.Provider>
  );
};

export const useSportsContext = () => {
  return useContext(SportsContext);
};
