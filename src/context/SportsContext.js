import React, { createContext, useReducer, useContext, useEffect } from "react";

// const FOOTBALL_FIXTURES = "";

const sportData = [
  { name: "Super Lig", id: 203, category: "Football" },
  { name: "Premier League", id: 39, category: "Football" },
  { name: "La Liga", id: 140, category: "Football" },
  { name: "Bundesliga", id: 78, category: "Football" },
  { name: "Formula 1", id: 78, category: "Formula1" },
];

const initialState = {
  data: [],
  userFavourite: sportData,
  selectedData: {},
  isLoading: false,
};

const sportsReducer = (state, action) => {
  switch (action.type) {
    case "GET_DATA":
      return { ...state, data: [], isLoading: true };
    case "LOAD_DATA":
      return {
        ...state,
        data: action.payload.data,
        selectedData: action.payload.selectedData,
        isLoading: false,
      };
    case "UPDATE_SELECTED":
      return { ...state, selectedData: action.payload };
    default:
      return state;
  }
};

const SportsContext = createContext();

export const SportsProvider = ({ children }) => {
  const [{ data, userFavourite, isLoading, selectedData }, dispatch] =
    useReducer(sportsReducer, initialState);

  async function fetchFootballFixtures(selectedData) {
    try {
      const { id } = selectedData;
      dispatch({ type: "GET_DATA" });
      const res = await fetch(
        `https://sportsplus-server.vercel.app/api/football/fixtures?season=2024&league=${id}`
      );
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();
      dispatch({ type: "LOAD_DATA", payload: { data, selectedData } });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  async function fetchFormula1Fixtures(selectedData) {
    try {
      dispatch({ type: "GET_DATA" });
      const res = await fetch(
        `https://sportsplus-server.vercel.app/api/Formula1/racefixtures`
      );
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();
      dispatch({ type: "LOAD_DATA", payload: { data, selectedData } });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    userFavourite.at(0).category === "Football" &&
      fetchFootballFixtures(userFavourite.at(0));
  }, [userFavourite]);

  function getData(selectedData) {
    if (selectedData.category === "Football")
      fetchFootballFixtures(selectedData);
    if (selectedData.category === "Formula1")
      fetchFormula1Fixtures(selectedData);
  }

  function updateSelectedData(selectedData) {
    dispatch({ type: "UPDATE_SELECTED", payload: selectedData });
  }

  return (
    <SportsContext.Provider
      value={{
        data,
        userFavourite,
        isLoading,
        selectedData,
        updateSelectedData,
        getData,
        dispatch,
      }}
    >
      {children}
    </SportsContext.Provider>
  );
};

export const useSportsContext = () => {
  return useContext(SportsContext);
};
