// function LatestNews() {
//   return (
//     <div>
//       <p className="italic font-bold text-2xl">Latest News</p>

//     </div>
//   );
// }

// export default LatestNews;

import React, { useEffect, useState, useCallback } from "react";
// import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = "https://gnews.io/api/v4/search";
const QUERY = "messi"; // Customize your search query here
const LANG = "en"; // Language filter
// const COUNTRY = "us"; // Country filter
const MAX_RESULTS = 10; // Number of articles per request

function LatestNews() {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchNews = useCallback(async () => {
    if (loading) return;

    setLoading(true);
    try {
      const response = await fetch(
        `${BASE_URL}?q=${QUERY}&lang=${LANG}&max=${MAX_RESULTS}&page=${page}&apikey=${API_KEY}`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      const newArticles = data.articles;

      setArticles((prev) => [...prev, ...newArticles]);
      setHasMore(newArticles.length > 0);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  }, [page, loading]);

  useEffect(() => {
    fetchNews();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight - 200 &&
        hasMore &&
        !loading
      ) {
        fetchNews();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [fetchNews, hasMore, loading]);

  return (
    <div>
      <p className="italic font-bold text-2xl">Latest News</p>
      <div>
        {articles.map((article, index) => (
          <div key={index} className="p-4 border-b">
            <h2 className="font-semibold text-lg">{article.title}</h2>
            <p>{article.description}</p>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Read more
            </a>
          </div>
        ))}
      </div>
      {loading && <p>Loading more articles...</p>}
    </div>
  );
}

export default LatestNews;
