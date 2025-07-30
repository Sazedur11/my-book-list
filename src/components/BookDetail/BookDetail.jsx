import { useLoaderData, useParams } from "react-router-dom";

const BookDetail = () => {
  const { bookId } = useParams();
  const Id = parseInt(bookId);

  const data = useLoaderData();

  const book = data.find((book) => book.bookId === Id);

  const {
    author,
    bookName,
    category,
    image,
    publisher,
    rating,
    review,
    tags,
    totalPages,
    yearOfPublishing,
  } = book;

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">{bookName}</h1>
          <p className="font-semibold mt-2">By: {author}</p>
          <div className="divider my-2"></div>
          <p>{category}</p>
          <div className="divider my-2"></div>
          <p>Review: <span className="text-gray-400">{review}</span></p>
          <div className="flex my-2 gap-8">
            <p className="font-bold">Tag</p>
            {
                tags.map((tag, i) => <p className="text-green-500"  key={i}>#{tag}</p>)
            }
          </div>
            <div className="divider my-2"></div>
            <p>Number of Pages: {totalPages}</p>
            <p>Publisher: {publisher}</p>
            <p>Year of Publishing: {yearOfPublishing}</p>
            <p>Rating: {rating}</p>
            <div className="mt-4">
                <button className="btn btn-outline mr-4">Read</button>
                <button className="btn btn-accent">Wishlist</button>
            </div>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <img src={image} alt={bookName} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
