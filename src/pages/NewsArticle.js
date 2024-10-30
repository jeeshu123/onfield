import { useNavigate, useParams } from "react-router-dom";
import { useNewsContext } from "../context/NewsContext";

function NewsArticle() {
  const { breakingNews } = useNewsContext();
  const { id } = useParams();
  const navigate = useNavigate();
  const article = breakingNews.find((article) => article.id === id);

  function handleClick() {
    navigate(-1);
  }

  return (
    <div className="px-4 py-8">
      <button
        className="bg-slate-500 px-4 py-2 rounded-xl mb-6"
        onClick={handleClick}
      >
        &larr;
      </button>
      <div className=" flex flex-col gap-6">
        <img src={article.image} alt={article.title} />
        <p className="font-extrabold text-lg">{article.title}</p>
        <p className="font-semibold">{article.description}</p>
        <p className=" text-sm">{article.content}</p>
      </div>
    </div>
  );
}

export default NewsArticle;
