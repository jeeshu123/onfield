import React, { useState } from "react";
import bg1 from "../assets/bg1.jpg";
import { Link } from "react-router-dom";

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
    <Link to={`article/${newsItem.id}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <img
          src={newsItem.image || bg1}
          alt="Thumbnail"
          className="rounded-md"
        />
        <div className="text-xs">
          <p className="">{newsItem.title}</p>
        </div>
      </div>
    </Link>
  );
}
