import { Link } from 'react-router-dom';
import book from './../../assets/book.png'

const Banner = () => {
    return (
        <div className="hero bg-gray-200 text-black md:p-16 mt-8 rounded-2xl md:min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse md:gap-20">
        <img
          src={book}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-xl md:text-6xl font-bold">Books to fresh <br /> up your bookself</h1>
          
          <Link className="btn bg-green-600 text-white mt-4 md:mt-20" to={'/listedbooks'}>View The List</Link>
        </div>
      </div>
    </div>
    );
};

export default Banner;