import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadList, getStoredWishlist } from "../../Utility/AddToDB";
import Book from "../Book/Book";

const ListedBooks = () => {

    const allBooks = useLoaderData();
    const [readList, setReadtList] = useState([]);
    const [wishlist, setWishlist] = useState([]);

    useEffect(()=>{
        const storedReadList = getStoredReadList();

        const storedReadListInt = storedReadList.map(id => parseInt(id));
        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));
        setReadtList(readBookList);

    },[])

    useEffect(()=>{
        const storedWishlist = getStoredWishlist();

        const storedWishlistInt = storedWishlist.map(id => parseInt(id));
        const wishlistBook = allBooks.filter(book => storedWishlistInt.includes(book.bookId));
        setWishlist(wishlistBook)
    },[])

  return (
    <div className="tabs tabs-border">
      <input type="radio" name="my_tabs_2" className="tab " aria-label="Read List" defaultChecked />
      <div className="tab-content border-base-300 bg-base-100 p-10">
        Totall read books: {readList.length}
        <div className="w-xl">
            {
            readList.map(book => <Book key={book.bookId} book={book}></Book>)
        }
        </div>
      </div>

      <input type="radio" name="my_tabs_2" className="tab" aria-label="Wish List"/>
      <div className="tab-content border-base-300 bg-base-100 p-10">
        Wishlist books: {wishlist.length}
        <div className="w-xl">
            {
                wishlist.map(book => <Book key={book.bookId} book={book}></Book>)
            }
        </div>
      </div>

      
    </div>
  );
};

export default ListedBooks;
