import { FiBookmark } from "react-icons/fi";

export const Blog = ({ blog, handleBookmarks, handleReading }) => {
  const {
    id,
    cover,
    title,
    author,
    author_img,
    posted_date,
    reading_time,
    hashtags,
  } = blog;

  return (
    <div>
      <img src={cover} />
      <div className="flex items-center justify-between mt-4 mb-6">
        <div className="flex items-center">
          <img className="h-12 mr-5" src={author_img} />
          <div>
            <h1 className="font-semibold text-xl">{author}</h1>
            <h1 className="font-medium text-gray-500">{posted_date}</h1>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <h1 className="font-medium text-gray-500 text-lg">
            {reading_time} min read
          </h1>
          <button
            onClick={() => handleBookmarks(blog)}
            className="text-xl text-gray-600"
          >
            <FiBookmark />
          </button>
        </div>
      </div>
      <h1 className="font-bold text-3xl">{title}</h1>
      <p className="font-medium text-gray-500 text-lg mt-3 mb-4">
        {hashtags.map((hash, index) => (
          <span key={index}>
            <a>#{hash} </a>
          </span>
        ))}
      </p>
      <button
        onClick={() => handleReading(id, reading_time)}
        className="text-indigo-600 font-bold underline mb-12"
      >
        Mark as read
      </button>
    </div>
  );
};
