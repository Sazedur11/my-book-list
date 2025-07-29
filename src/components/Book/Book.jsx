import { FaRegStar } from "react-icons/fa";

const Book = ({ book }) => {
  const { author, bookName, category, image, rating } = book;
  console.log(book);
  return (
    <div className="card bg-base-100 shadow-sm border-1 border-gray-100 mt-8 p-4">
      <figure className="rounded-xl py-6 bg-gray-200">
        <img
          src={image}
          alt={bookName}
          className=" w-40 h-60"
        />
      </figure>
      <div className="card-body p-0 mt-4 text-letf">
        <h2 className="card-title">{bookName}</h2>
        <p>By: {author}</p>
        
      </div>
      <div className="flex justify-between mt-4">
          <p>{category}</p>
          <p className="flex items-center gap-2">{rating} <FaRegStar /></p>
        </div>
    </div>
  );
};

export default Book;
