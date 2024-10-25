import { createContext, useContext, useEffect, useReducer } from "react";
import { useAuthContext } from "./AuthContext";
import { v4 as uuidV4 } from "uuid";

const initialState = {
  breakingNews: [],
  searchResult: [],
};

const newsReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_BREAKING_NEWS":
      return { ...state, breakingNews: action.payload };

    case "UPDATE_SEARCH_RESULT":
      return { ...state, searchResult: action.payload };
    default:
      return state;
  }
};

const NewsContext = createContext();

export function NewsProvider({ children }) {
  const [{ breakingNews, searchResult }, dispatch] = useReducer(
    newsReducer,
    initialState
  );
  const { user } = useAuthContext();

  useEffect(() => {
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    async function fetchBreakingNews() {
      const sports = user.preferredSports;

      let allArticles = [];

      for (const { sport } of sports) {
        console.log(process.env.REACT_APP_API_KEY);
        try {
          const res = await fetch(
            `https://gnews.io/api/v4/top-headlines?category=sports&lang=en&max=100&apikey=${process.env.REACT_APP_API_KEY}&q=top news in ${sport}`
          );
          const data = await res.json();
          const updatedArticles = data.articles.map((article) => ({
            ...article,
            tags: [sport],
            id: uuidV4(),
          }));
          allArticles = [...allArticles, ...updatedArticles];
          await delay(1000);
        } catch (error) {
          console.error(`Failed to fetch news for ${sport}:`, error);
        }
      }

      dispatch({ type: "UPDATE_BREAKING_NEWS", payload: allArticles });
    }

    fetchBreakingNews();
  }, [user.preferredSports]);

  useEffect(() => {
    async function recommendNews() {
      const userPreferencesObject = user.preferredSports.reduce((acc, item) => {
        acc[item.sport.toLowerCase()] = item.timeSpent; // using lowercase for consistency in key names
        return acc;
      }, {});
      console.log(userPreferencesObject);
      const filterBreakingNews = {
        user_preferences: userPreferencesObject,
        articles: breakingNews,
      };
      console.log(filterBreakingNews);
      const res = await fetch(
        `https://jeeshanahmed585.pythonanywhere.com/recommend`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(filterBreakingNews),
        }
      );
      const data = await res.json();
      console.log(data.length);
    }
    // recommendNews();
  }, [breakingNews, user.preferredSports]);

  async function getSearchNews(query) {
    const res = await fetch(
      `https://gnews.io/api/v4/top-headlines?category=sports&lang=en&max=100&apikey=${process.env.REACT_APP_API_KEY}&q=top news in ${query}`
    );
    const data = await res.json();
    dispatch({ type: "UPDATE_SEARCH_RESULT", payload: data.articles });
  }

  return (
    <NewsContext.Provider value={{ breakingNews, searchResult, getSearchNews }}>
      {children}
    </NewsContext.Provider>
  );
}
export const useNewsContext = () => {
  return useContext(NewsContext);
};
