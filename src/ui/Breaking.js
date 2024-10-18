import { useState } from "react";
import bg1 from "../assets/bg1.jpg";
import NewsItem from "./NewsItem";
import { useNewsContext } from "../context/NewsContext";
import { getShortDate } from "../helpers/helper";

// const newsArray = [
//   {
//     thumbnail: null,
//     title: "The Hidden Gems Of The US Open",
//     content:
//       "Explore the lesser-known areas of the US Open, where players practice and prepare for their matches. From courts P6 to P17, discover the hidden gems and what makes these spots special.",
//   },
//   {
//     thumbnail: null,
//     title: "Breaking Down The Latest Tech Innovations of 2024",
//     content:
//       "The tech world is abuzz with the latest innovations of 2024. From AI advancements to new gadgets, we take a closer look at the breakthroughs that are set to change our lives.",
//   },
//   {
//     thumbnail: null,
//     title: "Global Warming: What We Can Do To Help",
//     content:
//       "As global warming continues to impact our planet, it's crucial to understand what steps we can take to mitigate its effects. Learn about sustainable practices and policies that can make a difference.",
//   },
//   {
//     thumbnail: null,
//     title: "A Journey Through The World’s Most Beautiful Libraries",
//     content:
//       "Libraries are not just about books; they're about the architecture, the history, and the atmosphere. Join us on a journey through some of the world's most beautiful libraries.",
//   },
//   {
//     thumbnail: null,
//     title: "The Rise of Electric Vehicles: What’s Next?",
//     content:
//       "Electric vehicles are becoming more popular, but what does the future hold? We examine the current trends and what we can expect to see in the coming years.",
//   },
// ];

export default function Breaking() {
  // const [news] = useState(newsArray);
  const { breakingNews } = useNewsContext();
  breakingNews && console.log(breakingNews);
  return (
    <div className="mt-9 px-4 md:px-12">
      <p className="italic font-extrabold text-2xl ">Breaking News</p>
      {breakingNews.at(0) && (
        <>
          <div className="mt-4 relative">
            <img
              src={breakingNews.at(0) ? breakingNews.at(0).image : null}
              className="sm:h-96 w-full lg:h-[36rem] brightness-50 rounded-md"
              alt="breaking"
            />
            <div className="absolute bottom-0 py-4 px-2">
              <p className="text-xs text-slate-50  md:text-sm">
                Source: {breakingNews.at(0).source.name}
              </p>
              <p className="text-xs text-slate-50  md:text-sm">
                Published At: {getShortDate(breakingNews.at(0).publishedAt)}
              </p>
              <p className="text-xs font-semibold text-slate-50  md:text-lg">
                {breakingNews.at(0).title}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-3 gap-y-6 mt-6 md:grid-cols-2 lg:grid-cols-3 w-full">
            {/* {news && news.map((newsItem) => <NewsItem newsItem={newsItem} />)} */}
            {breakingNews &&
              breakingNews.map((newsItem) => (
                <NewsItem newsItem={newsItem} key={newsItem.id} />
              ))}
          </div>
        </>
      )}
    </div>
  );
}
