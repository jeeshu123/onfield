import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useNewsContext } from "../context/NewsContext";
import InfiniteScroll from "react-infinite-scroll-component";

function SearchResults() {
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(2);
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

  const fetchMoreData = async () => {
    console.log("fetching");
    await getSearchNews(query, page, false);
    setPage((page) => page + 1);
  };

  return (
    <div className="mt-12 px-12">
      <p>Search Results for {query}</p>
      <InfiniteScroll
        dataLength={searchResult.length}
        next={fetchMoreData}
        loader={<p>Loading</p>}
        hasMore={hasMore}
      >
        {searchResult.map((result) => (
          <SearchItem result={result} key={result.title} />
        ))}
      </InfiniteScroll>
    </div>
  );
}

export default SearchResults;

function SearchItem({ result }) {
  return (
    <div className="w-1/2 mx-auto">
      <div className="grid grid-cols-2 gap-x-2">
        <img src={result.image} alt="" />
        <div>
          <p className="text-xs">{result.title}</p>
          <p className="text-xs">{result.description}</p>
          {/* <p className="text-xs">{result.title}</p> */}
        </div>
      </div>
    </div>
  );
}

// export default SearchResults;
