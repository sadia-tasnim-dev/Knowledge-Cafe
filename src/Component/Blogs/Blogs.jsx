import { useState } from "react";
import { Blog } from "../Blog/Blog";
export const Blogs = ({ handleBookmarks, handleReading }) => {
  const [blogs, setBlogs] = useState([]);

  useState(() => {
    fetch("Blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="md:w-2/3">
      {blogs.map((blog) => (
        <Blog
          mr-10
          key={blog.id}
          blog={blog}
          handleBookmarks={handleBookmarks}
          handleReading={handleReading}
        ></Blog>
      ))}
    </div>
  );
};
