import { useState } from "react";
import { Blogs } from "./Component/Blogs/Blogs";
import { Bookmark } from "./Component/Bookmark/Bookmark";
import { Header } from "./Component/Header/Header";

function App() {
  const [bookmarks, setBookMarks] = useState([]);
  const [reading, setReading] = useState(0);

  const handleBookmarks = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookMarks(newBookmarks);
  };
  const handleReading = (time) => {
    setReading(reading + time);
  };

  return (
    <>
      <Header></Header>
      <div className="flex ml-10 mr-10 mt-4">
        <Blogs
          handleBookmarks={handleBookmarks}
          handleReading={handleReading}
        ></Blogs>
        <Bookmark bookmarks={bookmarks} reading={reading}></Bookmark>
      </div>
    </>
  );
}

export default App;
