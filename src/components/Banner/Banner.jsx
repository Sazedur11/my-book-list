import book from './../../assets/book.png'

const Banner = () => {
    return (
        <div className="hero bg-gray-200 text-black p-16 mt-8 rounded-2xl min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={book}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-xl md:text-6xl font-bold">Books to fresh up <br /> your bookself</h1>
          
          <button className="btn bg-green-600 text-white mt-20">View the list</button>
        </div>
      </div>
    </div>
    );
};

export default Banner;