import React, { useState } from "react";
import bg1 from "../assets/bg1.jpg";

export default function NewsItem({ newsItem }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const truncateContent = (content, wordLimit) => {
    const words = content.split(" ");
    if (words.length <= wordLimit) return content;

    return `${words.slice(0, wordLimit).join(" ")}...`;
  };

  const wordLimit = 10;
  const truncatedContent = truncateContent(newsItem.content, wordLimit);

  return (
    <div className="grid grid-cols-2 gap-2">
      <img
        src={newsItem.thumbnail || bg1}
        alt="Thumbnail"
        className="rounded-md"
      />
      <div className="text-xs">
        <p>{newsItem.title}</p>
        <p className="hidden">
          {isExpanded ? newsItem.content : truncatedContent}
          {newsItem.content.split(" ").length > wordLimit && (
            <button onClick={handleToggle} className="text-blue-500">
              {isExpanded ? "Show Less" : "Read More"}
            </button>
          )}
        </p>
      </div>
    </div>
  );
}
