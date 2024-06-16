export const SingleBookMark = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <div className="bg-white rounded-xl ">
      <h1 className="font-semibold text-base mb-3 p-4">{title}</h1>
    </div>
  );
};
