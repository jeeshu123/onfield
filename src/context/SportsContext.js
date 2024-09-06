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
  fixtureData: [],
  standingsData: null,
  userFavourite: sportData,
  selectedData: {},
  isLoading: false,
};

const sportsReducer = (state, action) => {
  switch (action.type) {
    case "GET_DATA":
      return { ...state, fixtureData: [], isLoading: true };
    case "LOAD_DATA":
      return {
        ...state,
        fixtureData: action.payload.data,
        selectedData: action.payload.selectedData,
        isLoading: false,
      };
    case "GET_STANDINGS_DATA":
      return { ...state, standingsData: null };
    case "LOAD_STANDINGS_DATA":
      return { ...state, standingsData: action.payload.data };
    case "UPDATE_SELECTED":
      return { ...state, selectedData: action.payload };
    default:
      return state;
  }
};

const SportsContext = createContext();

export const SportsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(sportsReducer, initialState);

  const { fixtureData, userFavourite, isLoading, selectedData, standingsData } =
    state;

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
        `https://sportsplus-server.vercel.app/api/Formula1/racefixtures?season=2023`
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

  async function fetchFootballStandings(selectedData) {
    try {
      dispatch({ type: "GET_STANDINGS_DATA" });
      console.log(selectedData);
      const { id } = selectedData;
      const res = await fetch(
        `https://sportsplus-server.vercel.app/api/football/standings?league=${id}&season=2024`
      );
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();
      dispatch({
        type: "LOAD_STANDINGS_DATA",
        payload: { data, selectedData },
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  async function fetchFormula1Standings(selectedData) {
    try {
      dispatch({ type: "GET_STANDINGS_DATA" });
      console.log(selectedData);
      const { id } = selectedData;
      const res = await fetch(
        `https://sportsplus-server.vercel.app/api/formula1/driverrankings`
      );
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();
      dispatch({
        type: "LOAD_STANDINGS_DATA",
        payload: { data, selectedData },
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  function updateFootBallData(data) {
    fetchFootballFixtures(data);
    // fetchFootballStandings(data);
  }

  useEffect(() => {
    userFavourite.at(0).category === "Football" &&
      updateFootBallData(userFavourite.at(0));
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
        fixtureData,
        userFavourite,
        isLoading,
        selectedData,
        standingsData,
        updateSelectedData,
        fetchFootballFixtures,
        fetchFormula1Fixtures,
        fetchFootballStandings,
        fetchFormula1Standings,
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
