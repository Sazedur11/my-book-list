import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { author, bookName, category, image, rating, tags, bookId } = book;
  
  return (
   <Link to={`/book/${bookId}`}>
     <div className="card bg-base-100 shadow-sm border-1 border-gray-100 mt-8 p-4">
      <figure className="rounded-xl py-6 bg-gray-200">
        <img
          src={image}
          alt={bookName}
          className=" w-40 h-60"
        />
      </figure>

      <div className="card-body p-0 mt-4 text-letf">
        <div className="flex justify-center gap-8">
          {
            tags.map((tag, index) => <button 
            key={index}
            className="btn btn-soft btn-accent">{tag}</button>)
          }
        </div>
        <h2 className="card-title">{bookName}</h2>
        <p>By: {author}</p>
        
      </div>
      <div className="border-1 border-dashed mt-4 border-gray-500"></div>
      <div className="flex justify-between mt-4">
          <p>{category}</p>
          <p className="flex items-center gap-2">{rating} <FaRegStar /></p>
        </div>
    </div>
   </Link>
  );
};

export default Book;
