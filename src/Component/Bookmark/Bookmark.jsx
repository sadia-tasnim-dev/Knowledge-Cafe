import { SingleBookMark } from "../SingleBookMark/SingleBookMark";

export const Bookmark = ({ bookmarks, reading }) => {
  return (
    <div className="ml-5 w-1/3 ">
      <div className="bg-indigo-100 p-6 rounded-md mb-5">
        <h1 className="font-bold text-xl text-indigo-700">
          Spent time on read : {reading} min
        </h1>
      </div>
      <div className=" p-6 bg-slate-100 rounded-xl h-fit">
        <h1 className="font-bold text-xl mb-4">
          Bookmarked Blogs : {bookmarks.length}
        </h1>
        {bookmarks.map((bookmark, index) => (
          <SingleBookMark key={index} bookmark={bookmark}></SingleBookMark>
        ))}
      </div>
    </div>
  );
};
