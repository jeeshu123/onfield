import { createContext, useContext, useEffect, useReducer } from "react";
import { useAuthContext } from "./AuthContext";
import { v4 as uuidV4 } from "uuid";

const initialState = {
  breakingNews: [],
};

const newsReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_BREAKING_NEWS":
      return { ...state, breakingNews: action.payload };
    default:
      return state;
  }
};

const NewsContext = createContext();

export function NewsProvider({ children }) {
  const [{ breakingNews }, dispatch] = useReducer(newsReducer, initialState);
  const { user } = useAuthContext();

  useEffect(() => {
    // async function fetchBreakingNews() {
    //   console.log("AAA");
    //   const res = await fetch(
    //     `https://gnews.io/api/v4/top-headlines?category=sports&lang=en&max=100&apikey=b4d34c965938937e1c2c5dc6e9fb385f&q=football`
    //   );
    //   console.log("BBB");
    //   const data = await res.json();
    //   console.log(data);
    //   dispatch({ type: "UPDATE_BREAKING_NEWS", payload: data.articles });
    // }
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    async function fetchBreakingNews() {
      const sports = user.preferredSports;

      let allArticles = [];

      for (const { sport } of sports) {
        console.log(sport);
        try {
          const res = await fetch(
            `https://gnews.io/api/v4/top-headlines?category=sports&lang=en&max=100&apikey=b4d34c965938937e1c2c5dc6e9fb385f&q=top news in ${sport}`
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

  return (
    <NewsContext.Provider value={{ breakingNews }}>
      {children}
    </NewsContext.Provider>
  );
}
export const useNewsContext = () => {
  return useContext(NewsContext);
};
