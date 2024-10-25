import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useNewsContext } from "../context/NewsContext";

function SearchResults() {
  const { getSearchNews, searchResult } = useNewsContext();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  useEffect(() => {
    const searchNews = async () => {
      if (query) {
        await getSearchNews(query);
      }
    };

    searchNews();
  }, [query]);
  return (
    <div className="mt-12 px-12">
      <p>Search Results for {query}</p>
      {searchResult && searchResult.map((result) => <p>{result.title}</p>)}
    </div>
  );
}

export default SearchResults;
